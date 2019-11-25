DOCKER_COMPOSE = docker-compose \
	--file ./docker/docker-compose.yaml

up:
	$(DOCKER_COMPOSE) up -d

stop:
	$(DOCKER_COMPOSE) stop

build:
	$(DOCKER_COMPOSE) build

nginx:
	$(DOCKER_COMPOSE) exec nginx /bin/sh

node:
	$(DOCKER_COMPOSE) exec node /bin/sh

nginx-logs:
	$(DOCKER_COMPOSE) logs --follow --timestamps --tail 200 nginx

node-logs:
	$(DOCKER_COMPOSE) logs --follow --timestamps --tail 200 node