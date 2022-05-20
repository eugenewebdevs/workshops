# Exercise 2

## About

In this exercise let's set up a simple html page.Then dockerize it. And run on an nginx image. 


1. In this directory, create a file called `Dockerfile` with the following content
2. Add nginx:alpine as the first line to bring in that image
3. Copy the entire contents of htmlApp to this a direcvtory in the app. /usr/share/nginx/html
4. Build the image `docker build -t html-server-image:v1 .`
5. Run the image `docker run -p 80:80 html-server-image:v1`

We should not have a running container at http://localhost/

To see containers running on your machine:

`docker ps`

(add -a to see all containers)

The image is static so any updates to the html file will need a new image to be built.

Now let's ssh into thte container.

`docker exec -it hello bash`
