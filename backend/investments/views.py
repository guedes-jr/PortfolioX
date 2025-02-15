from rest_framework import viewsets
from .models import Asset, Transaction, Dividend
from .serializers import AssetSerializer, TransactionSerializer, DividendSerializer

class AssetViewSet(viewsets.ModelViewSet):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class DividendViewSet(viewsets.ModelViewSet):
    queryset = Dividend.objects.all()
    serializer_class = DividendSerializer
