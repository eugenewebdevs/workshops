# Sharing Containers

## About

## Use

Change up the html file in exercise 2. This is html-server-image 

Login to dockerhub

`docker login --username=yourDockerHubUserName --email=youremail@email.com`

Look up the image id

`docker images`

Tag image Example

`docker tag e8ce4e976e09 yourDockerHubUserName/html-server-image:latest`

Push image from exercise 2 to dockerhub

`docker push yourDockerHubUserName/html-server-image`

Invite someone to run your container! Should be:

`docker pull yourDockerHubUserName/html-server-image:latest`
