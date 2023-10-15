# Standard Library imports
from rest_framework.views import APIView
from rest_framework.response import Response

# App imports
from apps.google.utils import sanitization_utils
from apps.google.services.search import search_service

class SearchView(APIView):
    def get(self, request, **kwargs):
        unsafe_query = self.request.GET.get('query')
        sanitized_dict = {
            'query': sanitization_utils.strip_xss(unsafe_query),
        }
        resp = search_service.get_search(sanitized_dict)
        return Response(resp)