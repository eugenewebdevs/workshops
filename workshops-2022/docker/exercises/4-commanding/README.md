# Commanding

## About

In a docker file we have the opportunity to run commands during the building.

We can also instantiate environment variables for the container to use.

For this we use `ENV` in your Dockerfile.

We can also pass vars down from the `docker-compose.yaml`.

This example passes env vars in both ways.

In this case we will echo them all out with `CMD`.
