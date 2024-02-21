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
    autoPlay: true, 
    autoPlaySpeed: 2000,
    showDots: false,
    arrows: false,
    infinite: true,
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
