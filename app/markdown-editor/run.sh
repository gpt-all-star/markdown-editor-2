#!/bin/sh

# Remove any existing Docker container named markdown-editor
# IMPORTANT: This prevents conflicts when trying to create a new container with the same name
docker rm -f markdown-editor

# Build the Docker image
# IMPORTANT: Replace this with the correct Docker image name
docker build -t markdown-editor .

# Run the Docker image
# IMPORTANT: Replace this with the correct Docker container name
# The -p option maps the port inside Docker as an external port which can be accessed from outside
# In this case, we're mapping port 3000 inside Docker to port 3000 on the host machine
# The --rm option automatically removes the Docker container when it exits
# The -d option runs the Docker container in detached mode, meaning it runs in the background
# The --name option assigns a name to the Docker container
# The final argument is the Docker image to run
docker run -p 3000:3000 --rm -d --name markdown-editor markdown-editor