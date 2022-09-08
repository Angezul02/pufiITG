import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoP.png";
import bag from "../../assets/img/bolsa.png";
import umbrella from "../../assets/img/sombrilla.png";
import puf from "../../assets/img/puf.png";
import Nap from "../../assets/img/colchon.png";
import "./navbar.css"


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
      {/* className="fixed-top" */}
      <div className="logoPufi container-fluid col-1">
          <img src={logo} alt="Logop" />
        <Link to="/" className="nameLogo">
          Pufi
        </Link>
      </div>
      <section className="linksOptions  col-6">
        <div className="option1 container-fluid">
          <img src={puf} alt="imgPuf" />
          <a href="#sectionPuff">Pufi Puf</a>
        </div>
        <div className="option2 container-fluid">
          <img src={umbrella} alt="imgUmbrella" />
          <a href="#sectionRain">
            Pufi Rain
          </a>
        </div>
        <div className="option3 container-fluid">
          <img src={bag} alt="imgBag" />
          <a href="#sectionCart">
            Pufi Cart
          </a>
        </div>
        <div className="option4 container-fluid">
          <img src={Nap} alt="imgNap" />
          <a href="#sectionNap">
            Pufi Nap
          </a>
        </div>
      </section>

      <div className="optionSelect col-3">
        <select name="" id="">
          
          <option value="">Mi Cuenta</option>
          <option value="">Option2</option>
          
        </select>
        <Link to="/" className="selecttittle">
            Mi compra
          </Link>

      </div>
    </nav>
    
  </>
  );
};

export default Navbar;
