import React from "react";
import './Cards.css';
import { img_300 } from '../../config/config.js';

export const Cards = ({ id, poster, title, date, critica }) => {
  return (
    <div className="container">
      <div className="container2">
        <div className="title">{title}</div>
        <img src={ poster ? `${img_300}` : poster } />
        <div className="date">{date}</div>
        <div className="critica">{critica}</div>
      </div>
    </div>
  );
};
