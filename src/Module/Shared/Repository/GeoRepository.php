<?php

declare(strict_types=1);

namespace App\Module\Shared\Repository;

use Doctrine\DBAL\Connection;

/**
 * Lookups geograficos: ciudades, regiones, zonas, rubros, unidades, escritorios.
 * Extraido de Helper.php (metodos buscarCiudad*, buscarRegion, buscarZona, etc.)
 */
class GeoRepository
{
    public function __construct(
        private readonly Connection $connection
    ) {}

    public function buscarCiudadPorNombre(string $nombre): array|false
    {
        $stmt = $this->connection->prepare("SELECT * FROM TB_CIUDAD WHERE nombre_ciudad = :nombre");
        $result = $stmt->executeQuery(['nombre' => $nombre])->fetchAssociative();
        return $result ?: false;
    }

    public function buscarCiudadPorId(int $id): array|false
    {
        $stmt = $this->connection->prepare("SELECT * FROM TB_CIUDAD WHERE id = :id");
        $result = $stmt->executeQuery(['id' => $id])->fetchAssociative();
        return $result ?: false;
    }

    public function buscarCiudadPorSigla(string $sigla): array|false
    {
        $stmt = $this->connection->prepare("SELECT * FROM TB_CIUDAD WHERE sigla LIKE :sigla");
        $result = $stmt->executeQuery(['sigla' => '%' . $sigla])->fetchAssociative();
        return $result ?: false;
    }

    /**
     * Busca ciudad por nombre, sigla o id (unifica buscarCiudad2).
     */
    public function buscarCiudad(string|int $criterio): array|int|false
    {
        if (is_int($criterio)) {
            return $this->buscarCiudadPorId($criterio);
        }

        $stmt = $this->connection->prepare(
            "SELECT TOP 1 id FROM TB_CIUDAD WHERE nombre_ciudad LIKE :criterio OR sigla LIKE :criterio"
        );
        $result = $stmt->executeQuery(['criterio' => $criterio])->fetchAssociative();
        return $result ? (int)$result['id'] : 0;
    }

    public function buscarRegion(string $nombre): int
    {
        $stmt = $this->connection->prepare(
            "SELECT TOP 1 ID FROM TB_REGION WHERE NOMBRE LIKE :nombre"
        );
        $result = $stmt->executeQuery(['nombre' => '%' . $nombre . '%'])->fetchAssociative();
        return $result ? (int)$result['ID'] : 0;
    }

    public function buscarZona(string $nombre): int
    {
        $stmt = $this->connection->prepare(
            "SELECT TOP 1 ID FROM TB_ZONA WHERE NOMBRE LIKE :nombre"
        );
        $result = $stmt->executeQuery(['nombre' => '%' . $nombre . '%'])->fetchAssociative();
        return $result ? (int)$result['ID'] : 0;
    }

    public function buscarRubro(string|int $criterio): array|false
    {
        if (is_int($criterio)) {
            $stmt = $this->connection->prepare(
                "SELECT TOP 1 id_cnae, descricao FROM MTCORP_BASE_CNAE WHERE id_cnae = :id"
            );
            $result = $stmt->executeQuery(['id' => $criterio])->fetchAllAssociative();
        } else {
            $stmt = $this->connection->prepare(
                "SELECT TOP 1 id_cnae, descricao FROM MTCORP_BASE_CNAE WHERE descricao LIKE :desc"
            );
            $result = $stmt->executeQuery(['desc' => '%' . $criterio . '%'])->fetchAllAssociative();
        }
        return !empty($result) ? $result : false;
    }

    public function buscarUnidad(string $sigla): array|false
    {
        $stmt = $this->connection->prepare(
            "SELECT TOP 1 ID FROM UNIDADES WHERE SIGLAS_UNI LIKE :sigla"
        );
        $result = $stmt->executeQuery(['sigla' => '%' . $sigla . '%'])->fetchAssociative();
        return $result ?: false;
    }

    public function buscarEscritorio(string|int $criterio): int
    {
        if (is_int($criterio)) {
            $stmt = $this->connection->prepare(
                "SELECT TOP 1 id FROM TB_ESCR WHERE id = :id"
            );
            $result = $stmt->executeQuery(['id' => $criterio])->fetchAssociative();
        } else {
            $stmt = $this->connection->prepare(
                "SELECT TOP 1 id FROM TB_ESCR WHERE nombre LIKE :nombre OR codigo_almacen LIKE :nombre"
            );
            $result = $stmt->executeQuery(['nombre' => '%' . $criterio . '%'])->fetchAssociative();
        }
        return $result ? (int)$result['id'] : 0;
    }

    public function obtenerEscritorios(): array
    {
        return $this->connection->executeQuery(
            "SELECT * FROM TB_ESCR ORDER BY id"
        )->fetchAllAssociative();
    }

    public function buscarDepartamento(int $id): array|false
    {
        $stmt = $this->connection->prepare("SELECT * FROM TB_DEPARTAMENTO WHERE id = :id");
        $result = $stmt->executeQuery(['id' => $id])->fetchAssociative();
        return $result ?: false;
    }

    public function buscarListaPrecio(int $id): array|false
    {
        $stmt = $this->connection->prepare("SELECT * FROM TB_LISTA_PRECIO WHERE id = :id");
        $result = $stmt->executeQuery(['id' => $id])->fetchAssociative();
        return $result ?: false;
    }

    public function buscarCiudadListaPrecio(string $nombreCiudad): array|false
    {
        $stmt = $this->connection->prepare("
            SELECT TOP 1 e.id_lista_precio, d.id as id_departamento
            FROM TB_ESCR e
            INNER JOIN TB_CIUDAD c ON c.id = e.id_ciudad
            INNER JOIN TB_DEPO_FISI_ESTO d ON d.id_escritorio = e.id
            WHERE c.nombre_ciudad LIKE :nombre AND d.id_tipo_almacen = 1
        ");
        $result = $stmt->executeQuery(['nombre' => '%' . $nombreCiudad . '%'])->fetchAssociative();
        return $result ?: false;
    }

    public function buscarTipoCliente(string|int $criterio): array|false
    {
        if (is_int($criterio)) {
            $stmt = $this->connection->prepare(
                "SELECT * FROM TB_TIPO_CLIENTE WHERE id = :id AND situacion = 1"
            );
            $result = $stmt->executeQuery(['id' => $criterio])->fetchAssociative();
        } else {
            $stmt = $this->connection->prepare(
                "SELECT * FROM TB_TIPO_CLIENTE WHERE nombre LIKE :nombre AND situacion = 1"
            );
            $result = $stmt->executeQuery(['nombre' => '%' . $criterio . '%'])->fetchAssociative();
        }
        return $result ?: false;
    }

    public function obtenerTiposCliente(): array
    {
        return $this->connection->executeQuery(
            "SELECT * FROM TB_TIPO_CLIENTE WHERE situacion = 1 ORDER BY nombre"
        )->fetchAllAssociative();
    }

    public function buscarTipoDocumento(int $id): array|false
    {
        $stmt = $this->connection->prepare("SELECT * FROM TB_TIPO_DOCUMENTO WHERE id = :id");
        $result = $stmt->executeQuery(['id' => $id])->fetchAssociative();
        return $result ?: false;
    }
}
