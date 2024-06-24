FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN #npm run start

EXPOSE 3440

CMD ["npm", "run", "start"]