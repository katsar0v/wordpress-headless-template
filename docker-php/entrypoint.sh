#!/bin/sh
# set -e

# Delete all files
rm * -rf

# First mysql start is slow... so we need to wait a bit
sleep 5

wp core download
wp config create --skip-check --dbhost=database --dbname=wp --dbuser=root --dbpass=$MYSQL_ROOT_PASSWORD
wp db create
wp core install --admin_password=$WP_ADMIN_PASSWORD --url=localhost --title=Example --admin_user=$WP_ADMIN_USERNAME --admin_email=info@example.com --skip-email
wp rewrite structure '/%postname%/'

# first arg is `-f` or `--some-option`
if [ "${1#-}" != "$1" ]; then
	set -- php-fpm "$@"
fi

exec "$@"
