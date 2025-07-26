from django.apps import AppConfig


class InventoryConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField' #Définit le type de clé primaire
    name = 'inventory'
