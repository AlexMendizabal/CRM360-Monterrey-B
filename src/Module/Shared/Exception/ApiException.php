<?php

declare(strict_types=1);

namespace App\Module\Shared\Exception;

class ApiException extends \RuntimeException
{
    private int $statusCode;
    private mixed $errors;

    public function __construct(string $message, int $statusCode = 400, mixed $errors = null, \Throwable $previous = null)
    {
        parent::__construct($message, 0, $previous);
        $this->statusCode = $statusCode;
        $this->errors = $errors;
    }

    public function getStatusCode(): int
    {
        return $this->statusCode;
    }

    public function getErrors(): mixed
    {
        return $this->errors;
    }
}
