<?php

declare(strict_types=1);

namespace App\Module\Shared\Exception;

class NotFoundException extends ApiException
{
    public function __construct(string $message = 'Recurso no encontrado')
    {
        parent::__construct($message, 404);
    }
}
