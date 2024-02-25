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

//   useEffect(() => {
//     axios
//       .get(`https://clothy-api.onrender.com/womens/${params.id}`)
//       .then((res) => setUser(res.data))
//       .catch((err) => {
//         console.log("error here");
//       });
//   }, [params.id]);

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
  
    console.log(params)
    console.log(location.state.data)
    console.log(location.state.user)
    // useEffect(() => {
    //   axios
    //     .get(`https://clothy-api.onrender.com/womens/${params.id}`)
    //     .then((res) => setUser(res.data))
    //     .catch((err) => {
    //       console.log("error here");
    //     });
    // }, []);
  
  async function buyProduct(){
        let res = await axios.post(`https://clothy-api.onrender.com/ordered`,{...location.state.data,...location.state.user});
        console.log(res.data,"ordered")
      }

  return (
      <div className="singleproductcontainer">
        <img src={location.state.data.imageURL} alt={location.state.data.name} />
        <div className="singleInfo">
          <h4>{location.state.data.name}</h4>
          <h5>{location.state.data.description}</h5>
          <p className="product-detail"><b>Price:</b> ${location.state.data.price}</p>
          <p className="product-detail"><StarRating rating={location.state.data.rating} /></p>
          <div className="single_button">

            <div className="quantity-container">
              <button className="quantity-button" onClick={handleDecrement}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-button" onClick={handleIncrement}>+</button>
            </div>
            <Button colorScheme='red' size='md' onClick={handleAddToCart}>ADD TO CART</Button>
            <Button colorScheme='red' size='md' onClick={buyProduct}>Buy product</Button>
            <button onClick={buyProduct}> </button>
          </div>
          <p className="product-para">
            Explore the details of this amazing product. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </p>
        </div>
      </div>

              

//   return (
//     <div>
//     <p>"category":{location.state.data.category}</p>
//         <p>"color":{location.state.data.color}</p>
//         <p>"currency":{location.state.data.currency}</p>
//         <p>"id":{location.state.data.id}</p>
//         <p>"name":{location.state.data.name}</p>
//         <p>"price":{location.state.data.price}</p>
//         <p>"rating":{location.state.data.rating}</p>
//         <p>"size":{location.state.data.size}</p>
//         <p>"stock":{location.state.data.stock}</p>
//         <p>"userId":{location.state.data.userId}</p>
//         <button onClick={buyProduct}> buy product</button>
//     </div>
  );
}

export default SingleProduct;
