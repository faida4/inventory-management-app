from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta: #Classe interne pour configurer le comportement du sérialiseur
        model = Product
        fields = '__all__'
