# Use the official Node.js image as the base image
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to take advantage of Docker's cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Tailwind CSS styles and Next.js application
RUN npm run build

# Start a new stage for the production environment
FROM node:18 AS runner

# Set the working directory
WORKDIR /app

# Copy the build output and necessary files from the builder stage
COPY --from=builder ./next.config.js ./
COPY --from=builder ./package*.json ./
COPY --from=builder ./public ./public
COPY --from=builder ./.next ./.next
COPY --from=builder ./app/styles ./styles

# Install only production dependencies
RUN npm install --production

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]