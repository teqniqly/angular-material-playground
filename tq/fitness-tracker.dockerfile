FROM node:12.14.1-alpine3.9 as test
WORKDIR /src
COPY . .
RUN npm install
RUN npm run lint
RUN npm run test

FROM node:12.14.1-alpine3.9 as build

WORKDIR /src
COPY --from=test /src .
RUN npm install --only=prod
RUN npm run build

FROM nginx:alpine as dist

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /src/dist/apps/fitness-tracker /usr/share/nginx/html
COPY --from=build /src/node_modules /usr/share/nginx/html/node_modules

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
