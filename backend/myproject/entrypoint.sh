#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

echo "Applying database migration"
python manage.py migrate

echo "Loading data from fixtures"
python manage.py loaddata fixtures/initial_data.json

exec "$@"