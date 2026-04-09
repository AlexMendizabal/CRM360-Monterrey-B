<?php

declare(strict_types=1);

namespace App\Module\Shared\Validation;

use App\Module\Shared\Exception\ValidationException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Servicio centralizado de validacion.
 * Valida DTOs con Symfony Validator y lanza ValidationException si falla.
 */
class RequestValidator
{
    public function __construct(
        private readonly ValidatorInterface $validator
    ) {}

    /**
     * Valida un DTO. Lanza ValidationException si hay errores.
     */
    public function validate(object $dto): void
    {
        $violations = $this->validator->validate($dto);

        if (count($violations) > 0) {
            $errors = [];
            foreach ($violations as $violation) {
                $field = $violation->getPropertyPath();
                $errors[$field][] = $violation->getMessage();
            }
            throw new ValidationException($errors);
        }
    }

    /**
     * Crea un DTO desde el Request y lo valida en un solo paso.
     *
     * @template T of object
     * @param class-string<T> $dtoClass Clase del DTO (debe tener ::fromRequest)
     * @return T
     */
    public function validateRequest(Request $request, string $dtoClass): object
    {
        if (!method_exists($dtoClass, 'fromRequest')) {
            throw new \LogicException("La clase {$dtoClass} debe implementar fromRequest(Request)");
        }

        $dto = $dtoClass::fromRequest($request);
        $this->validate($dto);
        return $dto;
    }
}
