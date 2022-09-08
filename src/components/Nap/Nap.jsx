import React from 'react'
import boxNap from "../../assets/img/sleep.png"
import separador from "../../assets/img/menos.png"
import arrow from "../../assets/img/flecha.png"
import "./nap.css"

const Nap = () => {
  return (
    <div class="containerboxfour" id="sectionNap">
      <div class="boxtext4">
      <img className="boxNap"src={boxNap} alt="imageboxNap"/>
        <h3>Pufi NAP</h3>
        <img className="separator"src={separador} alt="imageboxNap"/>
        <p class="lead">Comodidad en cualquier lugar </p>
        <button> <img className="arrow"src={arrow} alt="imagearrow"/>VER MAS </button>
      </div>
      <div class="boximg4">
        
      </div>
      </div>
  )
}

export default Nap