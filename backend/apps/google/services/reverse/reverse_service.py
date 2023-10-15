# Django imports
from django.core.cache import cache

# Built-in Imports
import requests

# Third-party imports
from decouple import config

api_key = config('GOOGLE_MAPS_API_KEY')

def get_address():
    lng = cache.get('longitude')
    lat = cache.get('latitude')

    temp_url = f"""
        https://maps.googleapis.com/maps/api/geocode/json
        ?latlng={lat},{lng}
        &language=pt_BR
        &key={api_key}
    """
    url = ''.join(temp_url.split())
    r = requests.get(url)
    
    if r.status_code not in range(200, 299):
        return None
    try:
        resp = r.json()['results'][0]
    except:
        return None
    return resp