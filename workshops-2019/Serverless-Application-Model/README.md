# AWS SAM

## About

AWS [Serverless Application Model](https://github.com/awslabs/serverless-application-model) (AWS SAM) is how we can develop for AWS serverless in a local environment. We can then push to AWS services like lambda.

A serverless application is a combination of Lambda functions, event sources, and other resources that work together to perform tasks.

There are two ways we will set this up.

1. On you local machine
2. In AWS cloud using and [EC2](https://aws.amazon.com/ec2/) instance running [Cloud9](https://aws.amazon.com/cloud9/)

The previous workshop on microservices is not required however it will probably help if you are fairly new to AWs services.

## Required for this workshop

* AWS account




## Use on your machine

### Mac

#### Required

### Linux

#### Required

### Windows

#### Required

* Win 10
* [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

## Use in AWS cloud

You can runs SAM in a [EC2 instence on AWS](https://aws.amazon.com/ec2/). EC2 is a cloud server. For a serverless microservice we can use the t2 micro instance. the t2 instence is the smallest instance avaiable. This help avid any cost as we are just testing in this workshop.

On initating this EC2 instance, the SAM local CLI is automaticlly installed. All your lambda function in the current region will be avaiable to clone into the SAM local. You will also be able to create new lambdas. Lambdas created or edited in the EC2 instance can then be pushed back to production.

Within the EC2 instance you will have a browser based [IDE](https://docs.aws.amazon.com/cloud9/latest/user-guide/tutorial.html#tutorial-tour-ide) to edit code and install packages.




