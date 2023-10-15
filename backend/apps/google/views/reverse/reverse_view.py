# Standard Library imports
from rest_framework.views import APIView
from rest_framework.response import Response

# App imports
from apps.google.services.reverse import reverse_service

class ReverseView(APIView):
    def get(self, request, **kwargs):
        resp = reverse_service.get_address()
        return Response(resp)