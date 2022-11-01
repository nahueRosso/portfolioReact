import "../../styles/Projects.css";
import trazo2 from "../../assets/trazo2.svg";
import Carrusel from "./FourCarrusel";
import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project3.png";
import img4 from "../../assets/project4.png";
import { trazo2svg } from "../Svg";
import { useState, useEffect,useContext } from "react";
import { ThemeContext } from '../../App'

const Contact = () => {
  const theme: any = useContext(ThemeContext)
  const images: any[string] = [
    {img:img1,tituloText:"Forecast",text:"holdsdsggga lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos est totam molestiae pariatur rerum numquam, incidunt ex, tempora voluptatibus et architecto aliquid vero explicabo dolorem laborum officiis ut eligendi!" },
    {img:img2,tituloText:"Rick & Morty API",text:"asdsaholdsdsggga lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos est totam molestiae pariatur rerum numquam, incidunt ex, tempora voluptatibus et architecto aliquid vero explicabo dolorem laborum officiis ut eligendidasd"},
    {img:img3,tituloText:"Four in a row",text:"asdsadholdsdsggga lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos est totam molestiae pariatur rerum numquam, incidunt ex, tempora voluptatibus et architecto aliquid vero explicabo dolorem laborum officiis ut eligendisa"},
    {img:img4,tituloText:"E-commerce",text:"asdsadsa"},
];
  console.log(images);


  
  return (
    <>
      {/* <img className="imgBlack2" src={trazo2} /> */}
      {trazo2svg()}
      <div className="container-projects"> 
      <h3 style={{color:theme.sevenColor}}>Projects</h3>
      <h4 style={{color:theme.fiveColor}}>these are some of my projects</h4>
      <section className="container-images">
        <Carrusel images={images} />
      </section>
      </div>
    </>
  );
};

export default Contact;
