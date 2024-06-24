<?php 

namespace App\Controller\MTCorp\Comercial\Agenda;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\DBAL\DriverManager;
use Doctrine\DBAL\ParameterType;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\UsuarioController;

/**
 * Class AgendaDatosController
 * @package App\Controller\MTCorp\Comercial\Agenda
 */
class AgendaDatosController extends AbstractController
{

     /**
     * @Route(
     *  "/comercial/agenda_datos/create",
     *  name="comercial.agenda-datos-create",
     *  methods={"POST"}
     * )
     * @return JsonResponse
     */
    public function agendaDatosCreate(Connection $connection, Request $request){

        $data = json_decode($request->getContent(), true);
        

        !empty($data['id_agenda']) ? $data_agenda['id_agenda'] = $data['id_agenda'] : $data_error['id_agenda']='agenda necesario';
        $vendedor = $this->traerVendedor($connection, $data['correo']);
        $data_agenda['id_vendedor'] = $vendedor['ID'];

        $cliente = $this->traerCliente($connection, $data['codigo_cliente']);
        $data_agenda['id_cliente'] = $cliente['id_cliente'];
        
        !empty($data['data_inicio']) ? $data_agenda['data_inicio'] = $data['data_inicio'] : $data_error['data_inicio']=' es necesario';
        !empty($data['data_final']) ? $data_agenda['data_final'] = $data['data_final'] : $data_error['data_final']='es necesario';
        !empty($data['titulo']) ? $data_agenda['titulo'] = $data['titulo'] : null;
        !empty($data['id_meio_contato']) ? $data_agenda['id_meio_contato'] = $data['id_meio_contato'] : $data_error['id_meio_contato'] = 'es necesario';
        !empty($data['id_forma_contato']) ? $data_agenda['id_forma_contato'] = $data['id_forma_contato'] : $data_error['id_forma_contato'] = 'es necesario';
        !empty($data['id_status']) ? $data_agenda['id_status'] = $data['id_status'] : $data_error['id_status'] = 'es necesario';
        !empty($data['id_reagendado']) ? $data_agenda['id_reagendado'] = $data['id_reagendado'] : $data_error['id_reagendado'] = 'es necesario';
        !empty($data['id_reagendado_motivo']) ? $data_agenda['id_reagendado_motivo'] = $data['id_reagendado_motivo'] : $data_error['id_reagendado_motivo'] = 'es necesario'; 
        !empty($data['data_cadastro']) ? $data_agenda['data_cadastro'] = $data['data_cadastro'] : $data_error['data_cadastro'] = 'es necesario';
        !empty($data['data_conclusao']) ? $data_agenda['data_conclusao'] = $data['data_conclusao']: $data_error['data_conclusao'] = 'es necesario';
        !empty($data['observacao']) ? $data_agenda['observacao'] = $data['observacao']: $data_error['observacao'] = 'es necesario';
        !empty($data['cor']) ? $data_agenda['cor'] = $data['cor']: $data_error['cor'] = 'es necesario';
        !empty($data['id_dia_inteiro']) ? $data_agenda['id_dia_inteiro'] = $data['id_dia_inteiro']: $data_error['id_dia_inteiro'] = 'es necesario';
        !empty($data['id_titulo']) ? $data_agenda['id_titulo'] = $data['id_titulo']: $data_error['id_titulo'] = 'es necesario';
        !empty($data['obs_final']) ? $data_agenda['obs_final'] = $data['obs_final']: $data_error['obs_final'] = 'es necesario';
        !empty($data['anexo']) ? $data_agenda['anexo'] = $data['anexo']: $data_error['anexo'] = 'es necesario';
        !empty($data['latitud_inicial']) ? $data_agenda['latitud_inicial'] = $data['latitud_inicial']: $data_error['latitud_inicial'] = 'es necesario';
        !empty($data['longitud_inicial']) ? $data_agenda['longitud_inicial'] = $data['longitud_inicial']: $data_error['longitud_inicial'] = 'es necesario';
        !empty($data['latitud_final']) ? $data_agenda['latitud_final'] = $data['latitud_final']: $data_error['latitud_final'] = 'es necesario';
        !empty($data['longitud_final']) ? $data_agenda['longitud_final'] = $data['longitud_final']: $data_error['longitud_final'] = 'es necesario';

        if(empty($data_error)){
            return new JsonResponse($data_error, Response::HTTP_BAD_REQUEST);
        }else{
            $agendado = $connection->insert('TB_CORE_AGEN_COME', $data_agenda);
            if($agendado)
            {
                return new JsonResponse('inserto correctamente', Response::HTTP_CREATED);
            }else{
                return new JsonResponse('error al insertar', Response::HTTP_BAD_REQUEST);
            }
        }
    }

    public function traerVendedor($connection, $data)
    {
        $vendedor = $connection->fetchAssociative('SELECT * FROM TB_VEND WHERE NM_EMAI = ?', [$data['correo']] );
        return $vendedor;        
    }

    public function traerCliente($connection, $data){
        $cliente = $connection->fetchAssociative('SELECT * FROM MTCORP_MODU_CLIE_BASE WHERE codigo_cliente = ?', [$data['codigo_cliente']] );
        return $cliente;
    }
}