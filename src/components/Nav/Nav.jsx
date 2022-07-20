import React from "react";

import user from "../../img/user-solid.svg";
import code from "../../img/code-solid.svg";
import proyects from "../../img/briefcase-solid.svg";
import coment from "../../img/message-solid.svg";

import style from "./Nav.module.css";

function Nav() {
  return (
    <>
      <div className={style.father}>
        <a href="#SobreMi">
          <div className={style.containerImg}>
            <img src={user} className={style.img} />
            <p>Sobre Mi</p>
          </div>
        </a>
        <a href="#Tech">
          <div className={style.containerImg}>
            <img src={code} className={style.img} />
            <p>Tecnologías</p>
          </div>
        </a>
        <a href="#Proyectos">
          <div className={style.containerImg}>
            <img src={proyects} className={style.img} />
            <p>Proyectos</p>
          </div>
        </a>
        <a href="#Contacto">
          <div className={style.containerImg}>
            <img src={coment} className={style.img} />
            <p>Contacto</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Nav;
