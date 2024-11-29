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
FROM node:18 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app files into the container
COPY . .

# Copy the .env file into the desired folder within the container
COPY .env /app/config/.env 

# Build the Vue.js application
RUN npm run build

# Use Nginx for serving the app in production stage
FROM nginx:stable-alpine as production-stage

# Copy the built Vue.js app from the build-stage to the Nginx container
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if you have one
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]