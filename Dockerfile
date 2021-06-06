FROM node:15
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest
RUN mkdir /opt/malice && chown node:node /opt/malice
WORKDIR /opt/malice
ENV PATH /opt/malice/.bin:$PATH
COPY --chown=node:node ./malice/mobile-client/package.json /opt/malice/
COPY --chown=node:node ./malice/mobile-client/package-lock.json /opt/malice/
USER node
RUN npm install
WORKDIR /opt/malice/app/mobile-client
ENTRYPOINT ["npm", "run"]
CMD ["web"]


