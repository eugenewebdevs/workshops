# Sharing Containers

## About

## Use

Change up the html file in exercise 2. This is html-server-image 

login to dockerhub

`docker login --username=yourhubusername --email=youremail@company.com`

build and tag image

`docker tag e8ce4e976e09 yourhubusername/html-server-image:latest`

look up the image id

`docker images`

push image from exercise 2 to dockerhub

`docker push yourhubusername/html-server-image`

invite someone to run your container

Pull and run someone else's container. Here is mine!

`docker pull antonioortegajr/html-server-image:latest`