<?php

namespace App\Security\Core;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\AcceptHeader;

class BeforeActionSubscriber implements EventSubscriberInterface
{
    public function onKernelController(ControllerEvent $event)
    {
        $accept = AcceptHeader::fromString($event->getRequest()->headers->get('Accept'));
        $contentType = AcceptHeader::fromString($event->getRequest()->headers->get('Content-Type'));

        if (!$accept->has('application/json')) {
            $message = 'Not Acceptable.';
            $event->setController(
                function() use ($message) {
                    return new JsonResponse([
                        'responseCode' => 406,
                        'message' => $message
                    ], 406);
                }
            );
        }

        if (!$contentType->has('application/json')) {
            $message = 'Unsupported Media Type.';
            $event->setController(
                function() use ($message) {
                    return new JsonResponse([
                        'responseCode' => 415,
                        'message' => $message
                    ], 415);
                }
            );
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::CONTROLLER => 'onKernelController'
        ];
    }
}
