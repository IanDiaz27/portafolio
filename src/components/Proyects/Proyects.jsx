import React from "react";

import poke from "../../img/LandingPage.jpeg";
import weather from "../../img/Home.jpeg";
import medi from "../../img/Mediconnect img.png";
import git from "../../img/github-brands.svg";
import world from "../../img/world.svg";

import style from "./Proyects.module.css";

function Proyects() {
  let proyects = [
    {
      name: "Mediconnect",
      img: medi,
      linkGit: "https://github.com/IanDiaz27/MediConnect-",
      resumen:
        "Plataforma de telemedicina que permite conectar de manera eficiente al medico y al paciente de manera similar a la de una red social con la posibilidad de generar recetas y tener videoconsultas",
    },
    {
      name: "PokeApp",
      img: poke,
      linkGit: "https://github.com/IanDiaz27/PI-POKEMON",
      resumen:
        "Aplicacion que muestra y filtra todos los pokemons existentes con sus etadisticas (Traidos desde una API) ademas de permitir crear otros.",
    },
    {
      name: "WeatherApp",
      img: weather,
      linkGit: "https://github.com/IanDiaz27/PI-POKEMON",
      resumen:
        "Aplicacion que muestra el clima actualizado de todo el mundo utilizando los datos de OpenWeather",
    },
  ];

  return (
    <>
      <div id="Proyectos"></div>
      <div className={style.father}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Proyectos</h1>
        </div>
        <div className={style.containerCards}>
          {proyects.map((proyect) => (
            <div className={style.card}>
              <div className={style.contain}>
                <img src={proyect.img} className={style.img} />
                <h1 className={style.name}>{proyect.name}</h1>
                <p className={style.desc}>{proyect.resumen}</p>
              </div>
              <div>
                <a href={proyect.linkGit}>
                  <img src={git} className={style.imgLink} />
                </a>
                {/* <a>
                  <img src={world} className={style.imgLink} />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Proyects;
