import React from 'react'
import Product from '../slider/Product';
import { productData, responsive } from '../slider/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/Home.css"



const Home = () => {
  const product = productData.map((item, index) => (
    <Product
      key={index}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  const carouselOptions = {
    responsive: responsive,
    autoPlay: true,  // Set autoPlay to true for automatic sliding
    autoPlaySpeed: 2000,  // Set the speed of autoPlay (in milliseconds)
    showDots: false,  // Hide the dots navigation
    arrows: false,
    infinite: true,  // Hide the left and right sliding buttons
  };

  return (
    <div className="App">
      <Carousel {...carouselOptions}>
        {product}
      </Carousel>
    </div>
  );
}

export default Home
