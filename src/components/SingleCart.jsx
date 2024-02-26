import React, { useEffect, useState } from 'react';
import "../style/singleCart.css";
import { useDispatch } from 'react-redux';
import { deleteToCart } from '../Redux/action';

const SingleCart = ({ ele,setToggle,state }) => {
    const dispatch = useDispatch()
    const { userId,deleteId, id, imageURL, name, price } = ele;
       console.log(ele,"line ")
    // State to manage the quantity
    const [quantity, setQuantity] = useState(1)

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
            <td onClick={()=>{dispatch(deleteToCart(id,userId));setToggle(!state)}}><a href="#"><i className="far fa-times-circle"></i></a></td>
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
