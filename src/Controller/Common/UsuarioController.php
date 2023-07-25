<?php

declare(strict_types=1);

namespace App\Controller\Common;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\DBAL\Driver\Connection;
use Doctrine\DBAL\DBALException;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class UsuarioController
 * @package App\Controller\Common
 */
class UsuarioController extends AbstractController
{
    public function infoUsuario($headers)
    {
        return json_decode(utf8_encode(base64_decode($headers)));
    }

    public function ipUsuario()
    {
        return $_SERVER['REMOTE_ADDR'];
    }

    /**
     * @Route(
     *  "/usuario/check-token",
     *  name="usuario.check-token",
     *  methods={"GET"}
     * )
     * @param Connection $connection
     * @param Request $request
     * @return 
     */
    public function checkToken(Connection $connection, Request $request)
    {
        return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
    }
}
