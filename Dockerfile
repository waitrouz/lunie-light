FROM node:14.21.3
RUN git clone https://github.com/waitrouz/lunie-light
WORKDIR /lunie-light
RUN yarn install
EXPOSE 3000
CMD ["yarn", "dev"]
