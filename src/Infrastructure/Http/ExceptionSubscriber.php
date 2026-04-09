<?php

declare(strict_types=1);

namespace App\Infrastructure\Http;

use App\Module\Shared\Exception\ApiException;
use App\Module\Shared\Response\ApiResponse;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\HttpKernel\KernelEvents;

class ExceptionSubscriber implements EventSubscriberInterface
{
    private string $appEnv;

    public function __construct(string $appEnv = 'prod')
    {
        $this->appEnv = $appEnv;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::EXCEPTION => ['onKernelException', 0],
        ];
    }

    public function onKernelException(ExceptionEvent $event): void
    {
        $exception = $event->getThrowable();

        // Excepciones de dominio (ApiException, ValidationException, NotFoundException)
        if ($exception instanceof ApiException) {
            $response = ApiResponse::error(
                $exception->getMessage(),
                $exception->getStatusCode(),
                $exception->getErrors()
            );
            $event->setResponse($response);
            return;
        }

        // Excepciones HTTP de Symfony (404, 405, etc.)
        if ($exception instanceof HttpExceptionInterface) {
            $response = ApiResponse::error(
                $exception->getMessage() ?: 'Error HTTP',
                $exception->getStatusCode()
            );
            $event->setResponse($response);
            return;
        }

        // Excepciones no controladas — en dev mostramos detalle, en prod no
        $message = $this->appEnv === 'prod'
            ? 'Error interno del servidor'
            : $exception->getMessage();

        $response = ApiResponse::serverError($message);
        $event->setResponse($response);
    }
}
