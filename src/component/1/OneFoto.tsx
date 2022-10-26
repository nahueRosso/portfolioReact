import "../../styles/Foto.css";
import Img from "../../assets/DSC_0227.png";
import { useContext,useRef, createContext } from "react";
import {ThemeContext} from '../../App'

const Foto = () => {
  const theme:any = useContext(ThemeContext)
  return (
    <div className="content">
      <div className="imageContent" style={{background:theme.sevenColor}}>
        <img src={Img} className="imagen" style={{border:`.3 solid ${theme.threeColor}`}} />
      </div>
    </div>
  );
};

export default Foto;
