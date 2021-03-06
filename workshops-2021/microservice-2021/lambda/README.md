# Single lambda return of data

## About

This single lambda return data from the taco-randomizer API.

An http request is mad and the retun is passed back to the aws service that invoked the lambda.

Wnile this does often work, depending on the resource you are attempting to retrieve data from a time out can occur.

This may then impact the intended flow of data.

For longer process or multi step process (like aggragation and trqanformingations of data) consider chaining together lambdas using step fucntions. Step function example avaiable in this repo.