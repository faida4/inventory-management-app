<!-- Banner -->
<h1 align="center">📦 Inventory Management App</h1>
<p align="center">
  Application web <b>full-stack</b> pour gérer les produits, les stocks et les catégories.<br/>
  <i>Django REST API • React • PostgreSQL</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11-3776AB?logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/Django-REST-092E20?logo=django&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/PostgreSQL-15-4169E1?logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-000000"/>
</p>

---

## ✨ Fonctionnalités

- ➕ **CRUD complet** : créer, lire, mettre à jour, supprimer des produits
- 🏷️ **Catégories** & gestion des **quantités** (stock in/out)
- 📊 **Tableau de bord** (stock faible, produits récents, stats rapides)
- 📱 **UI responsive** (mobile/tablette/desktop)

---

## 🧰 Stack technique

| Frontend | Backend                    | Base de données | Outils |
|:--------:|:---------------------------|:---------------:|:------|
| React    | Django + Django REST Framework | PostgreSQL       | Axios, Django ORM, Bootstrap, Git |

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
