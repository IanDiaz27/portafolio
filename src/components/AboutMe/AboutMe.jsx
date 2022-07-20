import React from "react";

import style from "./AboutMe.module.css";

function AboutMe() {
  return (
    <>
      <div id="SobreMi"></div>
      <div className={style.father}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Ian Diaz</h1>
        </div>
        <div className={style.containerDesc}>
          <p className={style.pcolor}>
            <b className={style.color}>¿Quién Soy?</b>
          </p>
          <p className={style.desc}>
            Soy un desarrollador Full Stack (Con orientación al Front-End). En
            los proyectos que realizo, la escalabilidad y la modularización son
            pilares claves e infaltables. Me especializo en React JS, Redux y
            lógicamente en JavaScript.
          </p>
          {/* <button className={style.btn}>Descargar CV</button> */}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
