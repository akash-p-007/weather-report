FROM node:9.6.1
WORKDIR /usr/src/
COPY package*.json /home/akashp/projects/react/weather-report/package.json
RUN yarn install
COPY . .
EXPOSE 3000

CMD ["yarn", "start"]