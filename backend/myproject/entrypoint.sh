#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $DB_HOST $DB_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

echo "Applying database migration"
python manage.py migrate

if [ -f fixtures/initial_data.json ]; then
    echo "Loading data from fixtures"
    python manage.py loaddata fixtures/initial_data.json
else
    echo "Fixture file does not exist"
fi
exec "$@"