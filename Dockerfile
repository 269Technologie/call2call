# Étape 1 : Build de l'app
FROM node:20-alpine AS builder

WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copier le reste du code
COPY . .

# Nettoyer d'anciens builds
RUN rm -rf dist tsconfig.tsbuildinfo

# Build production Vite/React
RUN npm run build

# Étape 2 : Nginx interne sur port 3011
FROM nginx:alpine

# Copier les fichiers construits dans Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier le nginx.conf personnalisé
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port interne 3011
EXPOSE 3011

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
