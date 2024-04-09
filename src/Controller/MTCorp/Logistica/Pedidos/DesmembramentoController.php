<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Logistica\Pedidos;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Connection;
use Symfony\Component\HttpFoundation\Request;
use App\Controller\MTCorp\Logistica\Services\Exceptions\NoUserAtHeaderException;
use App\Controller\MTCorp\Logistica\Services\Traits\{RequestTrait, ResponseTrait};

class DesmembramentoController
{

    use RequestTrait;
    use ResponseTrait;

    /**
     * @Route(
     *  "/logistica/pedidos/desmembramento",
     *  name="logistica.pedidos.desmembramento.store",
     *  methods={"POST"})
     *
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

            $pedidoId               = $data->pedidoId               ?? null;
            $prazoEntrega           = $data->prazoEntrega           ?? null;
            $quantidade             = $data->quantidade             ?? 1;
            $produtos               = $data->produtos               ?? null;

            if(!is_array($produtos)){
                throw new \Exception("Produtos não fornecidos.");
            }
            
            $produtosAgrupados = [];

            foreach ($produtos as $produto) {

                if(!isset($produtosAgrupados[$produto->CD_PROD])){
                    $produtosAgrupados[$produto->CD_PROD] = $produto->TT_PROD;
                    continue;
                }

                $produtosAgrupados[$produto->CD_PROD] += $produto->TT_PROD;
            }

            // verifica se há saldo para o desmembramento
            foreach ($produtosAgrupados as $key => $value) {
                
                $quantidadeProduto = $value * $quantidade;

                $query = <<<SQL
                    EXEC PRC_LOGI_FUSI_PEDI
                         @PARAMETRO         = 3
                        ,@ID_LOGI_FUSI_PEDI = '{$pedidoId}'
                        ,@CD_PROD           = '{$key}' 
                        ,@TT_PROD           = '{$quantidadeProduto}'
                SQL;
                
                $connection->executeQuery($query);
            }

            // cadastra um novo pedido
            $connection->beginTransaction();
            
            try {
                
                for ($i=0; $i < $quantidade; $i++) {
                    
                    $peso = 0;
                    foreach ($produtos as $produto) {
                        $peso+= $produto->TT_PROD_PESO;
                    }

                    $query = <<<SQL
                        EXECUTE PRC_LOGI_FUSI_PEDI
                             @PARAMETRO         = 4
                            ,@ID_LOGI_FUSI_PEDI = '{$pedidoId}'
                            ,@TT_PESO           = '{$peso}'
                            ,@DT_PRZO	        = '{$prazoEntrega}'
                            ,@ID_USUA		    = '{$user->id}'
                            ,@NR_MATR	        = '{$user->matricula}'
                            ,@NM_USUA		    = '{$user->nome}'
                            ,@IP_USUA		    = '{$user->ip}'
                    SQL;

                    $stmt = $connection->prepare($query);
                    $stmt->execute();

                    $id = $stmt->fetchOne();

                    foreach ($produtos as $produto) {
                        $query = <<<SQL
                            EXECUTE PRC_LOGI_FUSI_PEDI
                                 @PARAMETRO         = 5
                                ,@ID_LOGI_FUSI_PEDI = '{$id}'
                                ,@ID_REFE           = '{$pedidoId}'
                                ,@CD_PROD           = '{$produto->CD_PROD}'
                                ,@TT_PROD           = '{$produto->TT_PROD}'
                        SQL;

                        $connection->executeQuery($query);
                    }

                    //Atualiza o peso do pedido
                    $query = <<<SQL
                        UPDATE
                            T1
                        SET
                            T1.TT_PESO = (
                                SELECT
                                    SUM(TT_PROD_PESO)
                                FROM
                                    TB_LOGI_FUSI_PEDI_PROD S1
                                WHERE
                                    S1.ID_LOGI_FUSI_PEDI = T1.ID_LOGI_FUSI_PEDI
                            )
                        FROM
                            TB_LOGI_FUSI_PEDI T1
                        WHERE
                            T1.ID_LOGI_FUSI_PEDI = '{$id}'
                    SQL;

                    $connection->executeQuery($query);
                }

                $connection->commit();

            } catch (\Throwable $th) {
                $connection->close();
                throw $th;
            }

            return $this
                ->setData(null)
                ->setMessage("Operação concluída com êxito.")
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
     * @Route(
     *  "/logistica/pedidos/desmembramento",
     *  name="logistica.pedidos.desmembramento.update",
     *  methods={"PUT"})
     *
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request, Connection $connection)
    {
        try {
            
            $this->setRequest($request);
            
            $data = $this->getContent();
            //$user = $this->getUser();

            $id             = $data->ID_LOGI_FUSI_PEDI      ?? null;
            $prazo          = $data->DT_PRZO                ?? null;
            $status         = $data->IN_STAT                ?? null;
            $tipoOperacao   = $data->TP_OPER                ?? null;

            $prazo      = $prazo ? date("d/m/Y H:i:s", strtotime($prazo)) : $prazo;

            $query = <<<SQL
                EXEC PRC_LOGI_FUSI_PEDI
                     @PARAMETRO         = 1
                    ,@ID_LOGI_FUSI_PEDI = :id
                    ,@DT_PRZO           = :prazo 
                    ,@IN_STAT           = :status
                    ,@TP_OPER           = :tipoOperacao
            SQL;

            $stmt = $connection->prepare($query);

            $stmt->bindValue(":id",             $id);
            $stmt->bindValue(":prazo",          $prazo);
            $stmt->bindValue(":status",         $status);
            $stmt->bindValue(":tipoOperacao",   $tipoOperacao);

            $stmt->execute();

            return $this
                ->setData(null)
                ->setMessage("Operação concluída com êxito.")
                ->setEncodingOptions(JSON_NUMERIC_CHECK|JSON_UNESCAPED_SLASHES)
                ->getResponse(); 

        } catch (\Throwable $th) {

            return $this
                ->setThrowable($th)
                ->getResponse();

        }
    }
}