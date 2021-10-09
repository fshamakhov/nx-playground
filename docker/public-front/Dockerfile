FROM node:14-alpine as base-image
WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn install --frozen-lock --silent
COPY . .
RUN npx nx build public-front --prod

FROM node:14-alpine as app-image
WORKDIR /app
COPY --from=base-image /build/dist/apps/public-front .
# Add typescript to fix issue https://github.com/nrwl/nx/issues/5473
# Add sharp  https://nextjs.org/docs/messages/sharp-missing-in-production
RUN yarn install --silent --production \
    && yarn add \
      typescript \
      sharp
EXPOSE 3000
CMD ["yarn", "start"]
