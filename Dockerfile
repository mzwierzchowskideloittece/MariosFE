FROM node:16 AS builder
WORKDIR /app


COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build


FROM nginx:latest
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/mariosy-fe /usr/share/nginx/html
EXPOSE 80 4200 3000
