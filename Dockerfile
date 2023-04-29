FROM node:19-alpine

MAINTAINER Stefan Samokhval

RUN mkdir /app

COPY backend/package.json /app

WORKDIR /app

RUN yarn install --production