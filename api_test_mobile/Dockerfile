FROM node:latest as build-step
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build --prod
 
FROM nginx:alpine
COPY --from=build-step /app/www /usr/share/nginx/html
EXPOSE 80