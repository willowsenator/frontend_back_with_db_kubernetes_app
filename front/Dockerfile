FROM node:20.6.1 as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:stable
COPY --from=build /app/dist /usr/share/nginx/html