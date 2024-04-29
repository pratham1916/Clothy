import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import "../style/ProductCard.css";
import StarRating from './StarRating';
import { useToast } from '@chakra-ui/react';
import { addToCart, addToWishlist } from '../Redux/action';

function ProductCard({ ele, ShowButton }) {
  let user = JSON.parse(localStorage.getItem("Users")) || {};
  const { category, color, currency, description, id, imageURL, name, price, rating, size, stock } = ele;
  const [deleteId, setDeleteID] = useState(Math.floor(Math.random() * (id * (+user.id)) * new Date().getSeconds() * new Date().getMinutes()))
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
    // dispatch(addToCart(obj, user.id));
    toast.promise(dispatch(addToCart(obj, user.id)), {

      success: { position: 'top', title: 'added', description: 'Looks great' },
      error: { position: 'top', title: ' rejected', description: 'Something wrong' },
      loading: { position: 'top', title: ' pending', description: 'Please wait' },
    })

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
    toast.promise(dispatch(addToWhiteList(obj, user.id)), {

      success: { position: 'top', title: 'added ', description: 'Looks great' },
      error: { position: 'top', title: 'rejected', description: 'Something wrong' },
      loading: { position: 'top', title: ' pending', description: 'Please wait' },
    })
    //dispatch(addToWhiteList(obj, user.id))
  }
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
