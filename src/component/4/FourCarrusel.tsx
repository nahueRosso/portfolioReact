import { useState, useEffect,useContext } from "react";
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

  // setInterval(()=>{
  //   getCount(e => e == 0 ? e = -75 : e + 25)
  // },5000)

  return (
    <>
      <button className="direction" onClick={() => getCount(e => e == 0 ? e = -75 : e + 25)}>
        <img src={leftArrow} className="arrow" />
      </button>
      <div className="carrusel">
        <div className="container-imgs">
          <div className="continuidad" style={img}>
            {images.map((image:any)=><div className="bkg-img" style={{ backgroundImage: `url(${image})` }} />)}
          </div>
        </div>
        {marcosvg()}
        {/* <img src={marco} className="carrusel-box" alt="" /> */}
      </div>
      <button className="direction" onClick={() => getCount(e => e == -75 ? e = 0 : e - 25)}>
        <img src={rightArrow} className="arrow" />
      </button>
    </>
  );
};

export default Carrusel;
