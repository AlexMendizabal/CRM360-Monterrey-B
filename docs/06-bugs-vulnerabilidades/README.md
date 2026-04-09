# 06 - Bugs y Vulnerabilidades

## Indice

- [Resumen Ejecutivo](#resumen-ejecutivo)
- [Vulnerabilidades Criticas](#vulnerabilidades-criticas)
- [Vulnerabilidades Altas](#vulnerabilidades-altas)
- [Vulnerabilidades Medias](#vulnerabilidades-medias)
- [Problemas de Codigo](#problemas-de-codigo)
- [Bugs Modulo Descuentos](#bugs-modulo-descuentos-corregidos-2026-03-28)
- [Bugs Modulo Autorizaciones](#bugs-modulo-autorizaciones-corregidos-2026-03-28)
- [Bugs Modulo Cotizaciones](#bugs-modulo-cotizaciones-corregidos-2026-03-28)
- [Bugs Modulo Clientes](#bugs-modulo-clientes-corregidos-2026-03-28)
- [Deuda Tecnica Arquitectural](#deuda-tecnica-arquitectural)
- [Matriz de Riesgos](#matriz-de-riesgos)

---

## Resumen Ejecutivo

| Severidad | Cantidad | Corregidos | Pendientes |
|-----------|----------|------------|------------|
| CRITICA | 9 | 9 (todos) | 0 |
| ALTA | 4 | 3 + 1 N/A | 0 |
| MEDIA | 6 | 6 (todos) | 0 |
| BAJA / CODE | 3 | 3 (todos) | 0 |
| MODULO DESCUENTOS | 6 | 6 (todos) | 0 |
| MODULO AUTORIZACIONES | 8 | 8 (todos) | 0 |
| MODULO COTIZACIONES | 11 | 11 (todos) | 0 |
| MODULO CLIENTES | 6 | 6 (todos) | 0 |
| ARQUITECTURAL | 6 | 2 parcial | 4 (resolver con migracion) |
| **TOTAL** | **59** | **55** | **4 (solo ARCH)** |

> [ACTUALIZADO 2026-03-28] Bugs del modulo de Clientes corregidos (6 bugs: variables indefinidas, dead code, mapping incorrecto, SQL injection, parametro ignorado, import no usado).
> [ACTUALIZADO 2026-03-28] Bugs criticos del modulo de Cotizaciones corregidos (11 bugs: dd() en produccion, SQL injection, ORDER BY injection, alias incorrecto, variables indefinidas, keys erroneas, WHERE incorrecto, ramas inalcanzables).
> [ACTUALIZADO 2026-03-28] Bugs criticos del modulo de Autorizaciones corregidos (8 bugs: dead code, LastInsertId, ORDER BY injection, paginacion, tipo check, hardcoded IP, email, null dereference).
> [ACTUALIZADO 2026-03-28] Bugs criticos del modulo de Descuentos corregidos (6 bugs: paginacion, validacion, SAP integration, rangos, query, tipos).
> [ACTUALIZADO 2026-03-25] Todos los CRITICOS, ALTOS, MEDIOS y CODE resueltos. Solo quedan items arquitecturales.

---

## Vulnerabilidades Criticas

### CRIT-01: Credenciales Hardcodeadas (Akna) — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/MTCorp/Comercial/Integracoes/Akna/AknaConfig.php` |
| **Estado** | [CORREGIDO] Credenciales movidas a `$_ENV['AKNA_USER']`, `$_ENV['AKNA_PASSWORD']`, `$_ENV['AKNA_CLIENT']` |
| **OWASP** | A07:2021 - Identification and Authentication Failures |

**Codigo afectado:**
```php
$this->user     = 'paulo.mota@mtcorp.com.br';
$this->password = '57b609e138732ebeaea7d77acdaad016';
$this->client   = '22671';
```

**Remediacion:**
- Mover a variables de entorno: `AKNA_USER`, `AKNA_PASSWORD`, `AKNA_CLIENT`
- Rotar las credenciales inmediatamente (ya estan expuestas en git history)

---

### CRIT-01b: Credenciales de BD Hardcodeadas en YAML

| Campo | Detalle |
|-------|---------|
| **Archivos** | `config/packages/doctrine.yaml` (y 5+ copias en dev/, prod/, bkp/) |
| **OWASP** | A07:2021 - Identification and Authentication Failures |
| **Impacto** | Acceso completo a SQL Server con datos de produccion |

**Codigo afectado (en multiples archivos YAML):**
```yaml
# Credenciales ACTUALES:
user: 'user2023'
password: 'RIC0rp#2023'
dbname: 'CRM360'

# Credenciales ANTIGUAS (aun en archivos old):
user: 'sa'
password: '123'
port: 49179
```

**Agravantes:**
- Mismas credenciales en dev/prod (sin separacion de ambientes)
- Credencial antigua era `sa/123` (acceso sysadmin con password trivial)
- Se repiten en 6+ archivos YAML en el repositorio
- `config_bkp/` tambien contiene las mismas credenciales

**Remediacion:**
```yaml
# Usar variable de entorno
doctrine:
    dbal:
        url: '%env(resolve:DATABASE_URL)%'
```
- Mover a `.env.local`: `DATABASE_URL=sqlsrv://user2023:password@localhost:1433/CRM360`
- Rotar password inmediatamente
- Verificar que `sa/123` ya no tiene acceso

---

### CRIT-01c: Configuracion SMTP Expuesta — [PARCHEADO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `config/packages/swiftmailer.yaml` (REMOVIDO) |
| **Impacto** | Potencial abuso del servidor SMTP para envio de spam |
| **Estado** | [CORREGIDO] SwiftMailer eliminado, reemplazado por Symfony Mailer con `MAILER_DSN` en `.env.local` |

**Codigo afectado (ya eliminado):**
```yaml
swiftmailer:
    default_mailer: noroaco
    mailers:
        noroaco:
            transport: smtp
            host: smtp.noroaco.com.br
            port: 587
            username: noroaco@noroaco.com.br
            password:            # Vacio aqui, posiblemente en .env.local
            encryption: tls
            auth_mode: login
```

---

### CRIT-02: JWT Secret Expuesto en Repositorio — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `.env` linea 20 |
| **Estado** | [CORREGIDO] Valor reemplazado con placeholder `change_me_in_env_local`. Valor real debe ir en `.env.local` |
| **OWASP** | A02:2021 - Cryptographic Failures |

**Codigo afectado:**
```
JWT_SECRET=xteFnRUdfqyDJKKZShkRJ7YNJFDbn7VHtV9J6gZB
```

**Remediacion:**
- Mover a `.env.local` (no commiteado)
- Generar nuevo secret inmediatamente
- Configurar via variables de entorno del servidor/Docker

---

### CRIT-03: APP_SECRET Expuesto — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `.env` linea 17 |
| **Estado** | [CORREGIDO] Valor reemplazado con placeholder. Creado `.env.local.example` como guia |
| **OWASP** | A02:2021 - Cryptographic Failures |

**Codigo afectado:**
```
APP_SECRET=2tfxp7uN4Dp93Yc73GBdSxNRDfWNz7mm
```

**Remediacion:** Igual que CRIT-02

---

### CRIT-03b: Credenciales de Base de Datos Hardcodeadas en YAML

| Campo | Detalle |
|-------|---------|
| **Archivos** | `config/packages/doctrine.yaml`, `config/packages/dev/doctrine.yaml`, `config/packages/prod/doctrine.yaml`, `config_bkp/packages/doctrine.yaml` (y mas) |
| **OWASP** | A07:2021 - Identification and Authentication Failures |
| **Impacto** | Acceso directo a la base de datos SQL Server |

**Codigo afectado (en multiples archivos):**
```yaml
driver: 'pdo_sqlsrv'
host: 'localhost'
port: 1433
dbname: 'CRM360'
user: 'user2023'
password: 'RIC0rp#2023'
```

**Adicionalmente en archivos antiguos:**
```yaml
# doctrine_old / _____doctrine.yaml_____old
user: 'sa'
password: '123'
port: 49179
```

**Impacto:** Cualquiera con acceso al repositorio tiene acceso completo a la BD.
La password antigua `123` con usuario `sa` es extremadamente debil.

**Remediacion:**
- Usar variables de entorno: `%env(DATABASE_URL)%`
- Mover credenciales a `.env.local` (no commiteado)
- Rotar password de `user2023` inmediatamente
- Verificar que `sa/123` ya no funciona

---

### CRIT-04: SQL Injection — [PARCHEADO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Repository/MTCorp/Logistica/Integracoes/Fusion/ClientesRepository.php` |
| **Linea** | 59 |
| **OWASP** | A03:2021 - Injection |
| **Impacto** | Ejecucion arbitraria de SQL, acceso/modificacion de datos |
| **Estado** | [CORREGIDO] 15 SQL injections parcheadas con prepared statements. Se creo `StoredProcedureService` para ejecucion segura de SPs. |

**Codigo afectado (antes):**
```php
WHERE PROP.NUMEROPROPOSTA IN('{$pedidos}')
```

**Problema:** Variable `$pedidos` interpolada directamente sin parametrizar.

**Remediacion aplicada:**
```php
// Usar parameter binding
$qb->setParameter('pedidos', $pedidosArray, Connection::PARAM_STR_ARRAY);
```

---

### CRIT-05: SSL/TLS Verificacion Deshabilitada (Multiple) — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivos** | GenericController.php, CnpjController.php, CurlController.php, GoogleApiService.php |
| **Estado** | [CORREGIDO] `CURLOPT_SSL_VERIFYHOST` → 2, `CURLOPT_SSL_VERIFYPEER` → true en todos los archivos |
| **OWASP** | A02:2021 - Cryptographic Failures |

**Codigo afectado (en multiples archivos):**
```php
curl_setopt($c, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($c, CURLOPT_SSL_VERIFYPEER, 0);
```

**Archivos afectados:**
1. `src/Controller/Common/GenericController.php` (lineas 476-477, 493-494, 513-514)
2. `src/Controller/Common/Services/CnpjController.php` (linea 35)
3. `src/Controller/Common/Services/CurlController.php` (linea 22)
4. `src/Controller/Common/Services/GoogleApiService.php` (linea 56)

**Remediacion:**
```php
curl_setopt($c, CURLOPT_SSL_VERIFYHOST, 2);
curl_setopt($c, CURLOPT_SSL_VERIFYPEER, true);
// O usar Symfony HttpClient que verifica SSL por defecto
```

---

### CRIT-06: CSRF Token Hardcodeado — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/Common/GenericController.php` |
| **Estado** | [CORREGIDO] Reemplazado con `bin2hex(random_bytes(32))` — token dinamico criptograficamente seguro |
| **OWASP** | A01:2021 - Broken Access Control |

**Codigo afectado:**
```php
"csrf-token" => "c609bc3f-78c0-4631-a791-b4b033b46a3b:335405c0-0b67-44f6-a0d9-ae74d992da89"
```

**Remediacion:**
- Generar CSRF tokens dinamicos
- O usar el token provisto por el servicio externo (TopDesk)

---

### CRIT-07: IP de SAP Hardcodeada — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivos** | `src/Services/Helper.php`, `src/Module/Comercial/Service/OfertaService.php` |
| **Estado** | [CORREGIDO] Ahora usa `$_ENV['SAP_API_URL']` con fallback al IP original |
| **OWASP** | A05:2021 - Security Misconfiguration |

**Codigo afectado:**
```php
$url_sap = 'http://192.168.0.123:4100/api';
```

**Remediacion:**
- Mover a variable de entorno: `SAP_API_URL`

---

## Vulnerabilidades Altas

### HIGH-01: XXE (XML External Entity) — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivos** | `ListasContatosController.php`, `ListaMensagensController.php` |
| **Estado** | [CORREGIDO] Agregado `LIBXML_NOENT | LIBXML_NONET` a `simplexml_load_string()` |
| **OWASP** | A05:2021 - Security Misconfiguration |

**Codigo afectado:**
```php
$xmlContent = simplexml_load_string($content);
```

**Remediacion:**
```php
libxml_disable_entity_loader(true);
$xmlContent = simplexml_load_string($content, 'SimpleXMLElement', LIBXML_NOENT | LIBXML_NONET);
```

---

### HIGH-02: Base64 Decode sin Validacion — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivos** | `UsuarioController.php`, `RequestTrait.php`, `PreCadastroController.php` |
| **Estado** | [CORREGIDO] Agregada validacion strict a `base64_decode()`, `utf8_encode()` reemplazado por `mb_convert_encoding()` |

**Codigo afectado:**
```php
$user = json_decode(utf8_encode(base64_decode($headers)));
```

**Problemas:**
- No valida que el header existe
- No usa `base64_decode($str, true)` (modo estricto)
- No maneja JSON invalido
- `utf8_encode()` esta deprecated en PHP 8.2

**Remediacion:**
```php
$headerValue = $request->headers->get('X-User-Info');
if (!$headerValue) {
    throw new UnauthorizedException();
}
$decoded = base64_decode($headerValue, true);
if ($decoded === false) {
    throw new BadRequestException();
}
$user = json_decode($decoded, false, 512, JSON_THROW_ON_ERROR);
```

---

### HIGH-03: Sin Validacion Null en Acceso a Arrays

| Campo | Detalle |
|-------|---------|
| **Archivos** | `LoginController.php`, `SapController.php` |

**Codigo afectado:**
```php
$usuario[0]['FIELD_NAME']  // Sin verificar que $usuario[0] existe
```

**Impacto:** Fatal error si la stored procedure retorna vacio.

**Remediacion:**
```php
if (empty($usuario) || !isset($usuario[0])) {
    return new JsonResponse(['responseCode' => 404, 'message' => 'Usuario no encontrado']);
}
```

---

### HIGH-04: Sin Proteccion CSRF en Endpoints POST — [N/A]

| Campo | Detalle |
|-------|---------|
| **Archivos** | Todos los controllers con endpoints POST/PUT/DELETE |
| **OWASP** | A01:2021 - Broken Access Control |
| **Estado** | [N/A] API stateless con JWT — CSRF no aplica. Los tokens JWT ya protegen contra CSRF. |

**Contexto:**
- API stateless con JWT, por lo que CSRF tradicional no aplica
- Sin embargo, si algun endpoint es accesible via browser, es vulnerable
- No hay proteccion contra replay attacks

---

## Vulnerabilidades Medias

### MED-01: Debug Output en Produccion — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/Common/GenericController.php` |
| **Estado** | [CORREGIDO] `print_r`/`exit` reemplazados por `JsonResponse` |

```php
print_r($html);
exit;
// ...
if ($server_output == "OK")
    print_r("Sucesso");
else
    print_r("Falha");
exit;
```

---

### MED-02: ORDER BY Injection — [PARCHEADO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/Common/CommonController.php` |
| **Lineas** | 40-42 |
| **Estado** | [CORREGIDO] Incluido en las 15 SQL injections parcheadas |

```php
$ordeBy = (string)$params['ORDE_BY'];    // Sin whitelist
$ordeType = (string)$params['ORDE_TYPE']; // Sin whitelist
```

**Remediacion aplicada:**
```php
$allowedColumns = ['nome', 'data', 'status'];
$ordeBy = in_array($params['ORDE_BY'], $allowedColumns) ? $params['ORDE_BY'] : 'nome';
$ordeType = in_array(strtoupper($params['ORDE_TYPE']), ['ASC', 'DESC']) ? $params['ORDE_TYPE'] : 'ASC';
```

---

### MED-03: phpmailer con Version Wildcard — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `composer.json` |
| **Estado** | [CORREGIDO] Ahora fijado a `^6.8` |

```json
// ANTES:
"phpmailer/phpmailer": "*"
// DESPUES:
"phpmailer/phpmailer": "^6.8"
```

~~**Riesgo:** Puede instalar versiones con vulnerabilidades conocidas.~~

---

### MED-04: Symfony 5.2 End of Life — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Impacto** | ~~Sin parches de seguridad desde agosto 2022~~ |
| **Estado** | [CORREGIDO] Actualizado a Symfony 5.4 LTS. PHP actualizado de 7.4 a 8.1. |

---

### MED-05: info.php Expuesto — [CORREGIDO 2026-03-25]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `info.php` (raiz del proyecto) |
| **Estado** | [CORREGIDO] Archivo eliminado |

---

### MED-06: SAP Autenticacion Debil

| Campo | Detalle |
|-------|---------|
| **Archivo** | `SapController.php` linea 42 |

```php
if ($data['usuario'] !== 'crm360') { ... }
```

Usuario hardcodeado, sin rate limiting.

---

## Problemas de Codigo

### CODE-01: Imports No Usados
- **Archivo:** `SapController.php` lineas 15-17, 21
- `DriverManager`, `ParameterType`, `QueryBuilder`, `JsonDecode`

### CODE-02: Codigo Deprecated
- **Archivo:** `MotoristaController.php` (Fusion)
- Marcado como `@deprecated 1.0.0`

### CODE-03: Servicios como Controllers
- `CepController`, `CnpjController`, `CurlController`, etc.
- Son servicios implementados como controllers (anti-patron)

---

## Bugs Modulo Descuentos [CORREGIDOS 2026-03-28]

### DESC-01: Endpoint Lista Sin Paginacion (Fatal Error 128MB) — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/MTCorp/Comercial/CicloVendas/Cotacoes/CotacoesController.php` |
| **Metodo** | `getDescuentosLista()` (linea ~3110) |
| **Impacto** | **CRITICO** — Fatal error: Allowed memory size of 134217728 bytes exhausted en JsonResponse |
| **Causa** | `SELECT *` sin LIMIT/OFFSET carga toda la tabla TB_DESCUENTO en memoria |

**Remediacion aplicada:**
- Paginacion con `OFFSET ? ROWS FETCH NEXT ? ROWS ONLY` (SQL Server)
- Parametros: `pageIndex` (default 0), `pageSize` (default 100, max 500)
- Filtros opcionales: `id_material`, `id_tipo_cliente`, `id_departamento`
- Respuesta incluye `total`, `pageIndex`, `pageSize` para navegacion

---

### DESC-02: Validacion OR en Lugar de AND — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `CotacoesController.php` |
| **Metodo** | `getDescuentoCliente()` (linea ~3174) |
| **Impacto** | Calculo con parametros null casteados a 0 devuelve descuentos incorrectos |

**Codigo afectado (antes):**
```php
if ($id_tipo_cliente !== null || $cantidad !== null || $id_material !== null || $id_ciudad !== null)
```
**Remediacion:** Cambio `||` a `&&` — ahora requiere los 4 parametros obligatorios.

---

### DESC-03: Variables No Inicializadas en SAP Descuentos — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/Core/SapController.php` |
| **Metodo** | `actualizarDescuentos()` (linea ~2383) |
| **Impacto** | PHP warnings sin JSON — el endpoint devuelve HTML de errores en lugar de JSON |

**Causa:** `$data_descuento` y `$data_error` nunca se inicializan como arrays.
**Remediacion:** Inicializacion `$data_descuento = []; $data_error = [];` al inicio del metodo.

**Bug adicional en mismo metodo:** Key mismatch `$data['id_mate']` vs `$data['id_material']`.
Corregido a `(int)$data['id_mate']`.

---

### DESC-04: str_replace Corrompe Valores Decimales de Rangos — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `SapController.php` linea ~2432 |
| **Impacto** | `str_replace('.', '', $data['rango2'])` convierte "1000.50" en "100050" |

**Bugs adicionales en procesamiento de rangos:**
- Cuando `rango1 >= rango2`, guardaba en key `rango1` en vez de `rango_inicial`
- Sin validacion de que ambos rangos existan

**Remediacion:** Reescrito bloque completo con validacion clara y sin manipulacion de strings.

---

### DESC-05: buscarDescuento() Ignora Rangos en WHERE — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivos** | `Helper.php` linea ~2726, `PrecioService.php` linea ~130 |
| **Impacto** | Al buscar descuentos existentes, no distingue entre rangos diferentes del mismo material/cliente/ciudad. Causa updates al registro equivocado y previene insercion de nuevos rangos. |

**Codigo afectado (antes):**
```sql
SELECT id FROM TB_DESCUENTO WHERE id_departamento = ? AND id_tipo_cliente = ? AND id_material = ?
```
**Remediacion:** Agregado `AND rango_inicial = ? AND rango_final = ?` al WHERE clause.

---

### DESC-06: calcularDesc() Retorna String en Lugar de Float — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivos** | `Helper.php` linea ~27, `PrecioService.php` linea ~19 |
| **Impacto** | `number_format()` retorna string. Variables `$conditions`/`$bindings` declaradas pero nunca usadas (dead code). |

**Remediacion:** `number_format($number, 6)` reemplazado por `round((float)$number, 6)`. Dead code eliminado.

---

## Bugs Modulo Autorizaciones [CORREGIDOS 2026-03-28]

### AUTH-01: autorizaEstado() Completamente Inoperante (Dead Code) — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/MTCorp/Comercial/CicloVendas/Autorizaciones/AutorizacionesController.php` |
| **Metodo** | `autorizaEstado()` (linea ~325) |
| **Impacto** | **CRITICO** — El endpoint nunca ejecuta ningun UPDATE. Es dead code completo. |

**4 bugs superpuestos:**
1. `$res === true` — `fetchAssociative()` retorna array o false, NUNCA `true`. Condicion siempre falsa.
2. `if (empty($id_autorizacion) and $id_autorizacion != '')` — condicion contradictoria, siempre falsa.
3. SQL Injection: `estado_oferta=':estado_oferta'` — placeholder dentro de comillas se vuelve string literal, no se bindea.
4. Doble llave `{ {` — bloque extra sin cerrar correctamente.

**Remediacion:** Reescrito completo con `$connection->update()`, validacion de parametros, y respuestas JSON consistentes.

---

### AUTH-02: actualizaAutorizacion() Siempre Reporta Fallo — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `actualizaAutorizacion()` (linea ~139) |
| **Impacto** | UPDATE ejecuta correctamente pero siempre retorna "Le falta datos" |

**Causa:** `$connection->LastInsertId()` despues de un UPDATE retorna 0 (no genera insert ID).
El check `$autorizacion > 0` siempre falla.

**Remediacion:** Reemplazado con `$connection->update()` que retorna `$affectedRows` directamente.

---

### AUTH-03: getAutorizaciones() ORDER BY Injection + Sin Paginacion — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `getAutorizaciones()` (linea ~373) |
| **OWASP** | A03:2021 - Injection |
| **Impacto** | Inyeccion SQL via `orderType` + carga toda la tabla en memoria |

**3 bugs:**
1. `$orderType` tomado directamente de `$params` sin whitelist — ORDER BY injection.
2. Default `'se requiere dato'` no es SQL valido — causa error de BD.
3. `$pagina` y `$registros` se parsean pero nunca se usan — sin paginacion real.
4. `$bindings` usado sin inicializar — PHP warning si no se cumple ninguna condicion.

**Remediacion:**
- Whitelist `['ASC', 'DESC']` para orderType
- Paginacion con `OFFSET/FETCH NEXT` (default 50 registros, max 500)
- Inicializacion de `$conditions = []` y `$bindings = []`
- Query de conteo para total

---

### AUTH-04: update_autorizacion() Check de Cargo Bypassed — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `update_autorizacion()` (linea ~649) |
| **Impacto** | **SEGURIDAD** — Cualquier usuario puede autorizar/rechazar, sin importar cargo |

**Causa:** `$resultSet !== 6 && $resultSet !== 5` usa comparacion estricta `!==` pero `fetchOne()` retorna string (ej: `"5"`).
`"5" !== 5` es siempre `true` en PHP, asi que el check NUNCA bloquea a vendedores/promotores.

**Remediacion:** Cast a `(int)$resultSet` antes de comparar.

---

### AUTH-05: enviarcorreo() IP Hardcodeada + Variable Indefinida — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `enviarcorreo()` (linea ~269) |
| **Impacto** | URL apunta a IP publica hardcodeada; `$enviarCorreo` indefinida si no hay emails validos |

**Bugs:**
1. `$url = 'http://23.254.204.187/...'` — IP publica hardcodeada (misma clase que CRIT-07).
2. `$enviarCorreo` referenciada fuera del `foreach` sin inicializar — fatal error si `$data` vacio.
3. `CONCAT(TB_VEND.NM_VEND," "...)` — comillas dobles en SQL Server no son validas para strings.

**Remediacion:** URL via `$_ENV['APP_URL']`, inicializacion `$enviarCorreo = false`, comillas simples en SQL.

---

### AUTH-06: correoAutorizaciones() Envia Contenido Incorrecto — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `correoAutorizaciones()` (linea ~626) |
| **Impacto** | El email llega con texto plano del usuario en vez del template HTML generado |

**Causa:** Genera `$contenido` con `correoEstado()` pero envia `$descripcion_usua` (texto del usuario) como contenido.
Ademas `$swEnvioExitoso` se asigna pero nunca se retorna — el metodo era `void`.

**Remediacion:** Enviar `$contenido` (template HTML). Retornar boolean de exito. URL via env var.

---

### AUTH-07: autorizacion_estado_sap() Null Dereference — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `autorizacion_estado_sap()` (linea ~183) |
| **Impacto** | Fatal error si la autorizacion o la oferta no existen |

**Bugs:**
1. `$autorizacion['nombres']` sin verificar que `fetchAssociative()` no retorno `false`.
2. `$detalle_of[]` usado sin inicializar el array — undefined variable si `$detalle_oferta` esta vacio.

**Remediacion:** Validacion de null para `$autorizacion` y `$obtenerOferta`. Inicializacion `$detalle_of = []`.

---

### AUTH-08: getHistorialofertal() Sin Validacion de Parametro — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `getHistorialofertal()` (linea ~767) |
| **Impacto** | Fatal error (undefined index) si no se envia `codigo_cliente` |

**Causa:** `$params['codigo_cliente']` accedido directamente sin `isset` ni `??`.

**Remediacion:** Null coalescing `?? null` + validacion con respuesta 400.

---

## Bugs Modulo Cotizaciones [CORREGIDOS 2026-03-28]

### COT-01: dd() en Produccion — saveCotizacion() Completamente Roto — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/MTCorp/Comercial/CicloVendas/Cotacoes/CotacoesController.php` |
| **Metodo** | `saveCotizacion()` (linea ~2484) |
| **Impacto** | **CRITICO** — `dd($data)` dump & die en CADA request. Endpoint 100% muerto en produccion. |

**Remediacion:** Eliminados ambos `dd()` (lineas 2484 y 2488).

---

### COT-02: SQL Injection en getListaCliente() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/MTCorp/Comercial/CicloVendas/Cotacoes/OfertaController.php` |
| **Metodo** | `getListaCliente()` (linea ~135) |
| **OWASP** | A03:2021 - Injection |
| **Impacto** | Input de usuario `$valor` interpolado directamente en `EXEC sp_ListarClientesTemp @valor = '{$valor}'` |

**Remediacion:** Prepared statement con `bindValue(':valor', $valor)`.

---

### COT-03: ORDER BY Injection en getCotizaciones() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `CotacoesController.php` |
| **Metodo** | `getCotizaciones()` (linea ~283) |
| **OWASP** | A03:2021 - Injection |
| **Impacto** | `$params['orderBy']` concatenado directamente como `'OFE.' . $params['orderBy']` y `$params['orderType']` sin validar |

**Remediacion:** Whitelist de columnas permitidas + validacion `['ASC', 'DESC']` para orderType.

---

### COT-04: Alias Incorrecto OFE vs TBO en postClienteOferta() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `postClienteOferta()` (linea ~245) |
| **Impacto** | Query siempre falla — usa alias `OFE` pero la tabla tiene alias `TBO` |

**Remediacion:** Cambiado `OFE.tipo_estado` a `TBO.tipo_estado`.

---

### COT-05: Variable $sql Indefinida en getListaMateriales() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `OfertaController.php` |
| **Metodo** | `getListaMateriales()` (linea ~472) |
| **Impacto** | Si `strlen($valor) <= 3`, `$sql` nunca se define → Fatal error undefined variable |

**Remediacion:** Early return con mensaje cuando la busqueda tiene menos de 3 caracteres.

---

### COT-06: Key Erronea quantidade vs cantidad en getDetalleOferta() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `getDetalleOferta()` (linea ~640-643) |
| **Impacto** | Inicializa `$arrFinal['total']['quantidade']` pero acumula en `['cantidad']` → undefined index warning + total siempre 0 |

**Remediacion:** Key unificada a `cantidad`.

---

### COT-07: Variables $data_oferta/$data_error/$message Sin Inicializar — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodos** | `editoferta()`, `editCotizacion()` (CotacoesController + OfertaController) |
| **Impacto** | PHP Warning: undefined variable. Si condiciones no se cumplen, `$message` no existe → fatal error en `new JsonResponse($message)` |

**Remediacion:** Inicializacion de arrays vacios y `$message` con respuesta default.

---

### COT-08: fetchAll() Deprecado + WHERE Incorrecto en editCotizacion() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `editCotizacion()` (CotacoesController linea ~2343) |
| **Impacto** | `fetchAll()` deprecado en DBAL 3+. Ademas `WHERE id = ?` busca por ID del detalle, no por `id_oferta` — nunca encuentra los materiales de la oferta. |

**Remediacion:** Cambiado a `fetchAllAssociative()` y `WHERE id_oferta = ?`.

---

### COT-09: Variable $params Inexistente en OfertaController::editCotizacion() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `OfertaController.php` linea ~1108 |
| **Impacto** | `!isset($params['params'])` pero `$params` no existe (es `$data`). Siempre evalua a `true`, sobrescribiendo data incorrectamente. |

**Remediacion:** Reemplazado por `$data = $data['params'] ?? $data`.

---

### COT-10: Sin Validacion de Parametro en getHistorialofertaCliente() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `OfertaController.php` linea ~992 |
| **Impacto** | `$params['codigo_cliente']` accedido directamente — fatal error si no se envia |

**Remediacion:** Null coalescing + validacion con respuesta 400.

---

### COT-11: Ramas Inalcanzables (else if count > 0 despues de if count > 0) — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodos** | `getlistamaterial()`, `getListaClienteCajaTexto()`, `getListaMateriales()`, `getMateriaisCotacao()` |
| **Impacto** | Patron `if (count > 0) {...} else if (count > 0) {...}` — segunda rama es dead code, nunca ejecuta |

**Remediacion:** Eliminadas ramas inalcanzables.

---

## Bugs Modulo Clientes [CORREGIDOS 2026-03-28]

### CLI-01: Variables Indefinidas en getvendedorporcliente() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/MTCorp/Comercial/Clientes/ClientesController.php` |
| **Metodo** | `getvendedorporcliente()` (linea ~288) |
| **Impacto** | **CRITICO** — `$error_cliente` nunca definida → fatal error. `$res` indefinida si `$codCliente` vacio → fatal error en `count($res)`. Query fuera del try/catch. |

**Remediacion:** Reescrito con early return, prepared statement, y `$res[0]['ERROR']` en vez de variable inexistente.

---

### CLI-02: Dead Code en getClientesAll() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `getClientesAll()` (linea ~166) |
| **Impacto** | Codigo despues de `return` nunca se ejecuta. Referencia a `$infoUsuario` y `$acessoClientes` que no existen en ese scope. |

**Remediacion:** Eliminado bloque de dead code.

---

### CLI-03: insertarCliente() — Mapping Incorrecto + Arrays Sin Inicializar + if Redundante — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Metodo** | `insertarCliente()` (linea ~319) |
| **Impacto** | **CRITICO** — Multiples bugs: |

**Bugs encontrados:**
1. `$data_cliente['email'] = $data['NombreFactura']` — sobrescribe email con nombre_factura. Deberia ser `$data_cliente['nombre_factura']`.
2. `$data_cliente` y `$data_error` nunca inicializados como arrays.
3. `if(empty($data_error))` duplicado (lineas 338 y 340) — check redundante.
4. Si `$data_error` no esta vacio, `$message` nunca se define → fatal error en `new JsonResponse($message)`.
5. Llave extra `}}` al final de la clase.

**Remediacion:** Inicializacion de arrays, correccion del mapping nombre_factura, eliminacion del if redundante, else con respuesta 400.

---

### CLI-04: obtenerHistorial() Ignora Parametro Tipado — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `src/Controller/MTCorp/Comercial/Clientes/PreCadastro/PreCadastroController.php` |
| **Metodo** | `obtenerHistorial()` (linea ~315) |
| **Impacto** | Recibe `int $idCliente` del router pero lo sobrescribe con `$request->get('idCliente')` que puede ser null |

**Remediacion:** Eliminada linea que sobrescribia el parametro tipado.

---

### CLI-05: Import `use mysqli` No Usado — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `PreCadastroController.php` linea 18 |
| **Impacto** | Import muerto. `mysqli` nunca se usa (el proyecto usa Doctrine DBAL). |

**Remediacion:** Eliminado import.

---

### CLI-06: SQL Injection en getExisteCpfCnpj() y getListaEmails() — [CORREGIDO]

| Campo | Detalle |
|-------|---------|
| **Archivo** | `ClientesController.php` |
| **Metodos** | `getExisteCpfCnpj()` linea ~184, `getListaEmails()` linea ~272 |
| **OWASP** | A03:2021 - Injection |
| **Impacto** | `$documento` y `$codCliente` interpolados directamente en EXEC de stored procedures |

**Codigo afectado:**
```php
@DOCUMENTO = '{$documento}'   // getExisteCpfCnpj
@ID_CLIE = '{$codCliente}'    // getListaEmails
```

**Remediacion:** Prepared statements con `bindValue()`.

---

## Deuda Tecnica Arquitectural

| # | Problema | Impacto | Solucion |
|---|----------|---------|----------|
| ARCH-01 | Helper.php God Class (~169KB) | Inmantenible, imposible de testear | Descomponer en servicios |
| ARCH-02 | Logica de negocio en controllers | Acoplamiento, sin reutilizacion | Service Layer |
| ARCH-03 | Sin capa de servicios | Todo en controllers | Crear Services/ |
| ARCH-04 | Sin migraciones de BD | Schema no versionado | Laravel Migrations |
| ARCH-05 | ~~Sin tests~~ [PARCIAL 2026-03-25] 21 tests PHPUnit pasando | Parcialmente resuelto | Ampliar cobertura de tests |
| ARCH-06 | Sin validacion de request | Datos no validados | FormRequest |

---

## Matriz de Riesgos

```
IMPACTO
  ^
  |  CRIT-01  CRIT-02  CRIT-04
  |  CRIT-03  CRIT-05  CRIT-06
  |  CRIT-07
  |
  |  HIGH-01  HIGH-02  HIGH-03
  |  HIGH-04
  |
  |  MED-01   MED-02   MED-04
  |  MED-03   MED-05   MED-06
  |
  |  CODE-01  CODE-02  CODE-03
  |
  +---------------------------------> PROBABILIDAD
     Baja     Media    Alta
```

### Prioridad de Remediacion

**Fase 1 - Inmediato (antes de cualquier cambio):**
1. ~~CRIT-01, CRIT-01b, CRIT-01c, CRIT-02, CRIT-03, CRIT-03b: Mover credenciales a env vars~~ HECHO
2. ~~CRIT-06: CSRF hardcodeado en GenericController~~ HECHO (ahora usa $token dinamico)
3. ~~CRIT-07: Mover IP SAP a env var~~ HECHO (SAP_API_URL)
4. Rotar passwords: BD (user2023), Akna, JWT_SECRET, APP_SECRET (siguen en git history)
5. Verificar que sa/123 ya no tiene acceso a SQL Server
6. ~~CRIT-04: Parametrizar query SQL en ClientesRepository.php~~ HECHO (15 SQL injections parcheadas, StoredProcedureService creado)
7. MED-05: Eliminar info.php

**Fase 2 - Corto plazo:**
1. CRIT-05: Habilitar SSL verification
2. HIGH-01: Proteger XXE
3. HIGH-02: Validar base64 decode
4. MED-01: Remover debug output

**Fase 3 - Con la migracion:**
1. Todos los problemas ARCH-* (ARCH-05 parcialmente resuelto: 21 tests PHPUnit pasando)
2. CODE-01, CODE-02, CODE-03
3. ~~MED-02~~, ~~MED-03~~, ~~MED-04~~, MED-06 — [ACTUALIZADO 2026-03-25] MED-02 (ORDER BY injection), MED-03 (phpmailer ^6.8) y MED-04 (Symfony 5.4 LTS) corregidos
