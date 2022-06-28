# Exercise 2

## About

In this exercise let's set up a simple html page. Then dockerize it and run on an nginx image. 

1. In this directory, create a file called `Dockerfile` (no extension) with the following content
2. Add `FROM nginx:alpine` as the first line to bring in that image
3. Copy the entire contents of htmlApp to this a directory in the app: `COPY htmlApp/. /usr/share/nginx/html`
4. Build, name, and tag the image: `docker build -t html-server-image:v1 .`
5. Run the image: `docker run -p 80:80 html-server-image:v1`

We should now have a running container at http://localhost/

## What is going on here

In the Dockerfile we are using the `FROM` command to bring in the nginx image.

This is an image provided on docker hub.

We copy the code from out local machine into the image.

This is the Copy command. From the directory htmlApp. All files ar copied using the `.` command.

We copy the contents into the expect directory for nginx. Using the `/usr/share/nginx/html` command.

Building the image stores all the copied code in the image. Running the image starts the container.

The image is static so any updates to the html file will need a new image to be built.

To see containers running on your machine, in a new terminal:

`docker ps`

(add -a to see all containers)

Docker will give this container a name as well as an ID.

Now let's ssh into the container using the name or the ID we saw from `docker ps`.

`docker exec -it <docker container name or ID> sh`

You are now free to explore the container contents. This is a linux container to normal commands like

`ls`

are available. Keep in mind that the container may or may not tools, editors, packages, etc installed. This is up to the creator of the image we are using.

While we can change things in the container to make changes, we should not do that.

Instead we should use run the application locally. Make changes then build an image to share.

Other wise the changes will not be sharable via up;loading an image to the docker hub.

Type `exit` to exit the container.
