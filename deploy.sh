#!/bin/bash

# Pull latest changes
git pull

# Build and restart the container
docker build -t qwertea .
docker stop qwertea 2>/dev/null || true
docker rm qwertea 2>/dev/null || true
docker run -d --name qwertea -p 42069:42069 qwertea