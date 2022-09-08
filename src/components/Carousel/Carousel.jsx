import React from 'react'

import img1carousel from "../../assets/img/carouselimg1.png"
import img2carousel from "../../assets/img/carouselimg2.png"
import img3carousel from "../../assets/img/carouselimg3.png"
import Navbar from '../Navbar/Navbar'
import "./carousel.css"



const Carousel = () => {
  return (
    <div> 
      <Navbar/>   
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src={img1carousel} className="imagecarousel img-fluid  w-100" alt="imagecarousel1"/>
        <div className="textcarousel carousel-caption d-none d-md-block">
          <h2>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</h2>
          <button className=' buttonshop bg-transparent'>SHOP</button>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={img2carousel} className="img-fluid  w-100" alt="imagecarousel2"/>
        <div className="textcarousel carousel-caption d-none d-md-block">
          <h2>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</h2>
          <button className=' buttonshop bg-transparent'>SHOP</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img3carousel} className=" img-fluid  w-100" alt="imagecarousel3"/>
        <div className="textcarousel carousel-caption d-none d-md-block">
          <h2>ESTÁR CÓMODO NUNCA FUE TAN FÁCIL.</h2>
          <button className=' buttonshop bg-transparent'>SHOP</button>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    
</div>
  )
}

export default Carousel