FROM nginx:1.17-alpine

COPY ./docker/nginx/conf.d/default.conf.template /etc/nginx/conf.d/default.conf.template

COPY ./docker/nginx/entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint
ENTRYPOINT ["docker-entrypoint"]

CMD ["nginx", "-g", "daemon off;"]
