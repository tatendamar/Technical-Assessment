FROM node:18-alpine3.16


RUN mkdir -p /home/app
WORKDIR /home/app

COPY package.json /home/app
RUN  npm install

COPY . /home/app

EXPOSE 5000

CMD [ "npm", "start" ]