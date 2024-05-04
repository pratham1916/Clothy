import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteFromWishlist } from '../Redux/action';
import "../style/singleCart.css";

const SingleWishlist = ({ ele, setToggle, state }) => {
    const dispatch = useDispatch()
    const { userId, id, imageURL, name, price } = ele;
    return (
        <tr>
            <td onClick={() => { dispatch(deleteFromWishlist(id, userId)); setToggle(!state) }}><a><i className="far fa-times-circle"></i></a></td>
            <td><img src={imageURL} alt={name} /></td>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
}

export default SingleWishlist
