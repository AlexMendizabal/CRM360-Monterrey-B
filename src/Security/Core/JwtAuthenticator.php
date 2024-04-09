<?php

namespace App\Security\Core;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Security\Core\JwtAplication;

class JwtAuthenticator implements EventSubscriberInterface
{
    /**
     * @param ControllerEvent $event
     * @return void
     */
    public function onKernelController(ControllerEvent $event)
    {
        $currentRoute = $event->getRequest()->get('_route');

        // Verificar si la ruta actual es diferente de 'api.core.sap.login' y 'api.usuario.login'
        if ($currentRoute !== 'api.core.sap.login' && $currentRoute !== 'api.usuario.login'){
            $authorization = $event->getRequest()->headers->get('Authorization');
            list($jwt) = sscanf($authorization, 'Bearer %s');
            if ($jwt) {
                try {
                    JwtAplication::decode($jwt);
                } catch (\Exception $e) {
                    $message = 'Usuário não autorizado. Token inválido!';
                    $event->setController(
                        function () use ($message) {
                            return new JsonResponse([
                                'responseCode' => 401,
                                'message' => $message
                            ], 401);
                        }
                    );
                }
            } else {
                $message = 'Usuário não autorizado. Token inexistente!';
                $event->setController(
                    function () use ($message) {
                        return new JsonResponse([
                            'responseCode' => 401,
                            'message' => $message
                        ], 401);
                    }
                );
            }
        }
    }

    /**
     * @return void
     */
    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::CONTROLLER => 'onKernelController'
        ];
    }
}
