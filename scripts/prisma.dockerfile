FROM node:20.11.1-bullseye-slim

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

CMD ["npx", "prisma", "studio"]