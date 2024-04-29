import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import "../style/ProductCard.css";
import { addToCart, addToWishlist } from '../Redux/action';

function ProductCard({ ele, ShowButton }) {
  const { id, imageURL, name, price, color, currency, category, description, rating, size, stock } = ele;
  const user = useMemo(() => JSON.parse(localStorage.getItem("Users")) || {}, []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const deleteId = useMemo(() => Math.floor(Math.random() * (id * (+user.id))), [id, user.id]);

  const login = useSelector(state => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleNavigation = () => {
    navigate(`${location.pathname}/${id}`, {
      state: { data: { ...ele, userId: user.id } }
    });
  };

  const handleAddToCart = () => {
    if (!login.isAuth) {
      alert("Please log in first.");
      navigate("/login");
      return;
    }

    const obj = {
      userId: +id, imageURL, price, color, currency, category, description, name, rating, size, stock, id: deleteId
    };

    toast.promise(dispatch(addToCart(obj, user.id)), {
      success: { position: 'top', title: 'added', description: 'Looks great' },
      error: { position: 'top', title: 'rejected', description: 'Something wrong' },
      loading: { position: 'top', title: 'pending', description: 'Please wait' },
    });
  };

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    if (!login.isAuth) {
      alert("Please log in first.");
      return;
    }

    const obj = { imageURL, userId: id, price, color, currency, category, description, name, rating, size, stock, deleteId, cartId: deleteId, id: deleteId };

    toast.promise(dispatch(addToWishlist(obj, user.id)), {
      success: { position: 'top', title: 'added', description: 'Looks great' },
      error: { position: 'top', title: 'rejected', description: 'Something wrong' },
      loading: { position: 'top', title: 'pending', description: 'Please wait' },
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
        <div className="product-detail">
          <p className="price"><b>Price:</b> ${price}</p>
          <div className="button-container">
            {(ShowButton === "default" || ShowButton === "wishlist") && (
              <button className="action-button" onClick={handleAddToCart}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            )}
            {(ShowButton === "default" || ShowButton === "cart") && (
              <button className="action-button" onClick={handleAddToWishlist}>
                <i className="fa-solid fa-heart"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
