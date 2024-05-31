FROM node:20.11.1-bullseye-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the backend application files into the container
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

COPY . .

ARG VUE_APP_API_BASE_URL
ENV VITE_VUE_APP_API_BASE_URL=$VUE_APP_API_BASE_URL

# Expose the port that your Vue.js app is listening on
EXPOSE 3000

# Start the backend application
CMD ["npm", "run", "dev"]
