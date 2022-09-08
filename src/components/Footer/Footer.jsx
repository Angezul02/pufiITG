import React from "react";
import "./footer.css"
import segurity from "../../assets/img/segurity.png"
import facebookicon from "../../assets/img/facebookIcon.png"
import twittericon from "../../assets/img/TwitterIcon.png"
import Instagramicon from "../../assets/img/instagramIcon.png"
import logoPufi from "../../assets/img/logoP.png"

const Footer = () => {
  return (
    <div className="separatorFooter">
        {/* <hr ></hr> */}
       <div className="containerInfo">
        
        <footer className="containerfooter row row-cols-5 ">
          <div className=" titleLogo col">
            <h2 className="titleFooter">Pufi</h2>
            <img src={logoPufi} alt="Logo" />
            <p className="text-muted">&copy; 2022</p>
          </div>

               
          <div className="col">
           
            <ul className="nav flex-column ulsection1">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  PUFI RAIN
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  PUFI PUFF
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  PUFI CART
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  PUFI NAP
                </a>
              </li>
              
            </ul>
          </div>
          <div className="col">
             <ul className="nav flex-column ulsection2">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  CONTACTO
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  AYUDA
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  CÓMO COMPRAR
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  TERMINOS Y CONDICIONES
                </a>
              </li>
             
            </ul>
          </div>

          <div className="col">
            
            <ul className="nav flex-column ulsection3">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                    COMPRA 100% SEGURA
                </a>
                
              </li>
              <li className=" pgarantia nav-item mb-2">
                <div className="containersegurity">
                <img src={segurity} alt="logosegurity" />
                <p>COMPRA CON LA GARANTIA DE PUFI</p>
                </div>
              </li>
              
            </ul>
          </div>

          <div className="col">
             <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  SEGUINOS EN
                </a>
                <div className="containerIconsRed">
                <img src={facebookicon} alt="logofacebook" />
                <img src={twittericon} alt="logotwitter" />
                <img src={Instagramicon} alt="logoinstagram" />
                </div>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <hr></hr>
      <p className="copyright">PUFI Copyright 2017 - Todos los derechos reservados</p>
    </div>
  );
};

export default Footer;
