# Django imports
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('app_manager/', admin.site.urls),
]