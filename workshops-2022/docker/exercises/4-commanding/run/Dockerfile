FROM alpine:3.14

WORKDIR /app

COPY script/. .

ENV MESSAGE "Hello from this dockerfile"

ENV MORE "Add me to this env vars?"

RUN chmod +x script.sh
RUN ./script.sh

CMD echo $COMPOSE_LEVEL_VAR && echo $MESSAGE