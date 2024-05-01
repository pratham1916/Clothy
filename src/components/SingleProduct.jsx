import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import StarRating from "./StarRating";
import "../style/singleProduct.css"

function SingleProduct() {
  const [user, setUser] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const location = useLocation();
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="singleproductcontainer">
      <div className="single_product_images">
        <img src={location.state.data.imageURL[0]} alt={location.state.data.name} />
        <img src={location.state.data.imageURL[1]} alt={location.state.data.name} />
        <img src={location.state.data.imageURL[2]} alt={location.state.data.name} />
      </div>
      <div className="singleInfo">
        <h4>{location.state.data.name}</h4>
        <h5>{location.state.data.description}</h5>
        <p><b>Category:</b> {location.state.data.category}</p>
        <p><b>Price:</b> ${location.state.data.price}</p>
        <div className="rating">
          <p><b>Rating:</b> </p>
          <StarRating rating={location.state.data.rating} />
        </div>
        <div className="rating">
          <p><b>Quantity: </b> </p>
          <button className="quantity-button" onClick={handleDecrement}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-button" onClick={handleIncrement}>+</button>
        </div>
        <Button colorScheme='red' size='md' marginRight={2} >ADD TO CART</Button>
      </div>
    </div>
  );
}

export default SingleProduct;
