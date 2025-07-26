from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    product_type = models.CharField(max_length=50)
    quantity = models.IntegerField()
    minimum_threshold = models.IntegerField()

    def __str__(self): #retourne une représentation en chaîne de l'objet
        return self.name
