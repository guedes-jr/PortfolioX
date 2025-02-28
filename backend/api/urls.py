from rest_framework.routers import DefaultRouter
from assets.views import AssetViewSet
from django.urls import path, include
from api import views

router = DefaultRouter()
router.register(r'assets', AssetViewSet, basename='asset')

urlpatterns = [
    path('', include(router.urls)),
    path('status/', views.api_status, name='api_status'),
    path('user/', views.get_user, name='get_user'),
]
