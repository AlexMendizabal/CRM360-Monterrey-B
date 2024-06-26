<?php

/* declare(strict_types=1); */

namespace App\Controller\MTCorp\Comercial\Agenda;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
/* use Doctrine\DBAL\Connection; */
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\ParameterType;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Controller\MTCorp\Comercial\ComercialController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use PDO;
use Doctrine\DBAL\Connection as conecion;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use App\Services\Helper;


use App\Controller\Common\Services\ParseFileFromRequestController;
use App\Controller\MTCorp\Logistica\Services\Traits\ResponseTrait;

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
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $simuladorVendas = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'HOMO_CICL_VEND');

            $res = array(
                array(
                    'simuladorVendas' => $simuladorVendas
                )
            );

            if (count($res) > 0 && !isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                $FunctionsController = new FunctionsController();
                return $FunctionsController->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            $FunctionsController = new FunctionsController();
            return $FunctionsController->Retorno(
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
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $params = $request->query->all();
            $inicio = date('Y-m-d', strtotime($params['inicio'])) . ' 00:00:00';
            $fim = date('Y-m-d', strtotime($params['fim'])) . ' 23:59:59';
            $idVendedor = isset($params['idVendedor']) ? $params['idVendedor'] : $infoUsuario->matricula;
            $tipo_compromiso = isset($params['tipo_compromiso']) ? $params['tipo_compromiso'] : '';

            $sql = "EXEC [PRC_AGEN_VEND_CONS]
                    @VENDEDOR = :vendedor,
                    @DATA_INICIAL = :inicio,
                    @DATA_FINAL = :fim,
                    @TIPO_REGISTRO = :tipo_compromiso
                ";

            $params = [
                'vendedor' => $idVendedor,
                'inicio' => $inicio,
                'fim' => $fim,
                'tipo_compromiso' => $tipo_compromiso,
            ];

            $stmt = $connection->prepare($sql);
            $stmt->execute($params);

            $res = $stmt->fetchAllAssociative();
            $compromissos = [];
            if (count($res) > 0 && !isset($res[0]['MSG'])) {
                foreach ($res as $item) {
                    $compromissos[] = [
                        'id' => $item['ID_AGENDA'],
                        'color' => $item['COR'],
                        'title' => $item['TITULO'],
                        'codClient' => $item['CLIENTE'],
                        'client' => $item['NOME_CLIENTE'],
                        'formContactId' => $item['FORMA_CONTATO'],
                        'formContactDesc' => $item['DESC_FORMA_CONTATO'],
                        'typeContactId' => $item['MEIO_CONTATO'],
                        'typeContactDesc' => $item['DESC_MEIO_CONTATO'],
                        'start' => $item['DATA_INICIO'],
                        'end' => $item['DATA_FINAL'],
                        'promotor' => $item['NOMBRE_VENDEDOR'] . ' ' . $item['RAZON_SOCIAL_VEND'],

                        'fecha_inicial' => date('d-m-Y', strtotime($item['DATA_INICIO'])),
                        'fecha_final' => date('d-m-Y', strtotime($item['DATA_FINAL'])),
                        'hora_inicial'  => date('H:i', strtotime($item['DATA_INICIO'])),
                        'hora_final' =>  date('H:i', strtotime($item['DATA_FINAL'])),

                        'allDay' => $item['ID_DIA_INTEIRO'] == 0 ? false : true,
                        'description' => $item['OBSERVACAO'],
                        'status' => $item['STATUS'],
                        'statusnome' => $item['DESC_STATUS']
                    ];
                }

                $message = [
                    'responseCode' => 200,
                    'result' => $compromissos
                ];
            } else {
                $message = [
                    'responseCode' => 204,
                    'result' => $params

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
     *  "/comercial/agenda/compromiso/getcompromiso_api",
     *  name="comercial.agenda-compromiso-getcompromiso_api",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getCompromiso_api(Connection $connection, Request $request)
    {
        $usuariocontroller = new UsuarioController();

        try {
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();


            $idVendedor = isset($params['idVendedor']) ? $params['idVendedor'] : $infoUsuario->matricula;

            $inicio = date('Y-m-d', strtotime($params['inicio'])) . ' 00:00:00';
            $fim = date('Y-m-d', strtotime($params['fim'])) . ' 23:59:59';
            $tipo_compromiso = isset($params['tipo_compromiso']) ? $params['tipo_compromiso'] : '';

            if ($inicio !== '1969-31-12 00:00:00') {
                $res = $connection->query("
                    EXEC PROC_AGEN_COMP_STA
                    @id_vendedor = '{$idVendedor}',
                    @DATA_INICIAL = '{$inicio}',
                    @DATA_FINAL = '{$fim}',
                    @TIPO_REGISTRO = '{$tipo_compromiso}'
                ")->fetchAll();

                $compromissos = [];
                if (count($res) > 0 && !isset($res[0]['MSG'])) {
                    foreach ($res as $item) {
                        $compromissos[] = [
                            'id' => $item['ID_AGENDA'],
                            'color' => $item['COR'],
                            'title' => $item['TITULO'],
                            'codClient' => $item['CLIENTE'],
                            'client' => $item['NOME_CLIENTE'],
                            'formContactId' => $item['FORMA_CONTATO'],
                            'formContactDesc' => $item['DESC_FORMA_CONTATO'],
                            'typeContactId' => $item['MEIO_CONTATO'],
                            'typeContactDesc' => $item['DESC_MEIO_CONTATO'],
                            'start' => $item['DATA_INICIO'],
                            'end' => $item['DATA_FINAL'],
                            'allDay' => $item['ID_DIA_INTEIRO'] == 0 ? false : true,
                            'description' => $item['OBSERVACAO'],
                            'status' => $item['STATUS'],
                            'statusnome' => $item['DESC_STATUS'],
                            'fecha_inicial' => date('d/m/Y', strtotime($item['DATA_INICIO'])),
                            'fecha_final' => date('d/m/Y', strtotime($item['DATA_FINAL'])),
                            'hora_inicial'  => date('H:i', strtotime($item['DATA_INICIO'])),
                            'hora_final' =>  date('H:i', strtotime($item['DATA_FINAL'])),
                        ];
                    }

                    $message = [
                        'responseCode' => 200,
                        'result' => $compromissos
                    ];
                } else {
                    $message = [
                        'responseCode' => 204,
                        'result' => $compromissos

                    ];
                }
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
                $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

                $res = $connection->query(
                    "
                        EXEC [PRC_AGEN_VEND_CONS]
                        @ID_AGENDA = '{$id}'
                    "
                )->fetchAll();

                /*    $data = $connection->executeQuery(
                    'SELECT latitud, longitud FROM TB_CORE_AGEN_UB WHERE id_agenda = :id_agenda',
                    ['id_agenda' => $id]
                )->fetchAll(); */
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
                    $compromisso->latitud_final = $res[0]['LATITUD_FINAL'];
                    $compromisso->longitud_final = $res[0]['LONGITUD_FINAL'];
                    $compromisso->codigo_cliente = $res[0]['CODIGO_CLIENTE'];
                    $compromisso->id_status = $res[0]['STATUS'];
                    $compromisso->status = $res[0]['DESC_STATUS'];
                    $compromisso->anexo = $res[0]['ANEXO'];
                    $compromisso->observacionFinal = $res[0]['OBSERVACION_FINAL'];
                    $compromisso->fecha_inicio = date('d-m-Y', strtotime($res[0]['DATA_INICIO']));
                    $compromisso->hora_inicio = date('H:i:s', strtotime($res[0]['DATA_FINAL']));
                    $compromisso->fecha_final = date('d-m-Y', strtotime($res[0]['DATA_INICIO']));
                    $compromisso->hora_final = date('H:i:s', strtotime($res[0]['DATA_FINAL']));
                    $compromisso->id_vend_asig = $res[0]['ID_VEND_ASIG']; 
                    $compromisso->vend_asig = $res[0]['NOMBRE_VEND_ASIG']; 

                    /*  if ($compromisso->id_motivo > 0) {
                        $compromisso->color = '#F0F8FF';
                    } else {
                        $compromisso->color['primary'] = !empty($res[0]['COR']) ? $res[0]['COR'] : '#0033FF';
                    } */
                    switch ($compromisso->id_status) {
                        case '1':
                            $compromisso->color_status = '#0329ff';
                            $compromisso->color = '#F0F8FF';

                            break;
                        case '2':
                            $compromisso->color_status = '#F1F900';
                            $compromisso->color = '#F0F8FF';

                            break;
                        case '3':
                            $compromisso->color_status = '#2AE83D';
                            $compromisso->color = '#1DFA00';

                            break;
                        case '4':
                            $compromisso->color_status = '#F0F8FF';
                            $compromisso->color = '#696969';

                            break;
                        default:
                            $compromisso->color_status = '#f50e07';
                            break;
                    }

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
            $helper = new Helper();
            $data = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $id_vendedor = 0;
            $cor = "";
            if ($infoUsuario->matricula == 1) {
                $cor = "#0033ff";
            } else {
                $cor = "#BC0BDF";
            }
            !empty($data['codTitulo']) ? $codTitulo = $data['codTitulo'] : $data_error_agenda['codTitulo'] = 'es nesesario';
            !empty($data['codClient']) ? $codCliente = $data['codClient'] : $data_error_agenda['cliente'] = 'es nesesario';
            !empty($data['formContactId']) ?  $formaContato = $data['formContactId'] : $data_error_agenda['contacto'] = 'es nesesario';
            !empty($data['typeContactId']) ?  $meioContato = $data['typeContactId'] : $data_error_agenda['medio_contacto'] = 'es nesesario';
            !empty($data['start']) ? $dataInicial = date('Y/m/d H:i:s', strtotime($data['start'])) : $data_error_agenda['fecha_inicial'] = 'es nesesario';
            !empty($data['end']) ? $dataFinal = date('Y/m/d H:i:s', strtotime($data['end'])) : !empty($data['allDay']) ?  $diaInteiro = $data['allDay'] == '1' ? 1 : 0 :  $data_error_agenda['fecha_final'] = 'es nesesario';
            !empty($data['direccion']) ? $direccion = strtoupper($data['direccion']) : '';
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
            !empty($data['latitud']) ? $latitud =  $data['latitud'] : $data_error_agenda['latitud'] = 'es nesesario';
            !empty($data['longitud']) ? $longitud = $data['longitud'] : $data_error_agenda['longitud'] = 'es nesesario';
            !empty($data['id_promotorasignado']) ?  $promotorasignado = $data['id_promotorasignado'] : $data_error['promotorasignado'] = 'es necesario';
            $codigo_cliente = $connection->fetchOne('SELECT codigo_cliente FROM MTCORP_MODU_CLIE_BASE WHERE id_cliente = ?', [$codCliente]);

            if(!empty($data['promotorparaasignar']) && $infoUsuario->none_cargo == 1)
            {
                $id_vendedor = $data['promotorparaasignar'];
            }
            else
            {
                if (isset($data['idVendedor']) && !empty($data['idVendedor'])) {
                    $id_vendedor = $data['idVendedor'];
                } else {
                    $id_vendedor = $infoUsuario->idVendedor;
                }
            }
            
            if (empty($data_error_agenda)) {
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
                    ,@id_vend_asig ='{$promotorasignado}'

            ")->fetchAll();

                $id_agenda =  $connection->lastInsertId();
                $fechaFormateada =  date('Y-m-d');

                if ($save[0]['MSG'] == 'TRUE') {
                    if (!empty($latitud) && !empty($longitud) && !empty($direccion)) {

                        $data_ltlg = [
                            'latitud_inicial' => $latitud,
                            'longitud_inicial' =>  $longitud
                        ];
                        $reg = $helper->actualizarAgenda($connection, $data_ltlg, (int)$id_agenda);
                        if ($reg !== false) {
                            $message = array(
                                'responseCode' => 200,
                                'estado' => true
                            );
                        } else {
                            $message = array(
                                'responseCode' => 204,
                                'estado' => false
                            );
                        }
                    }
                } else {

                    $message = array(
                        'responseCode' => $save,
                        'estado' => false
                    );
                }
            } else {
                $message = array(
                    'responseCode' => 204,
                    'error' => $data_error_agenda,
                    'estado' => false
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'estado' => false
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
        $usuariocontroller = new UsuarioController();

        try {
            $data = json_decode($request->getContent(), true);
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
         
            $id = $data['id'];
            $cor = "";
            $codTitulo = $data['codTitulo'];
            $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';
            $formaContato = $data['formContactId'];
            $meioContato = $data['typeContactId'];
            $dataInicial = date('Y-m-d H:i:s', strtotime($data['start']));
            $dataFinal = !empty($data['end']) ? date('Y-m-d H:i:s', strtotime($data['end'])) : '';
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
            $obs_final = !empty($data['obsFinalizar']) ? strtoupper($data['obsFinalizar']) : '';
            if($infoUsuario->none_cargo == 1 && !empty($data['promotorparaasignar']))
            {
                $id_vendedor = $data['promotorparaasignar'];
            }
            else
            {
                $id_vendedor = !empty($data['idVendedor']) ? strtoupper($data['idVendedor']) : '';
            }
            $codigo_cliente = !empty($data['codClient']) ? $data['codClient'] : '';
            $direccion = !empty($data['direccion']) ? $data['direccion'] : '';
            $latitud = !empty($data['latitud']) ? $data['latitud'] : '';
            $longitud = !empty($data['longitud']) ? $data['longitud'] : '';

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
                    ,@STATUS = '{$status}'
                    ,@OBSERVACAO = '{$observacao}'
                    ,@OBS_FINAL = '{$obs_final}'
                    ,@VENDEDOR = '{$id_vendedor}'
                    ,@DESTINO_DOCUMENTO = '{$destination}'

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
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));
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
    /* public function updateCompromisso(Connection $connection, Request $request)
    {
        $usuariocontroller = new UsuarioController();

        try {
            $data = json_decode($request->getContent(), true);
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));

            $id = $data['id'];
            $cor = "";
            $codTitulo = $data['codTitulo'];
            $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';
            $formaContato = $data['formContactId'];
            $meioContato = $data['typeContactId'];
            $dataInicial = date('d/m/Y H:i:s', strtotime($data['start']));
            $dataFinal = !empty($data['end']) ? date('d/m/Y H:i:s', strtotime($data['end'])) : '';
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
            $obs_final = !empty($data['obs_final']) ? strtoupper($data['obs_final']) : '';
            switch ($data['status']) {
                case 'registrado':
                    $status = 1;
                    $cor = "#0033ff";
                    break;
                case 'en proceso':
                    $status = 2;
                    $cor = "#0033ff";

                    

                    break;
                case 'finalizar':
                    $obs_final = !empty($data['obs_final']) ? strtoupper($data['obs_final']) : '';
                    $status = 3;
                    $cor = "#21C710";

                    break;
                case 'reagendado':
                    $this->rescheduleCompromisso($connection, $request);
                    break;
                default:
                    $obs_final = !empty($data['obs_final']) ? '' : '';
                    $status = 1;
                    break;
            }

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
                    ,@STATUS = '{$status}'
                    ,@OBSERVACAO = '{$observacao}'
                    ,@OBS_FINAL = '{$obs_final}'
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
    } */
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
        $usuariocontroller = new UsuarioController();
        try {
            $data = json_decode($request->getContent(), true);
            
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
            !empty($data['rescheduleId']) ? $motivoReagendamento = $data['rescheduleId'] :  $data_error['motivo reprogramacion'] = 'es requerido';
           
            if(!empty($data['idVendedor']) && $data['idVendedor'] != 0)
            {
                $idVendedor = $data['idVendedor'];
            }
            else
            {
                $idVendedor = $data['promotorparaasignar'];
            }
           
            if (empty($data_error)) {
                $cor = $data['color']['primary'] ? $data['color']['primary'] : null;
                $codTitulo = $data['codTitulo'];
                $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';
                $formaContato = $data['formContactId'];
                $meioContato = $data['typeContactId'];
                $dataInicial = date('Y-m-d H:i:s', strtotime($data['start']));
                $dataFinal = !empty($data['end']) ? date('Y-m-d H:i:s', strtotime($data['end'])) : '';
                $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
                $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
                $id = $data['id'];
                $status = $data['status'];
                $res = $connection->query("
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
                    ,@STATUS = '{$status}'
                    ,@OBSERVACAO = '{$observacao}'
                    ,@VENDEDOR = '{$idVendedor}'
                ")->fetchAll();
               
                if ($res[0]['MSG'] == 'TRUE' && isset($res[0]['ID_AGENDA'])) {
                    $idCompromissoAntigo = $data['id'];
                    $idCompromissoReagendado = $res[0]['ID_AGENDA'];
                    $motivoReagendamento = $data['rescheduleId'];

                    $arquivar = $connection->query(
                        " EXEC [PRC_AGEN_VEND_CADA]
                                @AGENDA = '{$idCompromissoAntigo}',
                                @COR = '#696969',
                                @ID_TITULO = '{$codTitulo}',
                                @CLIENTE = '{$codCliente}',
                                @FORMA_CONTATO = '{$formaContato}',
                                @MEIO_CONTATO = '{$meioContato}',
                                
                                @STATUS = '4',
                                @REAGENDADO = '{$idCompromissoReagendado}',
                                @REAGENDADO_MOTIVO = '{$motivoReagendamento}',
                                @VENDEDOR = '{$idVendedor}'
                        "
                    )->fetchAll();

                    if ($arquivar[0]['MSG'] == 'TRUE') {
                        $message = array('responseCode' => 200, 'estado' => true);
                    } else {
                        $message = array('responseCode' => 204, 'estado' => false);
                    }
                } else {
                    $message = array('responseCode' => 204, 'data'=> $data_error, 'estado' => false);
                }
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
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

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
        $usuariocontroller = new UsuarioController();
        $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
        try {
            $data = json_decode($request->getContent(), true);
            $array_vacio = [];
            $fecha_actual = date('Y-m-d');
            $fecha_inicio = isset($data['fechaInicial']) && $data['fechaInicial'] !== "" ? date('Y-m-d', strtotime($data['fechaInicial'])) : date('Y-m-d', strtotime($fecha_actual));
            $fecha_final = isset($data['fechaFinal']) && $data['fechaFinal'] !== "" ? date('Y-m-d', strtotime($data['fechaFinal'])) : date('Y-m-d', strtotime($fecha_actual));
            $id_vendedor = isset($data['id_vendedor']) && $data['id_vendedor'] !== "" ? $data['id_vendedor'] : null;
            $id_status = isset($data['estado']) && $data['estado'] !== "" ? $data['estado'] : null;
            $motivo = isset($data['titulo']) && $data['titulo'] !== "" ? $data['titulo'] : null;
            $sucursal = isset($data['sucursal']) && $data['sucursal'] !== "" ? $data['sucursal'] : null;

            $stmt = $connection->prepare("EXEC [CRM360].[dbo].[PRC_MODU_AGE_REPORT] @vendedor = :id_vendedor, @fecha_inicio = :fecha_inicio, @fecha_final = :fecha_final, @estados = :id_status, @motivo = :motivo, @sucursal = :sucursal");
            $stmt->bindValue('id_vendedor', $id_vendedor, PDO::PARAM_INT);
            $stmt->bindValue('fecha_inicio', $fecha_inicio, PDO::PARAM_STR);
            $stmt->bindValue('fecha_final', $fecha_final, PDO::PARAM_STR);
            $stmt->bindValue('id_status', $id_status, PDO::PARAM_INT);
            $stmt->bindValue('motivo', $motivo, PDO::PARAM_INT);
            $stmt->bindValue('sucursal', $sucursal, PDO::PARAM_INT);
            $stmt->execute();
            $result = $stmt->fetchAll();

            if (count($result) > 0) {
                $message = [
                    'responseCode' => 200,
                    'result' => $result
                ];
            } else {
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
     *  "/comercial/agenda/reportecliente",
     *  name="comercial.reporte-cliente",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function reporteCliente(Connection $connection, Request $request): JsonResponse
    {
        $usuariocontroller = new UsuarioController();
        $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
        /* $id=$request['id']; */
        try {
            $data = json_decode($request->getContent(), true);
            $array_vacio = [];
            $id_cliente = isset($data['id']) && $data['id'] !== "" ? $data['id'] : null;

            $stmt = $connection->prepare("EXEC [CRM360].[dbo].[PRC_MODU_AGE_REPORT_CLIENTE] @id_cliente = :id_cliente");
            $stmt->bindValue('id_cliente', $id_cliente, PDO::PARAM_INT);
            $stmt->execute();
            $result = $stmt->fetchAll();

            if (count($result) > 0) {
                $message = [
                    'responseCode' => 200,
                    'result' => $result
                ];
            } else {
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
                ['id_agenda' => $id_agenda]
            )->fetchAll();



            if (count($res) > 0) {

                foreach ($res as $value) {

                    $file = $value['url_imagen'];
                    $response = new BinaryFileResponse($file);

                    $image = file_get_contents($value['url_imagen']);

                    $imagedata = base64_encode($image);

                    $resLoop[] = array(
                        'url_imagen' => $imagedata,
                        'url_web' => $value['url_web'],
                        'nom_imagen' => $value['nom_imagen'],
                        'fecha' => $value['fecha']
                    );
                }
                $message = array(

                    'responseCode' => 200,
                    'result' => $resLoop
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'messagge' => 'Sin Imagenes'
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

    /**
     * @Route(
     *  "/comercial/agenda/compromisso/",
     *  name="comercial.agenda-compromisso-finalizar",
     *  methods={"POST"},
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */

    /*  public function finalizarCompromisso(Connection $connection, Request $request)
    {
        try {
            $requestContent = $request->getContent();
            $data = json_decode($requestContent, true);

            $id_agenda = $data['id_agenda'];
            $obs_final = !empty($data['observacion_final']) ? strtoupper($data['observacion_final']) : '';
            $fecha = date('Y-m-d H:i:s');
            $destination = "";

            $stmt = $connection->prepare("EXEC [dbo].[PRC_AGEN_VEND_FIN]
                   @AGENDA = :id_agenda,
                   @OBS_FINAL = :obs_final");
            $stmt->bindParam(':id_agenda', $id_agenda);
            $stmt->bindParam(':obs_final', $obs_final);
            $stmt->execute();

            // Obtener el resultado del procedimiento almacenado
            $result = $stmt->fetch();

            if (!empty($data['imagen'])) {
                $id_agenda = $data['id_agenda'];
                $imageFiles = $data['imagen'];
                foreach ($imageFiles as $imageBase64) {
                    $imageData = substr($imageBase64, strpos($imageBase64, ',') + 1);
                    $imageDecoded = base64_decode($imageData);
                    $filename = uniqid() . '.jpeg';
                    $destination = $this->getParameter('kernel.project_dir') . '/uploads/agenda/images';
                    $destination = str_replace('\\', '/', $destination);
                    file_put_contents($destination . '/' . $filename, $imageDecoded); */

    /* $webPath = str_replace("C:\\inetpub\\wwwroot\\Monterrey", $_SERVER['LOCAL_ADDR'], $destination);
                    $webPath = str_replace("\\", "/", $webPath);
                    $webPath = $_SERVER["HTTPS"] == "off" ? "http://" . $webPath : "https://" . $webPath; */


    /* $webPath = "C:\\inetpub\\wwwroot\\MTCorp\\uploads\\agenda\\images";
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
            }

            if ($result['MSG'] == 'TRUE') {
                $message = array('responseCode' => 200, 'estado' => true);
            } else {
                $message = array('responseCode' => 204, 'estado' => false);
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    } */

    /**
     * @Route(
     *  "/comercial/agenda/getruta/{id}",
     *  name="comercial.agenda-getruta",
     *  methods={"GET"}
     * )
     * @param conecion $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getrutasVendedor(conecion $connection, Request $request, $id)
    {

        try {
            //$params = $request->query->all();
            $usuariocontroller = new UsuarioController();
            $arrayVacio = [];
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));

            $id_agenda = $id;

            $rutas = $connection->executeQuery(
                'EXEC [PROC_AGEN_VEN_UB_GET] @id_agenda = :id_agenda',
                ['id_agenda' => $id_agenda]
            )->fetch();
            $data = $connection->executeQuery(
                'SELECT latitud, longitud FROM TB_CORE_AGEN_UB WHERE id_agenda = :id_agenda',
                ['id_agenda' => $id_agenda]
            )->fetchAll();
            /* $rutas = [
                   'latitud' => $data[0]['latitud'],
                    'longitud' => $data[0]['longitud']
                ]; */
            $message = array(
                'responseCode' => 200,
                'estado' => true,
                'result' =>  $data,
                'message' => 'success'
            );
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'estado' => false,
                'result' =>  $arrayVacio,
                'message' => $e->getMessage()
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/ruta",
     *  name="comercial.agenda-ruta",
     *  methods={"POST"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function rutasVendedor(Connection $connection, Request $request)
    {
        try {
            $helpers = new Helper();
            $jsonData = $request->getContent();
            $datos = json_decode($jsonData, true);
            $swGuardarDatos = false;


            foreach ($datos['lista'] as  $data) {
                $guardarDatos = $helpers->guardarRutaAgenda($connection, $data);
                if ($guardarDatos == true) {
                    $swGuardarDatos = true;
                } else {
                    $swGuardarDatos = false;
                }
            }
            if ($swGuardarDatos == true) {
                $message = array(
                    'responseCode' => 200,
                    'success' => true,
                );
            } else if ($swGuardarDatos == false) {
                $message = array(
                    'responseCode' => 204,
                    'success' => $datos['lista']
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => 500,
                'success' => false,
                'error' => $e->getMessage(),
            );
        }
        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromiso/proceso",
     *  name="comercial.agenda-compromiso-proceso",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function procesoCompromiso(Connection $connection, Request $request)
    {
        try {
            $jsonData = $request->getContent();
            $data = json_decode($jsonData, true);
            $id_agenda = !empty($data['id_agenda']) ? $data['id_agenda'] : 'no se permite nulos';
            $statement = $connection->prepare("EXEC PRC_AGEN_VEND_PRO ?");
            $statement->bindValue(1, $id_agenda);
            $statement->execute();

            $row = $statement->fetch(PDO::FETCH_ASSOC);

            $msg = $row['MSG'];

            if ($msg == "TRUE") {
                $message = array(
                    'responseCode' => 200,
                    'estado' => true,
                    'message' => 'success'
                );
            } else {
                $message = array(
                    'responseCode' => 204,
                    'estado' => false,
                    'message' => "Error de registro"
                );
            }
        } catch (DBALException $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'estado' => false,
                'result' =>  $arrayVacio,
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

            $id_agenda = (int)$data['id_agenda'];
            $latitud = !empty($data['latitud']) ? $data['latitud'] : 0;
            $longitud = !empty($data['longitud']) ? $data['longitud'] : 0;
            $obs_final = !empty($data['observacion_final']) ? strtoupper($data['observacion_final']) : '';
            //$fecha = date('d/m/Y H:i:s');
            $fecha = date('Y-m-d H:i:s');

            $destination = "";


            $stmt = $connection->prepare("EXEC [dbo].[PRC_AGEN_VEND_FIN]
                    @AGENDA = :id_agenda,
                    @OBS_FINAL = :obs_final,
                    @latitud = :latitud,
                    @longitud = :longitud");

            $stmt->bindParam(':id_agenda', $id_agenda);
            $stmt->bindParam(':obs_final', $obs_final);
            $stmt->bindParam(':latitud', $latitud);
            $stmt->bindParam(':longitud', $longitud);

            $stmt->execute();

            // Obtener el resultado del procedimiento almacenado
            $result = $stmt->fetch();


            if (!empty($data['imagen'])) {
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
            }

            if ($result['MSG'] == 'TRUE') {
                $message = array('responseCode' => 200, 'estado' => true);
            } else {
                $message = array('responseCode' => 204, 'estado' => false);
            }
        } catch (\Exception $e) {
            $message = array(
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
                'estado' => false
            );
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }

    /**
     * @Route(
     *  "/comercial/agenda/compromiso/verificar_inicio",
     *  name="comercial.agenda-compromiso-verificar_inicio",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function verificarInicio(Connection $connection, Request $request)
    {
        $usuariocontroller = new UsuarioController();
        $helper = new Helper();
        $swRespuesta = false;

        try {
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();
            $idVendedor = isset($params['id_vendedor']) ? $params['id_vendedor'] : $infoUsuario->matricula;
            $idAgenda = isset($params['id_agenda']) ? $params['id_agenda'] : 0;

            $verificarAgenda = $helper->verificarCitaProceso($connection, (int)$idVendedor);
            if ($verificarAgenda[0] !== false) {
                $swRespuesta = true;
                if (count($verificarAgenda[1]) > 0) {
                    foreach ($verificarAgenda[1] as $agenda) {
                        if ($agenda === $idAgenda) {
                            $swRespuesta = false;
                            break;
                        }
                    }
                }
            } else {
                $swRespuesta = false;
            }

            if ($swRespuesta === true) {
                $message = [
                    'responseCode' => 200,
                    'estado' => true,
                    'message' => 'Error, tiene agendas iniciadas',
                ];
            } else if ($swRespuesta === false) {
                $message = [
                    'responseCode' => 204,
                    'estado' => false,
                    'message' => 'No tiene agendas iniciadas',
                ];
            }
        } catch (DBALException $e) {
            $message = [
                'responseCode' => $e->getCode(),
                'message' => $e->getMessage(),
            ];
        }

        $response = new JsonResponse($message);
        $response->setEncodingOptions(JSON_NUMERIC_CHECK);
        return $response;
    }
}
