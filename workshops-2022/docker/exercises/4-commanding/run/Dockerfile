FROM alpine:3.14

WORKDIR /app

# set some env vars
ENV MESSAGE "Hello from this dockerfile"
ENV MORE "Add me to this env vars?"

# print all all the env vars
CMD echo $COMPOSE_LEVEL_VAR && echo $MESSAGE && printenv