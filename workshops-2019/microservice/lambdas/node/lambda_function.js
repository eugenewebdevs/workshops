exports.handler = function(event, context, callback) {
    const url = 'https://s3-us-west-2.amazonaws.com/eugenewebdevs/workshops-2019/sample.json';

    fetch(url)
        .then(response => {
            const data = response.json;
            console.log({ data });
            callback(null, data);
            return true;
        })
        .catch(error => {
            console.log({ error });
            callback('An error occurred.');
            return false;
        });
 }