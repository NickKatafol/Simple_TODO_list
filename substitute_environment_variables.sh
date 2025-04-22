#!/bin/sh

ROOT_DIR=/app

# Replace env vars in files served by NGINX
for file in $ROOT_DIR/assets/*.js* $ROOT_DIR/index.html;
do
  sed -i 's|VITE_DATA_PLACEHOLDER|'${VITE_DATA}'|g' $file
  # Your other variables here...
done

exec "$@"





