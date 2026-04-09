<?php

declare(strict_types=1);

namespace App\Module\Shared\Security;

use App\Controller\Common\UsuarioController;
use App\Module\Shared\Response\ApiResponse;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;

/**
 * EventSubscriber que intercepta controllers decorados con #[RequireRole].
 * Se ejecuta DESPUES del JwtAuthenticator (prioridad menor).
 *
 * Flujo:
 * 1. JWT validado por JwtAuthenticator (prioridad default)
 * 2. Este subscriber lee el atributo #[RequireRole] del metodo/clase
 * 3. Extrae info de usuario del header X-User-Info
 * 4. Verifica cargo (none_cargo) y/o perfiles (via AuthorizationService)
 * 5. Si no cumple → 403 Forbidden
 */
class RoleCheckerSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly AuthorizationService $authService
    ) {}

    public static function getSubscribedEvents(): array
    {
        return [
            // Prioridad -10 = se ejecuta DESPUES del JWT authenticator
            KernelEvents::CONTROLLER => ['onKernelController', -10],
        ];
    }

    public function onKernelController(ControllerEvent $event): void
    {
        $controller = $event->getController();

        // Soportar [ControllerClass, 'method'] y closures
        if (is_array($controller)) {
            [$controllerObject, $method] = $controller;
        } else {
            return; // Closures (ej: 401 del JWT authenticator) — no aplica
        }

        // Buscar atributo en el metodo primero, luego en la clase
        $reflMethod = new \ReflectionMethod($controllerObject, $method);
        $attribute = $this->findAttribute($reflMethod);

        if (!$attribute) {
            $reflClass = new \ReflectionClass($controllerObject);
            $attribute = $this->findAttributeOnClass($reflClass);
        }

        if (!$attribute) {
            return; // Sin atributo RequireRole → acceso libre (solo JWT)
        }

        // Extraer info de usuario
        $infoUsuario = UsuarioController::infoUsuario(
            $event->getRequest()->headers->get('X-User-Info')
        );

        if (!$infoUsuario) {
            $event->setController(fn() => ApiResponse::forbidden('Usuario no identificado'));
            return;
        }

        // Verificar cargos (OR — cualquiera basta)
        $cargoOk = empty($attribute->cargos);
        if (!$cargoOk) {
            $cargoUsuario = (int) ($infoUsuario->none_cargo ?? 0);
            $cargoOk = in_array($cargoUsuario, $attribute->cargos, true);
        }

        // Verificar perfiles (OR — cualquiera basta)
        $perfilOk = empty($attribute->perfiles);
        if (!$perfilOk) {
            $matricula = $infoUsuario->matricula ?? null;
            if ($matricula) {
                $perfilesUsuario = $this->authService->obtenerPerfiles($matricula);
                foreach ($attribute->perfiles as $sigla) {
                    if (in_array($sigla, $perfilesUsuario)) {
                        $perfilOk = true;
                        break;
                    }
                }
            }
        }

        // Si hay cargos Y perfiles definidos: basta cumplir UNO de los dos
        // Si solo hay cargos: debe cumplir cargo
        // Si solo hay perfiles: debe cumplir perfil
        $hasCargoReq = !empty($attribute->cargos);
        $hasPerfilReq = !empty($attribute->perfiles);

        $authorized = false;
        if ($hasCargoReq && $hasPerfilReq) {
            $authorized = $cargoOk || $perfilOk; // OR: cualquiera basta
        } elseif ($hasCargoReq) {
            $authorized = $cargoOk;
        } elseif ($hasPerfilReq) {
            $authorized = $perfilOk;
        }

        if (!$authorized) {
            $event->setController(fn() => ApiResponse::forbidden('No tiene permisos para esta operacion'));
        }
    }

    private function findAttribute(\ReflectionMethod $method): ?RequireRole
    {
        $attrs = $method->getAttributes(RequireRole::class);
        if (!empty($attrs)) {
            return $attrs[0]->newInstance();
        }
        return null;
    }

    private function findAttributeOnClass(\ReflectionClass $class): ?RequireRole
    {
        $attrs = $class->getAttributes(RequireRole::class);
        if (!empty($attrs)) {
            return $attrs[0]->newInstance();
        }
        return null;
    }
}
