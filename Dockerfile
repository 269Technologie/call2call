FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN rm -rf node_modules/.vite dist tsconfig.tsbuildinfo

# Build de l'app
RUN npm run build

# Serveur Node (serve)
FROM node:20-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=builder /app/dist .
COPY serve.json .
EXPOSE 3011
CMD ["serve", "-s", ".", "-l", "3011"]
