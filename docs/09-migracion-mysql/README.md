# 09 - Migracion de Base de Datos: MSSQL a MySQL

## Indice

- [Resumen](#resumen)
- [Diferencias de Sintaxis](#diferencias-de-sintaxis)
- [Mapeo de Tipos de Datos](#mapeo-de-tipos-de-datos)
- [Stored Procedures](#stored-procedures)
- [Plan de Migracion de Datos](#plan-de-migracion-de-datos)
- [Convenciones Laravel para MySQL](#convenciones-laravel-para-mysql)
- [Script ETL](#script-etl)
- [Validacion](#validacion)

---

## Resumen

| Aspecto | Origen | Destino |
|---------|--------|---------|
| Motor | Microsoft SQL Server | MySQL 8.x |
| Driver PHP | pdo_sqlsrv | pdo_mysql |
| ORM | Doctrine DBAL (raw queries) | Eloquent ORM |
| Schema management | Manual / DBA | Laravel Migrations |
| Stored Procedures | ~100+ T-SQL | Eloquent queries + Services |
| Charset | NVARCHAR (Unicode) | utf8mb4 (Unicode) |

---

## Diferencias de Sintaxis

### Queries Comunes

| SQL Server (T-SQL) | MySQL | Nota |
|--------------------|-------|------|
| `SELECT TOP N` | `SELECT ... LIMIT N` | Clausula al final |
| `GETDATE()` | `NOW()` | Fecha/hora actual |
| `ISNULL(x, y)` | `IFNULL(x, y)` o `COALESCE(x, y)` | Preferir COALESCE |
| `CAST(x AS NVARCHAR)` | `CAST(x AS CHAR)` | Sin NVARCHAR en MySQL |
| `CONVERT(type, value)` | `CAST(value AS type)` | Diferente orden |
| `NEWID()` | `UUID()` | Generar UUID |
| `DATEDIFF(day, a, b)` | `DATEDIFF(b, a)` | Orden invertido, siempre dias |
| `DATEADD(day, n, date)` | `DATE_ADD(date, INTERVAL n DAY)` | Sintaxis diferente |
| `LEN(string)` | `LENGTH(string)` o `CHAR_LENGTH(string)` | Usar CHAR_LENGTH para UTF-8 |
| `CHARINDEX(sub, str)` | `LOCATE(sub, str)` | Diferente nombre |
| `+ (concat)` | `CONCAT()` | Funcion explicita |
| `[dbo].[Table]` | `` `table` `` | Sin schema, backticks |
| `IDENTITY(1,1)` | `AUTO_INCREMENT` | En CREATE TABLE |
| `BIT` | `TINYINT(1)` o `BOOLEAN` | Laravel usa boolean |
| `NVARCHAR(MAX)` | `LONGTEXT` | Texto largo |
| `DATETIME2` | `DATETIME(6)` | Precision microsegundos |
| `MONEY` | `DECIMAL(19,4)` | Tipo monetario |
| `EXECUTE [dbo].[SP]` | No aplica | Reescribir como queries |

### Stored Procedures → Eloquent

**SQL Server (actual):**
```sql
EXECUTE [dbo].[PRC_CORE_USUA_AUTE]
    @DS_MATR = '12345'
```

**Laravel/Eloquent (nuevo):**
```php
$user = User::where('matricula', $matricula)
    ->where('situacao', 1) // activo
    ->first();
```

**SQL Server SP complejo (ejemplo):**
```sql
EXECUTE [dbo].[PRC_CLIE_DETA_CONS]
    @ID_CLIE = 100,
    @ID_EMPR = 1,
    @IN_STAT = 1,
    @ORDE_BY = 'NOME',
    @ORDE_TYPE = 'ASC',
    @PAGI = 1,
    @TT_REGI_PAGI = 20
```

**Laravel/Eloquent (nuevo):**
```php
$clientes = Cliente::query()
    ->where('id', $idCliente)
    ->where('empresa_id', $idEmpresa)
    ->where('situacao', $status)
    ->orderBy($orderBy, $orderType)
    ->paginate($perPage);
```

---

## Mapeo de Tipos de Datos

### Tipos Numericos

| SQL Server | MySQL | Laravel Migration |
|------------|-------|-------------------|
| `TINYINT` | `TINYINT` | `$table->tinyInteger()` |
| `SMALLINT` | `SMALLINT` | `$table->smallInteger()` |
| `INT` | `INT` | `$table->integer()` |
| `BIGINT` | `BIGINT` | `$table->bigInteger()` |
| `DECIMAL(p,s)` | `DECIMAL(p,s)` | `$table->decimal('col', p, s)` |
| `FLOAT` | `DOUBLE` | `$table->double()` |
| `MONEY` | `DECIMAL(19,4)` | `$table->decimal('col', 19, 4)` |
| `BIT` | `TINYINT(1)` | `$table->boolean()` |

### Tipos de Texto

| SQL Server | MySQL | Laravel Migration |
|------------|-------|-------------------|
| `CHAR(n)` | `CHAR(n)` | `$table->char('col', n)` |
| `VARCHAR(n)` | `VARCHAR(n)` | `$table->string('col', n)` |
| `NVARCHAR(n)` | `VARCHAR(n)` utf8mb4 | `$table->string('col', n)` |
| `NVARCHAR(MAX)` | `LONGTEXT` | `$table->longText()` |
| `TEXT` | `TEXT` | `$table->text()` |
| `NTEXT` | `LONGTEXT` | `$table->longText()` |

### Tipos de Fecha

| SQL Server | MySQL | Laravel Migration |
|------------|-------|-------------------|
| `DATE` | `DATE` | `$table->date()` |
| `TIME` | `TIME` | `$table->time()` |
| `DATETIME` | `DATETIME` | `$table->dateTime()` |
| `DATETIME2` | `DATETIME(6)` | `$table->dateTime('col', 6)` |
| `SMALLDATETIME` | `DATETIME` | `$table->dateTime()` |

### Tipos Binarios

| SQL Server | MySQL | Laravel Migration |
|------------|-------|-------------------|
| `BINARY(n)` | `BINARY(n)` | `$table->binary()` |
| `VARBINARY(MAX)` | `LONGBLOB` | `$table->binary()` |
| `IMAGE` | `LONGBLOB` | `$table->binary()` |

### Tipos Especiales

| SQL Server | MySQL | Laravel Migration |
|------------|-------|-------------------|
| `UNIQUEIDENTIFIER` | `CHAR(36)` | `$table->uuid()` |
| `XML` | `TEXT` | `$table->text()` |

---

## Stored Procedures

### Estrategia de Reemplazo

Los stored procedures NO se migran a MySQL. Se reescriben como:

```
Stored Procedure
    │
    ├── SELECT queries → Eloquent Model Scopes
    ├── Business logic → Service classes
    ├── Validations → FormRequest rules
    ├── Calculations → Service methods
    ├── INSERT/UPDATE → Eloquent create/update
    └── Complex JOINs → Eloquent relationships + eager loading
```

### Ejemplo Completo

**SP Original (T-SQL):**
```sql
CREATE PROCEDURE [dbo].[PRC_CLIE_DETA_CONS]
    @ID_CLIE INT,
    @ID_EMPR INT = NULL,
    @DS_NOME VARCHAR(200) = NULL,
    @IN_STAT INT = NULL,
    @ORDE_BY VARCHAR(50) = 'ID_CLIE',
    @ORDE_TYPE VARCHAR(4) = 'ASC',
    @PAGI INT = 1,
    @TT_REGI_PAGI INT = 20
AS
BEGIN
    SELECT
        C.ID_CLIE,
        C.NM_CLIE,
        C.NR_CNPJ_CPF,
        C.ID_VEND,
        V.NM_VEND,
        C.VL_LIMI_CRED,
        C.IN_STAT
    FROM TB_CLIE C
    LEFT JOIN TB_VEND V ON V.ID_VEND = C.ID_VEND
    WHERE (@ID_CLIE IS NULL OR C.ID_CLIE = @ID_CLIE)
      AND (@ID_EMPR IS NULL OR C.ID_EMPR = @ID_EMPR)
      AND (@DS_NOME IS NULL OR C.NM_CLIE LIKE '%' + @DS_NOME + '%')
      AND (@IN_STAT IS NULL OR C.IN_STAT = @IN_STAT)
    ORDER BY
        CASE WHEN @ORDE_BY = 'ID_CLIE' AND @ORDE_TYPE = 'ASC' THEN C.ID_CLIE END ASC,
        CASE WHEN @ORDE_BY = 'ID_CLIE' AND @ORDE_TYPE = 'DESC' THEN C.ID_CLIE END DESC,
        CASE WHEN @ORDE_BY = 'NM_CLIE' AND @ORDE_TYPE = 'ASC' THEN C.NM_CLIE END ASC
    OFFSET (@PAGI - 1) * @TT_REGI_PAGI ROWS
    FETCH NEXT @TT_REGI_PAGI ROWS ONLY
END
```

**Laravel equivalente:**

```php
// Model: app/Models/Cliente.php
class Cliente extends Model
{
    protected $table = 'clientes';

    public function vendedor(): BelongsTo
    {
        return $this->belongsTo(Vendedor::class);
    }

    public function scopeByEmpresa($query, ?int $empresaId)
    {
        return $query->when($empresaId, fn($q) => $q->where('empresa_id', $empresaId));
    }

    public function scopeByNombre($query, ?string $nombre)
    {
        return $query->when($nombre, fn($q) => $q->where('nombre', 'like', "%{$nombre}%"));
    }

    public function scopeByStatus($query, ?int $status)
    {
        return $query->when($status, fn($q) => $q->where('situacion', $status));
    }
}

// Service: app/Services/ClienteService.php
class ClienteService
{
    public function search(ClienteSearchDTO $filters): LengthAwarePaginator
    {
        return Cliente::query()
            ->with('vendedor')
            ->when($filters->id, fn($q) => $q->where('id', $filters->id))
            ->byEmpresa($filters->empresaId)
            ->byNombre($filters->nombre)
            ->byStatus($filters->status)
            ->orderBy($filters->orderBy, $filters->orderType)
            ->paginate($filters->perPage);
    }
}

// Controller
public function index(ClienteSearchRequest $request, ClienteService $service)
{
    $filters = ClienteSearchDTO::fromRequest($request);
    return ClienteResource::collection($service->search($filters));
}
```

---

## Plan de Migracion de Datos

### Paso 1: Exportar Schema de SQL Server
```sql
-- Ejecutar en SQL Server Management Studio
SELECT
    TABLE_NAME,
    COLUMN_NAME,
    DATA_TYPE,
    CHARACTER_MAXIMUM_LENGTH,
    NUMERIC_PRECISION,
    NUMERIC_SCALE,
    IS_NULLABLE,
    COLUMN_DEFAULT
FROM INFORMATION_SCHEMA.COLUMNS
ORDER BY TABLE_NAME, ORDINAL_POSITION;

-- Exportar foreign keys
SELECT
    FK.name AS FK_NAME,
    TP.name AS PARENT_TABLE,
    CP.name AS PARENT_COLUMN,
    TR.name AS REFERENCED_TABLE,
    CR.name AS REFERENCED_COLUMN
FROM sys.foreign_keys FK
INNER JOIN sys.tables TP ON FK.parent_object_id = TP.object_id
INNER JOIN sys.tables TR ON FK.referenced_object_id = TR.object_id
INNER JOIN sys.foreign_key_columns FKC ON FK.object_id = FKC.constraint_object_id
INNER JOIN sys.columns CP ON FKC.parent_object_id = CP.object_id AND FKC.parent_column_id = CP.column_id
INNER JOIN sys.columns CR ON FKC.referenced_object_id = CR.object_id AND FKC.referenced_column_id = CR.column_id;

-- Exportar indices
SELECT
    T.name AS TABLE_NAME,
    I.name AS INDEX_NAME,
    I.type_desc,
    I.is_unique,
    C.name AS COLUMN_NAME
FROM sys.indexes I
INNER JOIN sys.tables T ON I.object_id = T.object_id
INNER JOIN sys.index_columns IC ON I.object_id = IC.object_id AND I.index_id = IC.index_id
INNER JOIN sys.columns C ON IC.object_id = C.object_id AND IC.column_id = C.column_id
WHERE T.type = 'U'
ORDER BY T.name, I.name;
```

### Paso 2: Crear Laravel Migrations

Por cada tabla de SQL Server, crear una migration:

```php
// database/migrations/2026_01_01_000001_create_clientes_table.php
public function up(): void
{
    Schema::create('clientes', function (Blueprint $table) {
        $table->id();
        $table->string('primer_nombre', 256);
        $table->string('segundo_nombre', 256)->nullable();
        $table->string('cnpj_cpf', 18)->unique();
        $table->string('ie_rg', 52)->nullable();
        $table->string('tipo_persona', 50);
        $table->foreignId('vendedor_id')->constrained();
        $table->integer('cliente_erp_id')->nullable();
        $table->decimal('limite_credito', 15, 2)->default(0);
        $table->decimal('credito_contingencia', 15, 2)->default(0);
        $table->boolean('situacion')->default(true);
        $table->string('email_nfe', 256)->nullable();
        $table->string('telefono', 50)->nullable();
        $table->string('celular', 50)->nullable();
        $table->timestamps();
        $table->softDeletes();

        $table->index('cnpj_cpf');
        $table->index('vendedor_id');
        $table->index('situacion');
    });
}
```

### Paso 3: Script ETL

```php
// Proceso de migracion de datos
// 1. Conectar a MSSQL (origen)
// 2. Leer datos por tablas en chunks
// 3. Transformar tipos y encoding
// 4. Insertar en MySQL (destino)

// Ejemplo con Laravel:
$mssqlClientes = DB::connection('sqlsrv')->table('MTCORP_MODU_CLIE_BASE')->get();

foreach ($mssqlClientes->chunk(1000) as $chunk) {
    $mysqlData = $chunk->map(function ($row) {
        return [
            'id' => $row->id_cliente,
            'primer_nombre' => $row->prim_nome,
            'segundo_nombre' => $row->segu_nome,
            'cnpj_cpf' => $row->cnpj_cpf,
            'vendedor_id' => $row->id_vendedor,
            'limite_credito' => $row->limi_cred ?? 0,
            'situacion' => (bool) $row->situacao,
            'created_at' => $row->data_cadastro,
            'updated_at' => $row->data_ult_alte ?? now(),
        ];
    })->toArray();

    DB::connection('mysql')->table('clientes')->insert($mysqlData);
}
```

### Paso 4: Validacion

```sql
-- Comparar conteos
-- SQL Server:
SELECT 'clientes' as tabla, COUNT(*) as total FROM MTCORP_MODU_CLIE_BASE
UNION ALL
SELECT 'pedidos', COUNT(*) FROM TB_PEDIDOS
-- etc.

-- MySQL:
SELECT 'clientes' as tabla, COUNT(*) as total FROM clientes
UNION ALL
SELECT 'pedidos', COUNT(*) FROM pedidos;

-- Los numeros deben coincidir
```

---

## Convenciones Laravel para MySQL

### Naming

| SQL Server (actual) | MySQL/Laravel (nuevo) |
|--------------------|-----------------------|
| `MTCORP_MODU_CLIE_BASE` | `clientes` |
| `TB_VEND` | `vendedores` |
| `TB_PROD` | `productos` |
| `ID_CLIE` | `id` (PK) o `cliente_id` (FK) |
| `NM_CLIE` | `nombre` |
| `NR_CNPJ_CPF` | `cnpj_cpf` |
| `VL_LIMI_CRED` | `limite_credito` |
| `IN_STAT` | `situacion` o `activo` |
| `DT_CADAS` | `created_at` |
| `DT_ULT_ALTE` | `updated_at` |

### Reglas de Naming Laravel
- Tablas: `snake_case`, plural (`clientes`, `vendedores`)
- Columnas: `snake_case` (`primer_nombre`, `limite_credito`)
- Primary Key: `id` (auto-increment)
- Foreign Keys: `{tabla_singular}_id` (`vendedor_id`, `cliente_id`)
- Timestamps: `created_at`, `updated_at`
- Soft Delete: `deleted_at`
- Boolean: prefijo `is_` o `has_` (`is_activo`, `has_descuento`)
- Pivot tables: `{tabla1_singular}_{tabla2_singular}` en orden alfabetico

---

## Validacion Post-Migracion

### Checklist

- [ ] Conteo de registros por tabla coincide
- [ ] Tipos de datos correctos (no truncados)
- [ ] Encoding UTF-8 correcto (caracteres especiales, acentos)
- [ ] Foreign keys validas (no referencias rotas)
- [ ] Indices creados y funcionando
- [ ] Valores NULL preservados donde corresponde
- [ ] Fechas convertidas correctamente
- [ ] Valores decimales sin perdida de precision
- [ ] Valores boolean correctamente mapeados (BIT → TINYINT)
- [ ] UUIDs preservados si existen
- [ ] Datos de prueba pueden ser consultados via Eloquent
- [ ] Queries de reportes retornan mismos resultados
