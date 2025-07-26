
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Product.css';  

const PurchaseList = () => {
    const [purchaseList, setPurchaseList] = useState([]);//État local qui contient les produits à acheter.

    // Fonction pour récupérer les produits à acheter depuis le backend
    const fetchProductsToPurchase = () => {
        axios.get('/api/purchase-list/')
            .then(response => {
                setPurchaseList(response.data);//Met à jour l'état avec les produits reçus
            })
            .catch(error => console.error('Erreur lors de la génération de la liste d\'achat', error));
    };

    useEffect(() => {
        fetchProductsToPurchase();
    }, []);

    return (
        <div className="container">
            <h2>Liste d'achat</h2>
            {purchaseList.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Type de produit</th>
                            <th>Quantité</th>
                            <th>Seuil minimum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseList.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.product_type}</td>
                                <td>{product.quantity}</td>
                                <td>{product.minimum_threshold}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Aucun produit à réapprovisionner pour le moment.</p>
            )}

            {}
            <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>
                Retour à la liste des produits
            </Link>
        </div>
    );
};

export default PurchaseList;

