# Étape 1 : Build de l'app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN rm -rf node_modules/.vite dist

RUN npm run build

FROM node:20-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=builder /app/build/ /app/
EXPOSE 3011
CMD ["serve", "-s", ".", "-l", "3011"]
