FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build

# Serve Application using Nginx Server
FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
RUN rm index.html
COPY --from=build /app/dist/couture .
EXPOSE 80