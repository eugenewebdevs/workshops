import json
import urllib.request

def lambda_handler(event, context):
    
    url = 'https://api.themoviedb.org/3/discover/movie?api_key=372f168ae29875f30eb9f0cda74358c1'
    r = urllib.request.urlopen(url)
    data = json.loads(r.read().decode(r.info().get_param('charset') or 'utf-8'))
    
    # return data
    return data