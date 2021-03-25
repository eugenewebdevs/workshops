
exports.handler = async (event) => {
    
    const host = event.incomingEvent.response_url;
    const path = '';
    const method = 'POST';
    
    const dataParsed = JSON.parse(event.httpReturn);
    
    const tacoString = `🌮 Recipie: ${dataParsed.name}!! Link to Full 🌮 Recipie: ${dataParsed.url}`;

    const data = tacoString;
    
    return {
        host: host,
        path: path,
        method: method,
        data: data,
    };
};
