FROM node:15

# default to port 19006 for node
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# /opt is in the virtual container, and needs specific permissions
RUN mkdir /opt/malice && chown node:node /opt/malice
WORKDIR /opt/malice
ENV PATH /opt/malice/.bin:$PATH

#COPY --chown=node:node ./malice/mobile-client/package.json ./mobile-client
#COPY --chown=node:node ./malice/mobile-client/package-lock.json ./mobile-client
COPY --chown=node:node ./malice/mobile-client/package.json /opt/malice/
COPY --chown=node:node ./malice/mobile-client/package-lock.json /opt/malice/


USER node
RUN npm install

# copy in our source code last, as it changes the most
WORKDIR /opt/malice/app/mobile-client

ENTRYPOINT ["npm", "run"]
CMD ["web"]
#CMD ["expo", "start"]


