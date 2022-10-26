import "../../styles/Projects.css";
import trazo2 from "../../assets/trazo2.svg";
import Carrusel from "./FourCarrusel";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/ArialRoundedMTBold.png";
import { trazo2svg } from "../Svg";
import { useState, useEffect,useContext } from "react";
import { ThemeContext } from '../../App'

const Contact = () => {
  const theme: any = useContext(ThemeContext)
  const images: any[string] = [img1, img2, img3, img4];
  console.log(images);


  
  return (
    <>
      {/* <img className="imgBlack2" src={trazo2} /> */}
      {trazo2svg()}
      <div className="container-projects">
      <h3 style={{color:theme.sevenColor}}>Projects</h3>
      <section className="container-images">
        <Carrusel images={images} />
      </section>
      </div>
    </>
  );
};

export default Contact;
