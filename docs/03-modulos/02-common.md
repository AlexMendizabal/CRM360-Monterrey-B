# Modulo: Common (Servicios Compartidos)

## Ubicacion
```
src/Controller/Common/
├── AtividadesController.php
├── CommonController.php
├── GenericController.php
├── ModulosController.php
├── UsuarioController.php
├── Services/
│   ├── CepController.php
│   ├── CnpjController.php
│   ├── CurlController.php
│   ├── DateController.php
│   ├── FormRules.php
│   ├── FunctionsController.php
│   ├── GoogleApiService.php
│   ├── ParseFileFromRequestController.php
│   └── SendEmailController.php
└── Traits/
    ├── CurlTrait.php
    ├── LogTrait.php
    ├── TrataCaracteresTrait.php
    └── TrataValoresInvalidosTrait.php
```

---

## Controllers Principales

### AtividadesController
- **Archivo:** `src/Controller/Common/AtividadesController.php`
- **Ruta:** `PUT /common/atividades/registrar-acesso`
- **Funcion:** Registra acceso de usuario al sistema en la base de datos
- **Dependencias:** DBAL Connection

### CommonController
- **Archivo:** `src/Controller/Common/CommonController.php`
- **Rutas:**
  - `GET /common/v2/grupos` → Lista grupos (`common.grupos-listar`)
  - Otros endpoints de datos maestros compartidos
- **Funcion:** Operaciones comunes (grupos, tipos de empresa)
- **Stored Procedures:** `PRC_GRUP_CONS`, `PRC_TIPO_EMPR_CONS`

### GenericController
- **Archivo:** `src/Controller/Common/GenericController.php`
- **Funcion:** Operaciones genericas (TopDesk, integraciones varias)
- **BUGS:** Contiene `print_r()` y `exit` en produccion, CSRF hardcodeado, SSL deshabilitado

### ModulosController
- **Archivo:** `src/Controller/Common/ModulosController.php`
- **Funcion:** Gestion y consulta de modulos del sistema

### UsuarioController
- **Archivo:** `src/Controller/Common/UsuarioController.php`
- **Metodos estaticos:**
  - `infoUsuario($request)` → Decodifica info de usuario del header X-User-Info
  - `ipUsuario($request)` → Obtiene IP del cliente
- **Bug:** `base64_decode()` sin validacion ni try-catch

---

## Servicios (src/Controller/Common/Services/)

> NOTA: Estos "servicios" estan implementados como Controllers, no como Services
> de Symfony. Es un anti-patron que debera corregirse en la migracion.

### CepController
- **Funcion:** Consulta de codigos postales (CEP)
- **Bug:** SSL verification deshabilitado

### CnpjController
- **Funcion:** Validacion de CNPJ (registro fiscal brasileno)
- **Bug:** SSL verification deshabilitado (`CURLOPT_SSL_VERIFYPEER = false`)

### CurlController
- **Funcion:** Wrapper para peticiones HTTP via cURL
- **Bug:** SSL verification deshabilitado

### DateController
- **Funcion:** Utilidades de manejo de fechas

### FormRules
- **Funcion:** Reglas de validacion de formularios

### FunctionsController
- **Funcion:** Funciones utilitarias generales
- **Metodos clave:**
  - `setMask($value, $mask)` - Aplica mascara a valores (CPF, CNPJ, telefono)
  - `Retorno($data, $code)` - Formato estandar de respuesta JSON

### GoogleApiService
- **Funcion:** Integracion con APIs de Google
- **Bug:** SSL verification deshabilitado

### ParseFileFromRequestController
- **Funcion:** Procesa archivos subidos desde el request

### SendEmailController
- **Funcion:** Envio de correos electronicos
- **Dependencias:** PHPMailer

---

## Traits (src/Controller/Common/Traits/)

### CurlTrait
- **Funcion:** Agrega funcionalidad HTTP a controllers
- **Uso:** `use CurlTrait;` en controllers que necesitan hacer requests HTTP

### LogTrait
- **Funcion:** Agrega funcionalidad de logging
- **Uso:** Registrar operaciones y errores

### TrataCaracteresTrait
- **Funcion:** Tratamiento y sanitizacion de caracteres especiales
- **Uso:** Limpiar strings de entrada/salida

### TrataValoresInvalidosTrait
- **Funcion:** Manejo de valores nulos, vacios o invalidos
- **Uso:** Sanitizacion de datos antes de procesar

---

## Helper Service

### Helper.php
- **Archivo:** `src/Services/Helper.php`
- **Tamano:** ~169KB (GOD CLASS)
- **Tipo:** Clase de servicio monolitica

**Metodos principales:**

| Metodo | Proposito |
|--------|-----------|
| `calcularDesc()` | Calcula descuentos (cliente, cantidad, material, depto) |
| `idOferta()` | Obtiene ultimo ID de oferta |
| `verificarUsuario()` | Verifica existencia de usuario |
| `traerVendedorId()` | Obtiene vendedor por ID |
| `buscarUsuario()` | Busca usuario en BD |

**Propiedades:**
- `url_sap = 'http://192.168.0.123:4100/api'` → IP hardcodeada de SAP

**Dependencias:**
- PHPMailer
- Symfony HttpClient
- Doctrine DBAL Connection

> CRITICO: Esta clase debe descomponerse en multiples servicios durante la migracion.
> Ver docs/10-arquitectura-laravel/ para la propuesta de refactoring.
