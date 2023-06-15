<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\EmailMarketing;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class ListaMensagensController
 * @package App\Controller\MTCorp\Comercial\EmailMarketing
 */
class AssociacaoSetorAtividadeLinhaController extends AbstractController
{
  /**
     * Consultar linhas para associação
     * @Route("/comercial/emailMarketing/associacao/linhas", 
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getLinhas(Connection $connection, Request $request): Response
    {   
      try{

        $ID_LINH   = $request->query->get('ID_LINH');
        $UUID      = $request->query->get('UUID');
        
        $query = <<<SQL
            EXEC PRC_COME_INTE_AKNA
                @PARAMETRO  = 'C1',
                @ID_LINH    = '{$ID_LINH}',
                @UUID       = '{$UUID}'
        SQL;

        $response = $connection->query($query)->fetchAll();
        
        if (empty($response))
            return new JsonResponse(null, Response::HTTP_NO_CONTENT); 

        $jr = new JsonResponse([
            "data"      => $response, 
            "error"     => null,
            "message"   => null,
            "success"   => true
        ], Response::HTTP_OK);

        return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);
      
    } catch(\Throwable $th) {
        return new JsonResponse([
            "data"      => null, 
            "error"     => $th->getMessage(),
            "message"   => "Ocorreu um erro ao processar a requisção",
            "success"   => false
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
  }

  /**
     * Consultar setores de atividades para associação
     * @Route("/comercial/emailMarketing/associacao/setor-atividade", 
     * methods={"GET"})
     * @param Request $request
     * @param Connection $connection
     * @return Response
     */
    public function getSetorAtividade(Connection $connection, Request $request): Response
    {   
      try{

        $ID_SETO_ATIV = $request->query->get('ID_SETO_ATIV');
       
        $query = <<<SQL
            EXEC PRC_COME_INTE_AKNA
                @PARAMETRO = 'C2',
                @ID_SETO_ATIV = '{$ID_SETO_ATIV}'
        SQL;

        $response = $connection->query($query)->fetchAll();
        
        if (empty($response))
            return new JsonResponse(null, Response::HTTP_NO_CONTENT); 

        $jr = new JsonResponse([
            "data"      => $response, 
            "error"     => null,
            "message"   => null,
            "success"   => true
        ], Response::HTTP_OK);

        return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);
      
    } catch(\Throwable $th) {
        return new JsonResponse([
            "data"      => null, 
            "error"     => $th->getMessage(),
            "message"   => "Ocorreu um erro ao processar a requisção",
            "success"   => false
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Consultar associações realizadas
   * @Route("/comercial/emailMarketing/associacao/lista-associacoes", 
   * methods={"GET"})
   * @param Request $request
   * @param Connection $connection
   * @return Response
   */
  public function getListaAssociacoes(Connection $connection, Request $request): Response
  {   
    try{
      $ID_ASSO      = $request->query->get('ID_ASSO');
      $ID_SETO_ATIV = $request->query->get('ID_SETO_ATIV');
      $ID_LINH      = $request->query->get('ID_LINH');
      $IN_STAT      = $request->query->get('IN_STAT');

      $query = <<<SQL
          EXEC PRC_COME_INTE_AKNA
              @PARAMETRO      = 'C3',
              @ID_ASSO        = '{$ID_ASSO}',
              @ID_SETO_ATIV   = '{$ID_SETO_ATIV}',
              @ID_LINH        = '{$ID_LINH}',
              @IN_STAT        = '{$IN_STAT}'
      SQL;

      $response = $connection->query($query)->fetchAll();

      $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

      $jr = new JsonResponse([
          "data"      => $response, 
          "error"     => null,
          "message"   => null,
          "success"   => true
      ], $code);

      return $jr->setEncodingOptions(JSON_NUMERIC_CHECK);
      
    } catch(\Throwable $th) {
        return new JsonResponse([
            "data"      => null, 
            "error"     => $th->getMessage(),
            "message"   => "Ocorreu um erro ao processar a requisição",
            "success"   => false
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Cadastrar associações
   * @Route("/comercial/emailMarketing/associacao/lista-associacoes", 
   * methods={"POST"})
   * @param Request $request
   * @param Connection $connection
   * @return Response
   */
  public function postListaAssociacoes(Connection $connection, Request $request)
  {
    try {

        $em =  $this->getDoctrine()->getConnection('mtcorp');
        $em->beginTransaction();

        $params = json_decode($request->getContent(), true);
    
        $ID_LINH  = isset($params['ID_LINH'])  ? $params['ID_LINH'] : NULL;
        
        $query = <<<SQL
             EXEC PRC_COME_INTE_AKNA
                @PARAMETRO  = 'P2',
                @ID_LINH    = '{$ID_LINH}'
        SQL;

        $stmt = $em->prepare($query);
        $stmt->execute();
        $stmt->fetch();

        $response = [];

        foreach($params['assocSetores'] as $assocSetor){
            
            $SETOR = $assocSetor['ID_SETO_ATIV'];
            
            $query = <<<SQL
                EXEC PRC_COME_INTE_AKNA
                @PARAMETRO          = 'P1',
                @ID_SETO_ATIV       = '{$SETOR}', 
                @ID_LINH            = '{$ID_LINH}'
            SQL;
                
            $stmt = $em->prepare($query);
            $stmt->execute();
            $response[] = array_merge($stmt->fetch(), ["ID_SETO_ATIV" => $SETOR, "ID_LINH" => $ID_LINH]);
        }

        $em->commit();

        return FunctionsController::Retorno(true, "Associações executadas com sucesso!", $response, Response::HTTP_OK);
    } catch(\Throwable $th) {
        $em->rollBack();
        return FunctionsController::Retorno(false, "Ocorreu um erro ao processar a requisição", $th->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Editar associações
   * @Route("/comercial/emailMarketing/associacao/lista-associacoes",
   * methods={"PUT"})
   * @param Request $request
   * @param Connection $connection
   * @return Response
   */
  public function putListaAssociacoes(Connection $connection, Request $request)
  {
    try {

        $params = json_decode($request->getContent(), true);
   
        $ID_ASSO = isset($params['ID_ASSO']) ? $params['ID_ASSO'] : NULL;
  
        if (!isset($ID_ASSO))
            return new JsonResponse("Necessário informar a associação a ser alterada.", Response::HTTP_BAD_REQUEST);  

        //Query para editar as associações
        $query = <<<SQL
          EXEC PRC_COME_INTE_AKNA
            @PARAMETRO  = 'P2',
            @ID_ASSO    = '{$ID_ASSO}'
        SQL;

        $response = $connection->query($query)->fetch();

        if ($response['SUCCESS'] == 200)
            return FunctionsController::Retorno(true, "Associação {$response['MESSAGE']} alterada com sucesso", null, Response::HTTP_OK);
    } catch(\Throwable $th) {
        return FunctionsController::Retorno(false, "Ocorreu um erro ao processar a requisição", null, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
  }

}
