# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent
# Copy source
COPY . .
# Build the app (Vite default outputs to /dist)
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# SPA support: route all requests to index.html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
