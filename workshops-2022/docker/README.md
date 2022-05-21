# Simple Docker Workshop

## About

Docker has become the go to container service in the current web dev industry.

The workshop is meant for anyone brand new to docker or has used docker, but not dockerized a project.

The goal of this workshop is top complete the following:

- Install and test docker installation 🐳
- Pull and run an image
- Take a provided application and "dockerize" it.
- Upload the application to docker hub
- Have another dev pull run your application
- Create an application in a container that accesses a database in a separate container

This workshop will be done in command line. Docker does provide a GUI , but to make this resource reusable in the future dockeer caommands will be used.

Feel free to do the exercises at your own pace, but do each one as they are intended to build on each other.

## Required

- Laptop (fully charged)
- Power cord for laptop
- Latest Docker installed https://docs.docker.com/get-docker/
- Dockerhub account (free: https://hub.docker.com/)

## Docker Vocab

- containers: containers hold the programming language and code. This is like a server, but not really... more on that.
- images: an image is what is produced from a docker file. Containers can be built from images

## Use

We will be using soem of the following docker commands

- `docker --version`
- `docker images`
- `docker ps`
- `docker stop` 
- `docker compose up`
- `docker login` 
- `docker pull`
- `docker rm` 
- `docker rmi` 
- `docker ps -a`

Run the following commands to be sure docker is installed:

`docker --version`

If you see a return like:

`Docker version 20.10.14, build a224086`, then you are good to go!

Feel free to do the exercises at your own pace, but do each one as they are intended to build on each other.