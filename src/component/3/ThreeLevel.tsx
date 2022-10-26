import "../../styles/Level.css";
import { useContext,useRef, createContext } from "react";
import {ThemeContext} from '../../App'

const Level = ({ icon, porcent, name }: any) => {
  const theme:any = useContext(ThemeContext)

  let objet;

  if (window.matchMedia("(max-width: 935px)").matches) {
     objet = { width: `calc(80vw * 0.${porcent})`,backgroundColor:theme.sixColor }
  }else{ objet = { width: `calc(45em * 0.${porcent})`,backgroundColor:theme.sixColor }}
  


  return (
    <>
      <div className="conteinerLevel" style={{backgroundColor: theme.fourColor}}>
        <div className="icon" style={{backgroundColor: theme.sixColor}}>{icon}</div>
        <div className="level" style={{backgroundColor: theme.twoColor}}>
          <div style={objet} className="levelOrange" >
            <h5 className="nameApp" style={{color:theme.twoColor}} >{name}</h5>
          </div>
        </div>
        <h5 className="porcent" style={{color: theme.sevenColor}}>% {porcent}</h5>
      </div>
    </>
  );
};

export default Level;
