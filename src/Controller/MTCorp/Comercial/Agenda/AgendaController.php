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
use App\Controller\Common\Services\ParseFileFromRequestController;

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
    {   $usuariocontroller = new UsuarioController();
        $comercialcontroler = new ComercialController();
        $funtionscontroler = new FunctionsController();
        try {
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
            $simuladorVendas = $comercialcontroler->verificaSiglaPerfil($connection, $infoUsuario->matricula, 'HOMO_CICL_VEND');
            
            $res = array(
                array(
                    'simuladorVendas' => $simuladorVendas
                )
            );

            if (count($res) > 0 && !isset($res[0]['message'])) {
                return $funtionscontroler->Retorno(true, null, $res[0], Response::HTTP_OK);
            } else if (count($res) > 0 && isset($res[0]['message'])) {
                return $funtionscontroler->Retorno(false, $res[0]['message'], null, Response::HTTP_OK);
            } else {
                return $funtionscontroler->Retorno(false, null, null, Response::HTTP_OK);
            }
        } catch (\Throwable $e) {
            return $funtionscontroler->Retorno(
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
    {   $usuariocontroller = new UsuarioController();
        try {
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
            $params = $request->query->all();
            $inicio = date('d/m/Y', strtotime($params['inicio'])) . ' 00:00:00';
            $fim = date('d/m/Y', strtotime($params['fim'])) . ' 23:59:59';
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
           
            if (count($res) > 0 && !isset($res[0]['MSG'])) {
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
        $usuariocontroller = new UsuarioController();
      
        if ($request->isMethod('GET')) {
            try {
                $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));

                $res = $connection->query(
                "
                    EXEC [PRC_AGEN_VEND_CONS]
                    @ID_AGENDA = '{$id}'
                "
                )->fetchAll();
                dd($res);
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
                    $compromisso->id_status = $res[0]['STATUS'];
                    $compromisso->status = $res[0]['DESC_STATUS'];
                    if ($compromisso->id_motivo > 0) {
                        $compromisso->color = '#F0F8FF';
                    } else {
                        $compromisso->color['primary'] = !empty($res[0]['COR']) ? $res[0]['COR'] : '#0033FF';
                    }
                    switch ($compromisso->id_status) {
                        case '1':
                            $compromisso->color_status = '#0329ff';
                            break;
                        case '2':
                            $compromisso->color_status = '#F1F900';
                            break;
                        case '3':
                            $compromisso->color_status = '#2AE83D';
                            break;
                        case '4':
                            $compromisso->color_status = '#F0F8FF';
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
        $usuariocontroller = new UsuarioController();
        try {
            $data = json_decode($request->getContent(), true);
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
            $id_vendedor = 0;
            $cor = $data['color']['primary'];
            $codTitulo = $data['codTitulo'];
            $codCliente = !empty($data['codClient']) ? $data['codClient'] : '';
            $formaContato = $data['formContactId'];
            $meioContato = $data['typeContactId'];
            $dataInicial = date('d/m/Y H:i:s', strtotime($data['start']));
            $dataFinal = !empty($data['end']) ? date('d/m/Y H:i:s', strtotime($data['end'])) : '';
            $diaInteiro = $data['allDay'] == '1' ? 1 : 0;
            $observacao = !empty($data['description']) ? strtoupper($data['description']) : '';
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
                        ,@ANEXO = '{$anexo}'
                ")->fetchAll();

            if ($save[0]['MSG'] == 'TRUE') {
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
        $usuariocontroller = new UsuarioController();
        try {
            $data = json_decode($request->getContent(), true);
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));

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
        $usuariocontroller = new UsuarioController();
        try {
            $infoUsuario =  $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));
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
        $usuariocontroller = new UsuarioController();

        try {
            $data = json_decode($request->getContent(), true);
            $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));

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
            $obs_final = !empty($data['obs_final']) ? strtoupper($data['obs_final']) : '';
            switch ($data['status']) {
                case '1':
                    $status = 1;
                    break;
                case '2':
                    $status = 2;
                    break;
                case '3':
                    $obs_final = !empty($data['obs_final']) ? strtoupper($data['obs_final']) : '';
                    $status = 3;
                    break;
                default:
                    $obs_final = !empty($data['obs_final']) ? '': '';
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

        try {
            $data = json_decode($request->getContent(), true);
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

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

            $res = $connection->query("
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
                    ,@VENDEDOR = '{$idVendedor}'
            ")->fetchAll();

            if ($res[0]['MSG'] == 'TRUE' && isset($res[0]['ID_AGENDA'])) {
                $idCompromissoAntigo = $data['id'];
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
                    
                    @STATUS = '4',
                    @REAGENDADO = '{$idCompromissoReagendado}',
                    @REAGENDADO_MOTIVO = '{$motivoReagendamento}',
                    @VENDEDOR = '{$idVendedor}'
                    "
                )->fetchAll();
                /* dd($arquivar); */
                if ($arquivar[0]['MSG'] == 'TRUE') {
                    /* dd($arquivar); */
                    $message = array('responseCode' => 200);
                } else {
                    $message = array('responseCode' => 204);
                }
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
    public function reporteAgenda(Connection $connection, Request $request) : JsonResponse
    {   
        try {
            $data = json_decode($request->getContent(), true);

            if ((!isset($data['fecha_inicio']) || $data['fecha_inicio'] == ""))
            {
                $fecha_inicio = ' ';
            }
            else
            {
                $fecha_inicio = date('Y-m-d', strtotime($data['fecha_inicio']));
            }
            
            if ((!isset($data['fecha_final']) || $data['fecha_final'] == ""))
            {
                $fecha_final = ' ';
            }
            else
            {
                $fecha_final = date('Y-m-d', strtotime($data['fecha_final']));
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
        
            if(count($update)>0)
            { 
                $message = array(
                'responseCode' => 200,
                'result' => $update
                );
            }
            else{
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
        $usuariocontroller = new UsuarioController();
        $infoUsuario = $usuariocontroller->infoUsuario($request->headers->get('X-User-Info'));

        try {
            $data = json_decode($request->getContent(), true);
            $id_agenda = $data['id_agenda'];
            $datetime = $data['datetime'];
            $latitud =   $data['latitud'];
            $longitud = $data['longitud'];
            if(!$infoUsuario->id )
            {
           $rutas = $connection->query("
                EXEC [MTCORP_MODU_AGE_REPORT]
                    @id_agenda = '{$id_agenda}'
                    ,@datetime = '{$datetime}'
                    ,@latitud = '{$latitud}'
                    ,@longitud = '{$longitud}'
                 ")->fetchAll();
            }

            if(count($rutas)>0)
            { 
                $message = array(
                'responseCode' => 200,
                'result' => 'La ruta fue agregada'
                );
            }
            else{
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
