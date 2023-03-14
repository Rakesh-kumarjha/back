
FROM node:16
WORKDIR /app
COPY package.json ./
# Install app dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

EXPOSE 443
CMD [ "node", "app.js" ]

# Language: dockerfile
# Path: docker-compose.yml