<?php

namespace App\Controller\MTCorp\Logistica\Coletas;

use App\Controller\Common\UsuarioController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\DBAL\Driver\Connection;

class ColetasController
{

    /**
     * @Route("/logistica/coletas", methods={"POST"})
     *
     * @return JsonResponse
     */
    function postPedido(Connection $connection, Request $request)
    {
        try {

            $params                 = json_decode($request->getContent());

            $coletaId               = isset($params->ID_LOGI_COLE)      ? $params->ID_LOGI_COLE         : NULL;
            $pedido                 = isset($params->CD_PEDI)           ? $params->CD_PEDI              : NULL;
            $dtPedido               = isset($params->DT_PEDI)           ? $params->DT_PEDI              : NULL;
            $peso                   = isset($params->QT_PESO)           ? $params->QT_PESO              : 0;
            $tpPedido               = isset($params->TIPO_ENTR)         ? $params->TIPO_ENTR            : 0;
            $razaoSocial            = isset($params->NM_CLIE)           ? $params->NM_CLIE              : NULL;
            $nomeFantasia           = isset($params->NM_FANT_CLIE)      ? $params->NM_FANT_CLIE         : NULL;
            $cdCliente              = isset($params->CD_CLIE_ORIG)      ? $params->CD_CLIE_ORIG         : NULL;
            $notaFiscal             = isset($params->NOTA_FISC)         ? $params->NOTA_FISC            : NULL;
            $dtEmissaoNotaFiscal    = isset($params->DT_EMIS_NOTA_FISC) ? $params->DT_EMIS_NOTA_FISC    : NULL;
            $vlNotaFiscal           = isset($params->VL_NOTA_FISC)      ? $params->VL_NOTA_FISC         : NULL;
            $dsLocalEntrega         = isset($params->DS_LOCA_ENTR)      ? $params->DS_LOCA_ENTR         : NULL;
            $bairro                 = isset($params->DS_BAIR)           ? $params->DS_BAIR              : NULL;
            $cidade                 = isset($params->DS_CIDA)           ? $params->DS_CIDA              : NULL;
            $ibge                   = isset($params->IBGE)              ? $params->IBGE                 : NULL;
            $uf                     = isset($params->DS_ESTA)           ? $params->DS_ESTA              : NULL;
            $cep                    = isset($params->CD_CEP)            ? $params->CD_CEP               : NULL;
            $dsPraca                = isset($params->DS_PRAC)           ? $params->DS_PRAC              : NULL;
            $cdPraca                = isset($params->CD_PRAC)           ? $params->CD_PRAC              : NULL;
            $cdRegiao               = isset($params->CD_REGI_ENTR)      ? $params->CD_REGI_ENTR         : NULL;
            $dsRegiao               = isset($params->DS_REGI_ENTR)      ? $params->DS_REGI_ENTR         : NULL;
            $empresa                = isset($params->CD_EMPR)           ? $params->CD_EMPR              : NULL;
            $deposito               = isset($params->CD_DEPO)           ? $params->CD_DEPO              : $params->CD_EMPR;
            $cnpjEmbarcador         = isset($params->CD_EMPR_CNPJ_CPF)  ? $params->CD_EMPR_CNPJ_CPF     : NULL;
            $cnpjCliente            = isset($params->CD_CLIE_CNPJ_CPF)  ? $params->CD_CLIE_CNPJ_CPF     : NULL;
            $prazoEntrega           = isset($params->PRAZO)             ? $params->PRAZO                : NULL;
            $dsSeguimentoCliente    = isset($params->SEGM_CLIE)         ? $params->SEGM_CLIE            : NULL;
            $cdRestricaoTransporte  = isset($params->CD_REST)           ? $params->CD_REST              : NULL;
            $pedidoExterno          = isset($params->IN_PEDI_EXTE)      ? $params->IN_PEDI_EXTE         : false;
            $inStat                 = isset($params->IN_STAT)           ? $params->IN_STAT              : NULL;
            $tpPess                 = isset($params->TP_PESS)           ? $params->TP_PESS              : 'J';
            $dsObse                 = isset($params->DS_OBSE)           ? $params->DS_OBSE              : '';

            $dsVend             = isset($params->e) ? $params->e : '';

            $cnpjEmbarcador = preg_replace("/[^0-9]/u", "", $cnpjEmbarcador);
            $cnpjCliente    = preg_replace("/[^0-9]/u", "", $cnpjCliente);
            $cep            = preg_replace("/[^0-9]/u", "", $cep);

            $infoUsuario        = (new UsuarioController)->infoUsuario($request->headers->get('X-User-Info'));
            $usuarioId          = $infoUsuario->id;
            $usuarioIP          = $_SERVER['REMOTE_ADDR'];
            $usuarioNome        = $infoUsuario->matricula;
            $usuarioMatricula   = $infoUsuario->nomeCompleto;

            /* if (strlen($cnpjEmbarcador) < 11 || strlen($cnpjEmbarcador) > 14) {
                return new JsonResponse([
                    "data"      => null,
                    "message"   => "CNPJ do embarcador inválido",
                    "success"   => "false"
                ], Response::HTTP_BAD_REQUEST);
            } */

            /* if (strlen($cnpjCliente) < 10 || strlen($cnpjCliente) > 14) {
                return new JsonResponse([
                    "data"      => null,
                    "message"   => "CNPJ do cliente inválido",
                    "success"   => "false"
                ], Response::HTTP_BAD_REQUEST);
            } */

            /* if (strlen($cep) < 7 || strlen($cep) > 8) {
                return new JsonResponse([
                    "data"      => null,
                    "message"   => "CEP inválido",
                    "success"   => "false"
                ], Response::HTTP_BAD_REQUEST);
            } */

            $pattern = "/^([0-9]{2})(\/|-)([0-9]{2})(\/|-)([0-9]{4})$/";

            if (!preg_match($pattern, $dtPedido) && $dtPedido) {
                return new JsonResponse([
                    "data"      => null,
                    "message"   => "A data do pedido é inválida",
                    "success"   => "false"
                ], Response::HTTP_BAD_REQUEST);
            }

            if (!preg_match($pattern, $prazoEntrega) && $prazoEntrega) {
                return new JsonResponse([
                    "data"      => null,
                    "message"   => "A data do prazo de entrega é inválida",
                    "success"   => "false"
                ], Response::HTTP_BAD_REQUEST);
            }

            if (!preg_match($pattern, $dtEmissaoNotaFiscal) && $dtEmissaoNotaFiscal) {
                return new JsonResponse([
                    "data"      => null,
                    "message"   => "A data de emissão da nota fiscal inválida",
                    "success"   => "false"
                ], Response::HTTP_BAD_REQUEST);
            }

            /* if (!preg_match(self::PATTERN_INITIALS, $pedido) && !$pedidoExterno) {
                $pedido = self::INITIALS . $pedido;
            } */

            $query      = <<<SQL
                EXECUTE PRC_LOGI_COLE
                    @PARAMETRO                  = 1,
                    @ID_LOGI_COLE	            = '{$coletaId}',
                    @CD_PEDI				    = '{$pedido}',
                    @DT_PEDI				    = '{$dtPedido}',
                    @QT_PESO                    = '{$peso}',
                    @TP_PEDI                    = '{$tpPedido}',
                    @NM_CLIE				    = '{$razaoSocial}',
                    @NM_FANT_CLIE			    = '{$nomeFantasia}',
                    @CD_CLIE				    = '{$cdCliente}',
                    @NOTA_FISC			        = '{$notaFiscal}',
                    @DT_EMIS_NOTA_FISC	        = '{$dtEmissaoNotaFiscal}',
                    @VL_NOTA_FISC			    = '{$vlNotaFiscal}',
                    @DS_LOCA_ENTR			    = '{$dsLocalEntrega}',
                    @DS_BAIR				    = '{$bairro}',
                    @DS_CIDA				    = '{$cidade}',
                    @IBGE					    = '{$ibge}',
                    @DS_ESTA				    = '{$uf}',
                    @CD_CEP				        = '{$cep}',
                    @DS_PRAC				    = '{$dsPraca}',
                    @CD_PRAC				    = '{$cdPraca}',
                    @CD_REGI_ENTR			    = '{$cdRegiao}',
                    @DS_REGI_ENTR			    = '{$dsRegiao}',
                    @CD_EMPR				    = '{$empresa}',
                    @CD_DEPO				    = '{$deposito}',
                    @CD_EMPR_CNPJ_CPF		    = '{$cnpjEmbarcador}',
                    @CD_CLIE_CNPJ_CPF		    = '{$cnpjCliente}',
                    @PRAZO				        = '{$prazoEntrega}',
                    @DS_OBSE				    = '{$dsObse}',
                    @DS_VEND				    = '{$dsVend}',
                    @CD_REST				    = '{$cdRestricaoTransporte}',
                    @SEGM_CLIE			        = '{$dsSeguimentoCliente}',        
                    @IN_PEDI_EXTE		        = '{$pedidoExterno}',        
                    @ID_USUA_RESP_LOG           = '{$usuarioId}',
                    @IP_USUA_RESP_LOG           = '{$usuarioIP}',
                    @IN_STAT                    = '{$inStat}',
                    @TP_PESS                    = '{$tpPess}',
                    @NR_MATR_USUA_RESP_LOG      = '{$usuarioNome}',
                    @NM_USUA_RESP_LOG		    = '{$usuarioMatricula}'
            SQL;
            
            $response    = $connection->query($query)->fetch();

            if (is_array($response)) {
                $message    = $response['message'];
                $code       = $response['success'] == 'true' ? Response::HTTP_OK : Response::HTTP_BAD_REQUEST;
            } else {
                throw new \Exception($response);
            }

            $r = new JsonResponse([
                "data"      => $message,
                "message"   => null,
                "success"   => $response['success']
            ], $code);

            return $r->setEncodingOptions(JSON_NUMERIC_CHECK | JSON_UNESCAPED_SLASHES);
        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * @Route("/logistica/coletas", methods={"GET"})
     *
     * @return JsonResponse
     */
    function getPedidos(Connection $connection, Request $request)
    {
        try {
            $coletaId         = $request->query->get("ID_LOGI_COLE");
            $pedido                 = $request->query->get("CD_PEDI");
            $dtPedido               = $request->query->get("DT_PEDI");
            $razaoSocial            = $request->query->get("NM_CLIE");
            $nomeFantasia           = $request->query->get("NM_FANT_CLIE");
            $cdCliente              = $request->query->get("CD_CLIE");
            $notaFiscal             = $request->query->get("NOTA_FISC");
            $dtEmissaoNotaFiscal    = $request->query->get("DT_EMIS_NOTA_FISC");
            $vlNotaFiscal           = $request->query->get("VL_NOTA_FISC");
            $dsLocalEntrega         = $request->query->get("DS_LOCA_ENTR");
            $bairro                 = $request->query->get("DS_BAIR");
            $cidade                 = $request->query->get("DS_CIDA");
            $ibge                   = $request->query->get("IBGE");
            $uf                     = $request->query->get("DS_ESTA");
            $cep                    = $request->query->get("CD_CEP");
            $dsPraca                = $request->query->get("DS_PRAC");
            $cdPraca                = $request->query->get("CD_PRAC");
            $cdRegiao               = $request->query->get("CD_REGI_ENTR");
            $dsRegiao               = $request->query->get("DS_REGI_ENTR");
            $empresa                = $request->query->get("CD_EMPR");
            $deposito               = $request->query->get("CD_DEPO");
            $cnpjEmbarcador         = $request->query->get("CD_EMPR_CNPJ_CPF");
            $cnpjCliente            = $request->query->get("CD_CLIE_CNPJ_CPF");
            $prazoEntrega           = $request->query->get("PRAZO");
            $inStatEntr             = $request->query->get("IN_STAT_ENTR");

            $dtInicial              = $request->query->get("DT_INIC");
            $dtFinal                = $request->query->get("DT_FINA");
            $itensPorPagina         = $request->query->get("QT_ITENS_PAGINA");
            $pagina                 = $request->query->get("PAGINA");

            $query      = <<<SQL
                EXECUTE PRC_LOGI_COLE
                    @PARAMETRO              = 2,
                    @ID_LOGI_COLE	        = '{$coletaId}',
                    @CD_PEDI				= '{$pedido}',
                    @DT_PEDI				= '{$dtPedido}',
                    @NM_CLIE				= '{$razaoSocial}',
                    @NM_FANT_CLIE			= '{$nomeFantasia}',
                    @CD_CLIE				= '{$cdCliente}',
                    @NOTA_FISC			    = '{$notaFiscal}',
                    @DT_EMIS_NOTA_FISC	    = '{$dtEmissaoNotaFiscal}',
                    @VL_NOTA_FISC			= '{$vlNotaFiscal}',
                    @DS_LOCA_ENTR			= '{$dsLocalEntrega}',
                    @DS_BAIR				= '{$bairro}',
                    @DS_CIDA				= '{$cidade}',
                    @IBGE					= '{$ibge}',
                    @DS_ESTA				= '{$uf}',
                    @CD_CEP				    = '{$cep}',
                    @DS_PRAC				= '{$dsPraca}',
                    @CD_PRAC				= '{$cdPraca}',
                    @CD_REGI_ENTR			= '{$cdRegiao}',
                    @DS_REGI_ENTR			= '{$dsRegiao}',
                    @CD_EMPR				= '{$empresa}',
                    @CD_DEPO				= '{$deposito}',
                    @CD_EMPR_CNPJ_CPF		= '{$cnpjEmbarcador}',
                    @CD_CLIE_CNPJ_CPF		= '{$cnpjCliente}',
                    @PRAZO				    = '{$prazoEntrega}',
                    @DT_INIC			    = '{$dtInicial}',
                    @DT_FINA			    = '{$dtFinal}',
                    @IN_STAT_ENTR           = '{$inStatEntr}',
                    @QT_ITENS_PAGINA        = '{$itensPorPagina}',
                    @PAGINA                 = '{$pagina}'
            SQL;
            
            $response    = $connection->query($query)->fetchAll();

            if (!is_array($response))
                throw new \Exception($response);
            
            $code = empty($response) ? Response::HTTP_NO_CONTENT : Response::HTTP_OK;

            $query      = <<<SQL
                EXECUTE PRC_LOGI_COLE
                    @PARAMETRO              = 2,
                    @ID_LOGI_COLE	        = '{$coletaId}',
                    @CD_PEDI				= '{$pedido}',
                    @DT_PEDI				= '{$dtPedido}',
                    @NM_CLIE				= '{$razaoSocial}',
                    @NM_FANT_CLIE			= '{$nomeFantasia}',
                    @CD_CLIE				= '{$cdCliente}',
                    @NOTA_FISC			    = '{$notaFiscal}',
                    @DT_EMIS_NOTA_FISC	    = '{$dtEmissaoNotaFiscal}',
                    @VL_NOTA_FISC			= '{$vlNotaFiscal}',
                    @DS_LOCA_ENTR			= '{$dsLocalEntrega}',
                    @DS_BAIR				= '{$bairro}',
                    @DS_CIDA				= '{$cidade}',
                    @IBGE					= '{$ibge}',
                    @DS_ESTA				= '{$uf}',
                    @CD_CEP				    = '{$cep}',
                    @DS_PRAC				= '{$dsPraca}',
                    @CD_PRAC				= '{$cdPraca}',
                    @CD_REGI_ENTR			= '{$cdRegiao}',
                    @DS_REGI_ENTR			= '{$dsRegiao}',
                    @CD_EMPR				= '{$empresa}',
                    @CD_DEPO				= '{$deposito}',
                    @CD_EMPR_CNPJ_CPF		= '{$cnpjEmbarcador}',
                    @CD_CLIE_CNPJ_CPF		= '{$cnpjCliente}',
                    @PRAZO				    = '{$prazoEntrega}',
                    @DT_INIC			    = '{$dtInicial}',
                    @DT_FINA			    = '{$dtFinal}',
                    @IN_COUNT               = 1
            SQL;

            $total = ($connection->query($query)->fetch())["qtItens"];

            return new JsonResponse([
                "data"      => $response,
                "total"     => $total,
                "message"   => null,
                "success"   => true
            ], $code);

        } catch (\Throwable $th) {
            return new JsonResponse([
                "data"      => null,
                "error"     => $th->getMessage(),
                "message"   => "Ocorreu um erro ao processar requisição",
                "success"   => false
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
