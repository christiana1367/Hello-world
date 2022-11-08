FROM node:alpine
COPY . /app
WORKDIR /app
CMD node Hello_world.js
