# Exercise 2

## About

In this exercise let's build a simple web server. Then dockerize it.


1. In this directory, create a file called `Dockerfile` with the following content
2. Add nginx:alpine as the first line to bring in that image
3. Copy the entire contents of htmlApp to this a direcvtory in the app. /usr/share/nginx/html
4. Build the image `docker build -t html-server-image:v1 .`
5. Run the image `docker run -p 80:80 html-server-image:v1`