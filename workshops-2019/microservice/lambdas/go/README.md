# Lambda in Go

## About

This lambda is written using the aws native Go support. Go version 1.x

## Use

You will write you go code locally. For simple function like the http request in this repo, you can simpley create your function with the aws handler function in mind.

You will need to then compile and zip your code. You can then upload to the lambda.

Alertantivly you can install [SAMS](https://github.com/awslabs/serverless-application-model) and the aws CLI on your local machine. Then upload back to aws.