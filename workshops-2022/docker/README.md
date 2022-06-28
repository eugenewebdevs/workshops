# Simple Docker Workshop

## About

Docker has become the go to container service in the current web dev industry.

The workshop is meant for anyone brand new to docker or has used docker, but not dockerized a project.

The goal of this workshop is top complete the following:

- Install and test docker installation 🐳
- Take a provided application and "dockerize" it 🐳
- Create our own docker image 🐳
- Run multiple containers 🐳
- Upload the application to docker hub 🐳
- Pull and run an image 🐳
- Have someone pull run your application 🐳
- Create an application in a container that accesses a database in a separate container 🐳

This workshop will be done in command line. Docker does provide a GUI , but to make this resource reusable in the future dockeer caommands will be used.

Feel free to do the exercises at your own pace, but do each one as they are intended to build on each other.

## Required

- Laptop (fully charged)
- Power cord for laptop
- Latest Docker installed https://docs.docker.com/get-docker/
- Dockerhub account (free: https://hub.docker.com/)

## Docker Vocab

- images: an image is what is produced from a docker file, including language platform, libraries, and code
- containers: a running instance of an image. This is like a server, but not really... more on that.

## Use

We will be using some of the following docker very useful commands. These will be useful in the coming exercises.

- `docker --version` - Prints version of docker installed.
- `docker images` - See all images on your machine.
- `docker ps` - See running containers
- `docker ps -a` - See all containers running ans stopped.
- `docker stop` - Stop a running container. Takes a container name or ID.
- `docker compose up` - Runs docker compose.
- `docker login` - Logins to dockerhub.com
- `docker pull` - Pulls a docker image onto your machine Takes a image name.
- `docker rm` - Deletes a stopped docker container. Takes a container name or ID.
- `docker rmi` - Removes a docker image. Takes a container name or ID.

Run the following commands to be sure docker is installed:

`docker --version`

If you see a return like:

`Docker version 20.10.14, build a224086`, then you are good to go!

Feel free to do the exercises at your own pace, but do each one as they are intended to build on each other.


## Clean up

Images, containers and volumes can take up a lot of space. They are also to easy to forget about. Taking a second to clear away the unneeded can win back a lot of space.

There are also more drastic measures.

Remove all stopped containers

`docker rm -f $(docker ps -a -q)`

Remove all volumes

`docker volume rm $(docker volume ls -q)`

Remove all images

`docker rmi -f $(docker images -a -q)`

Prune all the unused

`docker system prune -a`

`docker image prune`