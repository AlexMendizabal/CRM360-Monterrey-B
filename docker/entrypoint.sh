#!/bin/bash
set -e

echo "============================================="
echo "  CRM360 Monterrey Backend"
echo "  PHP $(php -r 'echo PHP_VERSION;') + Apache"
echo "============================================="

# 1. Verificar drivers SQL Server
echo ""
echo ">>> Verificando drivers SQL Server..."
if php -m | grep -q "pdo_sqlsrv"; then
    echo "    [OK] pdo_sqlsrv"
else
    echo "    [ERROR] pdo_sqlsrv NO instalado"
    exit 1
fi
if php -m | grep -q "sqlsrv"; then
    echo "    [OK] sqlsrv"
else
    echo "    [ERROR] sqlsrv NO instalado"
    exit 1
fi

# 2. Instalar dependencias si vendor/ esta vacio
if [ ! -f /var/www/html/vendor/autoload.php ]; then
    echo ""
    echo ">>> Instalando dependencias de Composer..."
    if [ "${APP_ENV:-dev}" = "prod" ]; then
        composer install --no-dev --prefer-dist --no-interaction --optimize-autoloader 2>&1 || {
            echo ">>> Primer intento fallo, regenerando lock file..."
            composer update --no-dev --prefer-dist --no-interaction --optimize-autoloader 2>&1 || true
        }
    else
        composer install --prefer-dist --no-interaction --optimize-autoloader 2>&1 || {
            echo ">>> Primer intento fallo, regenerando lock file..."
            composer update --prefer-dist --no-interaction --optimize-autoloader 2>&1 || true
        }
    fi
fi

# 3. Crear directorios necesarios
mkdir -p var/cache var/log uploads
chown -R www-data:www-data var/ uploads/ 2>/dev/null || true

# 4. Limpiar cache de Symfony
echo ""
echo ">>> Limpiando cache de Symfony..."
php bin/console cache:clear --env="${APP_ENV:-dev}" --no-interaction 2>/dev/null || true

# 5. Probar conexion a SQL Server
echo ""
echo ">>> Probando conexion a SQL Server..."
echo "    Host: ${DB_HOST:-localhost}:${DB_PORT:-1433}"
echo "    Database: ${DB_NAME:-CRM360}"
echo "    User: ${DB_USER:-sa}"

php -r "
try {
    \$dsn = 'sqlsrv:Server=${DB_HOST:-localhost},${DB_PORT:-1433};Database=${DB_NAME:-CRM360};TrustServerCertificate=1';
    \$pdo = new PDO(\$dsn, '${DB_USER:-sa}', '${DB_PASSWORD:-}');
    \$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo '    [OK] Conexion exitosa a SQL Server' . PHP_EOL;
} catch (Exception \$e) {
    echo '    [WARN] No se pudo conectar: ' . \$e->getMessage() . PHP_EOL;
    echo '    La app iniciara de todos modos.' . PHP_EOL;
}
" 2>/dev/null || echo "    [WARN] No se pudo verificar la conexion"

# 6. Verificar PHPUnit y Swagger
echo ""
echo ">>> Verificando herramientas de desarrollo..."
if [ -f vendor/bin/phpunit ]; then
    echo "    [OK] PHPUnit $(vendor/bin/phpunit --version 2>/dev/null | head -1)"
else
    echo "    [WARN] PHPUnit no encontrado - ejecutar: composer install"
fi

echo ""
echo ">>> Verificando Swagger UI..."
php bin/console debug:router 2>/dev/null | grep -q "app.swagger_ui" \
    && echo "    [OK] Swagger UI disponible en /api/doc" \
    || echo "    [INFO] Swagger UI se configurara con NelmioApiDocBundle"

# 7. Mostrar resumen
echo ""
echo "============================================="
echo "  App lista en http://localhost:${APP_PORT:-80}"
echo "  Swagger: http://localhost:${APP_PORT:-80}/api/doc"
echo "  Entorno: ${APP_ENV:-dev}"
echo "  Debug: ${APP_DEBUG:-0}"
echo "  Tests:  docker-compose exec app vendor/bin/phpunit"
echo "============================================="
echo ""

# 7. Iniciar Apache
exec apache2-foreground
