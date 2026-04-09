FROM php:8.1-apache-bullseye

ARG DEBIAN_FRONTEND=noninteractive
ENV ACCEPT_EULA=Y

WORKDIR /var/www/html

# ============================================================
# 1. Dependencias del sistema + Microsoft ODBC Driver 17
# ============================================================
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gnupg2 \
        curl \
        apt-transport-https \
        ca-certificates \
        unixodbc-dev \
        libltdl-dev \
        libpng-dev \
        libjpeg-dev \
        libfreetype6-dev \
        libzip-dev \
        libonig-dev \
        libxml2-dev \
        libicu-dev \
        libldap2-dev \
        zip \
        unzip \
        git \
    # Microsoft ODBC Driver 17 para SQL Server (Debian 11 Bullseye)
    && curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl -fsSL https://packages.microsoft.com/config/debian/11/prod.list \
        > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update \
    && ACCEPT_EULA=Y apt-get install -y --no-install-recommends \
        msodbcsql17 \
        mssql-tools \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Agregar mssql-tools al PATH (sqlcmd, bcp)
ENV PATH="$PATH:/opt/mssql-tools/bin"

# ============================================================
# 2. Extensiones PHP
# ============================================================
# SQL Server drivers (version compatible con PHP 8.1)
RUN pecl install sqlsrv-5.11.1 pdo_sqlsrv-5.11.1 \
    && docker-php-ext-enable sqlsrv pdo_sqlsrv

# Xdebug para code coverage (version compatible con PHP 8.1)
RUN pecl install xdebug-3.2.2 \
    && docker-php-ext-enable xdebug

# Extensiones PHP estandar
RUN docker-php-ext-configure ldap --with-libdir=lib/x86_64-linux-gnu/ \
    && docker-php-ext-install \
        pdo \
        pdo_mysql \
        mbstring \
        zip \
        opcache \
        intl \
        xml \
        ldap

# ============================================================
# 3. Composer (version 2.7+)
# ============================================================
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

# ============================================================
# 4. Apache: mod_rewrite + VirtualHost
# ============================================================
RUN a2enmod rewrite headers

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf

# ============================================================
# 5. PHP config
# ============================================================
COPY docker/php/php.ini /usr/local/etc/php/conf.d/zz-custom.ini
COPY docker/php/opcache.ini /usr/local/etc/php/conf.d/opcache.ini

# ============================================================
# 6. Proyecto
# ============================================================
# Composer deps primero (cache de Docker layer)
COPY composer.json composer.lock symfony.lock ./
RUN composer install --optimize-autoloader --no-scripts --no-interaction 2>/dev/null || true

# Copiar todo el proyecto
COPY . .

# Ejecutar scripts post-install
RUN composer run-script post-install-cmd --no-interaction 2>/dev/null || true

# Verificar herramientas de desarrollo
RUN test -f vendor/bin/phpunit && echo "[OK] PHPUnit instalado" || echo "[WARN] PHPUnit no encontrado"

# ============================================================
# 7. Permisos
# ============================================================
RUN mkdir -p var/cache var/log uploads \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 775 var/ uploads/

# ============================================================
# 8. Entrypoint y puerto
# ============================================================
EXPOSE 80

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
