FROM php:7.4.0-apache
ENV ACCEPT_EULA=Y
RUN apt-get update && apt-get install -y gnupg2
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - 
RUN curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list > /etc/apt/sources.list.d/mssql-release.list 
RUN apt-get update 
RUN ACCEPT_EULA=Y apt-get -y --no-install-recommends install msodbcsql17 unixodbc-dev 
RUN pecl install sqlsrv
RUN pecl install pdo_sqlsrv
RUN docker-php-ext-install pdo pdo_mysql
RUN docker-php-ext-enable sqlsrv pdo_sqlsrv pdo pdo_mysql
COPY index.php /var/www/html/

