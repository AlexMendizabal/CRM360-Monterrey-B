<?php

declare(strict_types=1);

namespace App\Module\Shared\Exception;

class ValidationException extends ApiException
{
    public function __construct(array $errors, string $message = 'Error de validacion')
    {
        parent::__construct($message, 422, $errors);
    }
}
