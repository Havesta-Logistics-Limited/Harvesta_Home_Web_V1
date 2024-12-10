# Stage 1: Build the Vite app
FROM node:20-alpine

WORKDIR /app

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
 