FROM node:14-alpine AS base

RUN apk add --no-cache python3 make g++ && rm -rf /var/cache/apk/*
WORKDIR /var/www/nuxt
RUN mkdir /var/www/nuxt/.nuxt && chown node:node -R .
USER node

COPY --chown=node:node ./package.json ./yarn.lock ./nuxt.config.ts ./tsconfig.json ./tsconfig.spec.json ./vue-shim.d.ts ./



FROM base AS build
ARG NODE_ENV=production
WORKDIR /var/www/nuxt
USER node

RUN yarn && yarn cache clean --force
COPY --chown=node:node ./ .
RUN yarn build && yarn cache clean --force



FROM base AS development
WORKDIR /var/www/nuxt
USER node

RUN yarn && yarn cache clean --force
COPY --chown=node:node ./ .
CMD ["docker/entrypoint.sh"]



FROM node:14-alpine AS production
ARG NODE_ENV=production
WORKDIR /var/www/nuxt
RUN chown node:node -R .
USER node

COPY --from=build --chown=node:node /var/www/nuxt/ ./

CMD ["yarn", "start"]
