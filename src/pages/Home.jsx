import React from 'react'
import Product from '../slider/Product';
import { productData, responsive } from '../slider/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/Home.css"
import shopping from "../assets/shopping_men.jpg"

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
      <div className="inspiration-container">
            <div className="inspiration-text">
                <h2>Outfit Inspiration: Snag Their Style</h2>
                <p>Open Communication and participation are pivotal elements of our company culture. How a bold idea Spawned a leading European Online platform.</p>
            </div>
            <div className="inspiration-visual">
                <img className="style-image" src={shopping} alt="Shopping" />
            </div>
        </div>
    </div>
  );
}

export default Home
