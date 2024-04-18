<?php
namespace App\Controller\MTCorp\Comercial\CicloVendas\Cotacoes;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Services\Helper;

/**
 * Class OfertaController
 * @package App\Controller\MTCorp\Comercial\CicloVendas\Cotacoes
 */
class OfertaController extends AbstractController{

    public function anularOferta(Connection $connection, $id_oferta){
        $oferta = [
            'estado_oferta' => 13,
            'tipo_estado' => 8
        ];
        return $connection->update('tb_oferta', $oferta, ['id' => $id_oferta]);
    }

    public function datoOferta(Connection $connection, $id_oferta){

       return $connection->fetchAssociative('SELECT * FROM tb_oferta WHERE id = ?', [$id_oferta]);
    }
    
}