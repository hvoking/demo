# Standard Library imports
from rest_framework.views import APIView
from rest_framework.response import Response

# App imports
from apps.google.utils import sanitization_utils
from apps.google.services.geocoder import geocoder_service

class GeocoderView(APIView):
    def get(self, request, **kwargs):
        unsafe_address = self.request.GET.get('address')

        sanitized_dict = {
            'address': sanitization_utils.strip_xss(unsafe_address),

        }
        resp = geocoder_service.get_coordinates(sanitized_dict)
        return Response(resp)