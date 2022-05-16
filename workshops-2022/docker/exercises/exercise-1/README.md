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

 Then

 `docker run -p 8080:8080 -t hello`