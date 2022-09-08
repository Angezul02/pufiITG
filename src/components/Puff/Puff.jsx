import React from 'react'
import boxPuff from "../../assets/img/inflable.png"
import separador from "../../assets/img/menos.png"
import arrow from "../../assets/img/flecha.png"
import "./puff.css"

const Puff = () => {
  return (
    <div class="containerboxtwo" id="sectionPuff">
      <div class="boxtext2">
      <img className="boxPuff"src={boxPuff} alt="imageboxPuff"/>
        <h3>Pufi PUFF</h3>
        <img className="separator"src={separador} alt="imageboxPuff"/>
        <p class="lead">Comodidad en cualquier lugar </p>
        <button> <img className="arrow"src={arrow} alt="imagearrow"/>VER MAS </button>
      </div>
      <div class="boximg2">
        
      </div>
      </div>
  )
}

export default Puff