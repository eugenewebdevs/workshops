exports.handler = async function(event, context) {
    const url = 'https://s3-us-west-2.amazonaws.com/eugenewebdevs/workshops-2019/sample.json';

    try {
        const response = await fetch(url);
        const data = response.json();
        console.log({ data });
        return data;
    } catch (error) {
        console.error({ error });
        throw new Error(`Uh oh. An error occurred while fetching '${url}'.`)
    }
 }
 