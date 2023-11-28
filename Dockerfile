FROM node:18.16-alpine 

WORKDIR /usr/src/mylar_core

COPY package*.json ./

RUN yarn

COPY . . 

RUN yarn prisma generate

EXPOSE 5050

RUN yarn build

CMD ["yarn", "start"]