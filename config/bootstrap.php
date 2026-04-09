<?php

use Symfony\Component\Dotenv\Dotenv;

require dirname(__DIR__).'/vendor/autoload.php';

// PHPUnit fuerza APP_ENV=test via <server>, respetar ese valor
if (isset($_SERVER['APP_ENV'])) {
    $_ENV['APP_ENV'] = $_SERVER['APP_ENV'];
}

if (is_array($env = @include dirname(__DIR__).'/.env.local.php') && !is_file(dirname(__DIR__).'/.env.local.php')) {
    (new Dotenv())->populate($env);
} else {
    (new Dotenv())->bootEnv(dirname(__DIR__).'/.env');
}
