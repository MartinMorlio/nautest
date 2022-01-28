import React from "react";
import "./Cards.css";
import { img_300 } from '../../config/config.js';

export const Cards = ({ id, poster, title, date }) => {
  return (
    <div className="container" >
      <div className="container2">
        <div className="title"> {title || "No se encontró título"} </div>
        <img src={`${img_300}/${poster}` || "No se encontró imágen"} key={id} />
        <div className="date"> {date || "No se encontró fecha de estreno"} </div>
      </div>
    </div>
  );
}; 
