FROM node:14-alpine as base-image
WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn install --frozen-lock --silent
COPY . .
RUN npx nx build public-front --prod

FROM node:14-alpine as app-image
WORKDIR /app
COPY --from=base-image /build/dist/apps/public-front .
COPY --from=base-image /build/yarn.lock .
RUN yarn install --frozen-lock --silent --production
EXPOSE 3000
CMD ["yarn", "start"]
