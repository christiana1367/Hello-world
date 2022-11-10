FROM node:15
WORKDIR /app
COPY package.json 
WORKDIR /app
CMD node Hello_world.js
