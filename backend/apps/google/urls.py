# Core Django imports
from django.urls import re_path

# App imports
from apps.google.views.geocoder import GeocoderView
from apps.google.views.reverse import ReverseView
from apps.google.views.search import SearchView
from apps.google.views.details import DetailsView

app_name = "google"
urlpatterns = [
    re_path(r'^geocoder_api', GeocoderView.as_view()),
    re_path(r'^reverse_api', ReverseView.as_view()),
    re_path(r'^search_api', SearchView.as_view()),
    re_path(r'^details_api', DetailsView.as_view()),
]