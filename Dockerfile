FROM node:12.22.1-alpine3.11

WORKDIR /app
COPY . .
#RUN yarn config set "strict-ssl" false -g
RUN yarn install --production

CMD ["node", "/app/index.js"]