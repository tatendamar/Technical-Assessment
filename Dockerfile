FROM node:18-alpine3.16

ENV POSTGRES_USER='tatenda' \
    POSTGRES_USER_PW='DH@dhu05'

RUN mkdir -p /home/app
WORKDIR /home/app

COPY package.json /home/app
RUN  npm install

COPY . /home/app

EXPOSE 5000
CMD [ "npm", "start" ]