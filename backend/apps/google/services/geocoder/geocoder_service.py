# Built-in Imports
import requests

# Third-party imports
from decouple import config

api_key = config('GOOGLE_MAPS_API_KEY')

def get_coordinates(sanitized_dict):
    lat, lng = None, None
    address = sanitized_dict['address']
    
    temp_url = f"""
        https://maps.googleapis.com/maps/api/geocode/json
        ?address={address}
        &key={api_key}
    """
    url = ''.join(temp_url.split())
    r = requests.get(url)

    if r.status_code not in range(200, 299):
        return None, None
    try:
        results = r.json()['results'][0]
        lat = results['geometry']['location']['lat']
        lng = results['geometry']['location']['lng']
    except:
        pass
    return {'lat':lat, 'lng':lng}