FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5000

CMD ["npm","start"]