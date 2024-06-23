FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN #npm run server

EXPOSE 5000

CMD ["npm", "run", "server"]