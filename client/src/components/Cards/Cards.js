import React from "react";
import "./Cards.css";
import { img_300 } from '../../config/config.js';

export const Cards = ({ id, poster, title, date }) => {
  return (
    <div className="media" >
      <div className="container2">
        <img className="poster" src={`${img_300}/${poster}` || "No se encontró imágen"} key={id} />
        <div className="title"> {title || "No se encontró título"} </div>
        <div className="date"> {date || "No se encontró fecha de estreno"} </div>
      </div>
    </div>
  );
}; 
