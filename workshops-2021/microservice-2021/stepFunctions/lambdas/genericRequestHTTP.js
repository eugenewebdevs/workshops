const http = require('http');


function genericRequestHTTP(host, path, method, data){
    
        let postData
    
        const httpData = new Promise((resolve, reject) => {
        const options = {
            host: host,
            path: path,
            method: method
        };
        method === 'POST' ? postData = data : postData = 'data'
        

        const req = http.request(options, (res) => {
          res.setEncoding('utf8');    
          res.on('data', function (chunk) {
             resolve(chunk);
            });
        });

        req.on('error', (e) => {
          reject(e.message);
        });

        // send the request
        req.write('data');
        req.end();
    });


    return httpData;
    
}

exports.handler = async (event) => {
    return {
        incomingEvent: event,
        httpReturn: await genericRequestHTTP(event.host, event.path, event.method, event.data)
    }
    
    };
