# # FROM node:16.10.0-alpine3.13 as build-stage
# FROM node:18 as build-stage
# # set the working directory
# WORKDIR /app
# # Copy the working directory in the container
# COPY package*.json ./
# # Install the project dependencies
# RUN npm install
# # Copy the rest of the project files to the container
# COPY . .
# # Build the Vue.js application to the production mode to dist folder
# RUN npm run build
# # Use the lightweight Nginx image from the previous stage for the nginx container
# FROM nginx:stable-alpine as production-stage
# # Copy the build application from the previous stage to the Nginx container
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# # Copy the nginx configuration file
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# # Expose the port 80
# EXPOSE 80
# # Start Nginx to serve the application
# CMD ["nginx", "-g", "daemon off;"]


# Use a Node.js 18 image for building the app
FROM node:18 as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the Vue.js application in production mode (output to dist folder)
RUN npm run build

# Use the lightweight Nginx image to serve the built app
FROM nginx:stable-alpine as production-stage

# Install dotenv-cli to load the .env file at runtime
RUN apk add --no-cache bash

# Copy the build from the build stage to the Nginx container
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the container
EXPOSE 80

# Copy the .env file into the container
COPY .env .env

# Start Nginx using dotenv-cli to load the .env file
CMD ["dotenv", "nginx", "-g", "daemon off;"]