from rest_framework import serializers
from .models import Asset, Transaction, Dividend

class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asset
        fields = "__all__"

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = "__all__"

class DividendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dividend
        fields = "__all__"
