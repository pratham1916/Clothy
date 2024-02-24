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

  useEffect(() => {
    axios
      .get(`https://clothy-api.onrender.com/womens/${params.id}`)
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log("error here");
      });
  }, [params.id]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {

    let obj = {

      quantity: quantity,
    };

  };

  return (
    <div>
      <div className="singleproductcontainer">
        <img src={user.imageURL} alt={user.name} />
        <div className="singleInfo">
          <h4>{user.name}</h4>
          <h5>{user.description}</h5>
          <p className="product-detail"><b>Price:</b> ${user.price}</p>
          <p className="product-detail"><StarRating rating={user.rating} /></p>
          <div className="single_button">

            <div className="quantity-container">
              <button className="quantity-button" onClick={handleDecrement}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-button" onClick={handleIncrement}>+</button>
            </div>
            <Button colorScheme='red' size='md' onClick={handleAddToCart}>
              ADD TO CART
            </Button>
          </div>
          <p className="product-para">
            Explore the details of this amazing product. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
