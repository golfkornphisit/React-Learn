FROM node:22.16

WORKDIR /usr/src/app/react_app

COPY react_app/package*.json /usr/src/app/react_app

RUN npm install

COPY ./react_app /usr/src/app/react_app

EXPOSE 5173

CMD ["npm", "run", "dev"]