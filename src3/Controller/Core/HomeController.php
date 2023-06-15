<?php

declare(strict_types=1);

namespace App\Controller\Core;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class HomeController
 * @package App\Controller\Core
 */
class HomeController extends AbstractController
{
    /**
     * @return Response
     */
    public function home(): Response
    {
        return new Response('Bem vindo!');
    }
}
