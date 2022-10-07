import React, { useState } from "react";
import "./Carrusel.css";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const Carrusel = ({images}:any) => {

  let count:number = 0;

  const [img,getImg] = useState(images[count])

  const left = () => {
    getImg(images[count + 1])
    console.log("hola")
  }
  const right = () => {
    getImg(images[count - 1])
    console.log("hola")
  }

  // const hola = () =>{
  //   console.log("hola")
  //   }
  //   onClick={hola}  
    
  return (
    <>
      <div className="container-carrusel">
        <BiLeftArrow style={{ fill: "#fff8", fontSize: "3em" }} onClick={left}/>
        <div className="carrusel">
          <div  className="bkg-img" style={{backgroundImage:`url(${img})`}}/>
          <div className="carrusel-box" />
        </div>
        <BiRightArrow style={{ fill: "#fff8", fontSize: "3em" }} onClick={right} />
      </div>
    </>
  );
};

export default Carrusel;
