# Modulo: Core (Autenticacion y Sistema)

## Ubicacion
```
src/Controller/Core/
├── HomeController.php
├── LoginController.php
└── SapController.php
```

---

## Controllers

### HomeController
- **Archivo:** `src/Controller/Core/HomeController.php`
- **Ruta:** `GET /`
- **Nombre:** `api.home`
- **Funcion:** Retorna mensaje de bienvenida (health check)
- **Autenticacion:** No requerida

### LoginController
- **Archivo:** `src/Controller/Core/LoginController.php`
- **Ruta:** `POST /login` (estimado)
- **Nombre:** `api.usuario.login`
- **Funcion:** Autenticacion de usuarios
- **Autenticacion:** Excluido del JWT check

**Flujo de autenticacion:**
1. Recibe `matricula` y `password` via POST
2. Ejecuta stored procedure `PRC_CORE_USUA_AUTE` con la matricula
3. Obtiene datos del usuario de SQL Server
4. Valida password con `password_verify()`
5. Genera JWT token via `JwtAplication::encode()`
6. Retorna token + datos del usuario

**Respuesta exitosa:**
```json
{
  "responseCode": 200,
  "result": {
    "token": "eyJ...",
    "user": { ... }
  }
}
```

**Dependencias:**
- `Doctrine\DBAL\Connection` - Acceso a BD
- `JwtAplication` - Generacion de tokens
- Stored procedure: `PRC_CORE_USUA_AUTE`

### SapController
- **Archivo:** `src/Controller/Core/SapController.php`
- **Ruta:** `POST /sap/login` (estimado)
- **Nombre:** `api.core.sap.login`
- **Funcion:** Endpoint de integracion con SAP
- **Autenticacion:** Excluido del JWT check
- **Nota:** Valida usuario hardcodeado `crm360`

**Imports no usados detectados:**
- `Doctrine\DBAL\DriverManager`
- `Doctrine\DBAL\ParameterType`
- `Doctrine\DBAL\Query\QueryBuilder`
- `Symfony\Component\Serializer\Encoder\JsonDecode`

---

## Componentes de Seguridad

### JwtAplication
- **Archivo:** `src/Security/Core/JwtAplication.php`
- **Algoritmo:** HS256
- **Expiracion:** 3600 segundos (1 hora)
- **Issuer:** `mtcorp.com.br`
- **Secret:** Variable `JWT_SECRET` del `.env`

**Metodos:**
- `encode($data)` - Genera JWT con payload
- `decode($token)` - Decodifica y valida JWT

### JwtAuthenticator
- **Archivo:** `src/Security/Core/JwtAuthenticator.php`
- **Tipo:** EventSubscriber (`KernelEvents::CONTROLLER`)
- **Metodo:** `onKernelController(ControllerEvent $event)`

**Logica:**
1. Obtiene ruta actual del request
2. Si es ruta excluida (`api.core.sap.login` o `api.usuario.login`) → skip
3. Extrae token del header `Authorization: Bearer <token>`
4. Decodifica con `JwtAplication::decode()`
5. Si falla → `JsonResponse` con codigo 401

### BeforeActionSubscriber
- **Archivo:** `src/Security/Core/BeforeActionSubscriber.php`
- **Tipo:** EventSubscriber (`KernelEvents::CONTROLLER`)
- **Metodo:** `onKernelController(ControllerEvent $event)`

**Validaciones:**
- Header `Accept` debe contener `application/json` → 406 si no
- Header `Content-Type` debe contener `application/json` → 415 si no

---

## Stored Procedures del Modulo

| Procedure | Proposito |
|-----------|-----------|
| `PRC_CORE_USUA_AUTE` | Autenticacion: busca usuario por matricula |
