from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('assets.urls')),  # API URLs
    path('api/', include('api.urls')),  # Incluindo as rotas da API
]
