require 'net/http'
require 'json'

def lambda_handler(event:, context:)
    url = 'https://api.themoviedb.org/3/discover/movie?api_key=372f168ae29875f30eb9f0cda74358c1'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    return JSON.parse(response)
end