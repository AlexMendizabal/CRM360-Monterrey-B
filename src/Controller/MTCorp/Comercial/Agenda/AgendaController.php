<?php

/* declare(strict_types=1); */

namespace App\Controller\MTCorp\Comercial\Agenda;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use PhpParser\Node\Stmt\TryCatch;

/**
 * Class AgendaController
 * @package App\Controller\MTCorp\Comercial\Agenda
 */
class AgendaController extends AbstractController
{
    /**
     * @Route(
     *  "/comercial/agenda/acessos",
     *  name="comercial.agenda-acessos",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getAcessos(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $simuladorVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'HOMO_CICL_VEND');

            $res = array(
                array(
                    'simuladorVendas' => $simuladorVendas
                )
            );

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return FunctionsController::Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return FunctionsController::Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return FunctionsController::Retorno(
                false,
                'Erro ao retornar dados.',
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromissos/lista",
     *  name="comercial.agenda-compromissos-lista",
     *  methods={"GET"}
     * )
     * @return JsonResponse
     */
    public function getCompromissos(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            /* dd($infoUsuario); */
            $params = $request->query->all();
<<<<<<< HEAD
            $inicio = date('d/m/Y', strtotime($params['inicio'])) . ' 00:00:00';
            $fim = date('d/m/Y', strtotime($params['fim'])) . ' 23:59:59';
=======
            //dd($params);
            $inicio = date('Y/m/d', strtotime($params['inicio'])) . ' 00:00:00';
            $fim = date('Y/m/d', strtotime($params['fim'])) . ' 23:59:59';
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c
            $idVendedor = isset($params['idVendedor']) ? $params['idVendedor'] : $infoUsuario->matricula;
            $tipo_compromiso = '';
            if (isset($params['tipo_compromiso'])) {
                $tipo_compromiso = $params['tipo_compromiso'];
            }

            $res = $connection->query("
                EXEC [PRC_AGEN_VEND_CONS]
                    @VENDEDOR = '{$idVendedor}'
                    ,@DATA_INICIAL = '{$inicio}'
                    ,@DATA_FINAL = '{$fim}'
                    , @TIPO_REGISTRO = '{$tipo_compromiso}'
            ")->fetchAll();
            /* dd($res); */
            if (count($res) > 0 && !isset($res[0]['MSG'])) {
<<<<<<< HEAD
                for ($i = 0; $i < count($res); $i++) {
                    $compromissos[] = array(
                        'id' => $res[$i]['ID_AGENDA'],
                        'color' => $res[$i]['COR'],
                        'title' => $res[$i]['TITULO'],
                        'codClient' => $res[$i]['CLIENTE'],
                        'client' => $res[$i]['NOME_CLIENTE'],
                        'formContactId' => $res[$i]['FORMA_CONTATO'],
                        'formContactDesc' => $res[$i]['DESC_FORMA_CONTATO'],
                        'typeContactId' => $res[$i]['MEIO_CONTATO'],
                        'typeContactDesc' => $res[$i]['DESC_MEIO_CONTATO'],
                        'start' => $res[$i]['DATA_INICIO'],
                        'end' => $res[$i]['DATA_FINAL'],
                        'allDay' => $res[$i]['ID_DIA_INTEIRO'] == 0 ? false : true,
                        'description' => $res[$i]['OBSERVACAO']
                    );
=======
                foreach ($res as $item) {
                    $compromissos[] = [
                        'id' => $item['ID_AGENDA'],
                        'color' => $item['COR'],
                        'title' => $item['TITULO'],
                        'codClient' => $item['CLIENTE'],
                        'client' => $item['NOME_CLIENTE'],
                        'promotor' => $item['NOMBRE_VENDEDOR']." ".$item['RAZON_SOCIAL_VEND'],
                        'formContactId' => $item['FORMA_CONTATO'],
                        'formContactDesc' => $item['DESC_FORMA_CONTATO'],
                        'typeContactId' => $item['MEIO_CONTATO'],
                        'typeContactDesc' => $item['DESC_MEIO_CONTATO'],
                        'start' => $item['DATA_INICIO'],
                        'end' => $item['DATA_FINAL'],

                        'fecha_inicial' => date('Y/m/d', strtotime($item['DATA_INICIO'])),
                        'fecha_final' => date('Y/m/d', strtotime($item['DATA_FINAL'])),
                        'hora_inicial'  => date('H:i', strtotime($item['DATA_INICIO'])),
                        'hora_final' =>  date('H:i', strtotime($item['DATA_FINAL'])),

                        'allDay' => $item['ID_DIA_INTEIRO'] == 0 ? false : true,
                        'description' => $item['OBSERVACAO'],
                        'status' => $item['STATUS'],
                        'statusnome' => $item['DESC_STATUS']
                    ];
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c
                }
                //dd($compromissos);
                $message = array(
                    'responseCode' => 200,
                    'result' => $compromissos
                );
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromissos/detalhes/{id}",
     *  name="comercial.agenda-compromissos-detalhes",
     *  methods={"GET"},
     *  requirements={"id"="\d+"}
     * )
     * @return JsonResponse
     */
    public function getCompromisso(Connection $connection, Request $request, $id)
    {
        if ($request->isMethod('GET')) {
            try {
                $UsuarioController = new UsuarioController();
                $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

                $res = $connection->query(
                    "
                EXEC [PRC_AGEN_VEND_CONS]
                @ID_AGENDA = '{$id}'
            "
                )->fetchAll();

                if (!empty($res)) {
                    $compromisso = new \stdClass;
                    $compromisso->id = (int)$res[0]['ID_AGENDA'];
                    $compromisso->codTitulo = $res[0]['ID_TITULO'];
                    $compromisso->id_vendedor = $res[0]['VENDEDOR'];
                    $compromisso->title = $res[0]['TITULO'];
                    $compromisso->codClient = (int)$res[0]['CLIENTE'];
                    $compromisso->client = $res[0]['NOME_CLIENTE'];
                    $compromisso->formContactId = (int)$res[0]['FORMA_CONTATO'];
                    $compromisso->formContactDesc = $res[0]['DESC_FORMA_CONTATO'];
                    $compromisso->typeContactId = (int)$res[0]['MEIO_CONTATO'];
                    $compromisso->typeContactDesc = $res[0]['DESC_MEIO_CONTATO'];
                    $compromisso->start = $res[0]['DATA_INICIO'];
                    $compromisso->end = $res[0]['DATA_FINAL'];
                    $compromisso->allDay = $res[0]['ID_DIA_INTEIRO'] == 0 ? false : true;
                    $compromisso->description = $res[0]['OBSERVACAO'];
                    $compromisso->motivo = $res[0]['MOTIVO'];
                    $compromisso->id_motivo = $res[0]['MOTIVO_REAGENDADO'];
                    $compromisso->direccion = $res[0]['DIRECCION'];

                    $compromisso->latitud = $res[0]['LATITUD'];
                    $compromisso->longitud = $res[0]['LONGITUD'];
                    $compromisso->codigo_cliente = $res[0]['CODIGO_CLIENTE'];


                    if ($compromisso->id_motivo > 0) {
                        $compromisso->color = '#F0F8FF';
                    } else {
                        $compromisso->color['primary'] = !empty($res[0]['COR']) ? $res[0]['COR'] : '#0033FF';
                    }

                    //dd($compromisso);
                    $message = array(
                        'responseCode' => 200,
                        'result' => $compromisso
                    );
                } else {
                    $message = array('responseCode' => 204);
                }
            } catch (DBALException $e) {
                $message = array(
                    'responseCode' => $e->getCode(),
                    'message' => $e->getMessage()
                );
            }

            $response = new JsonResponse($message);
            $response->setEncodingOptions(JSON_NUMERIC_CHECK);
            return $response;
        }
    }


    /**
     * @Route(
     *  "/comercial/agenda/compromisso/salvar",
     *  name="comercial.agenda-compromisso-salvar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function saveCompromisso(Connection $connection, Request $request)
    {
        try {
            /* Variables de control */
            $swAgenda = false;
            $swDireccion = false;
            $latitud = '';
            $longitud = '';
            $codigo_cliente = '';


            $data = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $id_vendedor = 0;
            $cor = $data['color']['primary'];
            $codTitulo = $data['codTitulo'];
            $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';
            $formaContato = $data['formContactId'];
            $meioContato = $data['typeContactId'];
            $dataInicial = date('Y/m/d H:i:s', strtotime($data['start']));
            $dataFinal = !empty($data['end']) ? date('Y/m/d H:i:s', strtotime($data['end'])) : '';
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
            $direccion = $data['direccion'];
            if (isset($data['latitud']) && $data['latitud'] != null) {
                $latitud = $data['latitud'];
            }
            if (isset($data['longitud']) && $data['longitud'] != null) {
                $longitud = $data['longitud'];
            }
            if (isset($data['codigo_cliiente']) && $data['codigo_cliiente'] != null) {
                $codigo_cliente = $data['codigo_cliiente'];
            }

            if (isset($data['idVendedor'])) {
                $id_vendedor = $data['idVendedor'];
            } else {
                $id_vendedor = $infoUsuario->idVendedor;
            }
            $save = $connection->query("
                    EXEC [PRC_AGEN_VEND_CADA]
                        @AGENDA = ''
                        ,@COR = '{$cor}'
                        ,@ID_TITULO = '{$codTitulo}'
                        ,@CLIENTE = '{$codCliente}'
                        ,@FORMA_CONTATO = '{$formaContato}'
                        ,@MEIO_CONTATO = '{$meioContato}'
                        ,@DATA_INICIAL = '{$dataInicial}'
                        ,@DATA_FINAL = '{$dataFinal}'
                        ,@DIA_INTEIRO = '{$diaInteiro}'
                        ,@STATUS = '1'
                        ,@OBSERVACAO = '{$observacao}'
                        ,@VENDEDOR = '{$id_vendedor}'
                ")->fetchAll();

            if ($save[0]['MSG'] == 'TRUE') {
                $swAgenda = true;
            }
            if (!empty($latitud) && !empty($longitud) && !empty($direccion) && !empty($codigo_cliente)) {

                $statement = $connection->prepare('EXEC [dbo].[PCR_CLIE_DIRECCION] @latitud = :latitud, @longitud = :longitud, @direccion = :direccion, @idCliente = :idCliente, @codigo_cliente = :codigoCliente, @resultado = FALSE');
                $statement->bindValue('latitud', $latitud);
                $statement->bindValue('longitud', $longitud);
                $statement->bindValue('direccion', $direccion);
                $statement->bindValue('idCliente', $codCliente);
                $statement->bindValue('codigoCliente', $codigo_cliente);
                /*  $statement->bindParam('resultado', 'FALSE');  */
                $statement->execute();
            }

            /*  if ($resultado === 'TRUE') {
                $swDireccion == true;
            } */
            if ($swAgenda == true) {
                $message = array('responseCode' => 200);
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromiso/actualizar",
     *  name="comercial.agenda-compromiso-actualizar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function actualizarCompromiso(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $id = $data['id'];
            $cor = $data['color']['primary'];
            $codTitulo = $data['codTitulo'];
            $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';
            $formaContato = $data['formContactId'];
            $meioContato = $data['typeContactId'];
            $dataInicial = date('d/m/Y H:i:s', strtotime($data['start']));
            $dataFinal = !empty($data['end']) ? date('d/m/Y H:i:s', strtotime($data['end'])) : '';
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
            $idVendedor = $data['idVendedor'];

<<<<<<< HEAD
=======
            $destination = "";

            switch ($data['status']) {
                case '1':
                case '2':
                    $status = 1;
                    $cor = "#0033ff";
                    if (!empty($latitud) && !empty($longitud) && !empty($direccion)) {
                        $statement = $connection->prepare('EXEC [dbo].[PCR_CLIE_DIRECCION] @latitud = :latitud, @longitud = :longitud, @direccion = :direccion, @idCliente = :idCliente, @codigo_cliente = :codigoCliente, @resultado = FALSE');
                        $statement->bindValue('latitud', $latitud);
                        $statement->bindValue('longitud', $longitud);
                        $statement->bindValue('direccion', $direccion);
                        $statement->bindValue('idCliente', $codCliente);
                        $statement->bindValue('codigoCliente', $codigo_cliente);
                        $statement->execute();
                    }
                    break;
                case '3':
                    $status = 3;
                    $cor = "#21C710";
                    /*   if (!empty($_FILES['document']) && $_FILES['document']['error'] === UPLOAD_ERR_OK && is_uploaded_file($_FILES['document']['tmp_name'])) {
                        $uploadedFile = new UploadedFile(
                            $_FILES['document']['tmp_name'],
                            $_FILES['document']['name'],
                            $_FILES['document']['type'],
                            $_FILES['document']['size'],
                            $_FILES['document']['error'],
                            true
                        );
                        $fileName = md5(uniqid()) . '.' . $uploadedFile->guessExtension();
                        $uploadedFile->move('uploads', $fileName);
                        $destination = $this->getParameter('kernel.project_dir') . '/public/uploads/' . $fileName;
                    } */
                    break;
                case '4':
                    $this->rescheduleCompromisso($connection, $request);
                    $cor = 2;

                    break;
                default:
                    $obs_final = !empty($data['Obsfinalizar']) ? '' : '';
                    $status = 1;
                    break;
            }
            /* dd($data); */
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c
            $update = $connection->query("
                EXEC [PRC_AGEN_VEND_CADA]
                    @AGENDA = '{$id}'
                    ,@COR = '{$cor}'
                    ,@ID_TITULO = '{$codTitulo}'
                    ,@CLIENTE = '{$codCliente}'
                    ,@FORMA_CONTATO = '{$formaContato}'
                    ,@MEIO_CONTATO = '{$meioContato}'
                    ,@DATA_INICIAL = '{$dataInicial}'
                    ,@DATA_FINAL = '{$dataFinal}'
                    ,@DIA_INTEIRO = '{$diaInteiro}'
                    ,@STATUS = '1'
                    ,@OBSERVACAO = '{$observacao}'
                    ,@VENDEDOR = '{$idVendedor}'
            ")->fetchAll();

            if ($update[0]['MSG'] == 'TRUE') {
                $message = array('responseCode' => 200);
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromiso/eliminar",
     *  name="comercial.agenda-compromiso-eliminar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function eliminarCompromiso(Connection $connection, Request $request)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
            $data = json_decode($request->getContent(), true);
            $id  = $data['id'];
            $delete = $connection->query("
                EXEC [PRC_AGEN_VEND_CADA_DELETE]
                    @AGENDA = '{$id}'
                    
             
            ")->fetchAll();

            if (($delete[0]['ID_AGENDA'] == $id) && ($delete[0]['MSG'] == 'TRUE')) {
                $message = array('responseCode' => 200);
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromisso/atualizar",
     *  name="comercial.agenda-compromisso-atualizar",
     *  methods={"PUT"}
     * )
     * @return JsonResponse
     */
    public function updateCompromisso(Connection $connection, Request $request)
    {
        try {
            $data = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $id = $data['id'];
            $cor = $data['color']['primary'];
            $codTitulo = $data['codTitulo'];
            $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';
            $formaContato = $data['formContactId'];
            $meioContato = $data['typeContactId'];
            $dataInicial = date('d/m/Y H:i:s', strtotime($data['start']));
            $dataFinal = !empty($data['end']) ? date('d/m/Y H:i:s', strtotime($data['end'])) : '';
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';

            $update = $connection->query("
                EXEC [PRC_AGEN_VEND_CADA]
                    @AGENDA = '{$id}'
                    ,@COR = '{$cor}'
                    ,@ID_TITULO = '{$codTitulo}'
                    ,@CLIENTE = '{$codCliente}'
                    ,@FORMA_CONTATO = '{$formaContato}'
                    ,@MEIO_CONTATO = '{$meioContato}'
                    ,@DATA_INICIAL = '{$dataInicial}'
                    ,@DATA_FINAL = '{$dataFinal}'
                    ,@DIA_INTEIRO = '{$diaInteiro}'
                    ,@STATUS = '1'
                    ,@OBSERVACAO = '{$observacao}'
                    ,@VENDEDOR = '{$infoUsuario->matricula}'
            ")->fetchAll();

            if ($update[0]['MSG'] == 'TRUE') {
                $message = array('responseCode' => 200);
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromisso/reagendar",
     *  name="comercial.agenda-compromisso-reagendar",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */

    public function rescheduleCompromisso(Connection $connection, Request $request)
    {
<<<<<<< HEAD

        try {
            $data = json_decode($request->getContent(), true);
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));
=======
        $usuariocontroller = new UsuarioController();
        try {
            $data = json_decode($request->getContent(), true);
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c

            $cor = $data['color']['primary'];
            $codTitulo = $data['codTitulo'];
            $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';
            $formaContato = $data['formContactId'];
            $meioContato = $data['typeContactId'];
<<<<<<< HEAD
            $dataInicial = date('d/m/Y H:i:s', strtotime($data['start']));
            $dataFinal = !empty($data['end']) ? date('d/m/Y H:i:s', strtotime($data['end'])) : '';
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
            $idVendedor = $data['idVendedor'];

            $res = $connection->query("
                EXEC [PRC_AGEN_VEND_CADA]
                    @AGENDA = ''
=======
            $dataInicial = date('Y/m/d H:i:s', strtotime($data['start']));
            $dataFinal = !empty($data['end']) ? date('Y/m/d H:i:s', strtotime($data['end'])) : '';
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
            $id = $data['id_agenda'];
            $idVendedor = $data['idVendedor'];
            $status = $data['status'];

            $res = $connection->query("
                EXEC [PRC_AGEN_VEND_CADA]
                    @AGENDA = '{$id}'
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c
                    ,@COR = '{$cor}'
                    ,@ID_TITULO = '{$codTitulo}'
                    ,@CLIENTE = '{$codCliente}'
                    ,@FORMA_CONTATO = '{$formaContato}'
                    ,@MEIO_CONTATO = '{$meioContato}'
                    ,@DATA_INICIAL = '{$dataInicial}'
                    ,@DATA_FINAL = '{$dataFinal}'
                    ,@DIA_INTEIRO = '{$diaInteiro}'
<<<<<<< HEAD
                    ,@STATUS = '1'
                    ,@OBSERVACAO = '{$observacao}'
                    ,@VENDEDOR = '{$idVendedor}'
            ")->fetchAll();

            if ($res[0]['MSG'] == 'TRUE' && isset($res[0]['ID_AGENDA'])) {
                $idCompromissoAntigo = $data['id'];
=======
                    ,@STATUS = '{$status}'
                    ,@OBSERVACAO = '{$observacao}'
                    ,@VENDEDOR = '{$idVendedor}'
            ")->fetchAll();
            //dd($res);

            if ($res[0]['MSG'] == 'TRUE' && isset($res[0]['ID_AGENDA'])) {
                $idCompromissoAntigo = $data['id_agenda'];
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c
                $idCompromissoReagendado = $res[0]['ID_AGENDA'];
                $motivoReagendamento = $data['rescheduleId'];

                $arquivar = $connection->query(
                    "
                    EXEC [PRC_AGEN_VEND_CADA]
                    @AGENDA = '{$idCompromissoAntigo}',
                    @COR = '#696969',
                    @ID_TITULO = '{$codTitulo}',
                    @CLIENTE = '{$codCliente}',
                    @FORMA_CONTATO = '{$formaContato}',
                    @MEIO_CONTATO = '{$meioContato}',
                    
<<<<<<< HEAD
                    @STATUS = '7',
=======
                    @STATUS = '4',
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c
                    @REAGENDADO = '{$idCompromissoReagendado}',
                    @REAGENDADO_MOTIVO = '{$motivoReagendamento}',
                    @VENDEDOR = '{$idVendedor}'
                    "
                )->fetchAll();
<<<<<<< HEAD
                /* dd($arquivar); */
                if ($arquivar[0]['MSG'] == 'TRUE') {
                    /* dd($arquivar); */
                    $message = array('responseCode' => 200);
                } else {
                    $message = array('responseCode' => 204);
                }
            } else {
                $message = array('responseCode' => 204);
=======

                if ($arquivar[0]['MSG'] == 'TRUE') {
                    /* dd($arquivar); */
                    $message = array('responseCode' => 200, 'estado' => true);
                } else {
                    $message = array('responseCode' => 204, 'estado' => false);
                }
            } else {
                $message = array('responseCode' => 204, 'estado' => false);
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromisso/excluir/{id}",
     *  name="comercial.agenda-compromisso/excluir",
     *  methods={"POST"},
     *  requirements={"id"="\d+"}
     * )
     * @return JsonResponse
     */
    public function deleteCompromisso(Connection $connection, Request $request, $id)
    {
        try {
            $UsuarioController = new UsuarioController();
            $infoUsuario = $UsuarioController->infoUsuario($request->headers->get('X-User-Info'));

            $delete = $connection->query("
                EXEC [PRC_AGEN_VEND_CADA_DELETE]
                    @AGENDA = '{$id}'
                    ,@VENDEDOR = '{$infoUsuario->matricula}'
                    
            ")->fetchAll();

            if (($delete[0]['ID_AGENDA'] == $id) && ($delete[0]['MSG'] == 'TRUE')) {
                $message = array('responseCode' => 200);
            } else {
                $message = array('responseCode' => 204);
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/reporte",
     *  name="comercial.reporte",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function reporteAgenda(Connection $connection, Request $request): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);

            if ((!isset($data['fecha_inicio']) || $data['fecha_inicio'] == "")) {
                $fecha_inicio = ' ';
            } else {
                $fecha_inicio = date('Y-m-d', strtotime($data['fecha_inicio']));
            }

            if ((!isset($data['fecha_final']) || $data['fecha_final'] == "")) {
                $fecha_final = ' ';
            } else {
<<<<<<< HEAD
                $fecha_final = date('Y-m-d', strtotime($data['fecha_final']));
=======
                $message = [
                    'responseCode' => 204,
                    'result' => $array_vacio
                ];
            }
        } catch (DBALException $e) {
            $message = [
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }


    /**
     * @Route(
     *  "/comercial/agenda/estados",
     *  name="comercial.agenda-estados",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function estadosAgenda(Connection $connection, Request $request): JsonResponse
    {
        $usuariocontroller = new UsuarioController();
        $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
        try {
            $estados = [];
            $res = $connection->query("
            EXEC [PCR_OBTENER_ESTADOS]
        ")->fetchAll();

            if (!empty($res)) {
                foreach ($res as $row) {
                    $estado = new \stdClass;
                    $estado->id = (int)$row['ID_ESTADO'];
                    $estado->nombre = $row['NOMBRE_ESTADO'];
                    $estados[] = $estado;
                }
                $message = [
                    'responseCode' => 200,
                    'result' => $estados
                ];
            } else {
                $message = [
                    'responseCode' => 204,
                    'result' => $estados
                ];
            }
        } catch (DBALException $e) {
            $message = [
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            ];
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
   * @Route(
   *  "/comercial/agenda/getimagenes/{id}",
   *  name="comercial.agenda-getimagenes",
     *  methods={"GET"}
     * )
     * @param conecion $connection
     * @param Request $request
     * @return JsonResponse
     */
  public function getImagenes(Connection $connection, Request $request, $id)
  {
   
    try {       
        $resLoop = [];
        $id_agenda = $id;
        $res = $connection->executeQuery(
            'EXEC [proc_imagen_agenda_get] @id_agenda = :id_agenda',
           ['id_agenda'=> $id_agenda] 
        )->fetchAll();   
      


        if(count($res) > 0)
        {
            
            foreach($res as $value) { 
                //dd($value);
                $file = $value['url_imagen'];
                $response = new BinaryFileResponse($file);
               
                $image = file_get_contents($value['url_imagen']);
               
                $imagedata = base64_encode($image);
                //dd($imagedata);
                $resLoop[] = array(
                    'url_imagen'=> $imagedata, 
                    'url_web' => $value['url_web'],
                    'nom_imagen' => $value['nom_imagen'],
                    'fecha' => $value['fecha']
                ); }
                $message = array(
                    
                    'responseCode' => 200,
                    'result' => $resLoop
                );
        }
        else
        {
            $message = array(
                'responseCode' => 204,
                'messagge' => 'Sin Imagenes'
            );
        }
         
            
        }
        catch (DBALException $e) 
        {
            $message = array(
                         'responseCode' => $e->getCode(),
                         'message' => $e->getMessage()
                       );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromisso/finalizar",
     *  name="comercial.agenda-compromisso-finalizar",
     *  methods={"POST"},
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */

    public function finalizarCompromisso(Connection $connection, Request $request)
    {
        try {
            $requestContent = $request->getContent();
            $data = json_decode($requestContent, true);

            $id_agenda = $data['id_agenda'];
            $obs_final = !empty($data['observacion_final']) ? strtoupper($data['observacion_final']) : '';
            $fecha = date('Y/m/d H:i:s');
            $destination = "";
          
            $stmt = $connection->prepare("EXEC [dbo].[PRC_AGEN_VEND_FIN]
                   @AGENDA = :id_agenda,
                   @OBS_FINAL = :obs_final");
             $stmt->bindParam(':id_agenda', $id_agenda);
             $stmt->bindParam(':obs_final', $obs_final);
             $stmt->execute();
 
             // Obtener el resultado del procedimiento almacenado
             $result = $stmt->fetch();
             //dd($result);

             if (!empty($data['imagen'])) 
             {
                $id_agenda = $data['id_agenda'];
                $imageFiles = $data['imagen'];
                foreach ($imageFiles as $imageBase64) {
                    $imageData = substr($imageBase64, strpos($imageBase64, ',') + 1);
                    $imageDecoded = base64_decode($imageData);
                    $filename = uniqid() . '.jpeg';
                    $destination = $this->getParameter('kernel.project_dir') . '/uploads/agenda/images';
                    $destination = str_replace('\\', '/', $destination);
                    file_put_contents($destination . '/' . $filename, $imageDecoded);

                    /* $webPath = str_replace("C:\\inetpub\\wwwroot\\Monterrey", $_SERVER['LOCAL_ADDR'], $destination);
                    $webPath = str_replace("\\", "/", $webPath);
                    $webPath = $_SERVER["HTTPS"] == "off" ? "http://" . $webPath : "https://" . $webPath; */


                    $webPath = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\agenda\\images";
                    $imageFile = new UploadedFile(
                        $destination . '/' . $filename,
                        $filename,
                        'image/jpeg',
                        null,
                        true
                    );
                    $url_imagen = $imageFile->getRealPath();

                    $stmt = $connection->prepare("EXEC proc_imagen_agenda ?,?,?,?,?");
                    $stmt->bindParam(1, $id_agenda);
                    $stmt->bindParam(2, $url_imagen);
                    $stmt->bindParam(3, $webPath);
                    $stmt->bindParam(4, $filename);
                    $stmt->bindParam(5, $fecha);
                    $stmt->execute();
                    $result = $stmt->fetch(); 

                    $message = array('responseCode' => $result, 'estado' => true);
                }
               
>>>>>>> f3193a7ddc15fbfdc8cf082cc39fc38c81de1d7c
            }

            $id_vendedor = $data['id_vendedor'];
            $id_status = $data['id_status'];
            $motivo = $data['id_agen_titu'];
            $sucursal = $data['sucursal'];

            $update = $connection->query("
                EXEC [MTCORP_MODU_AGE_REPORT]
                    @vendedor = '{$id_vendedor}'
                    ,@fecha_inicio = '{$fecha_inicio}'
                    ,@fecha_final = '{$fecha_final}'
                    ,@estados = '{$id_status}'
                    ,@motivo   = '{$motivo}'
                    ,@sucursal = '{$sucursal}'
                   
            ")->fetchAll();

            if (count($update) > 0) {
                $message = array(
                    'responseCode' => 200,
                    'result' => $update
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'result' => ''
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
    
    
}