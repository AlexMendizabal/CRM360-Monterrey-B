<?php

namespace App\Services;

use Doctrine\DBAL\Connection;

/**
 * Servicio centralizado para ejecutar stored procedures de SQL Server
 * de forma segura con parametros bindeados.
 *
 * Reemplaza las llamadas directas $connection->executeQuery("EXEC ... '{$var}'")
 * que son vulnerables a SQL injection.
 *
 * Uso:
 *   $result = $storedProcedureService->execute('PRC_AGEN_VEND_CONS', [
 *       'VENDEDOR' => $idVendedor,
 *       'DT_INIC' => $fechaInicio,
 *       'DT_FINA' => $fechaFin,
 *   ]);
 */
class StoredProcedureService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    /**
     * Ejecuta un stored procedure con parametros bindeados.
     *
     * @param string $procedure Nombre del SP (sin corchetes, ej: 'PRC_AGEN_VEND_CONS')
     * @param array  $params    Array asociativo nombre => valor
     * @return array            Resultados del SP
     */
    public function execute(string $procedure, array $params = []): array
    {
        if (empty($params)) {
            $sql = "EXEC [{$this->sanitizeProcedureName($procedure)}]";
            return $this->connection->fetchAllAssociative($sql);
        }

        $placeholders = [];
        foreach ($params as $name => $value) {
            $safeName = preg_replace('/[^a-zA-Z0-9_]/', '', $name);
            $placeholders[] = "@{$safeName} = :{$safeName}";
        }

        $sql = "EXEC [{$this->sanitizeProcedureName($procedure)}] " . implode(', ', $placeholders);

        $stmt = $this->connection->prepare($sql);
        foreach ($params as $name => $value) {
            $safeName = preg_replace('/[^a-zA-Z0-9_]/', '', $name);
            $stmt->bindValue(":{$safeName}", $value);
        }

        $result = $stmt->executeQuery();
        return $result->fetchAllAssociative();
    }

    /**
     * Ejecuta un stored procedure que retorna un solo registro.
     */
    public function executeOne(string $procedure, array $params = []): ?array
    {
        $results = $this->execute($procedure, $params);
        return $results[0] ?? null;
    }

    /**
     * Ejecuta un stored procedure que no retorna resultados (INSERT/UPDATE/DELETE).
     */
    public function executeNonQuery(string $procedure, array $params = []): int
    {
        if (empty($params)) {
            $sql = "EXEC [{$this->sanitizeProcedureName($procedure)}]";
            return $this->connection->executeStatement($sql);
        }

        $placeholders = [];
        foreach ($params as $name => $value) {
            $safeName = preg_replace('/[^a-zA-Z0-9_]/', '', $name);
            $placeholders[] = "@{$safeName} = :{$safeName}";
        }

        $sql = "EXEC [{$this->sanitizeProcedureName($procedure)}] " . implode(', ', $placeholders);

        $stmt = $this->connection->prepare($sql);
        foreach ($params as $name => $value) {
            $safeName = preg_replace('/[^a-zA-Z0-9_]/', '', $name);
            $stmt->bindValue(":{$safeName}", $value);
        }

        return $stmt->executeStatement();
    }

    /**
     * Sanitiza el nombre del stored procedure para prevenir SQL injection.
     */
    private function sanitizeProcedureName(string $name): string
    {
        // Solo permite letras, numeros, underscores y puntos (para schema.procedure)
        return preg_replace('/[^a-zA-Z0-9_.]/', '', $name);
    }
}
