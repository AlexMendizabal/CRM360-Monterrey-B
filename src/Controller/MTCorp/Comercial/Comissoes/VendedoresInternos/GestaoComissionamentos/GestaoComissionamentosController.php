<?php

declare(strict_types=1);

namespace App\Controller\MTCorp\Comercial\Comissoes\VendedoresInternos\GestaoComissionamentos;

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
 * Class Comissoes\VendedoresInternosController
 * @package App\Controller\MTCorp\Comercial\Comissoes\VendedoresInternos\GestaoComissionamentos
 */
class GestaoComissionamentosController extends AbstractController
{

    /**
     * @Route(
     *  "/comercial/comissoes/vendedores-internos/gestao-comissionamentos/permissoes-acesso",
     *  name="comercial.comissoes-vendedores-internos-gestao-comissionamentos-permissoes-acesso",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return JsonResponse
     */
    public function getPermissoesAcesso(Connection $connection, Request $request)
    {
        try {
            $infoUsuario = UsuarioController::infoUsuario($request->headers->get('X-User-Info'));

            $analistaMarketing = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'ANAL_MARK');
            $gerenteEscritorio = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'GERE_ESCR');
            $gerenteMarketing = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'GERE_MARK');
            $gerenteFiscal = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'GERE_FISC');
            $diretorComercial = ComercialController::verificaSiglaPerfil($connection, $infoUsuario->matricula, 'DIRE_COME');

            $res = array(
                array(
                    'analistaMarketing' => $analistaMarketing,
                    'gerenteEscritorio' => $gerenteEscritorio,
                    'gerenteMarketing' => $gerenteMarketing,
                    'gerenteFiscal' => $gerenteFiscal,
                    'diretorComercial' => $diretorComercial,
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


}