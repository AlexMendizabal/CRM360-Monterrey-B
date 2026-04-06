# Configuracion Docker - CRM360 Monterrey

## Resumen

Container PHP 8.1 + Apache (Debian Bullseye) con drivers de SQL Server.
Se conecta a un SQL Server **externo** (no incluido en Docker).

| Componente | Detalle |
|------------|---------|
| Imagen base | `php:8.1-apache-bullseye` (Debian 11 Bullseye) |
| SQL Server driver | `msodbcsql17` + `sqlsrv 5.11.1` + `pdo_sqlsrv 5.11.1` |
| Herramientas SQL | `sqlcmd`, `bcp` (mssql-tools) |
| Puerto app | 8080 (configurable) |
| Codigo montado | Si, cambios en vivo en desarrollo |

---

## Inicio Rapido

```bash
# 1. Crear archivo de credenciales (una sola vez)
cp .env.docker .env.local
# Editar .env.local con tus credenciales reales de SQL Server

# 2. Construir y levantar
docker-compose up -d --build

# 3. Verificar
curl http://localhost:8080/
```

---

## Archivos

```
Proyecto/
├── Dockerfile                 # PHP 8.1 + Apache (Bullseye) + drivers MSSQL
├── docker-compose.yml         # Orquestacion (solo app, sin MSSQL)
├── .env.docker                # Template de variables (copiar a .env.local)
├── .dockerignore              # Archivos excluidos del build
└── docker/
    ├── entrypoint.sh          # Verifica drivers, instala deps, prueba conexion
    ├── apache/
    │   └── vhost.conf         # VirtualHost + seguridad
    └── php/
        ├── php.ini            # Config PHP (memory, timezone, sqlsrv buffers)
        └── opcache.ini        # OPcache (off en dev, on en prod)
```

---

## Conexion a SQL Server

### Si SQL Server corre en tu misma maquina (Windows host)

```bash
# En .env.local usar:
DB_HOST=host.docker.internal
DB_PORT=1433
```

`host.docker.internal` resuelve a la IP del host Windows desde dentro del container.
El docker-compose.yml ya incluye `extra_hosts` para que funcione.

### Si SQL Server esta en otra maquina de la red

```bash
# En .env.local usar la IP directa:
DB_HOST=192.168.0.100
DB_PORT=1433
```

### Verificar conexion desde el container

```bash
# Via sqlcmd (mssql-tools)
docker-compose exec app sqlcmd -S host.docker.internal -U user2023 -P 'TuPassword' -Q "SELECT @@VERSION"

# Via PHP
docker-compose exec app php -r "
  \$pdo = new PDO('sqlsrv:Server=host.docker.internal,1433;Database=CRM360;TrustServerCertificate=1', 'user2023', 'TuPassword');
  echo 'OK: ' . \$pdo->query('SELECT @@VERSION')->fetchColumn();
"
```

### SQL Server en Windows: habilitar conexiones TCP/IP

Si SQL Server no acepta conexiones desde Docker:

1. Abrir **SQL Server Configuration Manager**
2. Ir a **SQL Server Network Configuration** > **Protocols for MSSQLSERVER**
3. Habilitar **TCP/IP**
4. Click derecho en TCP/IP > **Properties** > **IP Addresses**
5. En **IPAll**: Port = `1433`
6. Reiniciar servicio SQL Server
7. Firewall de Windows: permitir puerto 1433 entrada

---

## Dockerfile - Que instala

### Drivers SQL Server

| Componente | Version | Proposito |
|------------|---------|-----------|
| msodbcsql17 | 17.x | Microsoft ODBC Driver para SQL Server |
| mssql-tools | 17.x | sqlcmd y bcp (linea de comandos) |
| sqlsrv | 5.11.1 | Extension PHP nativa para SQL Server |
| pdo_sqlsrv | 5.11.1 | Extension PDO para SQL Server |

### Extensiones PHP

| Extension | Proposito |
|-----------|-----------|
| pdo_sqlsrv | Conexion a SQL Server (lo que usa Doctrine DBAL) |
| sqlsrv | Driver nativo SQL Server |
| pdo_mysql | PDO MySQL (preparado para migracion futura) |
| mbstring | Strings multibyte (UTF-8) |
| zip | Compresion |
| opcache | Cache de bytecode |
| intl | Internacionalizacion |
| xml | Procesamiento XML |
| ldap | LDAP (requerido por symfony/ldap) |

### Configuracion PHP

| Parametro | Valor | Razon |
|-----------|-------|-------|
| memory_limit | 256M | Queries grandes de reportes |
| upload_max_filesize | 50M | Archivos en uploads/ |
| max_execution_time | 120s | Stored procedures lentos |
| date.timezone | America/Monterrey | Zona horaria del proyecto |
| sqlsrv.ClientBufferMaxKBSize | 524288 | Evitar truncado en resultsets grandes |

---

## Docker Compose

### Variables de entorno

| Variable | Default | Descripcion |
|----------|---------|-------------|
| APP_ENV | dev | Entorno Symfony |
| APP_DEBUG | 1 | Debug mode |
| APP_SECRET | change_me | Secret de Symfony |
| JWT_SECRET | change_me | Secret para JWT |
| DB_DRIVER | pdo_sqlsrv | Driver de BD |
| DB_HOST | host.docker.internal | Host SQL Server |
| DB_PORT | 1433 | Puerto SQL Server |
| DB_NAME | CRM360 | Base de datos |
| DB_USER | sa | Usuario |
| DB_PASSWORD | (vacio) | Password |
| SAP_API_URL | http://192.168.0.123:4100/api | URL de SAP |
| MAIL_HOST | localhost | Servidor SMTP |
| MAIL_PORT | 465 | Puerto SMTP |
| MAIL_USERNAME | (vacio) | Usuario SMTP |
| MAIL_PASSWORD | (vacio) | Password SMTP |
| AKNA_USER | (vacio) | Usuario Akna |
| AKNA_PASSWORD | (vacio) | Password Akna |
| AKNA_CLIENT | (vacio) | Client ID Akna |
| APP_PORT | 8080 | Puerto externo de la app |
| PHP_OPCACHE_ENABLE | 0 | OPcache (0=off, 1=on) |

### Volumes

| Volume | Proposito |
|--------|-----------|
| `.:/var/www/html` | Codigo fuente (cambios en vivo) |
| `vendor_data` | Vendor PHP (aislado de Windows) |
| `symfony_var` | Cache y logs de Symfony |

---

## Comandos

```bash
# Levantar
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Shell dentro del container
docker-compose exec app bash

# Instalar/actualizar dependencias
docker-compose exec app composer install

# Limpiar cache Symfony
docker-compose exec app php bin/console cache:clear

# Ver rutas registradas
docker-compose exec app php bin/console debug:router

# Ver extensiones PHP (verificar sqlsrv)
docker-compose exec app php -m | grep -i sql

# Probar SQL Server con sqlcmd
docker-compose exec app sqlcmd -S $DB_HOST -U $DB_USER -P $DB_PASSWORD -d CRM360 -Q "SELECT TOP 5 * FROM sysobjects WHERE type='U'"

# Detener
docker-compose down

# Reconstruir desde cero
docker-compose down -v && docker-compose up -d --build
```

---

## Troubleshooting

### "Connection refused" a SQL Server

```
1. Verificar que SQL Server acepta TCP/IP (ver seccion arriba)
2. Verificar firewall de Windows (puerto 1433)
3. Verificar que DB_HOST es correcto:
   - Misma maquina: host.docker.internal
   - Otra maquina: IP directa (192.168.x.x)
4. Probar: docker-compose exec app sqlcmd -S host.docker.internal -U sa -P 'pass'
```

### "vendor/autoload.php not found"

```bash
docker-compose exec app composer install
```

### Permisos en var/cache o var/log

```bash
docker-compose exec app chown -R www-data:www-data var/
```

### Container no arranca / se reinicia

```bash
# Ver logs para encontrar el error
docker-compose logs app
```

### Verificar que drivers SQL Server estan instalados

```bash
docker-compose exec app php -m | grep -E "sqlsrv|pdo_sqlsrv"
# Debe mostrar:
# pdo_sqlsrv
# sqlsrv

docker-compose exec app sqlcmd -?
# Debe mostrar help de sqlcmd
```
