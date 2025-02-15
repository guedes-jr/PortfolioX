from django.contrib import admin
from .models import Asset, Transaction, Dividend

admin.site.register(Asset)
admin.site.register(Transaction)
admin.site.register(Dividend)
