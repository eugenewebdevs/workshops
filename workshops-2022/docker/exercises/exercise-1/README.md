# Exercise 1

## About

This is a very simple application in Go. Since docker will load the go environment we need there is no need to install go on your machine.

## Required

- Docker

# Use

In the root of the exercise-1 directory run the docker command:

`docker build -t hello .`

This command has the following parts:

 1. `docker` - this lets your machine know you are using docker
 2. `build` - this builds an image from a Dockerfile
 3. `-t` - Allocate a pseudo-tty
 4. `hello` - This is the local directory containing the Go code
 5. `.` This is the file(s) to copy from your local directory into the image

 Then to start running the container.

 `docker run -p 8080:8080 -t hello`

The localhost endpoint will know be available in the browser at th mapped port.

With a container running we can explore more docker commands.

Let's look at all images we now have:

docker images

And running containers

docker ps

Stop the container

docker stop

Even non running containers

docker ps -a

Now to "clean up" the container

docker rm 

And remove the image

docker rmi

Containers and images can take up a lot of space.

Removing these will help keep space available on your machine.




