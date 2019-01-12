const http = require('http');

exports.handler = async (event, context) => {
    
    return new Promise((resolve, reject) => {
        const options = {
            host: 'api.themoviedb.org',
            path: '/3/discover/movie?api_key=372f168ae29875f30eb9f0cda74358c1',
            method: 'GET'
        };

        const req = http.request(options, (res) => {
          res.setEncoding('utf8');    
          res.on('data', function (chunk) {
             resolve('BODY: ' + chunk);
            });
        });

        req.on('error', (e) => {
          reject(e.message);
        });

        // send the request
        req.write('data');
        req.end();
    });
};
