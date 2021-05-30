FROM node:15
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY api /usr/src/app/api
COPY .env /usr/src/app
EXPOSE 5000
CMD ["npm", "start"]