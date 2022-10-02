FROM node:16-alpine

RUN apk add --no-cache ssmtp curl pup jq heirloom-mailx

WORKDIR /usr/knock

COPY odrive4kindle odrive4kindle
COPY index.js index.js

RUN chmod +x odrive4kindle

RUN wget https://github.com/BentonEdmondson/knock/releases/download/1.3.1/knock-1.3.1-aarch64-linux

RUN mv knock-1.3.1-aarch64-linux knock

RUN chmod +x knock

EXPOSE 3000

CMD ["node", "index.js"]
