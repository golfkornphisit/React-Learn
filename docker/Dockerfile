FROM node:22.16

COPY ./react_app /usr/src/app/react_app
RUN rm -rf  /usr/src/app/react_app/node_modules

WORKDIR /usr/src/app/react_app
RUN npm ci

CMD ["npm", "run", "dev"]