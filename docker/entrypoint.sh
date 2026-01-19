#!/bin/sh
set -e

# Ensure Database directory exists
mkdir -p /var/www/html/app/Database

# Fix permissions for the Database directory
# This is crucial for SQLite when volumes are mounted from host
if [ -d "/var/www/html/app/Database" ]; then
    chown -R www-data:www-data /var/www/html/app/Database
    chmod -R 775 /var/www/html/app/Database
fi

# Also ensure .env is writable if it exists, or create it from example
if [ ! -f "/var/www/html/.env" ] && [ -f "/var/www/html/.env.example" ]; then
    cp /var/www/html/.env.example /var/www/html/.env
    chown www-data:www-data /var/www/html/.env
fi

if [ -f "/var/www/html/.env" ]; then
    chmod 664 /var/www/html/.env
fi

# Execute the command passed to docker run (usually supervisor)
exec "$@"
