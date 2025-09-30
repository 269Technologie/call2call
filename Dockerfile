# Étape 1 : Build de l'app
FROM node:20-alpine AS builder

WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copier le code source
COPY . .

# 🔥 Nettoyage des caches avant compilation
RUN rm -rf node_modules/.vite dist tsconfig.tsbuildinfo

# Build production Vite/React
RUN npm run build

# Étape 2 : Serveur Node pour servir le build
FROM node:20-alpine

WORKDIR /app

# Installer le serveur statique
RUN npm install -g serve

# Copier le build
COPY --from=builder /app/dist .

# Optionnel : si tu as un fichier de config pour serve
# COPY serve.json .

# Exposer le port interne (ici on met 3011)
EXPOSE 3011

# Lancer serve sur le port 3011
CMD ["serve", "-s", ".", "-l", "3011"]
