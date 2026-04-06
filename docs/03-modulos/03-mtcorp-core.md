# Modulo: MTCorp Core (Usuarios, Perfiles y Accesos)

## Ubicacion
```
src/Controller/MTCorp/Core/
├── Acessos/
│   └── AcessosController.php
├── Atividades/
│   ├── AtividadesController.php
│   └── TiposController.php
├── Perfis/
│   ├── PerfisController.php
│   └── AtividadesController.php
├── Usuarios/
│   ├── UsuariosController.php
│   └── PerfisController.php
├── ContraSenhaController.php
├── ModulosController.php
├── SubmodulosController.php
└── NotificacionesController.php
```

---

## Controllers

### AcessosController
- **Archivo:** `src/Controller/MTCorp/Core/Acessos/AcessosController.php`
- **Funcion:** Gestion de control de acceso al sistema
- **Operaciones:** CRUD de permisos de acceso a modulos/funciones

### AtividadesController (Atividades)
- **Archivo:** `src/Controller/MTCorp/Core/Atividades/AtividadesController.php`
- **Funcion:** Gestion de actividades del sistema
- **Operaciones:** Registrar, listar, modificar actividades

### TiposController
- **Archivo:** `src/Controller/MTCorp/Core/Atividades/TiposController.php`
- **Funcion:** Tipos de actividades (categorias)
- **Operaciones:** CRUD de tipos

### PerfisController (Perfis)
- **Archivo:** `src/Controller/MTCorp/Core/Perfis/PerfisController.php`
- **Funcion:** Gestion de perfiles/roles del sistema
- **Operaciones:** CRUD de perfiles

### AtividadesController (Perfis)
- **Archivo:** `src/Controller/MTCorp/Core/Perfis/AtividadesController.php`
- **Funcion:** Mapeo de actividades permitidas por perfil
- **Operaciones:** Asignar/remover actividades a perfiles

### UsuariosController
- **Archivo:** `src/Controller/MTCorp/Core/Usuarios/UsuariosController.php`
- **Funcion:** Gestion de usuarios del sistema
- **Operaciones:** CRUD de usuarios, activacion/desactivacion

### PerfisController (Usuarios)
- **Archivo:** `src/Controller/MTCorp/Core/Usuarios/PerfisController.php`
- **Funcion:** Asignacion de perfiles a usuarios
- **Operaciones:** Asignar/remover perfiles de usuarios

### ContraSenhaController
- **Archivo:** `src/Controller/MTCorp/Core/ContraSenhaController.php`
- **Funcion:** Gestion de contrasenas
- **Operaciones:** Cambio de contrasena, reset

### ModulosController
- **Archivo:** `src/Controller/MTCorp/Core/ModulosController.php`
- **Funcion:** Configuracion de modulos del sistema
- **Operaciones:** CRUD de modulos

### SubmodulosController
- **Archivo:** `src/Controller/MTCorp/Core/SubmodulosController.php`
- **Funcion:** Configuracion de submodulos
- **Operaciones:** CRUD de submodulos dentro de modulos

### NotificacionesController
- **Archivo:** `src/Controller/MTCorp/Core/NotificacionesController.php`
- **Funcion:** Sistema de notificaciones
- **Operaciones:** Crear, listar, marcar como leidas

---

## Modelo de Permisos

```
Usuario (1) ──> (N) Perfil/Rol
Perfil  (1) ──> (N) Actividad/Permiso
Modulo  (1) ──> (N) Submodulo
Acceso  = Usuario + Modulo + Permiso
```

**Flujo de autorizacion:**
1. Usuario se autentica (LoginController)
2. Se cargan sus perfiles
3. Cada perfil tiene actividades/permisos asociados
4. Los modulos/submodulos definen la estructura del sistema
5. Los accesos determinan que puede ver/hacer cada usuario

---

## Stored Procedures Relacionados

| Procedure | Proposito |
|-----------|-----------|
| `PRC_CORE_USUA_AUTE` | Autenticar usuario por matricula |
| (otros por descubrir) | Gestion de usuarios, perfiles, accesos |

> NOTA: La lista completa de stored procedures requiere acceso al SQL Server.
