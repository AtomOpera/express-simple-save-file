FROM node:13-alpine
RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "node", "server.js" ]

# EXPOSE 3000
# CMD node ./bin/www

# FROM node:12 as react-build
# WORKDIR /app
# COPY . .
# RUN yarn
# RUN yarn build

# FROM nginx:alpine
# COPY --from=react-build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# FROM node:14

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# EXPOSE 8080
# CMD [ "node", "server.js" ]

# FROM node:14-alpine as base

# WORKDIR /src
# COPY package*.json ./
# EXPOSE 3000

# FROM base as production
# ENV NODE_ENV=production
# RUN npm ci
# COPY . ./
# CMD ["node", "index.js"]