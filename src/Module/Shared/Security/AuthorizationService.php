<?php

declare(strict_types=1);

namespace App\Module\Shared\Security;

use App\Module\Shared\Exception\ApiException;

/**
 * Servicio centralizado de autorizacion.
 * Reemplaza los checks inline de none_cargo, verificaSiglaPerfil, checkPerfil.
 *
 * Roles conocidos del sistema (campo none_cargo en JWT/X-User-Info):
 *   1  = Administrador / Gerente General
 *   2  = Gerente
 *   5  = Coordinador
 *   6  = Vendedor / Promotor
 *   12 = Supervisor
 *
 * Perfiles (siglas en TB_CORE_PERF):
 *   COME_VEND          = Vendedor comercial
 *   COME_COOR          = Coordinador comercial
 *   COME_GEST          = Gestor comercial
 *   DASH_VEND_GEST     = Dashboard vendedor/gestor
 *   HOMO_CICL_VEND     = Simulador ciclo ventas
 *   ACES_GERA_CLIE     = Acceso general clientes
 */
class AuthorizationService
{
    // Constantes de cargo (none_cargo)
    public const CARGO_ADMIN = 1;
    public const CARGO_GERENTE = 2;
    public const CARGO_COORDINADOR = 5;
    public const CARGO_VENDEDOR = 6;
    public const CARGO_SUPERVISOR = 12;

    // Constantes de perfil (siglas)
    public const PERFIL_VENDEDOR = 'COME_VEND';
    public const PERFIL_COORDINADOR = 'COME_COOR';
    public const PERFIL_GESTOR = 'COME_GEST';
    public const PERFIL_DASHBOARD_GESTOR = 'DASH_VEND_GEST';
    public const PERFIL_SIMULADOR_VENTAS = 'HOMO_CICL_VEND';
    public const PERFIL_ACCESO_CLIENTES = 'ACES_GERA_CLIE';

    private array $perfilesCache = [];

    public function __construct(
        private readonly RoleRepository $roleRepository
    ) {}

    /**
     * Verifica si el usuario tiene un cargo especifico (none_cargo).
     */
    public function tieneCargo(object $infoUsuario, int ...$cargos): bool
    {
        $cargoUsuario = (int) ($infoUsuario->none_cargo ?? 0);
        return in_array($cargoUsuario, $cargos, true);
    }

    /**
     * Verifica si el usuario es admin o gerente.
     */
    public function esAdmin(object $infoUsuario): bool
    {
        return $this->tieneCargo($infoUsuario, self::CARGO_ADMIN, self::CARGO_GERENTE);
    }

    /**
     * Verifica si el usuario es vendedor.
     */
    public function esVendedor(object $infoUsuario): bool
    {
        return $this->tieneCargo($infoUsuario, self::CARGO_VENDEDOR);
    }

    /**
     * Verifica si el usuario tiene un perfil por sigla (consulta BD).
     */
    public function tienePerfil(int|string $matricula, string $sigla): bool
    {
        return $this->roleRepository->tienePerfil($matricula, $sigla);
    }

    /**
     * Obtiene todos los perfiles del usuario (con cache por request).
     */
    public function obtenerPerfiles(int|string $matricula): array
    {
        $key = (string) $matricula;
        if (!isset($this->perfilesCache[$key])) {
            $this->perfilesCache[$key] = $this->roleRepository->obtenerPerfiles($matricula);
        }
        return $this->perfilesCache[$key];
    }

    /**
     * Obtiene el perfil comercial completo del usuario.
     * Reemplaza: ComercialController::checkPerfil()
     */
    public function getPerfilComercial(int|string $matricula): object
    {
        $perfiles = $this->obtenerPerfiles($matricula);

        $perfil = new \stdClass();
        $perfil->vendedor = in_array(self::PERFIL_VENDEDOR, $perfiles);
        $perfil->coordenador = in_array(self::PERFIL_COORDINADOR, $perfiles);
        $perfil->gestor = in_array(self::PERFIL_GESTOR, $perfiles) || in_array(self::PERFIL_DASHBOARD_GESTOR, $perfiles);
        $perfil->hasVinculoOperadores = false;

        // Si solo es vendedor, verificar vinculo operadores
        if ($perfil->vendedor && !$perfil->coordenador && !$perfil->gestor) {
            $perfil->hasVinculoOperadores = $this->roleRepository->tieneVinculoOperadores($matricula);
        }

        return $perfil;
    }

    /**
     * Exige que el usuario tenga un cargo. Lanza 403 si no.
     */
    public function requireCargo(object $infoUsuario, int ...$cargos): void
    {
        if (!$this->tieneCargo($infoUsuario, ...$cargos)) {
            throw new ApiException('Acceso denegado: no tiene el cargo requerido', 403);
        }
    }

    /**
     * Exige que el usuario tenga un perfil. Lanza 403 si no.
     */
    public function requirePerfil(int|string $matricula, string $sigla): void
    {
        if (!$this->tienePerfil($matricula, $sigla)) {
            throw new ApiException('Acceso denegado: no tiene el perfil requerido', 403);
        }
    }

    /**
     * Exige que el usuario tenga al menos uno de los perfiles dados.
     */
    public function requireAnyPerfil(int|string $matricula, string ...$siglas): void
    {
        $perfiles = $this->obtenerPerfiles($matricula);
        foreach ($siglas as $sigla) {
            if (in_array($sigla, $perfiles)) {
                return;
            }
        }
        throw new ApiException('Acceso denegado: no tiene ninguno de los perfiles requeridos', 403);
    }
}
