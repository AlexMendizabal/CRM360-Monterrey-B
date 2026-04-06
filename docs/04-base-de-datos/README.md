# 04 - Base de Datos

## Indice

- [Configuracion Actual](#configuracion-actual)
- [Motor de Base de Datos](#motor-de-base-de-datos)
- [Patron de Acceso a Datos](#patron-de-acceso-a-datos)
- [Stored Procedures](#stored-procedures)
- [Entidades Doctrine](#entidades-doctrine)
- [Tablas Identificadas](#tablas-identificadas)

---

## Configuracion Actual

### Motor
**Microsoft SQL Server** via drivers `pdo_sqlsrv` y `sqlsrv`

### Drivers Instalados (Dockerfile)
```
- msodbcsql17 (Microsoft ODBC Driver 17)
- sqlsrv (PHP extension)
- pdo_sqlsrv (PHP PDO extension)
- pdo_mysql (instalado pero NO usado)
- pdo (base)
```

### Conexion

La conexion esta definida en `config/packages/doctrine.yaml` usando variables de entorno:

```yaml
doctrine:
    dbal:
        default_connection: MONTERREY
        connections:
            MONTERREY:
                driver: '%env(DB_DRIVER)%'
                host: '%env(DB_HOST)%'
                port: '%env(int:DB_PORT)%'
                dbname: '%env(DB_NAME)%'
                user: '%env(DB_USER)%'
                password: '%env(DB_PASSWORD)%'
                charset: 'UTF-8'
```

Las variables se definen en `.env` (defaults) y se sobreescriben en `.env.local` (no commiteado):

```bash
# .env (commiteado - solo defaults seguros)
DB_DRIVER=pdo_sqlsrv
DB_HOST=localhost
DB_PORT=1433
DB_NAME=CRM360
DB_USER=change_me_in_env_local
DB_PASSWORD=change_me_in_env_local

# .env.local (NO commiteado - credenciales reales)
DB_USER=user2023
DB_PASSWORD=RIC0rp#2023
```

> NOTA: Las credenciales hardcodeadas que existian antes en los YAML fueron removidas.
> Los archivos old/bak con credenciales antiguas (sa/123) tambien fueron eliminados.
> Las credenciales reales van SOLO en `.env.local` que esta en `.gitignore`.

**Conexion nombrada:** `MONTERREY` (nombre de la conexion DBAL)
**Base de datos:** `CRM360`
**ORM:** [ACTUALIZADO 2026-03-25] Habilitado con `type: attribute`, `auto_mapping: true`. Se configuraron 9 entidades (Ciudad, Escritorio, Cliente, Vendedor, Oferta, Descuento, Almacen, ListaPrecio, DepoFisiEsto) y 4 repositorios ORM (Ciudad, Cliente, Vendedor, Oferta).
**Migraciones configuradas en:** `src/Migrations/Core` (carpeta no existe — ORM activo pero sin migraciones generadas aun)

Se inyecta `Doctrine\DBAL\Connection` directamente en los controllers.
Adicionalmente, se dispone de `StoredProcedureService` para ejecucion segura de SPs con parametros vinculados.

### Ejemplo de uso en Controller (patron legacy)
```php
// ANTES (vulnerable a SQL injection):
class ClientesController extends AbstractController
{
    public function getCliente(Connection $connection, Request $request)
    {
        $res = $connection->query("
            EXECUTE [dbo].[PRC_CLIE_DETA_CONS]
            @ID_CLIE = {$codCliente}
        ");
        $data = $res->fetchAll();
        return new JsonResponse([
            'responseCode' => 200,
            'result' => $data
        ]);
    }
}
```

### [ACTUALIZADO 2026-03-25] Ejemplo con StoredProcedureService (patron actual)
```php
// DESPUES (parametrizado, seguro):
class ClientesController extends AbstractController
{
    public function getCliente(StoredProcedureService $spService, Request $request)
    {
        $data = $spService->execute('PRC_CLIE_DETA_CONS', [
            'ID_CLIE' => $codCliente,
        ]);
        return new JsonResponse([
            'responseCode' => 200,
            'result' => $data
        ]);
    }
}
```

---

## Motor de Base de Datos

### Historial de Configuraciones (ya eliminadas del repositorio)

Los siguientes archivos fueron eliminados por contener credenciales hardcodeadas:

| Archivo Eliminado | User | Password | Port | Notas |
|-------------------|------|----------|------|-------|
| `_____doctrine.yaml_____old` | `sa` → `user2023` | `123` → `RIC0rp#2023` | 1433 | Transicion visible |
| `doctrine_old.yaml` | `sa` | `123` | 49179 | Config muy antigua |
| `doctrine_old2.yaml` | `user2023` | `RIC0rp#2023` | 1433 | Intermedia |
| `doctrine.yaml.bak` | `user2023` | `RIC0rp#2023` | 1433 | Backup |
| `dev/doctrine.yaml.bak` | `user2023` | `RIC0rp#2023` | 1433 | Backup dev |

> ADVERTENCIA: Aunque los archivos fueron eliminados, las credenciales siguen
> en el historial de git. Se recomienda rotar las passwords.

### Evidencias de SQL Server

1. **config/packages/doctrine.yaml:** Driver `%env(DB_DRIVER)%`, conexion nombrada `MONTERREY`
2. **Dockerfile:** Instala `msodbcsql17`, `sqlsrv`, `pdo_sqlsrv`
3. **Queries:** Usan sintaxis T-SQL:
   - `EXECUTE [dbo].[ProcedureName]`
   - `SELECT TOP 1`
   - `GETDATE()`
   - `ISNULL()`
   - `CAST(x AS NVARCHAR)`
3. **Schema notation:** `[dbo].[TableName]`
4. **Parameter binding:** `@PARAM_NAME`

---

## Patron de Acceso a Datos

### Patron Principal: DBAL Directo + Stored Procedures

> [ACTUALIZADO 2026-03-25] 15 vulnerabilidades de SQL injection fueron parcheadas con prepared statements y parametros vinculados. Se creo `StoredProcedureService` como capa segura para invocacion de SPs.

El 95% del proyecto usa Doctrine DBAL directamente (sin ORM):

```
Controller
    |
    ├── Inyecta: Doctrine\DBAL\Connection
    ├── Ejecuta: EXECUTE [dbo].[StoredProcedure] @params
    ├── Obtiene: fetchAll() / fetch()
    └── Retorna: JsonResponse
```

### Patron Secundario: Doctrine ORM [ACTUALIZADO 2026-03-25]

El ORM esta ahora habilitado (`type: attribute`, `auto_mapping: true`) con 9 entidades y 4 repositorios.
Originalmente solo el modulo Fusion usaba el ORM; ahora esta disponible para toda la aplicacion:

```
Controller
    |
    ├── Inyecta: Repository
    ├── Ejecuta: Repository->getEntities()
    ├── Procesa: Factory->create(data)
    └── Retorna: Entity->jsonSerialize()
```

### Comparativa

| Aspecto | DBAL Directo (95%) | Doctrine ORM (5%) |
|---------|-------------------|-------------------|
| Uso | Toda la app | Solo Fusion |
| Queries | Stored Procedures | QueryBuilder |
| Modelos | No existen | Entity classes |
| Relaciones | Manual (JOINs en SP) | Annotations |
| Validacion | Manual en controller | Constraints |

---

## Stored Procedures

### Identificados en el Codigo

| Stored Procedure | Modulo | Proposito |
|-----------------|--------|-----------|
| `PRC_CORE_USUA_AUTE` | Core | Autenticacion de usuario |
| `PRC_CLIE_DETA_CONS` | Comercial | Detalles de cliente |
| `PCR_CLIE_CONS3` | Comercial | Consulta de clientes v3 |
| `PRC_MTCORP_MODU_CLIE_CONS` | Comercial | Consulta modulo-cliente |
| `PRC_COME_CONT_EMAI_CONS` | Comercial | Emails de contacto comercial |
| `PRC_GRUP_CONS` | Common | Consulta de grupos |
| `PRC_TIPO_EMPR_CONS` | Common | Consulta tipos de empresa |

> IMPORTANTE: Se estima que existen ~100+ stored procedures en la base de datos.
> La lista completa requiere acceso directo al SQL Server.
> Cada stored procedure contiene logica de negocio que debe extraerse durante la migracion.

### Impacto en la Migracion

Los stored procedures son el **mayor riesgo** de la migracion porque:

1. **Contienen logica de negocio** no visible en el codigo PHP
2. **MySQL no usa stored procedures** en la misma forma (ni es recomendable)
3. **Cada SP debe analizarse** para extraer:
   - Queries SELECT → Eloquent scopes/queries
   - Logica de negocio → Service classes
   - Validaciones → FormRequest / Model rules
   - Calculos → Service methods

---

## Entidades Doctrine

### Entidades Fusion (originales)

```
src/Entity/MTCorp/Logistica/Integracoes/Fusion/
├── Cliente.php      # MTCORP_MODU_CLIE_BASE
├── Pedido.php       # (tabla por determinar)
├── Produto.php      # (tabla por determinar)
├── Motorista.php    # (tabla por determinar)
├── Veiculo.php      # (tabla por determinar)
├── Entrega.php      # (tabla por determinar)
└── Romaneio.php     # (tabla por determinar)
```

### [ACTUALIZADO 2026-03-25] Entidades nuevas (modernizacion)

```
src/Entity/
├── Ciudad.php
├── Escritorio.php
├── Cliente.php
├── Vendedor.php
├── Oferta.php
├── Descuento.php
├── Almacen.php
├── ListaPrecio.php
└── DepoFisiEsto.php
```

**Repositorios ORM:** `CiudadRepository`, `ClienteRepository`, `VendedorRepository`, `OfertaRepository`

### Detalle: Entity Cliente

**Tabla:** `MTCORP_MODU_CLIE_BASE`

| Campo | Tipo PHP | Tipo DB | Descripcion |
|-------|----------|---------|-------------|
| id_cliente | int | INT (ID) | Clave primaria |
| prim_nome | string | NVARCHAR(256) | Primer nombre |
| segu_nome | string | NVARCHAR(256) | Segundo nombre |
| cnpj_cpf | string | NVARCHAR(18) | Documento fiscal |
| ie_rg | string | NVARCHAR(52) | Inscripcion estatal |
| tipo_pessoa | string | NVARCHAR | Tipo persona |
| id_vendedor | int | INT | FK vendedor |
| id_cliente_erp | int | INT | ID en ERP |
| limi_cred | decimal | DECIMAL(15,2) | Limite credito |
| cred_segu | decimal | DECIMAL(15,2) | Credito contingencia |
| data_cadastro | datetime | DATETIME | Fecha registro |
| situacao | int | INT | Estado |
| email_nfe | string | NVARCHAR(256) | Email para NF-e |
| is_carteira | smallint | SMALLINT | Flag cartera |
| telefono | string | NVARCHAR(50) | Telefono |
| celular | string | NVARCHAR(50) | Celular |
| tipo_persona | text | TEXT | Tipo persona (desc) |
| id_tipo_cliente | int | INT | Tipo de cliente |

---

## Tablas Identificadas

Basado en el analisis del codigo fuente:

| Tabla Detectada | Modulo | Evidencia |
|----------------|--------|-----------|
| `MTCORP_MODU_CLIE_BASE` | Comercial | Entity Cliente.php |
| Tablas de clientes/obras | Comercial | ClientesRepository JOINs |
| `CadastroRegioesEntrega` | Logistica | ClientesRepository |
| Tablas de propuestas | Comercial | ClientesRepository |
| Tablas de usuarios | Core | LoginController |
| Tablas de grupos | Common | CommonController |
| Tablas de tipos empresa | Common | CommonController |

> NOTA: La lista completa de tablas requiere acceso al SQL Server.
> Se estima entre 80-150 tablas basado en la cantidad de controllers y stored procedures.

---

## Migraciones Doctrine

**Estado:** NO EXISTEN (sin cambios)

A pesar de tener `doctrine/doctrine-migrations-bundle` como dependencia,
no existe carpeta `migrations/` ni archivos de migracion.

Los cambios de schema se gestionan directamente en SQL Server,
probablemente por un DBA o via scripts SQL manuales.

> [ACTUALIZADO 2026-03-25] El ORM esta ahora activo con 9 entidades mapeadas, pero las migraciones
> siguen sin generarse. El schema existente en SQL Server se considera la fuente de verdad.
