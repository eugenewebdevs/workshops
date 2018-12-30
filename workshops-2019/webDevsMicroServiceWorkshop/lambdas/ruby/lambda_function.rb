require 'net/http'
require 'json'

def lambda_handler(event:, context:)
    url = 'https://s3-us-west-2.amazonaws.com/eugenewebdevs/workshops-2019/sample.json'
    uri = URI(url)
    response = Net::HTTP.get(uri)
    return JSON.parse(response)
end