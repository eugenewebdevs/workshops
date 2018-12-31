import json
import urllib.request

def lambda_handler(event, context):
    
    url = 'https://s3-us-west-2.amazonaws.com/eugenewebdevs/workshops-2019/sample.json'
    r = urllib.request.urlopen(url)
    data = json.loads(r.read().decode(r.info().get_param('charset') or 'utf-8'))
    
    # return data
    return data