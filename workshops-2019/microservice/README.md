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
2. Click on the "Services" drop down located in the top left of the AWS page.
3. Search for the IAM service and navegate to that area.
4. Click on Roles.
5. Click the Create Role button.
6. Click Lambda.
7. Choose all default settings until you are able to name the role.
8. Name the role "workshopRole" (or something else you will rememeber).

### Create a new Lambda

9. Click on the services drop down located in the top left of the AWS page.
10. Search for the Lambda service and navigate to that area.
11. Click the Create Function button.
12. Name the new lambda "workshopLambda" (or something else you will rememeber).
13. Choose your runtime. If you choose a custom runtime like PHP or R, you will need a layer later on.
14. Choose the IAM role we created earlier. (This is the "Exisitng Role" setting).
15. Click the Create Function button.

### Create API Endpoint via API Gateway

16. Click on the services drop down located in the top left of the AWS page.
17. Search for the API Gateway service and navegate to that area.
18. Click the Create API buttom (leave all the other settings default).
19. Name you new API "workshopApi" (or something else you will rememeber).
20. Click on the Action button for a pull down.
21. Click "Create Resource".
22. Name you new resource "workshop" (or something else you will rememeber).
23. Click on the resource you just created.
24. Click "Create Resource" (leave all the other settings default).
25. Click on the Action button for a pull down.
26. Click "Create Method".
27. In the pull down that appears, choose "GET".
28. Click "Create Method".
29. Click on the GET you just created and go to the "Integration Request" area.
30. In the settings "Integration type" = "Lambda Function", "Lambda Region" = "us-west-2" and "Lambda Function" = the lambda you already created.
31. Click "Mapping Templates" to expand the settings.
32. Under "Content-Type" click "Add mapping template".
33. Set the mapping template to "application/json".
34. The "Generate template" area will appear and choose "Method request passthrough" from the drop down.
35. Click on the Action button for a pull down.
36. Click "Deploy API".

It's just that easy!

After this set up, you can start exploring bringing in data from other APIs or other AWS serivces. This will be the hands-on section of the workshop.
