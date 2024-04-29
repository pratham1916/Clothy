import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import "../style/ProductCard.css";
import StarRating from './StarRating';
import { useToast } from '@chakra-ui/react';
import { addToCart, addToWishlist } from '../Redux/action';

function ProductCard({ ele, ShowButton }) {
  const user = JSON.parse(localStorage.getItem("Users")) || {};
  const { id, imageURL, name, price, description, category, rating } = ele;
  const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleNavigation = () => {
    navigate(`${location.pathname}/${ele.id}`, {
      state: { data: { ...ele, userId: user.id } }
    });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!login.isAuth) {
      alert("Please log in first.");
      navigate("/login");
      return;
    }
    const payload = { ...ele, userId: user.id };
    toast.promise(dispatch(addToCart(payload, user.id)), {
      success: { position: 'top', title: 'Added to cart', description: 'Item added successfully!' },
      error: { position: 'top', title: 'Failed', description: 'Failed to add item' },
      loading: { position: 'top', title: 'Adding to Cart...', description: 'Please wait' },
    });
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    if (!login.isAuth) {
      alert("Please log in first.");
      return;
    }
    const payload = { ...ele, userId: user.id };
    toast.promise(dispatch(addToWishlist(payload, user.id)), {
      success: { position: 'top', title: 'Added to Wishlist', description: 'Item added successfully!' },
      error: { position: 'top', title: 'Failed', description: 'Failed to add item' },
      loading: { position: 'top', title: 'Adding to Wishlist...', description: 'Please wait' },
    });
  };

  return (
    <div className="product-card">
        <div className="card-inner">
            
            <div className="card-front">
                <img src={imageURL} alt={name} />
                <h1 className="product-detail">{name}</h1>
            </div>

            
            <div className="card-back">
                <p className="product-detail">{description}</p>
                <div className="category-rating">
                    <p className="product-detail"><b>Category:</b> {category}</p>
                    <p className="product-detail"><StarRating rating={rating} /></p>
                </div>
                <div className="price-button">
                    <p className="product-detail"><b>Price:</b> ${price}</p>
                    <div className="button-container">
                      {ShowButton === "default" || ShowButton === "wishlist" ? 
                        (<button className="action-button" onClick={handleAddToCart}>
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>) : null}
                      {ShowButton === "default" || ShowButton === "cart" ? 
                        (<button className="action-button" onClick={handleAddToWishlist}>
                          <i className="fa-solid fa-heart"></i>
                        </button>) : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

}

export default ProductCard;
