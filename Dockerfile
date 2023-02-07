FROM node:alpine

WORKDIR /apps
RUN npm install ws
ADD server.js /apps/

EXPOSE 8082

ENTRYPOINT ["node", "server.js"]
