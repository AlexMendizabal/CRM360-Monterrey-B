# 13 - Deploy a Produccion

## Indice

- [Informacion del Servidor](#informacion-del-servidor)
- [Pre-requisitos](#pre-requisitos)
- [Proceso de Deploy](#proceso-de-deploy)
- [Archivos Excluidos](#archivos-excluidos)
- [Post-Deploy](#post-deploy)
- [Checklist](#checklist)
- [Troubleshooting](#troubleshooting)

---

## Informacion del Servidor

### Servidor de Produccion

| Campo | Valor |
|-------|-------|
| IP Interna (LAN) | `172.20.20.13` |
| IP Externa (VPN/Red) | `192.168.255.13` |
| Sistema Operativo | Windows Server 2012 R2 |
| Servidor Web | IIS |
| Site Name | `crm360` |
| Application Pool | `Pool Test` |
| Physical Path (IIS) | `C:\inetpub\wwwroot\Monterrey_App\frontend` |
| Backend (PHP/Symfony) | `C:\inetpub\wwwroot\Monterrey_App\` (carpetas del backend) |
| Frontend (build Vue/JS) | `C:\inetpub\wwwroot\Monterrey_App\frontend\` |

> El IIS apunta a `frontend\` como raiz publica.
> El backend (PHP/Symfony: src, vendor, config, etc.) vive en `Monterrey_App\` al mismo nivel.
> IIS maneja el rewrite de rutas hacia `index.php` via `web.config`.

### Bindings IIS

| Tipo | IP | Puerto | Hostname |
|------|----|--------|----------|
| HTTPS | `172.20.20.13` | 443 | `crm360.monterrey.com.bo` |
| HTTPS | `192.168.255.13` | 443 | `crm360.monterrey.com.bo` |

### Certificado SSL

| Campo | Valor |
|-------|-------|
| Certificado | `*.monterrey.com.bo` |
| Tipo | Wildcard |

### URL de Produccion

```
https://crm360.monterrey.com.bo
```

---

## Pre-requisitos

Antes de iniciar el deploy, verificar en la maquina local:

- [ ] El codigo en la rama `main` esta limpio y sin conflictos
- [ ] `APP_ENV=prod` y `APP_DEBUG=0` en `.env` (no en `.env.local`)
- [ ] No hay archivos de debug activos (`print_r`, `var_dump`, `exit`)
- [ ] `info.php` no existe en la raiz (o no sera copiado)
- [ ] `composer.json` / `composer.lock` actualizados si se agregaron dependencias
- [ ] Las variables de entorno nuevas que se agregaron estan documentadas (para actualizar `.env.local` en produccion si aplica)
- [ ] Confirmacion de que los cambios fueron probados en ambiente local/dev

---

## Proceso de Deploy

### Paso 1 — Preparar los archivos localmente

En la maquina de desarrollo, asegurarse de que el codigo esta listo:

```bash
# Verificar que no hay cambios pendientes sin commitear
git status

# Ver los cambios que se van a subir (respecto al ultimo deploy)
git log --oneline -10
```

### Paso 2 — Conectar al servidor via RDP

Abrir Remote Desktop Connection y conectar a:

```
IP: 172.20.20.13
```

> Si se esta fuera de la red LAN, conectar primero a VPN y usar `192.168.255.13`.

### Paso 3 — Crear backup en el servidor (IMPORTANTE)

Antes de sobreescribir cualquier archivo, crear una copia de seguridad en el servidor:

```
Origen:  C:\inetpub\wwwroot\Monterrey_App\frontend
Destino: C:\inetpub\wwwroot\Monterrey_App\frontend_backup_YYYY-MM-DD
```

Ejemplo con fecha: `frontend_backup_2026-03-22`

> Este paso es critico. En caso de falla, permite hacer rollback inmediato
> renombrando la carpeta de vuelta a `frontend`.

### Paso 4 — Copiar los archivos nuevos

El proyecto tiene dos partes que se copian por separado:

| Que copiar | Origen (local/dev) | Destino en produccion |
|------------|--------------------|-----------------------|
| Backend (PHP/Symfony) | Raiz del proyecto (`src/`, `config/`, `vendor/`, etc.) | `C:\inetpub\wwwroot\Monterrey_App\` |
| Frontend (build Vue/JS) | Carpeta `frontend/` del proyecto | `C:\inetpub\wwwroot\Monterrey_App\frontend\` |

Sobreescribir todos los archivos **EXCEPTO los que estan en la lista de exclusiones**.

**Metodos posibles:**
- **Copiar/pegar via RDP:** Compartir el disco local en la sesion RDP y copiar directamente
- **FTP:** Conectar con un cliente FTP (FileZilla, WinSCP) a la IP del servidor

### Paso 5 — Proteger `.env.local`

**NUNCA sobreescribir `.env.local` en produccion.**

Este archivo contiene las credenciales reales del servidor:
- `DB_USER` / `DB_PASSWORD` de SQL Server
- `JWT_SECRET` y `APP_SECRET`
- `AKNA_USER` / `AKNA_PASSWORD` / `AKNA_CLIENT`
- `SAP_API_URL`
- Variables de correo SMTP

Si se agregaron nuevas variables de entorno al proyecto, agregarlas manualmente
al `.env.local` de produccion con sus valores reales.

### Paso 6 — Actualizar dependencias (solo si cambio composer)

Si `composer.json` o `composer.lock` fueron modificados, ejecutar en el servidor:

```bash
# Abrir CMD o PowerShell en C:\inetpub\wwwroot\Monterrey_App\frontend
php composer.phar install --no-dev --optimize-autoloader
```

> Si `composer.phar` no existe en el directorio, usar el instalado globalmente:
> `composer install --no-dev --optimize-autoloader`

### Paso 7 — Limpiar cache de Symfony

Abrir CMD o PowerShell como Administrador en el servidor y ejecutar:

```bash
cd C:\inetpub\wwwroot\Monterrey_App\frontend

php bin\console cache:clear --env=prod
php bin\console cache:warmup --env=prod
```

> Si `php` no esta en el PATH, usar la ruta completa de PHP, por ejemplo:
> `C:\PHP\php.exe bin\console cache:clear --env=prod`

### Paso 8 — Verificar permisos de la carpeta var/

El Application Pool (`Pool Test`) necesita permisos de escritura sobre `var\`:

```
C:\inetpub\wwwroot\Monterrey_App\frontend\var\
```

Verificar en propiedades de carpeta → Seguridad que el usuario del pool tiene:
- Lectura y ejecucion
- Escritura
- Modificacion

En caso de error de permisos, desde CMD como Administrador:

```bat
icacls "C:\inetpub\wwwroot\Monterrey_App\frontend\var" /grant "IIS AppPool\Pool Test":(OI)(CI)F
```

---

## Archivos Excluidos

Los siguientes archivos/carpetas **NUNCA deben sobreescribirse** al hacer deploy:

| Archivo / Carpeta | Razon |
|-------------------|-------|
| `.env.local` | Contiene todas las credenciales reales de produccion |
| `public/SQLPDO.php` | Archivo de diagnostico con credenciales de produccion hardcodeadas |
| `public/SQLSRV.php` | Archivo de diagnostico con credenciales de produccion hardcodeadas |

> Los demas archivos (incluyendo `vendor/`, `var/`, `uploads/`) pueden sobreescribirse
> pero hay que tener cuidado:
> - `uploads/` contiene archivos subidos por usuarios. Si no existe en el zip/copia local, no se toca.
> - `var/` se regenera con `cache:clear`, no es necesario copiarlo.

---

## Archivos con Credenciales — Dev vs Produccion

### `public/SQLPDO.php` y `public/SQLSRV.php`

Estos archivos son scripts de diagnostico de conexion a SQL Server. Existen en ambos ambientes
pero con credenciales distintas. **Son archivos de prueba, no los usa la app.**

| Campo | Desarrollo (local) | Produccion |
|-------|--------------------|------------|
| `$serverName` | `ABRAREFLO\ABRAR` | `172.20.20.12` |
| `$databaseName` | `CRM360` | `CRM360` |
| `$uid` | `user2023` | `srvIMTCorp` |
| `$pwd` | `RIC0rp#2023` | `b2moTkrDMcpqPD@QV` |

> **CRITICO:** Al hacer deploy, NO copiar estos archivos desde dev a produccion.
> Los que ya estan en produccion tienen las credenciales correctas del servidor `172.20.20.12`.
> Sobreescribirlos romperia el diagnostico de conexion en produccion.

### `.env` — Variables de entorno

El `.env` base del repositorio tiene valores de desarrollo. En produccion existe un `.env.local`
con los valores reales que **nunca se commitea ni se sobreescribe en deploy**.

| Variable | Desarrollo (`.env` / `.env.local` local) | Produccion (`.env` en servidor) |
|----------|------------------------------------------|---------------------------------|
| `APP_ENV` | `dev` | `prod` |
| `APP_DEBUG` | `1` | `0` |
| `APP_SECRET` | placeholder / valor dev | `2tfxp7uN4Dp93Yc73GBdSxNRDfWNz7mm` |
| `JWT_SECRET` | placeholder / valor dev | `xteFnRUdfqyDJKKZShkRJ7YNJFDbn7VHtV9J6gZB` |
| `DB_HOST` | `host.docker.internal` o `ABRAREFLO\ABRAR` | `172.20.20.12` |
| `DB_NAME` | `CRM360` | `CRM360` |
| `DB_USER` | `user2023` / `Admin` | `srvIMTCorp` |
| `DB_PASSWORD` | `RIC0rp#2023` / `Admin123` | `b2moTkrDMcpqPD@QV` |

> El `.env` que se copia al servidor durante el deploy ya tiene `APP_ENV=prod` y `APP_DEBUG=0`.
> El `.env.local` en produccion sobreescribe las credenciales sensibles (BD, JWT, secrets).
> **Nunca reemplazar el `.env.local` de produccion.**

---

## Post-Deploy

Despues de copiar los archivos y limpiar cache:

### Verificar que la app responde

```bash
# Desde el servidor o desde un cliente en la red
curl -k https://crm360.monterrey.com.bo/ -H "Accept: application/json"

# Respuesta esperada: {"responseCode":200,"message":"CRM360 API"}
```

### Verificar el endpoint de login

```bash
curl -k -X POST https://crm360.monterrey.com.bo/usuario/login \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"matricula":"TEST","senha":"TEST"}'

# Respuesta esperada: 401 o respuesta de usuario no encontrado (NO un error 500)
```

### Verificar logs de IIS

Ubicacion de logs IIS:
```
C:\inetpub\logs\LogFiles\W3SVC{SiteID}\
```

### Verificar logs de Symfony

```
C:\inetpub\wwwroot\Monterrey_App\frontend\var\log\prod.log
```

---

## Checklist

### Pre-deploy
- [ ] Codigo en `main` actualizado y revisado
- [ ] `APP_ENV=prod` / `APP_DEBUG=0` en `.env`
- [ ] Sin archivos de debug activos
- [ ] Backup creado en el servidor

### Durante el deploy
- [ ] `.env.local` NO sobreescrito
- [ ] `public/SQLPDO.php` NO sobreescrito (credenciales de produccion hardcodeadas)
- [ ] `public/SQLSRV.php` NO sobreescrito (credenciales de produccion hardcodeadas)
- [ ] Todos los demas archivos copiados correctamente
- [ ] Variables nuevas agregadas manualmente a `.env.local` si aplica
- [ ] `composer install` ejecutado si hubo cambios en dependencias

### Post-deploy
- [ ] `cache:clear --env=prod` ejecutado sin errores
- [ ] `cache:warmup --env=prod` ejecutado sin errores
- [ ] Permisos de `var/` verificados
- [ ] Endpoint `/` responde 200
- [ ] Endpoint `/usuario/login` responde (no error 500)
- [ ] Revisados logs de Symfony (`var/log/prod.log`) sin errores criticos

---

## Troubleshooting

### Error 500 al acceder a la app

1. Revisar `var\log\prod.log` en el servidor
2. Verificar que `APP_ENV=prod` y `APP_DEBUG=0` en `.env`
3. Verificar que `.env.local` existe y tiene las credenciales correctas
4. Ejecutar `php bin\console cache:clear --env=prod` nuevamente

### Error de permisos en var/ o cache/

```bat
icacls "C:\inetpub\wwwroot\Monterrey_App\frontend\var" /grant "IIS AppPool\Pool Test":(OI)(CI)F
```

### La app devuelve 404 en todas las rutas

El `web.config` en la raiz del proyecto no esta procesando el rewrite.
Verificar que:
1. El modulo `URL Rewrite` de IIS esta instalado
2. El archivo `web.config` fue copiado correctamente
3. El Application Pool tiene permisos sobre el directorio

### Error de conexion a SQL Server (500 con mensaje de BD)

1. Verificar que `.env.local` tiene las credenciales correctas de BD
2. Verificar que SQL Server esta accesible desde el servidor IIS
3. Verificar que el driver `pdo_sqlsrv` esta habilitado en PHP:
   ```bat
   php -m | findstr sqlsrv
   ```

### PHP no encontrado en PATH

Buscar la instalacion de PHP en el servidor:
```bat
where php
# o buscar manualmente en: C:\PHP\ o C:\Program Files\PHP\
```

Usar ruta completa en los comandos:
```bat
C:\PHP\php.exe bin\console cache:clear --env=prod
```

### Como hacer rollback

En caso de falla critica:

1. Abrir RDP al servidor `172.20.20.13`
2. Renombrar la carpeta actual: `frontend` → `frontend_roto`
3. Renombrar el backup: `frontend_backup_YYYY-MM-DD` → `frontend`
4. Reiniciar el Application Pool en IIS Manager
5. Verificar que la app funciona con la version anterior

---

> Documentacion generada el 2026-03-22 para el proceso de deploy de CRM360 Monterrey.
