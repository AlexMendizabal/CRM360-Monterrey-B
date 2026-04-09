<?php

declare(strict_types=1);

namespace App\Module\Shared\Security;

use Doctrine\DBAL\Connection;

/**
 * Consulta roles y perfiles del usuario desde la BD.
 * Reemplaza ComercialController::verificaSiglaPerfil() y checkPerfil().
 */
class RoleRepository
{
    public function __construct(
        private readonly Connection $connection
    ) {}

    /**
     * Verifica si un usuario tiene un perfil especifico por sigla.
     * Reemplaza: ComercialController::verificaSiglaPerfil()
     */
    public function tienePerfil(int|string $matricula, string $sigla): bool
    {
        $stmt = $this->connection->prepare("
            EXEC [PRC_CORE_PERF]
                @PARAMETRO = 2,
                @NR_MATR = :matricula,
                @SG_PERF = :sigla
        ");
        $result = $stmt->executeQuery([
            'matricula' => $matricula,
            'sigla' => $sigla,
        ])->fetchAllAssociative();

        return count($result) > 0;
    }

    /**
     * Obtiene todos los perfiles/siglas de un usuario.
     * Reemplaza: ComercialController::checkPerfil()
     */
    public function obtenerPerfiles(int|string $matricula): array
    {
        $stmt = $this->connection->prepare("
            EXEC [PRC_CORE_PERF]
                @PARAMETRO = 4,
                @NR_MATR = :matricula
        ");
        $rows = $stmt->executeQuery(['matricula' => $matricula])->fetchAllAssociative();

        $perfiles = [];
        foreach ($rows as $row) {
            $perfiles[] = $row['sigla_perfil'] ?? $row['SG_PERF'] ?? '';
        }
        return array_filter($perfiles);
    }

    /**
     * Verifica si el usuario tiene vinculo con operadores.
     */
    public function tieneVinculoOperadores(int|string $matricula): bool
    {
        $stmt = $this->connection->prepare("
            EXEC [PRC_VINC_OPER_CONS]
                @MATR = :matricula
        ");
        $result = $stmt->executeQuery(['matricula' => $matricula])->fetchAllAssociative();
        return count($result) > 0;
    }

    /**
     * Obtiene los modulos/accesos del usuario.
     */
    public function obtenerAccesos(int|string $matricula): array
    {
        $stmt = $this->connection->prepare("
            EXEC [PRC_CORE_PERF]
                @PARAMETRO = 1,
                @NR_MATR = :matricula
        ");
        return $stmt->executeQuery(['matricula' => $matricula])->fetchAllAssociative();
    }
}
