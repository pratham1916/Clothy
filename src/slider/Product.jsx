import React from "react";

export default function Product({ url, name, price }) {
    return (
        <div className="crousel-card">
            <img className="crousel-image" src={url} alt="product" />
            <div className="crousel-content">
                <div className="crousel-header">
                    <h2>{name}</h2>
                    <p className="crousel-price">{price}</p>
                </div>
                <div className="crousel-icons">
                    <i className="fa-solid fa-basket-shopping"></i><i className="fa-regular fa-heart"></i>
                </div>
            </div>
        </div>
    );
}
