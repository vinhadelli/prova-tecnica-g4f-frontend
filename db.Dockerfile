FROM node:18-alpine
WORKDIR /app
RUN npm install json-server

EXPOSE 3000

CMD ["npx", "json-server", "/app/database/db.json"]