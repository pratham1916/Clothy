import React from "react";

export default function Product({ url, name, price }) {
    return (
        <div className="product-card">
            <img className="product-image" src={url} alt="product" />
            <div className="product-content">
                <div className="product-header">
                    <h2>{name}</h2>
                    <p className="product-price">{price}</p>
                </div>
                <div className="product-icons">
                    <i className="fa-solid fa-basket-shopping"></i><i className="fa-regular fa-heart"></i>
                </div>
            </div>
        </div>
    );
}
