<?php

declare(strict_types=1);

namespace App\Module\Shared\Security;

/**
 * Atributo para proteger metodos de controller con roles.
 *
 * Uso en controllers:
 *
 *   #[RequireRole(cargos: [AuthorizationService::CARGO_ADMIN])]
 *   public function adminOnly(): JsonResponse { ... }
 *
 *   #[RequireRole(perfiles: ['COME_GEST', 'COME_COOR'])]
 *   public function gestoresOnly(): JsonResponse { ... }
 *
 *   #[RequireRole(cargos: [1, 2], perfiles: ['COME_GEST'])]
 *   public function adminOrGestor(): JsonResponse { ... }
 */
#[\Attribute(\Attribute::TARGET_METHOD | \Attribute::TARGET_CLASS)]
class RequireRole
{
    /**
     * @param int[]    $cargos   IDs de cargo permitidos (none_cargo). Cualquiera basta.
     * @param string[] $perfiles Siglas de perfil permitidas. Cualquiera basta.
     */
    public function __construct(
        public readonly array $cargos = [],
        public readonly array $perfiles = [],
    ) {}
}
