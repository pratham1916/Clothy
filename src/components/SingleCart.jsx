import React, { useState } from 'react';
import "../style/singleCart.css";
import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../Redux/action';

const SingleCart = ({ ele,setToggle,state }) => {
    const dispatch = useDispatch()
    const { userId,deleteId, id, imageURL, name, price } = ele;
    // State to manage the quantity
    const [quantity, setQuantity] = useState(1);

    // Calculate total based on quantity and price
    const total = quantity * price;

    // Handle quantity change
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    };

    return (
        <tr>
            <td onClick={()=>{dispatch(deleteFromCart(id,userId));setToggle(!state)}}><a href="#"><i className="far fa-times-circle"></i></a></td>
            <td><img src={imageURL} alt={name} /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    name={quantity-`${id}`}
                    id={quantity-`${id}`}
                />
            </td>
            <td>{total.toFixed(2)}</td>
        </tr>
    );
}

export default SingleCart;