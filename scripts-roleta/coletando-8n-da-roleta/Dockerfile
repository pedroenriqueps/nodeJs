FROM node:18-alpine

FROM mcr.microsoft.com/playwright:v1.39.0-focal

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx playwright install-deps

COPY . .

EXPOSE 3001

CMD ["npm start"]