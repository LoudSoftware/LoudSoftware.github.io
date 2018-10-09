FROM node:latest

WORKDIR /server

COPY . /server
RUN yarn && yarn build:prod


EXPOSE 80:8080
CMD [ "yarn", "server" ]