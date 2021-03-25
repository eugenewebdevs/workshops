const http = require('http');

exports.handler = async (event) => {
    // tacofancy API
    const tacoData = new Promise((resolve, reject) => {
        const options = {
            host: 'taco-randomizer.herokuapp.com',
            path: 'random/?full-taco=true',
            method: 'GET'
        };

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
    const dataParsed = JSON.parse(tacoData)
    
    const tacoString = `🌮 Recipie: ${dataParsed.name}!! Link to Full 🌮 Recipie: ${dataParsed.url}`;

    return tacoString;
    };
