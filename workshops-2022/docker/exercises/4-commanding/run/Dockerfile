FROM alpine:3.14

WORKDIR /app

# add a shell script
COPY script/. .

# use that shell script
RUN chmod +x script.sh
RUN ./script.sh

# set some env vars
ENV MESSAGE "Hello from this dockerfile"
ENV MORE "Add me to these env vars?"

# print all all the env vars
CMD echo $COMPOSE_LEVEL_VAR && echo $MESSAGE && printenv
