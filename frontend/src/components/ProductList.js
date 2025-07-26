
// src/components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';  // Importez le fichier CSS pour appliquer les styles

const ProductList = ({ products, onDelete }) => {
    return (
        <div className="container">
            <Link to="/product" className="btn btn-success" style={{ marginBottom: '20px' }}>Add Product</Link>

            <h2>Produits</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Type de produit</th>
                        <th>Quantité</th>
                        <th>Seuil minimum</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.product_type}</td>
                            <td>{product.quantity}</td>
                            <td>{product.minimum_threshold}</td>
                            <td className="btn-container">
                                <Link to={`/product/${product.id}`} className="btn btn-primary">Edit</Link>
                                <button onClick={() => onDelete(product.id)} className="btn btn-delete" style={{ marginLeft: '10px' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Bouton pour accéder à la liste d'achat */}
            <Link to="/purchase-list" className="btn btn-warning" style={{ marginTop: '20px' }}>
                Voir la liste d'achat
            </Link>
        </div>
    );
};

export default ProductList;
