from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AssetViewSet, TransactionViewSet, DividendViewSet

router = DefaultRouter()
router.register(r'assets', AssetViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'dividends', DividendViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
