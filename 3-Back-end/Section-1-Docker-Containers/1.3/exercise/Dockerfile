FROM node:14-alpine
WORKDIR /app
EXPOSE 3000
COPY . .
RUN npm install
ENTRYPOINT ["npm", "start"]