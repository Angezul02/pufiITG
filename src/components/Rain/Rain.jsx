import React from "react";

import "./rain.css"
import boxUmbrella from "../../assets/img/paraguas.png"
import separador from "../../assets/img/menos.png"
import arrow from "../../assets/img/flecha.png"
const Rain = () => {
  return (
    <>
     <div class="containerboxone" id="sectionRain">
      <div class=" boximg1 ">
        <div className="buttonbox">
        <button className='buttonshopbox bg-transparent'>SHOP</button>
        </div>
      </div>
      <div class="boxtext1">
      <img className="boxUmbrella"src={boxUmbrella} alt="imageboxUmbrella"/>
        <h3>Pufi RAIN</h3>
        <img className="separator"src={separador} alt="imageboxUmbrella"/>
        <p class="lead">Comodidad y estilo en dias lluviosos </p>
        <button> <img className="arrow"src={arrow} alt="imagearrow"/>VER MAS </button>
      </div>
      </div>
  </>
  );
};

export default Rain;
