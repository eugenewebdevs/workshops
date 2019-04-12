# API Development

## About

API development is creating resources that is easy and encourages developers to use.

## Development Features

Postman helps with the development process in a number of ways.

* CLI option - Postman provides an [npm package](https://www.npmjs.com/package/newman) for development testing and integrats with Jenkins, AppVeyor, Bamboo, CodeShip, Travis CI, Circle CI, or any other code deployment pipeline tool. 
* Use with existing API Data formats - [Export and import](https://learning.getpostman.com/docs/postman/collections/data_formats/) cURL, RAML, Swagger, WADL, OpenAPI.
* Mock your API - [Create a mock server](https://learning.getpostman.com/docs/postman/mock_servers/setting_up_mock/) for cross team development.
* Share with teams - Postman will [sync changes with your team](https://learning.getpostman.com/docs/postman/team_library/sharing). You can also fork a collection and merge back.
* Documentation - Postman will auto [document](https://learning.getpostman.com/docs/postman/api_documentation/intro_to_api_documentation/) from your collection and even host it for you.

A large part of the development process is tests!

## Example pre API request tests and scripting

Before postman makes a request to an API we can apply scripting to be sure the request has things like keys or sample data.

We can even get data from another API to use with the upcoming request. 

// hit the postman API in a script pre resquest
pm.sendRequest("https://postman-echo.com/get", function (err, response) {
    console.log(response.json());
});


This can be very useful to add some choas to requests sending data.
Upcoming requests may need random sample data. For example a fake email address. We can set thids a global variable to be used in future API requests and tests.



## Example API Response testing:

Tests in postman are unit tests. 

Moslty to keep the "API Contract". This "contract" is an unspoken agreement that as an API provider you will respect the fact that others are builing on top of this API. 

For example a successful API retuest that returns a http response code of 200 now, will continue to return 200 unless specified as a version change. Because this is very standard tennent of REST this is our first example.

// simple test for status code returned is 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

You pm is the testing API postman provides to make test writing cleaner and quicker. Assertations like pm.expect() are written with human readable verbs.

pm.test() decalres this is a test and the results (true of false) should show as a pass or fail in the postman tool. This acepts two arguments, the human readable test name or description and the function that returns true or false. Shown as pass or fail.

Many common tests also have premade made functions. For example the response time of your API si simpley pm.responseTime.

// test that response was under 30 seconds. This example uses the function short hand ()=> .
pm.test("Response time is under than 30 sec", ()=> {
    pm.responseTime < 30000;
});

As you can see modern JS syntax like the anonaymouse shorthand function ,() => are available.


Here some more example tests for variosu aspects of your API:

## Headers Tests

// we can test the expected response headers are present.
pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});


## Body Tests

// not a test but will extract the response body 
// and run JSON.parse() for you
//so you can set to a variable for further testing
 pm.response.json()

// specific expection in response body
 pm.test("Expecting ID = 6", function () {
    pm.expect(jsonData.id).to.eql(6);
});


// we can even validate a defined schema

var schema = {
  "items": {
    "type": "boolean"
  }
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function() {
  pm.expect(tv4.validate(data1, schema)).to.be.true;
  pm.expect(tv4.validate(data2, schema)).to.be.true;
});

## Request meta Tests

We can use meta data about the response in logic for test. For example:

if (responseCode.code < 300) {
    // run all the tests knowing that the http response code wasn not 
    // in the error range. Should the code be not a succes (200s)
    // no need to run this set of tests
}


