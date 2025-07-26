"""
WSGI config for backend project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os #interagir avec le système d'exploitation

from django.core.wsgi import get_wsgi_application #le serveur peut utiliser pour communiquer avec Django.

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings') #Définit une variable d'environnement

application = get_wsgi_application()


#