<?php

namespace App\Controller\MTCorp\Core\Usuarios;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Controller\MTCorp\Comercial\Vendedor\VendedorController;

use Doctrine\DBAL\Connection;

class UsuariosController
{

    /**
     * @Route(
     *  "/core/usuarios",
     *  name="core.usuarios.index",
     *  methods={"GET"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function index(Connection $connection, Request $request): JsonResponse
    {
        try {

            $id                     = $request->query->get("id");
            $perfilId               = $request->query->get("perfilId");
            $nome                   = $request->query->get("nome");
            $situacao               = $request->query->get("situacao");
            $matricula              = $request->query->get("matricula");
            $pagina                 = $request->query->get("pagina");
            $totalRegistrosPagina   = $request->query->get("totalRegistrosPagina");
            $orderBy                = $request->query->get("orderBy");
            $orderType              = $request->query->get("orderType");
            $inPagina               = $request->query->get("inPagina");

            $query = <<<SQL
                EXECUTE PRC_CORE_USUA
                     @PARAMETRO             = 2
                    ,@ID                    = :id
                    ,@ID_PERF               = :perfilId
                    ,@NM_COMP_RAZA_SOCI     = :nome
                    ,@IN_STAT               = :situacao
                    ,@NR_MATR               = :matricula
                    ,@PAGI                  = :pagina
                    ,@TT_REGI_PAGI          = :totalRegistrosPagina
                    ,@ORDE_BY               = :orderBy
                    ,@ORDE_TYPE             = :orderType
                    ,@IN_PAGI               = :inPagina
                    ,@IN_TT_REGI            = :inTotalRegistros
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                     $id);
            $stmt->bindValue(":perfilId",               $perfilId);
            $stmt->bindValue(":nome",                   $nome);
            $stmt->bindValue(":situacao",               $situacao);
            $stmt->bindValue(":matricula",              $matricula);
            $stmt->bindValue(":pagina",                 $pagina);
            $stmt->bindValue(":totalRegistrosPagina",   $totalRegistrosPagina);
            $stmt->bindValue(":orderBy",                $orderBy);
            $stmt->bindValue(":orderType",              $orderType);
            $stmt->bindValue(":inPagina",               $inPagina);
            $stmt->bindValue(":inTotalRegistros",       "0");

            $stmt->execute();

            $response = $stmt->fetchAllAssociative();

            $stmt->bindValue(":inPagina",           0);
            $stmt->bindValue(":inTotalRegistros",   1);

            $stmt->execute();

            $total = $stmt->fetchOne();

            if (!is_array($response))
                throw new \Exception($response);

            if (empty($response))
                return new JsonResponse(null, Response::HTTP_NO_CONTENT);

            $jr = new JsonResponse([
                "data"      => $response,
                "error"     => null,
                "message"   => null,
                "success"   => true,
                "total"     => $total
            ], Response::HTTP_OK);

            return $jr->setEncodingOptions(JSON_NUMERIC_CHECK | JSON_UNESCAPED_SLASHES);
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"   => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route(
     *  "/core/usuarios",
     *  name="core.usuarios.store",
     *  methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Connection $connection, Request $request): JsonResponse
    {
        try {

            $data = json_decode($request->getContent());

            $id                         = $data->id                 ?? null;
            $nome                       = $data->nome               ?? null;
            $apelido                    = $data->apelido            ?? null;
            $empresa                    = $data->empresa            ?? null;
            $departamento               = $data->departamento       ?? null;
            $cargo                      = $data->cargo              ?? null;
            $dataAniversario            = $data->dataAniversario    ?? null;
            $inFuncionario              = $data->inFuncionario      ?? null;
            $email                      = $data->email              ?? null;
            $telefoneCelular            = $data->telefoneCelular    ?? null;
            $telefoneComercial          = $data->telefoneComercial  ?? null;
            $ramal                      = $data->ramal              ?? null;
            $foto                       = $data->foto               ?? null;
            $pessoaTipo                 = $data->pessoaTipo         ?? null;
            $matricula                  = $data->matricula          ?? null;
            $senha                      = $data->senha              ?? null;
            $moduloId                   = $data->moduloId           ?? null;
            $situacao                   = $data->situacao           ?? null;

            if (!empty($senha)) {
                $senha = password_hash($senha, PASSWORD_ARGON2I);
            }

            $query = <<<SQL
                EXECUTE PRC_CORE_USUA
                     @PARAMETRO         = 1
                    ,@ID                = :id
                    ,@NM_COMP_RAZA_SOCI = :nome
                    ,@NM_APEL_FANT		= :apelido
                    ,@NM_EMPR			= :empresa
                    ,@NM_DEPA			= :departamento
                    ,@NM_CARG_FUNC		= :cargo
                    ,@DT_ANIV_FUND		= :dataAniversario
                    ,@IN_FUNC			= :inFuncionario
                    ,@NM_EMAI			= :email
                    ,@NR_TELE_CELU		= :telefoneCelular
                    ,@NR_TELE_COME		= :telefoneComercial
                    ,@NR_RAMA			= :ramal
                    ,@NM_FOTO			= :foto
                    ,@TP_PESS           = :pessoaTipo
                    ,@NR_MATR			= :matricula
                    ,@DS_SENH			= :senha
                    ,@ID_MODU           = :moduloId
                    ,@IN_STAT           = :situacao
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",                 $id);
            $stmt->bindValue(":nome",               $nome);
            $stmt->bindValue(":apelido",            $apelido);
            $stmt->bindValue(":empresa",            $empresa);
            $stmt->bindValue(":departamento",       $departamento);
            $stmt->bindValue(":cargo",              $cargo);
            $stmt->bindValue(":dataAniversario",    $dataAniversario);
            $stmt->bindValue(":inFuncionario",      $inFuncionario);
            $stmt->bindValue(":email",              $email);
            $stmt->bindValue(":telefoneCelular",    $telefoneCelular);
            $stmt->bindValue(":telefoneComercial",  $telefoneComercial);
            $stmt->bindValue(":ramal",              $ramal);
            $stmt->bindValue(":foto",               $foto);
            $stmt->bindValue(":pessoaTipo",         $pessoaTipo);
            $stmt->bindValue(":matricula",          $matricula);
            $stmt->bindValue(":senha",              $senha);
            $stmt->bindValue(":moduloId",           $moduloId);
            $stmt->bindValue(":situacao",           $situacao);

            $stmt->execute();

            $response = $stmt->fetchAssociative();

            if (!is_array($response))
                throw new \Exception($response);

            if (!isset($response["success"]))
                throw new \Exception(json_encode($response));

            if (!filter_var($response['success'], FILTER_VALIDATE_BOOLEAN)) {

                return new JsonResponse([
                    "data"      => null,
                    "error"     => $response['message'],
                    "message"   => $response['message'],
                    "success"   => false,
                ], Response::HTTP_BAD_REQUEST);
            }

            return new JsonResponse([
                "data"      => $response["id"],
                "error"     => null,
                "message"   => $response["message"],
                "success"    => true,
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return new jsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar a requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * @Route(
     *  "/core/usuarios/storePromotor",
     *  name="core.usuarios.store.promotor",
     *  methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function storePromotor(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);
           //dd($data);
            $usuarioId = isset($data['usuarioId']) ? $data['usuarioId'] : '';

            $carnet = isset($data['carnet']) ? $data['carnet'] : '';
            $nombre = isset($data['nombre']) ? $data['nombre'] : '';
            $sucursal = isset($data['sucursal']) ? $data['sucursal'] : '';
            $id_tipo_vend = isset($data['id_tipo_vend']) ? $data['id_tipo_vend'] : '';
            $in_stat = isset($data['in_stat']) ? $data['in_stat'] : '';
            $id_usua = isset($data['id_usua']) ? $data['id_usua'] : '';
            //dd($data);

            $res = "INSERT INTO TB_VEND (ID_ESCR, NM_VEND, NR_CPF_CNPJ,ID_TIPO_VEND,IN_STAT,ID_USUA)
            VALUES(:sucursal,:nombre,:carnet,:id_tipo_vend,:in_stat,:id_usua)";
            // Preparar la consulta
            $stmt1 = $connection->prepare($res);
            $stmt1->bindParam(':sucursal', $sucursal);
            $stmt1->bindParam(':nombre', $nombre);
            $stmt1->bindParam(':carnet', $carnet);
            $stmt1->bindParam(':id_tipo_vend', $id_tipo_vend);
            $stmt1->bindParam(':in_stat', $in_stat);
            $stmt1->bindParam(':id_usua', $id_usua);

            //dd($stmt1);
            //dd($id_tipo_vend);
            if ($stmt1->execute()) {
                $message = array(
                    'responseCode' => 200,
                    'message' => 'Se registro correctamente',
                    'data' => $usuarioId
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'message' => ''
                );
            }
        } catch (\Throwable $th) {
            $message = array(
                'responseCode' => $th->getCode(),
                'message' => $th->getMessage()
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    /**
     * @Route(
     *  "/core/usuarios/validateMatricula",
     *  name="core.usuarios.validateMatricula",
     *  methods={"POST"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function validate_matricula(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent());
            $matricula  = $data->matricula   ?? null;

            $query = "SELECT 1 FROM TB_CORE_USUA WHERE NR_MATR = :matricula";
            $stmt = $connection->prepare($query);
            $stmt->bindValue(':matricula', $matricula);
            $stmt->execute();
            $res = $stmt->fetchAll();

            if ($res[0][''] !== $matricula) {
                return new JsonResponse([
                    "data"      => $matricula,
                    "message"   => "Existe",
                    "success"   => true,
                ]);
            } else {
                return new JsonResponse([
                    "data"      => $matricula,
                    "message"   => "No existe matricula",
                    "success"   => false,
                ]);
            }
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocurrió un error ",
                "success"   => false,
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
