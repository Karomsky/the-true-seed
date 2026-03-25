FROM node:20-slim

# Install dependencies needed for compiling native addons (like better-sqlite3)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Define the volume for persistent SQLite database storage
# We mount this to an external persistent disk on Railway/Render so data isn't lost on restart.
RUN mkdir -p /usr/src/app/data
ENV DB_PATH=/usr/src/app/data/inquiries.db

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the Vite Frontend
RUN npm run build

# Expose the dynamically assigned Port
EXPOSE 3000

# Start the full-stack server
CMD [ "npm", "run", "start" ]
