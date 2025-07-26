# Inventory Management App

Application web full stack pour la gestion des stocks, des catégories et des utilisateurs, développée avec Django, React et PostgreSQL.

---

## 🚀 Fonctionnalités

- Ajout, modification, suppression de produits
- Gestion des quantités, catégories, filtres
- Interface utilisateur dynamique et responsive
- Mise à jour automatique des stocks
- Authentification des utilisateurs

---

## 🧰 Stack technique

| Frontend | Backend                | Base de données |
|----------|------------------------|------------------|
| React    | Django REST Framework  | PostgreSQL       |

Autres outils : Django ORM, Axios, Bootstrap, Git

---

## 📁 Structure du projet
``` 
inventory-management-app/
├── backend/ # Projet Django
│ ├── backend/ # Configuration Django
│ ├── inventory/ # Application principale
│ ├── manage.py
│ └── db.sqlite3 # Base de données locale
├── frontend/ # Application React
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ ├── index.js
│ │ └── ...
│ └── package.json
├── .gitignore
└── README.md

``` 
---

## ⚙️ Installation locale (facultatif)

### 🔧 Prérequis

- Python 3.x
- Node.js + npm
- PostgreSQL
- pip / virtualenv

---



### ▶️ Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # sous Windows : venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### ▶️ Frontend (React)
```bash
cd frontend
npm install
npm start
```
