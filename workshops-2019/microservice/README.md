# Microservices with AWS Lambda and API Gateway

## Required

You will need a valid [AWS account](https://aws.amazon.com/free/) to access the services. 

## About

We will leverage AWS in this workshop due to the ease of set up of these services and the free tier offer. 🎉 🆓 🎉

[Meetup link](https://www.meetup.com/eugenewebdevs/events/257692027/)

Lambda and API Gateway services will be used in the context of this workshop. However, AWS makes it easy to add other services like [S3](https://aws.amazon.com/s3/) and [DynamoDB](https://aws.amazon.com/dynamodb/) for data storage 💾, as well as over 50 other services.

The aim of this workshop is to use AWS to access, consume, and return data from AWS and a third party REST API. [Slides](https://slides.com/antonioortega-1/aws-microservice-workshop)

The following themoviedb.org API endpoint returns a simple JSON response for the initial connection: https://api.themoviedb.org/3/discover/movie?api_key=

A key has been provided for the workshop.

Will be acquiring this data via http request to the above link 🔗

No additional libraries 📕 or packages 🎁 are imported unless already added to a custom runtime layer.

This workshop will be completely in the browser and will not be covering [SAMS](https://github.com/awslabs/serverless-application-model)

## Lambda

Lambda is a compute service which executes small bits of code very quickly. 🏇

Lambdas are functions that should be small and stateless.

Many languages are supported nativly and more via layers. See the README 📄 in each of the lambdas directory in this repo for more and specific languages. :octocat:

🆓 Lambdas in AWS has an "always" free tier. This is reset monthly. 📆

For example: 

If you allocate 128MB of memory to your function, execute it 30 million times in one month, and it runs for 200ms each time, AWS will bill you around $10.

🍀 Good luck getting to a charge.

## API Gateway

API Gateway is a service that passes data to other AWS services via an HTTP endpoint.

These endpoints should be descriptive of the data they return.

🆓 API Gateway has a free tier for the first 12 months.
 
1 million API calls recieved per month.

## Use

This README explains the very basic microserivce using Lambda, API Gateway, and an IAM Role.
See below for steps.

## Steps in Workshop

The goal is to consume data from a super simple external source in less that 40 easy steps!

Things to know: There is a lot more to the IAM roles (that could a week of workshops) and the API Gateway settings have a lot of steps but none of them are code. Lambda has few steps and after those it's all about the code.

### Log in
1. Log into your AWS account

## IAM Role
[IAM docs](https://docs.aws.amazon.com/IAM/latest/APIReference/welcome.html)

2. Click on the "Services" drop down located in the top left of the AWS page.
3. Search for the IAM service and navegate to that area.
4. Click on Roles.
5. Click the Create Role button.
6. Click AWS Service.
7. Select lambda under common use cases
8. Choose all default settings until you are able to name the role.
9. Name the role "workshopRole" (or something else you will rememeber). 

### Create a new Lambda

[Lambda Docs](https://docs.aws.amazon.com/lambda/latest/dg/API_Reference.html)

10. Click on the services drop down located in the top left of the AWS page.
11. Search for the Lambda service and navigate to that area.
12. Click the Create Function button.
13. Name the new lambda "workshopLambda" (or something else you will rememeber).
14. Choose your runtime. If you choose a custom runtime like PHP or R, you will need a layer later on.
15. Open the change default execution role panel
16. Choose the IAM role we created earlier. (This is the "Exisitng Role" setting).
18. Click the Create Function button.
19. Click the Add trigger button under function overview
20. Select API Gateway 
21. Select Use existing API under Intent
22. From the search bar, select your API gateway
23. Select deployment stage $default and Security Open from the subsequent dropdowns
24. Press the Add button 

### Create API Endpoint via API Gateway

25. Click on the services drop down located in the top left of the AWS page.
26. Search for the API Gateway service and navegate to that area.
27. Click the Create API button (leave all the other settings default).
28. Name you new API "workshopApi" (or something else you will rememeber).
29. Click the Add Integration button and select lambda from the dropdown
30. Choose your lambda function from the "Choose a lambda function" dropdown
31. Click next until you reach the review and create tab
32. Press the Create button

It's just that easy!

After this set up, you can start exploring bringing in data from other APIs or other AWS serivces. This will be the hands-on section of the workshop.
