<?php

declare(strict_types=1);

namespace App\Controller\Common;

use Doctrine\DBAL\Connection;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\DBAL\Exception as DBALException;
use App\Controller\Common\Services\FunctionsController;

/**
 * Class UsuarioController
 * @package App\Controller\Common
 */
class UsuarioController extends AbstractController
{
    public static function infoUsuario($headers)
    {
        if (empty($headers)) {
            return null;
        }
        $decoded = base64_decode($headers, true);
        if ($decoded === false) {
            return null;
        }
        $user = json_decode($decoded);
        if (!$user || !is_object($user)) {
            $user = new \stdClass();
        }

        // Garantizar propiedades default para PHP 8.1 (evita Undefined property warnings)
        $defaults = [
            'id' => null,
            'matricula' => null,
            'idVendedor' => null,
            'idUsuario' => null,
            'idEscritorio' => null,
            'nomeCompleto' => null,
            'nomeAbreviado' => null,
            'nomeCargo' => null,
            'none_cargo' => null,
            'ip' => null,
        ];
        foreach ($defaults as $key => $value) {
            if (!isset($user->$key)) {
                $user->$key = $value;
            }
        }

        return $user;
    }

    public static function ipUsuario()
    {
        return $_SERVER['REMOTE_ADDR'];
    }

    /**
     * @param Connection $connection
     * @param Request $request
     * @return
     */
    public function checkToken(Connection $connection, Request $request)
    {
        return FunctionsController::Retorno(true, null, null, Response::HTTP_OK);
    }
}
