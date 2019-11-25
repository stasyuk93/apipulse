#!/bin/sh
set -e

export BASE_PATH=$(echo $BASE_PATH | sed 's@^//*@@;s@/*/$@@')
envsubst '$BASE_PATH' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

cat /etc/nginx/conf.d/default.conf

exec "$@"
