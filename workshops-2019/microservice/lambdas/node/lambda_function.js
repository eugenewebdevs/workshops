exports.handler = async function(event, context) {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=372f168ae29875f30eb9f0cda74358c1';

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
 