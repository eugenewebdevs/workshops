# API Gateway

## About

This workshop will use [API Gateway](https://aws.amazon.com/api-gateway/) to pass/return data via http endpoint and invoke lambdas.

A GET and or POST method will be set up. This will pass through any data using the method passthrough template. Resource names will be up to you.

## Use

API Gateway only has a few parts to each method in a resource.

A "Resource" is like the parent directory, which may or may not have sub-directories. This is mainly for organization and to indicates to API consumers what data they are getting from a REST endpoint. Each Resource can have a Method: "GET, PUT, POST, PATCH, OPTIONS, HEAD, and DELETE".
These are to further organize interactions with your API. All of this is modeled after [REST](https://docs.aws.amazon.com/apigateway/api-reference/index.html).


### Parts of a API Gateway Endpoint

1. Method Request - Receives the http request.
2. Integration Request - Transforms the request before sending to AWS service.
3. Send to AWS services (in this case, lambda) - invokes event for another AWS service.
4. Integration Response - Transform the response before sending back to the requestor.
5. Method Response - Respond with http codes in a RESTful fashion.

There is no code to set up an endpoint, but you can add logic in the transformation parts of the service.

## Things to know
* All endpoints are https without exception.
* If accessing from a browser, CORS will need to be set up
* Authentiction options are available, but more options are offered via the AWS service [Cognito](https://aws.amazon.com/cognito/)).