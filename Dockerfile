FROM node:16.17.0-bullseye-slim as build-stage
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /app
COPY package.json pnpm-lock.yaml .env ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile
COPY ./ .
RUN pnpm build


FROM nginx:1.16.0-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]