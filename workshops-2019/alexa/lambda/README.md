# Lambda and Alexa

## About

After interpritation of the user request alexa then sends a json payload to lambda.
Lambda does whatever it's coded to do and reposnds.

The sample lamba looks us the next Eugene Web devs meet and responds with a message for alexa to speak.

## Use

Lambda will need to return json in the format alexa expects. Building that response is up to lambda.

For alexa to respond lambda must respond with the expected json format. 
However if that is not needed Lmabda can simply preform it's task or tasks. 
Alexa will simply respond with an audio sound aknolging that the message was sent.

## Required

Alexa skill to send the request to lambda
