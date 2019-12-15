FROM php:7.4-fpm-alpine
RUN apk update && apk add wget mysql-client

# Enable mysqli
RUN docker-php-ext-install mysqli && \
    docker-php-ext-enable mysqli

# Install wp cli
RUN wget https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar && \
    chmod +x wp-cli.phar && \
    mv wp-cli.phar /usr/local/bin/wp

# Insert entrypoint and finalize image
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
USER www-data
ENTRYPOINT ["sh","/entrypoint.sh"]
CMD ["php-fpm"]
