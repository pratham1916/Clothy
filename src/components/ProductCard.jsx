import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../style/ProductCard.css";
import StarRating from './StarRating';
import { useToast } from '@chakra-ui/react';
import { addToCart, addToWishlist } from '../Redux/action';

function ProductCard({ ele, ShowButton }) {
  let user = JSON.parse(localStorage.getItem("Users")) || {};
  const { category, color, currency, description, id, imageURL, name, price, rating, size, stock } = ele;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [deleteId, setDeleteID] = useState(Math.floor(Math.random() * (id * (+user.id)) * new Date().getSeconds() * new Date().getMinutes()))

  const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleNavigation = () => {
    navigate(`${location.pathname}/${ele.id}`, {
      state: { data: { ...ele, userId: user.id } }
    });
  };

  function handleAddToCart() {
    if (!login.isAuth) {
      alert("Please log in first.");
      navigate("/login");
      return;
    }

    let obj = {
      userId: +id,
      imageURL,
      price,
      color,
      currency,
      category,
      description,
      name,
      rating,
      size,
      stock,
      id: deleteId
    }

    toast.promise(dispatch(addToCart(obj, user.id)), {
      success: { position: 'top', title: 'added', description: 'Looks great' },
      error: { position: 'top', title: ' rejected', description: 'Something wrong' },
      loading: { position: 'top', title: ' pending', description: 'Please wait' },
    });
  }

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    if (!login.isAuth) {
      alert("Please log in first.");
      return;
    }

    let obj = {
      imageURL,
      userId: id,
      price,
      color,
      currency,
      category,
      description,
      name,
      rating,
      size,
      stock,
      deleteId,
      cartId: deleteId,
      id: deleteId
    }

    toast.promise(dispatch(addToWishlist(obj, user.id)), {
      success: { position: 'top', title: 'added ', description: 'Looks great' },
      error: { position: 'top', title: 'rejected', description: 'Something wrong' },
      loading: { position: 'top', title: ' pending', description: 'Please wait' },
    });
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageURL.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageURL.length - 1 : prevIndex - 1));
  };

  return (
    <div className="product-card">
      <div className="card-inner">
        <div className="carousel-container">
          <img className="carousel-image" src={imageURL[currentImageIndex]} alt={name} />
          <div className='carousel_btn'>
            <button className="prev " onClick={handlePrevImage}>&#10094;</button>
            <button className="next  " onClick={handleNextImage}>&#10095;</button>
          </div>
        </div>
        <div className="card-front" onClick={() => handleNavigation()}>
          <h1 className="product-detail" >{name}</h1>
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