# Microservices

## About

Micro services are a great way to get some single purpose logic with out having to add more servers. AWS makes this very easy and offers this at a totally freee tier.

In this example we will create a slash command for Slack. This allows you to connect Slack to pretty much anything on the web.

This is menant to be a continuation to our 2019 workshop: https://github.com/eugenewebdevs/workshops/tree/master/workshops-2019/microservice

## Required

* Slack credentails to create a bot and slash command for a workspace
* AWS account
* Access to data to connect to slash command

## Slack

Create a bot https://api.slack.com/apps

Create a new slash command (add some temp url for now)

Install to Slack workspace

## AWS

### API Gateway

API Gateway provides a publicly available http endpoint for the slash command to POST to.

#### Create a REST API

* Create a new API choosing REST
* Create a new resource
* For this resource add a POST method

#### Integration Request

There are a few parts to API Gateway, for this we want to go to the Integration Request.
This area of the gateway is where you configure where the incoming request will go (Lambda) and the data passed on.

Will wil be sending all the incoming data to a Lamda. 

Slack sends post data with the content tyope of application/x-www-form-urlencoded

Next in Mapping Templates we set the content type as this and choose the tmepl Methiod Request Passthrough from the dropdown that appears.

Any data from Slack is in a query string. 

Example of data sent by a Slack Post below:

Headers:

`connection	close
content-type	application/x-www-form-urlencoded
content-length	418
x-slack-request-timestamp	1613288918
x-slack-signature	v0=d3784f23a242ca6edf52fa54f0d525775c80479ef95024b1ea929c13d845afdd
accept	application/json,*/*
accept-encoding	gzip,deflate
user-agent	Slackbot 1.0 (+https://api.slack.com/robots)
host	webhook.site`


Query String:

`token=DPi5hzwgz9uwVSIK7DVwUWR2&team_id=T08EKEVBL&team_domain=antonioortegajr&channel_id=D1L6RHWD9&channel_name=directmessage&user_id=U08EKFKLL&user_name=antonioortegajr&command=%2Fsup&text=&api_app_id=A01N271NB0T&is_enterprise_install=false&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT08EKEVBL%2F1762667355841%2FmD9bBE1jZnUr8o8jvB7dsZRn&trigger_id=1743263825494.8495505394.97f167591d148fbf509c88a9ebed7aa3`

Params:

`token	QPi5hzwgz9uwQSIK7DVwUWR1
team_id	MYTEAMID
team_domain	antonioortegajr
channel_id	D1L6RHWD9
channel_name	directmessage
user_id	U08EKFKLL
user_name	antonioortegajr
command	/myslashcommand
text	(empty)
api_app_id	A01227NB0T
is_enterprise_install	false
response_url	https://hooks.slack.com/commands/T08EKEVBL/1762667355841/mD9bBE1jZnUr8o8jvB7dsZRn
trigger_id	1743263325494.849550333.97f163331d148fbf509c33a9ebed7aa3`

#### Integration Response

In the Integration Response we define the output from API Gateway. This will be whatever was returned from the lambda function. Again we will just send the data back via Method Request Passtrough. (If you are just sending back strings and don't need connections/logic you can set this here and do not even need a lambda)

### Lambda

Lambdas handle our connection to data and any logic we will need. Before we make our lambda there are a few things to consider.

* Does this data require auth? If so you will want to look at where to store creds. Lambda does provide env variables, but this might not be the best solution if you need something more complex involving a state machine. See advanced in this doc for more.

* Will this data return quickly? Slack will give you a few seconds to respond. If the resources called take longer, this connection will time out with Slack and the response_url may need to be used if the process is going to take a bit of time.

In our lambda we recieve data from API Gateway. This is the data from Slack in the example shown above.

Our Lambda (in this exmample) )however will just return data with no direction from Slack. In the lambda directory of this repo is an example lambda (in node) calling for a ramdom taco recipie from an public API.

The json return is sent to Slack as is.


### Step Functions

Step functions are a collection of lambdas working togehter as a state machine.

This state machine is invoked by API Gateway and passed the response_url as data is prepared for slack.

When completed the statemachine fires a Post to Slack at the response url as the slash command repsonse.

This is needed when your slash command does things like getiing data from more than a single source/ porcessing and will not respond quickly to Slack. Slack does not like long connections and you need to responod quickly. API Gateway can invoke a state machine and respond to Slack with a 200 right away. The state machine then has a few aditional seconds to do it's work before reponding the response url provided by Slack.

This can also be a useful solution if you find lambda cold starts to be an issue.

Complex processes may require auth and the aws param store might need to be used for storage creds that can be used by more than a single lambda function (as is the case with env variables).

Refreshed creds can also be stored and call by lambdas. The refreshing process is often a seperate microservice invoked by aws cloud watch. This would store sensitive data and only give out tokens so your microservices never actually hold any account logins or secrets.

Example to come...
