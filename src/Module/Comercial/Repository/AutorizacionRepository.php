<?php

declare(strict_types=1);

namespace App\Module\Comercial\Repository;

use Doctrine\DBAL\Connection;

/**
 * Queries de autorizaciones y jerarquia de aprobacion.
 * Extraido de Helper.php (obtenerJerarquia, verificarMultiple, buscarAutorizacion, traerAutorizacion).
 */
class AutorizacionRepository
{
    public function __construct(
        private readonly Connection $connection
    ) {}

    /**
     * Busca aprobador en la jerarquia por rango e item.
     * Primero busca match exacto (no multiple), luego por rango cercano, finalmente multiples.
     */
    public function obtenerJerarquia(int $rango, string $idItem): array|false
    {
        // Match exacto por rango + item
        $stmt = $this->connection->prepare("
            SELECT TJA.id_usuario, TJA.correo, TJA.rango,
                   TCU.NM_COMP_RAZA_SOCI as nombres, TCU.NM_DEPA AS departamento, TCU.NM_CARG_FUNC AS cargo
            FROM TB_JERARQUIA_AUTORIZACION TJA
            INNER JOIN TB_CORE_USUA TCU ON TCU.id = TJA.id_usuario
            WHERE rango = :rango AND id_item = :item AND estado = 1 AND multiple = 0
        ");
        $exact = $stmt->executeQuery(['rango' => $rango, 'item' => $idItem])->fetchAssociative();

        if ($exact) {
            return [['id_usuario' => $exact['id_usuario'], 'correo' => $exact['correo'], 'nombres' => $exact['nombres'] ?? '']];
        }

        // Buscar por rango cercano (no multiple)
        $stmt2 = $this->connection->prepare("
            SELECT TJA.id_usuario, TJA.correo, TJA.rango,
                   TCU.NM_COMP_RAZA_SOCI as nombres
            FROM TB_JERARQUIA_AUTORIZACION TJA
            INNER JOIN TB_CORE_USUA TCU ON TCU.id = TJA.id_usuario
            WHERE id_item LIKE :item AND estado = 1 AND multiple = 0
            ORDER BY rango ASC
        ");
        $candidates = $stmt2->executeQuery(['item' => $idItem])->fetchAllAssociative();

        foreach ($candidates as $c) {
            if ($rango <= (int)$c['rango']) {
                return [['id_usuario' => $c['id_usuario'], 'correo' => $c['correo'], 'nombres' => $c['nombres'] ?? '']];
            }
        }

        // Fallback: buscar multiples
        return $this->buscarMultiples($rango, $idItem);
    }

    private function buscarMultiples(int $rango, string $idItem): array|false
    {
        $stmt = $this->connection->prepare("
            SELECT * FROM TB_JERARQUIA_AUTORIZACION
            WHERE id_item = :item AND estado = 1 AND multiple = 1
            ORDER BY rango ASC
        ");
        $rows = $stmt->executeQuery(['item' => $idItem])->fetchAllAssociative();

        if (empty($rows)) {
            return false;
        }

        $result = [];
        foreach ($rows as $row) {
            if ($rango >= (int)$row['rango']) {
                $result[] = [
                    'id_usuario' => $row['id_usuario'],
                    'correo' => $row['correo'],
                ];
            }
        }
        return !empty($result) ? $result : false;
    }

    public function buscarAutorizacion(int $id): array|false
    {
        $stmt = $this->connection->prepare("SELECT * FROM tb_autorizaciones WHERE id = :id");
        $result = $stmt->executeQuery(['id' => $id])->fetchAssociative();
        return $result ?: false;
    }

    public function traerAutorizacionConDetalle(int $idAutorizacion): array|false
    {
        $stmt = $this->connection->prepare("
            SELECT TB_OFERTA.id AS id_oferta,
                   CONCAT(TB_VEND.NM_VEND, ' ', TB_VEND.NM_RAZA_SOCI) AS nombre_vendedor,
                   monto_total, peso_total, descuento_total, cantidad_total,
                   fecha_solicitud, descripcion_vend,
                   tb_autorizaciones.id AS id_autorizacion, tb_autorizaciones.estado
            FROM TB_OFERTA
            INNER JOIN TB_VEND ON TB_VEND.ID = TB_OFERTA.id_vendedor
            INNER JOIN tb_autorizaciones ON tb_autorizaciones.id_oferta = TB_OFERTA.id
            WHERE tb_autorizaciones.id = :id
        ");
        $result = $stmt->executeQuery(['id' => $idAutorizacion])->fetchAssociative();
        return $result ?: false;
    }

    public function actualizarEstado(int $idOferta, int $estado): void
    {
        $this->connection->update('TB_OFERTA', ['estado_oferta' => $estado], ['id' => $idOferta]);
    }

    public function marcarAutorizacion(int $idOferta): void
    {
        $this->connection->update('TB_OFERTA', ['autorizacion' => 1, 'estado_oferta' => 10], ['id' => $idOferta]);
    }
}
