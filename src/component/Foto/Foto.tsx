import React from "react";
import "./Foto.css";
import Img from "../../assets/DSC_0227.png";
import '../../media.css'

const Foto = () => {
  return (
    <div className="content">
      <div className="imageContent">
        <img src={Img} className="imagen" />
      </div>
    </div>
  );
};

export default Foto;
