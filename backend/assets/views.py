from .serializers import AssetSerializer, TransactionSerializer, DividendSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Asset, Transaction, Dividend
from rest_framework import viewsets

class AssetViewSet(viewsets.ModelViewSet):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer
    permission_classes = [IsAuthenticated]

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class DividendViewSet(viewsets.ModelViewSet):
    queryset = Dividend.objects.all()
    serializer_class = DividendSerializer
