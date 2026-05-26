# --- Stage 1: Build ---
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Stage 2: Serve (sin Nginx, sin Tomcat) ---
FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve@14
COPY --from=build /app/dist ./dist
COPY serve.json .
EXPOSE 3000
USER node
CMD ["serve", "dist", "-l", "3000"]
