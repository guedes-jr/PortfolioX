from django.db import models
from django.contrib.auth.models import User

# Modelo de Ativos (ações, FIIs, ETFs, etc.)
class Asset(models.Model):
    ASSET_TYPES = [
        ("STOCK", "Ação"),
        ("FII", "Fundo Imobiliário"),
        ("ETF", "ETF"),
        ("RF", "Renda Fixa"),
    ]

    name = models.CharField(max_length=100)
    ticker = models.CharField(max_length=10, unique=True)
    asset_type = models.CharField(max_length=10, choices=ASSET_TYPES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.ticker} - {self.name}"

# Modelo de Transações (compras e vendas)
class Transaction(models.Model):
    TRANSACTION_TYPES = [
        ("BUY", "Compra"),
        ("SELL", "Venda"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    transaction_type = models.CharField(max_length=4, choices=TRANSACTION_TYPES)
    quantity = models.DecimalField(max_digits=10, decimal_places=2)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

    def __str__(self):
        return f"{self.user} - {self.asset.ticker} ({self.transaction_type})"

# Modelo de Dividendos e Proventos
class Dividend(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    asset = models.ForeignKey(Asset, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date_received = models.DateField()

    def __str__(self):
        return f"{self.user} - {self.asset.ticker} - R$ {self.amount}"
