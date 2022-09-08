import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import arrowInput from "../../assets/img/flecha-derecha.png";
import "./form.css";
import Swal from "sweetalert2";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzbwdazw");
  if (state.succeeded) {
    return  (
    new Swal({
      title: "Correo Registrado",
      text: "Pronto te enviaremos más información",
      imageUrl:
        "https://cdn-icons-png.flaticon.com/512/5511/5511410.png",
      imageHeight: 80,
      imageWidth: 80,
      confirmButtonText: "ok",
    })
    )
  }

  return (
    <section className="sectionForm">
      <div className="textSocial">
        <p>NEWSLETTER</p>
        <h3>SUSCRIBITE</h3>
        <p>Y enterate de todas las novedades</p>
      </div>
      <div className="containerForm">
        <fieldset>
          <form className="FormRegister" onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ingresa tu email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              <img className="arrowinput" src={arrowInput} alt="imagebutton" />
            </button>
          </form>
        </fieldset>
      </div>
    </section>
  );
}

export default ContactForm;
