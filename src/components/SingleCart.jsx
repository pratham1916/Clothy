import React, { useEffect, useState } from 'react';
import "../style/singleCart.css";

const SingleCart = ({ ele, updateSubtotal }) => {
    const { id, imageURL, name, price } = ele;


    const [quantity, setQuantity] = useState(1);
    const total = quantity * price;

    useEffect(() => {
        updateSubtotal(id, quantity * price);
    }, [quantity, id, price, updateSubtotal]);

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    return (
        <tr>
            <td><a href="#"><i className="far fa-times-circle"></i></a></td>
            <td><img src={imageURL} alt={name} /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    name={`quantity-${id}`}
                    id={`quantity-${id}`}
                />
            </td>
            <td>{total.toFixed(2)}</td>
        </tr>
    );
}

export default SingleCart;
