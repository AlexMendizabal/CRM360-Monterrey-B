<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Core;

use Doctrine\DBAL\Connection;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

class ContraSenhaController 
{
    use RequestTrait;
    use ResponseTrait;

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request):JsonResponse
    {
        return $this->index($connection, $request);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function show(Connection $connection, Request $request, string $uuid):JsonResponse
    {
        return $this->index($connection, $request, $uuid, true);
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request, Connection $connection)
    {

        try {
            
            $this->setRequest($request);
            
            $data = $this->getContent();
            $user = $this->getUser();

            $matricula            = $user->matricula                 ?? '';
            $senha                = $data->senha                     ?? '';
            $novaSenha            = $data->novaSenha                 ?? '';
            $confirmarNovaSenha   = $data->confirmarNovaSenha        ?? '';
            $ip                   = $user->ip                        ?? '';

            // VALIDAR PASSWORD COM SENHAS MINUSCULAS, MAIÚSCULAS, NÚMEROS E CARACTERES ESPECIAIS
            function isPasswordValid($senha){
                $isValid = true;

                $ucl = preg_match('/[A-Z]/', $senha);
                $lcl = preg_match('/[a-z]/', $senha);
                $dig = preg_match('/\d/', $senha);
                $nos = preg_match('/\W/', $senha);

                if(!$ucl) {
                    $isValid = false;
                }
                if(!$lcl) {
                    $isValid = false;
                }
                if(!$dig) {
                    $isValid = false;
                }
                if(!$nos) {
                    $isValid = false;
                }
                return $isValid;
            }
            
            $senhaValida = isPasswordValid($novaSenha) && isPasswordValid($confirmarNovaSenha);
            $query = "SELECT DS_SENH FROM TB_CORE_USUA WHERE NR_MATR = $matricula";
            $hash_password = ($connection->executeQuery($query)->fetchAssociative())['DS_SENH'];

            //SE TIPO INVÁLIDO, OU SENHA ATUAL INCORRETA, OU NOVAS SENHAS NÃO COINCIDEM
            if ($senhaValida == false || !password_verify($senha, $hash_password) || ($novaSenha !== $confirmarNovaSenha)){
                if($senhaValida == false) {
                    $message = "La contraseña debe constar de letras mayúsculas y minúsculas y contener al menos un número y un carácter especial";
                } else if(!password_verify($senha, $hash_password)) {
                    $message = "Contraseña actual incorrecta";
                } else {
                    $message = "Las contraseñas no coinciden";
                }

                return $this
                    ->setStatusCode(400)
                    ->setMessage($message)
                    ->setSuccess(false)
                    ->setEncodingOptions(JSON_NUMERIC_CHECK|JSON_UNESCAPED_SLASHES)
                    ->getResponse();
            }

            $query = <<<SQL
            EXEC PRC_CORE_ALTE_SENH
                @NR_MATR                   = :matricula   
                ,@DS_SENH_ATUA             = :senha
                ,@DS_SENH_NOVA		       = :novaSenha
                ,@DS_SENH_NOVA_CONF        = :confirmarNovaSenha
                ,@NR_IP_USUA               = :ip
            SQL;

            $stmt = $connection->prepare($query);

            $hash_nova_senha = password_hash($novaSenha, PASSWORD_ARGON2I);//NOVA SENHA E CONFIRMAR NOVA SENHA VIRAM UM SO, POR CAUSA DO SALT

            $stmt->bindValue(":matricula",               $matricula);
            $stmt->bindValue(":senha",                   $hash_password);
            $stmt->bindValue(":novaSenha",               $hash_nova_senha);
            $stmt->bindValue(":confirmarNovaSenha",      $hash_nova_senha);
            $stmt->bindValue(":ip",                      $ip);
            $result_stmt = $stmt->executeQuery();

            $response   = $result_stmt->fetchAssociative();

            return $this
                ->setData($response)
                ->setMessage($matricula)
                ->setEncodingOptions(JSON_NUMERIC_CHECK|JSON_UNESCAPED_SLASHES)
                ->getResponse();

        } catch (NoUserAtHeaderException $th) {

            return $this
                ->setError("'X-User-Info' não localizado no cabeçalho da requisição.")
                ->setMessage($th->getMessage())
                ->setStatusCode(Response::HTTP_BAD_REQUEST)
                ->getResponse();

        }catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request, Connection $connection): JsonResponse
    {
        return $this->store($request, $connection);
    }

}