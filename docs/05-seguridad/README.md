# 05 - Seguridad

## Indice

- [Arquitectura de Seguridad](#arquitectura-de-seguridad)
- [Autenticacion JWT](#autenticacion-jwt)
- [Event Subscribers](#event-subscribers)
- [Rutas Publicas](#rutas-publicas)
- [Modelo de Permisos](#modelo-de-permisos)
- [Problemas de Seguridad](#problemas-de-seguridad)

---

## Arquitectura de Seguridad

```
Request HTTP
    |
    v
[BeforeActionSubscriber]
    |
    ├── Valida Accept: application/json       → 406 si falla
    ├── Valida Content-Type: application/json  → 415 si falla
    |
    v
[JwtAuthenticator]
    |
    ├── Ruta publica? → Skip
    ├── Extrae Bearer token
    ├── Decodifica JWT (HS256)
    ├── Valida expiracion
    └── Token invalido? → 401
    |
    v
[Controller]
    |
    ├── Lee X-User-Info header (base64 encoded)
    ├── Decodifica info de usuario
    └── Ejecuta accion
```

**Nota:** NO hay autorizacion a nivel de ruta. Una vez autenticado,
el usuario puede acceder a cualquier endpoint. La autorizacion
se maneja dentro de cada controller individualmente (si existe).

---

## Autenticacion JWT

### Archivo: src/Security/Core/JwtAplication.php

**Configuracion:**
| Parametro | Valor |
|-----------|-------|
| Algoritmo | HS256 |
| Expiracion | 3600 segundos (1 hora) |
| Issuer | mtcorp.com.br |
| Secret | Variable `JWT_SECRET` |
| Libreria | [ACTUALIZADO 2026-03-25] `firebase/php-jwt` ^6.0 (antes ^5.0). Usa clase `Key` para decodificacion segura. |

**Flujo de generacion (Login):**
```
1. POST /login → LoginController
2. Ejecuta SP: PRC_CORE_USUA_AUTE(@matricula)
3. Obtiene datos del usuario de MSSQL
4. password_verify($input, $hash) → true?
5. JwtAplication::encode([
     'matricula' => ...,
     'id' => ...,
     'nome' => ...,
     ...
   ])
6. Retorna: { token: "eyJ...", user: {...} }
```

**Flujo de validacion (Cada request):**
```
1. Request llega con header: Authorization: Bearer eyJ...
2. JwtAuthenticator extrae el token
3. JwtAplication::decode($token)
4. Verifica: algoritmo, expiracion, firma
5. Token valido → continua al controller
6. Token invalido → JsonResponse 401
```

### Estructura del Token JWT
```json
{
  "header": {
    "typ": "JWT",
    "alg": "HS256"
  },
  "payload": {
    "iss": "mtcorp.com.br",
    "exp": 1234567890,
    "data": {
      "matricula": "...",
      "id": "...",
      "nome": "...",
      "perfis": [...]
    }
  }
}
```

---

## Event Subscribers

### JwtAuthenticator
- **Archivo:** `src/Security/Core/JwtAuthenticator.php`
- **Evento:** `KernelEvents::CONTROLLER`
- **Prioridad:** Default

**Logica:**
```php
public function onKernelController(ControllerEvent $event)
{
    $routeName = $event->getRequest()->get('_route');

    // Rutas excluidas
    if ($routeName === 'api.core.sap.login') return;
    if ($routeName === 'api.usuario.login') return;

    // Extraer y validar token
    $authHeader = $request->headers->get('Authorization');
    $token = str_replace('Bearer ', '', $authHeader);

    try {
        $decoded = JwtAplication::decode($token);
    } catch (\Exception $e) {
        // Retorna 401
    }
}
```

### BeforeActionSubscriber
- **Archivo:** `src/Security/Core/BeforeActionSubscriber.php`
- **Evento:** `KernelEvents::CONTROLLER`

**Validaciones:**
1. Header `Accept` debe contener `application/json`
   - Si no → HTTP 406 Not Acceptable
2. Header `Content-Type` debe contener `application/json`
   - Si no → HTTP 415 Unsupported Media Type

---

## Rutas Publicas (Sin autenticacion)

| Ruta | Nombre | Controller |
|------|--------|-----------|
| POST /login | `api.usuario.login` | LoginController |
| POST /sap/login | `api.core.sap.login` | SapController |

Todas las demas rutas (~818) requieren JWT valido.

---

## Configuracion de Seguridad Symfony

**Archivo:** `config/packages/security.yaml`

```yaml
security:
    firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false
        main:
            anonymous: true       # Acepta requests anonimos
            stateless: true       # Sin sesion server-side (API)
    access_control: []            # SIN control de acceso por ruta
```

**Implicaciones:**
- Symfony NO maneja autenticacion ni autorizacion — todo se delega a subscribers custom
- `anonymous: true` + `stateless: true` = cada request es independiente
- Sin `access_control` = sin restricciones de firewall por path
- CSRF esta habilitado en framework.yaml pero no se usa en la practica (API JSON)

**Estado de credenciales:**

| Credencial | Estado | Accion |
|------------|--------|--------|
| APP_SECRET | CORREGIDO: `.env` ahora tiene placeholder | Valor real va en `.env.local` |
| JWT_SECRET | CORREGIDO: `.env` ahora tiene placeholder | Valor real va en `.env.local` |
| DB user/pass | CORREGIDO: `doctrine.yaml` usa `%env(DB_*)%` | Valor real va en `.env.local` |
| DB old files | ELIMINADOS: `doctrine_old.yaml`, `.bak`, etc. | Rotar passwords (git history) |
| Akna creds | CORREGIDO: `AknaConfig.php` usa `$_ENV['AKNA_*']` | Valor real va en `.env.local` |
| SAP IP | CORREGIDO: `Helper.php` usa `$_ENV['SAP_API_URL']` | Valor real va en `.env.local` |
| SMTP (Helper) | CORREGIDO: `Helper.php` usa `$_ENV['MAIL_*']` | Valor real va en `.env.local` |
| CSRF TopDesk | CORREGIDO: `GenericController.php` ahora usa `$token` dinamico | Bug fix |
| SMTP (swiftmailer) | [ACTUALIZADO 2026-03-25] SwiftMailer REMOVIDO, reemplazado por Symfony Mailer | Configuracion via `MAILER_DSN` en `.env.local` |

> PENDIENTE: Las credenciales anteriores siguen en el historial de git.
> Se recomienda rotar TODAS las passwords.

---

## Modelo de Permisos

### Estructura en Base de Datos
```
Usuario
  └── tiene muchos → Perfil (Rol)
       └── tiene muchos → Actividad (Permiso)

Modulo
  └── tiene muchos → Submodulo

Acceso = Usuario + Modulo/Submodulo + Actividad
```

### Controllers de Gestion
- `MTCorp/Core/Usuarios/` → CRUD de usuarios
- `MTCorp/Core/Perfis/` → CRUD de perfiles
- `MTCorp/Core/Atividades/` → CRUD de actividades
- `MTCorp/Core/Acessos/` → Control de acceso

### Verificacion en Codigo
```php
// En ComercialController
public function verificaSiglaPerfil($connection, $sigla, $infoUsuario)
{
    // Verifica si el usuario tiene el perfil con la sigla dada
}
```

> NOTA: La verificacion de permisos NO es sistematica. Algunos controllers
> verifican permisos, otros no. No hay un middleware de autorizacion.

---

## Problemas de Seguridad

> Para la lista completa y detallada, ver docs/06-bugs-vulnerabilidades/

### Resumen

| Severidad | Cantidad | Ejemplos |
|-----------|----------|----------|
| CRITICA | 7 | Secrets expuestos, SQL injection, SSL disabled |
| ALTA | 4 | XXE, base64 sin validar, sin CSRF |
| MEDIA | 5 | Debug output, ORDER BY injection |
| BAJA | 3 | Imports no usados, code deprecated |

> [ACTUALIZADO 2026-03-25] **15 vulnerabilidades de SQL injection fueron parcheadas** con prepared statements
> y parametros vinculados. Se creo `StoredProcedureService` para ejecucion segura de SPs.
> `BeforeActionSubscriber` sigue activo validando headers `Accept` y `Content-Type` en cada request.
> `phpmailer/phpmailer` fijado a ^6.8. Symfony actualizado a 5.4 LTS. PHP actualizado a 8.1.
> SwiftMailer removido, reemplazado por Symfony Mailer. JWT actualizado a firebase/php-jwt ^6.0.
> 21 tests PHPUnit pasando.

### Recomendaciones Inmediatas (Antes de migrar)

1. Mover TODOS los secrets a variables de entorno seguras
2. Habilitar SSL verification en todas las peticiones cURL
3. ~~Parametrizar todas las queries SQL~~ [CORREGIDO] 15 SQL injections parcheadas (2026-03-25)
4. Remover `print_r()` y `exit` del codigo
5. Remover `info.php` del servidor
