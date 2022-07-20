import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import git from "../../img/git.png";
import linkedin from "../../img/linkedin.png";
import plane from "../../img/paper-plane-solid.png";
import close from "../../img/close.svg";

import style from "./Contact.module.css";

function Contact() {
  let [modal, setModal] = useState(false);

  let handleOpenModal = () => {
    setModal(true);
  };

  let handleCloseModal = () => {
    setModal(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qphpzdw",
        "template_6krifs8",
        e.target,
        "P6omxZdv784pKu9vG"
      )
      .then((r) => {
        console.log(r);
        handleCloseModal();
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#32E313"
          fill-opacity="1"
          d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,202.7C672,235,768,245,864,250.7C960,256,1056,256,1152,261.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div id="Contacto"></div>
      <div className={style.father}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Hablemos!</h1>
        </div>
        <div className={style.containerImg}>
          <a href="https://www.linkedin.com/in/iandiaz-dev/" target="_blank">
            <img className={style.img} src={linkedin} />
          </a>
          <a href="https://github.com/IanDiaz27" target="_blank">
            <img className={style.img} src={git} />
          </a>
          <img className={style.img} src={plane} onClick={handleOpenModal} />
        </div>
      </div>
      {modal ? (
        <div className={style.modalContainer}>
          <div className={style.modal}>
            <button onClick={handleCloseModal} className={style.close}>
              <img src={close} />
            </button>
            <form onSubmit={sendEmail}>
              <div>
                <label>Mail</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Escribe tu E-mail ..."
                  className={style.input}
                ></input>
              </div>
              <div>
                <label>Mensaje</label>
                <textarea
                  name="user_msj"
                  placeholder="Por que me escribes ..."
                  className={style.bigInput}
                ></textarea>
              </div>
              <button className={style.btn2}>Enviar</button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Contact;
