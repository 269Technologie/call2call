# Étape 1 : Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Étape 2 : Image finale avec Nginx interne
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Port interne, pas exposé publiquement
EXPOSE 3011
CMD ["nginx", "-g", "daemon off;"]
