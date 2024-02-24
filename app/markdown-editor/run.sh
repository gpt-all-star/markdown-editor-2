#!/bin/sh

# Change into the correct directory
# IMPORTANT: Replace this with the correct path to your project
cd ./markdown-editor

# Install the project dependencies
npm install

# Build the project for production
npm run build

# Start the React application
npm start
