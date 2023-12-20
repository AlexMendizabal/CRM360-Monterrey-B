<?php

namespace App\Security\Core;

use Firebase\JWT\JWT;

class JwtAplication
{
    public function encode(array $options)
    {
        $issuedAt = time();

        $tokenParam = [
            'iat'   => $issuedAt,
            'iss'   => 'mtcorp.com.br',
            'exp'   => $issuedAt + 1800,
            'nbf'   => $issuedAt - 1,
            'data'  => $options['userdata']
        ];
        return JWT::encode($tokenParam, $_ENV['JWT_SECRET'], 'HS256');
    }

    public static function decode($jwt)
    {
        return JWT::decode($jwt, $_ENV['JWT_SECRET'], ['HS256']);
    }
}
