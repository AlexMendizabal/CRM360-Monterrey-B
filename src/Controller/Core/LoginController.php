<?php

declare(strict_types=1);

namespace App\Controller\Core;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Security\Core\JwtAplication;

/**
 * Class LoginController
 * @package App\Controller\Core
 */
class LoginController extends AbstractController
{
    /**
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Connection $connection, Request $request): JsonResponse
    {
        $JwtAplication = new JwtAplication();
        if ($request->isMethod('POST')) {
            try {
                $dadosValidos = true;
                $msgErro = '';
                $data = json_decode($request->getContent(), true);

                if (!isset($data['nr_matr_usua']) || !is_numeric($data['nr_matr_usua'])) {
                    $msgErro = 'Informe a matrícula do usuário!';
                    $dadosValidos = false;
                } else {
                    $nrMatrUsua = (int)$data['nr_matr_usua'];
                }

                if (!isset($data['ds_senh_usua']) || empty($data['ds_senh_usua'])) {
                    $msgErro = 'Informe a senha do usuário!';
                    $dadosValidos = false;
                }

                if (!$dadosValidos) {
                    $result = array(
                        'responseCode' => 400,
                        'message' => $msgErro
                    );
                    $response = new JsonResponse($result);
                    return $response;
                }

                /*
                    @NR_MATR		=	BIGINT - Número da matrícula do usuário - (obrigatório)
                */

                $sql =
                    "
                    EXECUTE [dbo].[PRC_CORE_USUA_AUTE] 
                     @NR_MATR = ?
                ";
                
                $stmt = $connection->prepare($sql);
                
                $stmt->bindValue(1, $nrMatrUsua);

                $stmt->execute();
                $usuario = $stmt->fetchAll();
                $datos = [];
                $modulo_principal = [];
                $devolverArray = '';
                if(count($usuario) > 0){
                    $modulo_principal = array(
                        "id" => $usuario[0]['ID_MODU'],
                        "nome" => $usuario[0]['NM_MODU'],
                        "rota" => $usuario[0]['DS_ROTA'],
                    );
                    $datos = array(
                        "id" => $usuario[0]['ID'],
                        "matricula" => $usuario[0]['ID'],
                        "idVendedor"  => $usuario[0]['MATRICULA_VENDEDOR'],
                        "idEscritorio" => $usuario[0]['ID_ESCAP'],
                        "nomeCompleto"  => $usuario[0]['NM_COMP_RAZA_SOCI'],
                        "nomeAbreviado" => $usuario[0]['NM_APEL_FANT'],
                        "moduloPrincipal" => $modulo_principal    
                    );
                    $devolverArray =  base64_encode(json_encode($datos));
                    //dd($usuario);
                
                }
                //dd($usuario);
            } catch (DBALException $e) {
                return new JsonResponse([
                    'responseCode' => $e->getCode(),
                    'message' => $e->getMessage()
                ], 500);
            }

            if (count($usuario) > 0) {
                if ($usuario[0]['IN_STAT'] == 0) {
                    return new JsonResponse([
                        'responseCode' => 401,
                        'message' => 'Acesso não autorizado! Usuário inativo!'
                    ], 401);
                } else {
                    if (password_verify($data['ds_senh_usua'], $usuario[0]['DS_SENH'])) {
                        $dadosUsuario = array(
                            'ID_USUA' => $usuario[0]['UUID_USUA'],
                            'id_usuario' => $usuario[0]['ID'],
                            'matricula' => $usuario[0]['NR_MATR'],
                            'func_nome' => $usuario[0]['NM_COMP_RAZA_SOCI'],
                            'nome_abreviado' => $usuario[0]['NM_APEL_FANT'],
                            'foto' => $usuario[0]['NM_FOTO'],
                            'id_modulo_home' => $usuario[0]['ID_MODU'],
                            'versao_mtcorp' => 2,
                            'tipo_acesso' => 'Interno',
                            'modu_nome' => $usuario[0]['NM_MODU'],
                            'modu_rota' => $usuario[0]['DS_ROTA'],
                            'email_usua' => $usuario[0]['NM_EMAI'],
                            'id_vendedor' => $usuario[0]['MATRICULA_VENDEDOR'],
                            'base64'=> $devolverArray,
                            'id_sucursal' => $usuario[0]['ID_ESCR'],
                        );

                        $userData = [
                            'ID_USUA' => $usuario[0]['UUID_USUA'],
                            'NR_MATR' => $usuario[0]['NR_MATR']
                        ];

                        $jwt = $JwtAplication->encode(['userdata' => $userData]);

                        return new JsonResponse([
                            'responseCode' => 200,
                            'login' => true,
                            'token' => $jwt,
                            'result' => $dadosUsuario
                        ], 200);
                    } else {
                        return new JsonResponse([
                            'responseCode' => 401,
                            'login' => false,
                            'message' => 'Acesso não autorizado! Senha inválida!'
                        ], 401);
                    }
                }
            } else {
                return new JsonResponse([
                    'responseCode' => 401,
                    'login' => false,
                    'message' => 'Acesso não autorizado! Dados inválidos!'
                ], 401);
            }
        }
    }
}
