from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('status/', views.api_status, name='api_status'),
]
