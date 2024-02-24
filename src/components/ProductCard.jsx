import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../Redux/action';
import "../style/ProductCard.css"
import StarRating from './StarRating';


function ProductCard({ category, color, currency, description, id, imageURL, name, price, rating, size, stock }) {
  const dispatch = useDispatch()
  const location = useLocation();
  const navigate = useNavigate();
  function handleClick() {
    navigate(`${location.pathname}/${id}`, {
      state: location.pathname
    })
  }

  function handleAddToCart() {
    let obj = {
      userId: id,
      price,
      color,
      currency,
      category,
      description,
      name,
      rating,
      size,
      stock
    }
    dispatch(addToCart(obj));

  }
  return (
    <div onClick={handleClick} className="product-card">
      <img src={imageURL} alt="" />
      <h1 className="product-detail">{name}</h1>
      <p className="product-detail">{description}</p>
      <div className="category-rating">
        <p className="product-detail"><b>Category:</b> {category}</p>
        <p className="product-detail"><StarRating rating={rating} /></p>
      </div>
      <div className="price-button">
        <p className="product-detail"><b>Price:</b> ${price}</p>
        <div className="button-container">
          <button className="action-button" onClick={handleAddToCart}><i class="fa-solid fa-cart-shopping"></i></button>
          <button className="action-button"><i class="fa-solid fa-heart"></i></button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;