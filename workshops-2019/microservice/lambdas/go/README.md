# Lambda in Go

## About

This lambda is written using the AWS native Go support. Go version 1.x

## Use

You will write your go code locally. For simple function like the http request in this repo, you can simply create your function with the AWS handler function in mind.

You will need to install the Lambda dependency. 

`go get github.com/aws/aws-lambda-go/lambda`

You will need to then compile and zip your code. You can then upload to the lambda.

Build your code with 
`GOOS=linux go build -o main main.go`

Zip your code for upload to AWS 

`zip deployment.zip main`


Alternatively, you can install [SAMS](https://github.com/awslabs/serverless-application-model) and the AWS CLI on your local machine. Then upload back to AWS.