import React from 'react'
import "../style/Home.css"

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
        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTe7SXrSx0SbDoBGck3EglBrSGa8XOOFuNJunq6AgnowZQSw7NT" alt="" />
      </div>
      <div id="head">
        <p>FOLLOW US ON</p>
        <h4><i class="fa-brands fa-instagram"></i> @clothy.fashion</h4>
      </div>
      <div id="card-container">
        <div className="card"><img src="" alt="" /></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>


    </div>
  )
}

export default Home
