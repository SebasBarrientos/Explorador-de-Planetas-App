# Usar Node 20.9.0 Alpine
FROM node:20.9.0-alpine

# Crear grupo y usuario
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Fijar directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json primero para cache
COPY package*.json ./
COPY prisma ./prisma
# Instalar dependencias con legacy-peer-deps (evita conflictos)
RUN npm install --legacy-peer-deps
# Instalar Cloud SQL Proxy
RUN apk add --no-cache curl && \
    curl -o /usr/local/bin/cloud_sql_proxy https://dl.google.com/cloudsql/cloud_sql_proxy.linux.amd64 && \
    chmod +x /usr/local/bin/cloud_sql_proxy
# Copiar el resto de archivos
COPY . .

# Generar cliente Prisma (necesita las variables de entorno)
RUN npx prisma generate
# Construir la app (ahora con la variable disponible)
RUN npm run build

# Puerto que Cloud Run espera
ENV PORT=3000
EXPOSE 3000

# Cambiar al usuario no root
USER nextjs

# Ejecutar la app
CMD ["npm", "start"]