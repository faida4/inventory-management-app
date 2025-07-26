#from django.shortcuts import render

# Create your views here.
"""
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from django.http import HttpResponse

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
def home(request):
    return HttpResponse("Bienvenue sur la page d'accueil de l'application d'inventaire.") """


# views.py
from rest_framework import viewsets
from rest_framework.decorators import api_view #Décorateur pour transformer une fonction Python en une vue de type API REST
from rest_framework.response import Response
from .models import Product
from django.db import models
from .serializers import ProductSerializer
from django.http import HttpResponse

class ProductViewSet(viewsets.ModelViewSet): #Vue générique pour gérer les produits via une API REST
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

#Fonction de vue qui retourne une réponse HTTP
def home(request):
    return HttpResponse("Bienvenue sur la page d'accueil de l'application d'inventaire.")

# Vue pour la liste d'achat
@api_view(['GET'])
def purchase_list(request):
    # Filtrer les produits dont la quantité est inférieure au seuil minimum
    products_to_purchase = Product.objects.filter(quantity__lt=models.F('minimum_threshold'))
    
    # Sérialiser les données
    serializer = ProductSerializer(products_to_purchase, many=True)
    
    return Response(serializer.data)
