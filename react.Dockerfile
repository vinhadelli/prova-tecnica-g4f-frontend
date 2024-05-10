FROM node:20.13-alpine
WORKDIR /app
COPY ./public/ public/
COPY ./src/ src/
COPY package.json /app
COPY .env.production /app

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]