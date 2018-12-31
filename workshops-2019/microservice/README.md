# Microservices with AWS Lambda and API Gateway

## About

We will leverage AWS in this workshop due to the ease of set up of these services and the free tier offer.

Only the Lambda and API Gateway services will be used in the context of this workshop. However, AWS makes it easy to add other services like [S3](https://aws.amazon.com/s3/) and [DynamoDB](https://aws.amazon.com/dynamodb/) for data storage, as well as over 50 other services.

The aim of the workshop is to use AWS to acess, consume, and return data from AWS and a third party REST API.

The following S3 endpoint returns a simple JSON response for the inital connection: https://s3-us-west-2.amazonaws.com/eugenewebdevs/workshops-2019/sample.json

## Lambda

Lambda is a compute service which executes small bits of code very quickly.

Lambdas are functions that should be small and stateless.

Lambdas in AWS has a free tier. This is a monthly tier.

For example: 

If you allocate 128MB of memory to your function, execute it 30 million times in one month, and it runs for 200ms each time, AWS will bill you around $10.

Good luck.

## API Gateway

API Gateway is a service that pass data to other AWS services via an HTTP endpoint.

These endpoints should be descriptive of the data they return.

API Gateway in AWS has a free tier.
 
1 million API calls recieved per month
