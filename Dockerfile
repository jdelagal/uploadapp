FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json  app.js ./
COPY node-module node-module/

ARG NPM_REGISTRY
ENV npm_config_registry ${NPM_REGISTRY:-https://registry.npmjs.com}
RUN npm install --prod --quiet --depth 0

ENV NODE_ENV production

CMD [ "npm", "start" ]
