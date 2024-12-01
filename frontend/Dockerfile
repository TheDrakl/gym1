FROM node:18 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app files into the container
COPY . .

# Build the Vue.js application
RUN npm run build

# Use Nginx for serving the app in production stage
FROM nginx:stable-alpine as production-stage

# Copy the built Vue.js app from the build-stage to the Nginx container
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]