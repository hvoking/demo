# Django imports
from django.core.cache import cache

# Built-in imports
import requests

# Third-party imports
from decouple import config

api_key = config('GOOGLE_MAPS_API_KEY')

def get_details(sanitized_dict):
    place_id = sanitized_dict['place_id']
    temp_url = f"""
        https://maps.googleapis.com/maps/api/place/details/json
        ?place_id={place_id}
        &key={api_key}
    """
    url = ''.join(temp_url.split())
    r = requests.get(url)

    if r.status_code not in range(200, 299):
        return None
    try:
        resp = r.json()
    except:
        pass
    return resp