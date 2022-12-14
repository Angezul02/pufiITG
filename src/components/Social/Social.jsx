import React from 'react'
import "./social.css"
import pictureSocial1 from "../../assets/img/Nap.jpg"
import pictureSocial2 from "../../assets/img/cart.jpg"
import pictureSocial3 from "../../assets/img/inflableplaya.jpg"
import pictureSocial4 from "../../assets/img/sombrillas.png"
import pictureSocial5 from "../../assets/img/picture5.jpg"
import pictureSocial6 from "../../assets/img/picture6.jpg"

const Social = () => {
  return (
    <section className='sectionPictures'>
        <div className='textSocial'>
            <p>INSTAGRAM</p>
            <h3># ESPUF!</h3>
        </div>
        <div className='containerPictures'>
            <div className='picture1'>
            <img className="pictureone" src={pictureSocial1} alt="pictureone"/>
            </div>
            <div className='picture2'>
            <img className="pictureone" src={pictureSocial2} alt="picturetwo"/>
            </div>
            <div className='picture3'>
            <img className="pictureone" src={pictureSocial3} alt="picturethree"/>
            </div>
            <div className='picture4'>
            <img className="pictureone" src={pictureSocial4} alt="picturefour"/>
            </div>
            <div className='picture5'>
            <img className="pictureone" src={pictureSocial5} alt="picturefive"/>
            </div>
            <div className='picture6'>
            <img className="pictureone" src={pictureSocial6} alt="picturesix"/>
            </div>
        </div>

    </section>
  )
}

export default Social