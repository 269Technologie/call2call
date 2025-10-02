FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# 🔥 Nettoyage des caches avant compilation
RUN rm -rf node_modules/.vite dist tsconfig.tsbuildinfo

RUN npm run build

# Étape 2 : Serveur Node pour servir le build
FROM node:20-alpine

WORKDIR /app

# Installer le serveur statique
RUN npm install -g serve

# Copier le build
COPY --from=builder /app/dist .

# Exposer le port interne (ici on met 3011)
EXPOSE 3011

# Lancer serve sur le port 3011
CMD ["serve", "-s", ".", "-l", "3011"]
