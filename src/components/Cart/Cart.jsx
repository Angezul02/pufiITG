import React from 'react'
import boxCart from "../../assets/img/bolsacompras.png"
import separador from "../../assets/img/menos.png"
import arrow from "../../assets/img/flecha.png"
import "./cart.css"

const Cart = () => {
  return (
    <div class="containerboxthree" id="sectionCart">
    <div class="boximg3">      
    </div>
    <div class="boxtext3">
    <img className="boxPuff"src={boxCart} alt="imageboxCart"/>
      <h3>Pufi CART</h3>
      <img className="separator"src={separador} alt="imageboxCart"/>
      <p class="lead">Comodidad al llevar tus compras </p>
      <button> <img className="arrow"src={arrow} alt="imagearrow"/>VER MAS </button>
    </div>
    </div>
  )
}

export default Cart