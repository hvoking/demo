# Standard Library imports
from rest_framework.views import APIView
from rest_framework.response import Response

# App imports
from apps.google.utils import sanitization_utils
from apps.google.services.details import details_service

class DetailsView(APIView):
    def get(self, request, **kwargs):
        unsafe_place_id = self.request.GET.get('place_id')
        sanitized_dict = {
            'place_id': sanitization_utils.strip_xss(unsafe_place_id)
        }
        resp = details_service.get_details(sanitized_dict)
        return Response(resp)