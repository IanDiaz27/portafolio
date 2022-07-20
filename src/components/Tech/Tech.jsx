import React, { useState } from "react";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import react from "../../img/react.png";
import redux from "../../img/redux.png";
import css from "../../img/css.png";
import html from "../../img/html.png";
import js from "../../img/js.png";
import material from "../../img/material.png";
import bootstrap from "../../img/bootstrap.png";
import node from "../../img/node.png";
import postgreSQL from "../../img/postgreSQL.png";
import sequelize from "../../img/sequelize.png";
import typeScript from "../../img/typescript.png";
import sass from "../../img/sass.png";

import style from "./Tech.module.css";

function Tech() {
  let tech = [
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: sass, name: "Sass" },
    { img: node, name: "Node JS" },
    { img: postgreSQL, name: "PostgreSQL" },
    { img: sequelize, name: "Sequelize" },
    { img: material, name: "Material IU" },
    { img: bootstrap, name: "Bootstrap" },
    { img: js, name: "Js" },
    { img: typeScript, name: "TypeScript" },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className={`${style.arrow} ${style.next}`} onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${style.arrow} ${style.prev}`} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
      <div id="Tech"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={style.waveUp}
      >
        <path
          fill="#32E313"
          fill-opacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,101.3C1120,107,1280,181,1360,218.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className={style.father}>
        <div className={style.containerTitle}>
          <h1 className={style.title}>Tecnologías</h1>
        </div>
        <div className={style.grid}>
          <Slider {...settings}>
            {tech.map((item, index) => (
              <div
                className={
                  index === imageIndex
                    ? `${style.slide} ${style.activeSlide}`
                    : style.slide
                }
              >
                <img className={style.circle} src={item.img} />
                <h3 className={style.techName}>{item.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={style.waveDown}
      >
        <path
          fill="#32E313"
          fill-opacity="1"
          d="M0,288L48,250.7C96,213,192,139,288,101.3C384,64,480,64,576,101.3C672,139,768,213,864,234.7C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Tech;
