
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; //Permet de récupérer l'ID du produit depuis l'URL
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Product.css';  // Importez le fichier CSS pour appliquer les styles

const ProductEdit = ({ fetchProducts }) => { 
    const { id } = useParams();  // Récupère l'ID depuis l'URL
    const navigate = useNavigate();  // Utilisé pour rediriger après la sauvegarde ou l'annulation

    const [product, setProduct] = useState({ //Définit un état initial pour le produit sous forme d'objet
        name: '',
        description: '',
        product_type: '',
        quantity: 0,
        minimum_threshold: 0,
    });

    // Charger les données du produit si on est en mode édition
    useEffect(() => {//Hook pour exécuter une action après le rendu du composant.
        if (id) {
            axios.get(`/api/products/${id}/`)
                .then(response => setProduct(response.data)) //Met à jour l'état avec les données du produit récupérées.
                .catch(error => console.error('Erreur lors du chargement du produit', error));
        }
    }, [id]);

    const handleChange = (e) => { 
        setProduct({ ...product, [e.target.name]: e.target.value });//Met à jour l'état du produit en fonction de l'entrée utilisateur.
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //Empêche le comportement par défaut du formulair
        if (id) {
            // Mise à jour du produit existant
            axios.put(`/api/products/${id}/`, product)
                .then(response => {
                    fetchProducts();
                    navigate('/');   // Redirige vers la liste des produits
                })
                .catch(error => console.error('Erreur lors de la mise à jour', error));
        } else {
            // Ajouter un nouveau produit
            axios.post('/api/products/', product)
                .then(response => {
                    fetchProducts();
                    navigate('/');  
                })
                .catch(error => console.error('Erreur lors de l\'ajout', error));
        }
    };

 
    return (
        <div className="container">
            <h2>{id ? 'Modifier le produit' : 'Ajouter un produit'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nom" value={product.name} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
                <input type="text" name="product_type" placeholder="Type de produit" value={product.product_type} onChange={handleChange} required />
                <input type="number" name="quantity" placeholder="Quantité" value={product.quantity} onChange={handleChange} required />
                <input type="number" name="minimum_threshold" placeholder="Seuil minimum" value={product.minimum_threshold} onChange={handleChange} required />
                <button type="submit" className="btn btn-save">Save</button>
                <Link to="/" className="btn btn-secondary" >Cancel</Link>

            </form>
        </div>
    );
};

export default ProductEdit;

