<?php

declare(strict_types=1);

namespace App\Module\Shared\Repository;

use Doctrine\DBAL\Connection;

/**
 * CRUD de notificaciones internas del sistema.
 * Extraido de Helper.php (crearOferta, verificarNotificacionOferta, actualizarNotificaciones).
 */
class NotificacionRepository
{
    public function __construct(
        private readonly Connection $connection
    ) {}

    public function crear(array $data): int
    {
        $this->connection->insert('TB_NOTIFICACIONES', [
            'id_usuario' => $data['id_usuario'],
            'titulo' => $data['titulo'],
            'mensaje' => $data['mensaje'],
            'url' => $data['url'] ?? null,
            'fecha' => $data['fecha'] ?? date('Y-m-d H:i:s'),
            'leido' => 0,
        ]);

        return (int)$this->connection->lastInsertId();
    }

    public function marcarComoLeido(int $id): void
    {
        $this->connection->update('TB_NOTIFICACIONES', ['leido' => 1], ['id' => $id]);
    }

    public function marcarTodasComoLeidas(int $idUsuario): void
    {
        $this->connection->executeStatement(
            "UPDATE TB_NOTIFICACIONES SET leido = 1 WHERE id_usuario = :id",
            ['id' => $idUsuario]
        );
    }

    public function verificarDuplicada(int $idUsuario, string $url, string $fecha): bool
    {
        $stmt = $this->connection->prepare("
            SELECT COUNT(*) FROM TB_NOTIFICACIONES
            WHERE id_usuario = :id AND url = :url AND CAST(fecha AS DATE) = CAST(:fecha AS DATE)
        ");
        $count = $stmt->executeQuery([
            'id' => $idUsuario,
            'url' => $url,
            'fecha' => $fecha,
        ])->fetchOne();

        return (int)$count > 0;
    }

    public function obtenerPorUsuario(int $idUsuario, int $limite = 50): array
    {
        $stmt = $this->connection->prepare("
            SELECT TOP(:limite) * FROM TB_NOTIFICACIONES
            WHERE id_usuario = :id
            ORDER BY fecha DESC
        ");
        return $stmt->executeQuery([
            'limite' => $limite,
            'id' => $idUsuario,
        ])->fetchAllAssociative();
    }
}
