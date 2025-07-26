"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
#from django.contrib import admin
#from django.urls import path
#DefaultRouter automatise la gestion des routes pour les API REST


from inventory.views import home
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from inventory.views import ProductViewSet
from inventory.views import purchase_list  # Import de la vue purchase_list

router = DefaultRouter()
router.register(r'products', ProductViewSet) #Enregistre le ProductViewSet sous l'URL products

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)), #Inclut toutes les routes générées par le DefaultRouter
     path('', home),  # Ajout de la route pour la page d'accueil
     path('api/purchase-list/', purchase_list, name='purchase-list'),
]
