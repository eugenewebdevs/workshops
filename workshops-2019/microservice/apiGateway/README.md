# API Gateway

## About

This workshop will use [API Gateway](https://aws.amazon.com/api-gateway/) to pass/return data via http endpoint and invoke lambdas.

A GET and or POST method will be set up. This will pass through any data using the method passthrough template. Resource names will be up to you.

## Use

API Gateway only has a few parts.

1. Method Request - Recieves the http request
2. Integration Request - Transforms the request before sending to aws service
3. Send to aws serives (in this case lambda) - invokes event for another aws service
4. Integration Response - Transform the response before sending back to the requestor
5. Method Response - Respond with http codes in a RESTful fashion

There is no code to set up an endpoint, but you can add logic in the transformation parts of the service.

All endpoints are https without exception.
If accessing from a browser CORS will need to be set up
AUthentiction options are avalable, but more options are offered via the aws service [Cognito](https://aws.amazon.com/cognito/)).