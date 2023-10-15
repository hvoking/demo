# Django imports
from django.core.cache import cache

# Built-in imports
import requests

# Third-party imports
from decouple import config

api_key = config('GOOGLE_MAPS_API_KEY')

def get_search(sanitized_dict):
    query = sanitized_dict['query']
    longitude = cache.get('longitude')
    latitude = cache.get('latitude')

    temp_url = f"""
        https://maps.googleapis.com/maps/api/place/autocomplete/json
        ?input={query}
        &location={latitude},{longitude}
        &components=country:BR
        &language=pt_BR
        &radius=5000
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