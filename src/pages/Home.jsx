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
      <div className="next_component">
        <div className="first_next">
          <h2 className="first_next_h2">Outfit Inspiration Snag Their Style</h2>
          {/* <img src={dots} /> */}
          <p className="first_next_p">Open Communication and participation are pivotal element of our company culture. How a bold idea Spawned a leading European Online platform.</p>
        </div>
        <div className="second_next">
          <p>Stay Ahead Of The Time & Trend. Be unique</p>
          <img className="shopping_man" src={shopping} />
        </div>
      </div>
    </div>
  );
}

export default Home
