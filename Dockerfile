# Build the Vue app
FROM node:22.12.0-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# Copy the built app in an NGINX contaier
FROM nginx:stable-alpine AS production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

# Executing the script at container runtime
COPY substitute_environment_variables.sh /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/substitute_environment_variables.sh



# docker build -t nickkatafol/nick_docker_image:todo_port80_VITE_DATA .
# docker run -e VITE_DATA=run -p 8080:80 nickkatafol/nick_docker_image:todo_port80_VITE_DATA
# docker push nickkatafol/nick_docker_image:todo_port80_VITE_DATA

