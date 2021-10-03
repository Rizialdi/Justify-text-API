FROM node:12.18 as build

WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . ./
RUN yarn prisma generate
RUN yarn build

FROM node:12.18
WORKDIR /app
COPY package.json ./
RUN yarn install --production
COPY --from=build /app ./
RUN yarn prisma generate
CMD yarn start:prod