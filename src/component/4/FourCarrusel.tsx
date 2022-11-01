import { useState, useEffect,useContext, useRef } from "react";
import "../../styles/Carrusel.css";
import marco from '../../assets/marco.svg'
import leftArrow from '../../assets/leftArrow.svg'
import rightArrow from '../../assets/rightArrow.svg'
import { marcosvg } from "../Svg";
import { ThemeContext } from '../../App'

const Carrusel = ({ images }: any) => {
  const theme: any = useContext(ThemeContext)
  let [count, getCount] = useState<number>(0);

  const [img, getImg] = useState({transform: 'translateX(0%)'});

  useEffect(() => {
    getImg({transform: `translateX(${count}%)`});
  }, [count]);

const refText = useRef<any>()

  return (
    <>
      <button className="direction" onClick={() => getCount(e => e == 0 ? e = -75 : e + 25)}>
        <img src={leftArrow} className="arrow" />
      </button>
      <div className="carrusel">
        <div className="container-imgs">
          <div className="continuidad" ref={refText} style={img}>
            {images.map((image:any,i:any)=>
            <>
            <div className="bkg-img"  style={{ backgroundImage: `url(${image.img})` }}/>
            <div id={`box${i}`} style={{backgroundColor:`${theme.threeColor}dd`}}  className="info-project"><h4 style={{color:theme.sevenColor}}>{image.tituloText}</h4><h5 style={{color:theme.sevenColor}}>{image.text}</h5></div>
            </>
            )}
            
          </div>
        </div>
        {marcosvg(refText)}
        {/* <img src={marco} className="carrusel-box" alt="" /> */}
      </div>
      <button className="direction" onClick={() => getCount(e => e == -75 ? e = 0 : e - 25)}>
        <img src={rightArrow} className="arrow" />
      </button>
    </>
  );
};

export default Carrusel;
