FROM node:20-slim

# Install dependencies needed for compiling native addons (like better-sqlite3)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Define the volume for persistent SQLite database storage
RUN mkdir -p /usr/src/app/data
ENV DB_PATH=/usr/src/app/data/inquiries.db

# Install all app dependencies (including devDependencies for the build)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the Vite Frontend (needs devDependencies like vite-plugin-pwa)
RUN npm run build

# Set production environment AFTER build
ENV NODE_ENV=production

# Expose port 8080
EXPOSE 8080

# Start the full-stack server
CMD [ "npm", "run", "start" ]
