import React, { useState } from 'react';
import "../style/singleCart.css";
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../Redux/action';

const SingleCart = ({ ele, setToggle, state }) => {
    const dispatch = useDispatch()
    const { userId, id, imageURL, name, price } = ele;
    const [quantity, setQuantity] = useState(1);
    const total = quantity * price;

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    };

    return (
        <tr>
            <td onClick={() => { dispatch(deleteFromCart(id, userId)); setToggle(!state) }}><a><i className="far fa-times-circle"></i></a></td>
            <td><img src={imageURL} alt={name} /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    name={quantity - `${id}`}
                    id={quantity - `${id}`}
                />
            </td>
            <td>{total.toFixed(2)}</td>
        </tr>
    );
}

export default SingleCart;