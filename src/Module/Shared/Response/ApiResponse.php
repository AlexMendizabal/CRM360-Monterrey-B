<?php

declare(strict_types=1);

namespace App\Module\Shared\Response;

use Symfony\Component\HttpFoundation\JsonResponse;

class ApiResponse
{
    /**
     * Respuesta exitosa.
     *
     * @param mixed $data   Datos a retornar
     * @param int   $total  Total de registros (para paginacion)
     * @param int   $status HTTP status code
     */
    public static function success(mixed $data = null, int $total = 0, int $status = 200, string $message = null): JsonResponse
    {
        if ($total === 0 && is_array($data)) {
            $total = count($data);
        }

        return new JsonResponse([
            'success' => true,
            'data' => $data,
            'total' => $total,
            'message' => $message,
        ], $status);
    }

    /**
     * Respuesta de error.
     */
    public static function error(string $message, int $status = 400, mixed $data = null): JsonResponse
    {
        return new JsonResponse([
            'success' => false,
            'data' => $data,
            'total' => 0,
            'message' => $message,
        ], $status);
    }

    /**
     * Respuesta 404.
     */
    public static function notFound(string $message = 'Recurso no encontrado'): JsonResponse
    {
        return self::error($message, 404);
    }

    /**
     * Respuesta 401.
     */
    public static function unauthorized(string $message = 'No autorizado'): JsonResponse
    {
        return self::error($message, 401);
    }

    /**
     * Respuesta 403.
     */
    public static function forbidden(string $message = 'Acceso denegado'): JsonResponse
    {
        return self::error($message, 403);
    }

    /**
     * Respuesta 422 para errores de validacion.
     *
     * @param array $errors Lista de errores de validacion
     */
    public static function validationError(array $errors, string $message = 'Error de validacion'): JsonResponse
    {
        return self::error($message, 422, $errors);
    }

    /**
     * Respuesta 500.
     */
    public static function serverError(string $message = 'Error interno del servidor'): JsonResponse
    {
        return self::error($message, 500);
    }

    /**
     * Respuesta 201 para creacion exitosa.
     */
    public static function created(mixed $data = null, string $message = 'Recurso creado exitosamente'): JsonResponse
    {
        return self::success($data, is_array($data) ? count($data) : 1, 201, $message);
    }
}
