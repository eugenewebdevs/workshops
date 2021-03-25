const querystring = require('querystring');

exports.handler = async (event) => {
    
    const qs = querystring.parse(event.params.querystring);
    
    // send the data for an http request and the response url from slack for other lamdas to use
 
    return  {
        response_url: qs.response_url,
        host: 'taco-randomizer.herokuapp.com',
        path: '/random/?full-taco=true',
        method: 'GET'
    }
};
