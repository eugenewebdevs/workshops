# AWS Lambda and API Gateway

## About

AWS is used in this workshop. Mostly because of the ease of set up and free teir on services.

Only the lambda and API Gateway will be used, but AWS makes it easy to add other services like S# for simple storage, Dynamo DB for a database, and well over 50 plus other services.

The aim of the workshop is to use AWS to acess, consume, and return data from AWS and a third party RESTful API.

A simple json return is set up for the inital connection. This return a JSON object and is located at this S3 enpoint: 

https://s3-us-west-2.amazonaws.com/eugenewebdevs/workshops-2019/sample.json

You can visit this endpoint in the browser to view the JSON.


## Lambda

Lambdas are where code is run in AWS. 

These should be small stateless functions.

Lambdas in AWS has a free tier. This is a monthly tier.

For example: 

If you allocate 128MB of memory to your function, execute it 30 million times in one month, and it runs for 200ms each time, you should pay around $10.

Good luck.

## API Gateway

API Gateway is a way to pass data to aws sservices via an http endpoint.

These endpoints should be descriptive of the data they return.

API Gateway in AWS has a free tier.
 
1 million API calls recieved per month
