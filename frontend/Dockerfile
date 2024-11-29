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

# Set build-time environment variables (you can use --build-arg to inject these when building)
ARG VITE_SECRET_API_KEY
ARG VITE_KEY

# Set the environment variables for the app to access during the build
ENV VITE_SECRET_API_KEY=${VITE_SECRET_API_KEY}
ENV VITE_KEY=${VITE_KEY}

# Build the Vue.js application in production mode (output to dist folder)
RUN npm run build

# Use the lightweight Nginx image to serve the built app
FROM nginx:stable-alpine as production-stage

# Copy the build from the build stage to the Nginx container
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the container
EXPOSE 80

# Start Nginx to serve the Vue.js app
CMD ["nginx", "-g", "daemon off;"]