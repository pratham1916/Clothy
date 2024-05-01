import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, useToast } from '@chakra-ui/react';
import "../style/ProductCard.css";
import { addToCart, addToWishlist } from '../Redux/action';

function ProductCard({ ele, ShowButton }) {
  const login = useSelector(state => state.login);
  const { id, name, price, imageURL } = ele;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleNavigation = () => {
    navigate(`${location.pathname}/${id}`, {
      state: { data: { ...ele, userId: login.users.id } }
    });
  };

  const handleAddToCart = () => {

    if (!login.isAuth) {
      <Alert status='error'>
        <AlertIcon />
        There was an error processing your request
      </Alert>
      navigate("/login");
      return;
    }

    const obj = { ...ele, userId: login.users.id };
    dispatch(addToCart(obj));
    toast({
      title: "Successfully added to Cart",
      position: "top-right",
      duration: 3000,
      isClosable: true,
      variant: "solid",
      color: "green"
    });
  };

  const handleAddToWishlist = () => {
    if (!login.isAuth) {
      <Alert status='success'>
        <AlertIcon />
        Pleas Login First
      </Alert>
      navigate("/login");
      return;
    }

    const obj = { ...ele, userId: login.users.id };
    dispatch(addToWishlist(obj));
    toast({
      title: "Successfully added to Cart",
      position: "top-right",
      duration: 3000,
      isClosable: true,
      variant: "solid",
      color: "green"
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageURL.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? imageURL.length - 1 : prevIndex - 1);
  };

  return (
    <div className="product-card" >
      <div className="carousel-container">
        <img className="carousel-image" src={imageURL[currentImageIndex]} alt={name} />
        <button className="prev" onClick={handlePrevImage}>&#10094;</button>
        <button className="next" onClick={handleNextImage}>&#10095;</button>
      </div>
      <div className="card-front" onClick={handleNavigation}>
        <h1 className="product-name">{name}</h1>
      </div>
      <div className="product-detail">
        <p className="price"><b>Price:</b> ${price}</p>
        <div className="button-container">
          <button className="action-button" onClick={handleAddToCart}>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="action-button" onClick={handleAddToWishlist}>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div >
  );
}

export default ProductCard;
