# Database

## About

A very common use case for docker is running a database in a container.

Run `docker compose up`.

This will pull the mysql image and start a container.

Check to see this container running.

Create a `Dockerfile` and add the  app service to `docker-compose.yaml`, then start the database in the background followed the app:
```
docker-compose up -d db
docker-compose up app
... maybe build output
app_1  | Connected to the MySQL server.
6-database_app_1 exited with code 0
```
