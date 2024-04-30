import React from 'react'
import Product from '../slider/Product';
import { productData, responsive } from '../slider/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/Home.css"
import shopping from "../assets/shopping_men.jpg"
import happy from "../assets/happy.png"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpeg"
import c3 from "../assets/c3.jpeg"
import c4 from "../assets/c4.jpeg"
import c5 from "../assets/c5.jpeg"
import p1c2 from "../assets/p1c2.png"
import arr from "../assets/arr.png"
import lgo from "../assets/lgo.png"
import logo2 from "../assets/logo2.png"
import logo1 from "../assets/logo1.png"
import cnv1 from "../assets/cnv1.png"
import cnv3 from "../assets/cnv3.png"
import grp1 from "../assets/Group1.png"
import grp2 from "../assets/Group2.png"
import grp3 from "../assets/Group3.png"
import { FaPhone } from 'react-icons/fa';

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
    <div id="home">
      <div className="new_home">
        <div className="home_left">
          <p><i>Starting At only $0.5</i></p>
          <h1><span className='summer'>SUMMER </span>SPECIAL  COLLECTION</h1>
          <p>Brand day 20% off and free shopping</p>
          <div className="shop_now">
            <button className='shop_btn'>SHOP NOW</button>
            <FaPhone className='icon' /> (+91)-0000-0000-00
          </div>
        </div>
        <div className="home_right">
          <img src={happy} alt="" />
        </div>
      </div>


      <div className='text-container'>
        <img src={p1c2} alt="img6" />
        <div id='text1'>
          <h1 id='header1'>WE THINK YOU'LL <span id='span1'>LIKE THESE</span></h1>
          <p>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories. The latest fashion news, beauty coverage, celebrity style.</p>
          <div id='text2'>
            <div id='text21'>
              <h5>Care instructions</h5>
              <p>Machine wash at 30°C</p>
            </div>
            <div id='text23'>
              <h5>Fabric material</h5>
              <p>84% cotton, 16% polyester</p>
            </div>
          </div>
        </div>
      </div>

      <div id="crousel">
        <h3><span id='span1'>New Arrivals</span> </h3>
        <Carousel {...carouselOptions}>
          {product}
        </Carousel>
      </div>

      <div className="inspire">
        <div className="inspiration-container">
          <div className="inspiration-text">
            <p>20% Discount</p>
            <h2>Outfit Inspiration: Snag Their Style</h2>
            <p>Looking for a discount code for your surprise ?</p>
            <div className="subscribe">
              <input type="email" placeholder='Email' className="subscribe-input" />
              <button className="subscribe-button">Subscribe</button>
            </div>
            <p>Sign up for our newsletter below to receive the latest discount codes for Your surprise.</p>
          </div>
          <div className="inspiration-visual">
            <img className="style-image" src={shopping} alt="Shopping" />
          </div>
        </div>
      </div>

      {/* <div id="crousel">
        <h3><span id='span1'>New Arrivals</span> </h3>
        <Carousel {...carouselOptions}>
          {product}
        </Carousel>
      </div> */}

      <div className="client">
        <div className='client_say'>
          <h1>What Our clients Say ? </h1>
        </div>
        <div className='clinet_img'>
          <img src={grp1} alt="" />
          <img src={grp2} alt="" />
          <img src={grp3} alt="" />
        </div>
      </div>


      <div className="cards">
        <div id="head">
          <p>FOLLOW US ON</p>
          <h4><i class="fa-brands fa-instagram"></i> @clothy.fashion</h4>
        </div>
        <div id="card-container">
          <div className="card"><img src="https://images.herzindagi.info/image/2022/Jan/shopping-tips-for-save-money.jpg" alt="img1" /></div>
          <div className="card"><img src={c2} alt="img2" /></div>
          <div className="card"><img src={c3} alt="img3" /></div>
          <div className="card"><img src={c4} alt="img4" /></div>
          <div className="card"><img src="https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg" alt="img5" /></div>
        </div>
      </div>


    </div>

  );
}

export default Home
