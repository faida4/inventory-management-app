
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductEdit from './components/ProductEdit';
import PurchaseList from './components/PurchaseList';  


const App = () => {
    const [products, setProducts] = useState([]);

    // Fonction pour récupérer la liste des produits
    const fetchProducts = () => {
        axios.get('/api/products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Erreur lors du chargement des produits', error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Fonction pour supprimer un produit
    const handleDelete = (productId) => {
        axios.delete(`/api/products/${productId}/`)
            .then(() => {
                fetchProducts();  // Actualiser la liste après suppression
            })
            .catch(error => console.error('Erreur lors de la suppression', error));
    };

    return (
        <Router>
            <div>
                <h1>Gestion d'inventaire</h1>
                <Routes>
                    {/* Route pour afficher la liste des produits */}
                    <Route exact path="/" element={<ProductList products={products} onDelete={handleDelete} />} />

                    {/* Route pour ajouter ou modifier un produit */}
                    <Route exact path="/product/:id?" element={<ProductEdit fetchProducts={fetchProducts} />} />

                     {/* Route pour afficher la liste d'achat */}
                     <Route exact path="/purchase-list" element={<PurchaseList />} />
                
                </Routes>
            </div>
        </Router>
    );
};

export default App;
