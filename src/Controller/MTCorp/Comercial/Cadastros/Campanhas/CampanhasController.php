<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Cadastros\Campanhas;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;
use App\Controller\Common\UsuarioController;
use App\Services\Helper;

/**
 * Class CampanhasController
 * @package App\Controller\MTCorp\Comercial\Cadastros\Campanhas
 */
class CampanhasController extends AbstractController
{
    /**
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function getListaCampanhas(Connection $connection, Request $request)
    {
      try {
        
        $helper = new Helper();
        $params = $request->query->all();
        dd($params);
        /* $material = NULL; */
        $codSituacao = 'NULL';
        $pagina = 1;
        $registros = 300;
        $orderBy = 'nomeMaterial';
        $orderType = 'ASC';
        
        if (isset($params['material'])) $material = $params['material'];
        if (isset($params['codSituacao'])) $codSituacao = $params['codSituacao'];
        if (isset($params['pagina'])) $pagina = $params['pagina'];
        if (isset($params['registros'])) $registros = $params['registros'];
        if (isset($params['orderBy'])) $orderBy = $params['orderBy'];
        if (isset($params['orderType'])) $orderType = $params['orderType'];

        //En caso que se inserte como string utiliza el helper para obtener el id
       /*  if(!is_numeric($material) && $material != null){
            $buscarMaterial = $helper->buscarMaterialCodigoNombre($connection, $material);
            if($buscarMaterial['ID_CODIGOMATERIAL'] !== false){
                $material = (int)$buscarMaterial['ID_CODIGOMATERIAL'];
            }else{
                $material = NULL;
            }
        } */

        $res = [];
     /*    $res = $connection->executeQuery("
            EXEC [PRC_CROS_SELL_CONS]
                @ID_PARA = 1
                ,@ID_MATE = '{$material}'
                ,@IN_SITU = {$codSituacao}
                ,@DS_ORDE = '{$orderBy} {$orderType}'
                ,@ID_PAGI = {$pagina}
                ,@QT_REGI = {$registros}
        ")->fetchAllAssociative(); */

        if (count($res) > 0 && !isset($res[0]['message'])) {
            return FunctionsController::Retorno(true, null, $res, Response::HTTP_OK);
        } else if (count($res) > 0 && isset($res[0]['message'])) {
            return FunctionsController::Retorno(true, $res[0]['message'], null, Response::HTTP_OK);
        } else {
            return FunctionsController::Retorno(false, null, null, Response::HTTP_OK);
        }
      } catch (\Throwable $e) {
        return FunctionsController::Retorno(false, 'Erro ao retornar dados.', $e->getMessage(), Response::HTTP_BAD_REQUEST);
      }
    }

}
