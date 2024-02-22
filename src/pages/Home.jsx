import React from 'react'
import Product from '../slider/Product';
import { productData, responsive } from '../slider/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/Home.css"
import shopping from "../assets/shopping_men.jpg"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpeg"
import c3 from "../assets/c3.jpeg"
import c4 from "../assets/c4.jpeg"
import c5 from "../assets/c5.jpeg"
import p1c2 from "../assets/p1c2.png"
import arr from "../assets/arr.png"
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

    <div>
      <div className='text-container'>
        <div id='tex1'>
          <h1 id='hea1'>WE THINK YOU'LL <span id='spa1'>LIKE THESE</span></h1>
          <p>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories. The latest fashion news, beauty coverage, celebrity style.</p>
          <div id='tx2'>
            <div id='tx21'>
              <h5>Care instructions</h5>
              <p>Machine wash at 30°C</p>
            </div>
            <div id='tx23'>
              <h5>Fabric material</h5>
              <p>84% cotton, 16% polyester</p>
            </div>
          </div>
        </div>
        <img src={p1c2} alt="img6" />
      </div>

      <div id="box">

        <div id='bx'>
          <img id='i2' src={arr} alt="" /><img id='i1' src={c2} alt="" /></div>
        <div id="box1">
          <div id='box3'><h4>Pattern</h4> <p>Colourful & Print</p></div>
          <div id='box4'><h4>We are the online platform platform for fashion and lifestyle. </h4></div>
          <div id='box5'><p id='px'>We are groen from a pioneer in e-commerce to become a leading Europian online platfrom.
          </p>
            <p>Read more --</p></div>
          <div id='box6'><h4>Material</h4> <p>100% cotton & polyester</p></div>
        </div>

      </div>

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

      <div id="head">
        <p>FOLLOW US ON</p>
        <h4><i class="fa-brands fa-instagram"></i> @clothy.fashion</h4>
      </div>
      <div id="card-container">
        <div id='card1' className="card"><img src={c1} alt="img1" /></div>
        <div className="card"><img src={c2} alt="img2" /></div>
        <div className="card"><img src={c3} alt="img3" /></div>
        <div className="card"><img src={c4} alt="img4" /></div>
        <div id='card1' className="card"><img src={c5} alt="img5" /></div>
      </div>


    </div>

  );
}

export default Home
