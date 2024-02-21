import React from 'react'
import "../style/Home.css"
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpeg"
import c3 from "../images/c3.jpeg"
import c4 from "../images/c4.jpeg"
import c5 from "../images/c5.jpeg"
import p1c2 from "../images/p1c2.png"
const Home = () => {
  return (
    <div >
      <div className='text-container'>
        <div id='tex1'>
          <h1 id='hea1'>WE THINK YOU'LL <span id='spa1'>LIKE THESE</span></h1>
          <p>Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories. The latest fashion news, beauty coverage, celebrity style.</p>
          <div id='tx2'>
            <div id='tx21'>
              <h5>Care instructions</h5>
              <p>Machine wash at 30°C</p>
            </div>
            <div>
              <h5>Fabric material</h5>
              <p>84% cotton, 16% polyester</p>
            </div>
          </div>
        </div>
        <img src={p1c2} alt="img6" />
      </div>
      <div id="head">
        <p>FOLLOW US ON</p>
        <h4><i class="fa-brands fa-instagram"></i> @clothy.fashion</h4>
      </div>
      <div id="card-container">
        <div className="card"><img src={c1} alt="img1" /></div>
        <div className="card"><img src={c2} alt="img2" /></div>
        <div className="card"><img src={c3} alt="img3" /></div>
        <div className="card"><img src={c4} alt="img4" /></div>
        <div className="card"><img src={c5} alt="img5" /></div>
      </div>


    </div>
  )
}

export default Home
