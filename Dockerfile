FROM node:16.14 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

FROM nginx:1.21 AS production
COPY --from=build /app/dist/disko-web /usr/share/nginx/html