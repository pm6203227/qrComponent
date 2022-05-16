import React from "react";
import "./Card.css";
import code from "../../Media/code.png";

const Card = () => {
  return (
    <div className="contenedor container-fluid">
      <div className="tarjeta text-center">
        <img className="qr" src={code} alt="codigo qr" />
        <h1>Improve your front-end skills by building projects</h1>
        <p className="parrafo">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
