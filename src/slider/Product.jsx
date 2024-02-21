import React from "react";

export default function Product(props) {
    return (
        <div className="card">
            <img className="product--image" src={props.url} alt="product image" />
            <div className="card_content">
                <div className="card_heading">
                    <h2>{props.name}</h2>
                    <p className="price">{props.price}</p>
                </div>
                <div className="card_icon">
                    <i class="fa-solid fa-basket-shopping"></i><i class="fa-regular fa-heart"></i>
                </div>

            </div>

        </div>
    );
}