import "../../styles/Home.css";
import Foto from "./OneFoto";
import Redes from "./OneRedes";
import { useContext,useRef, createContext } from "react";
import {ThemeContext} from '../../App'


const Home = () => {
  const theme:any = useContext(ThemeContext)
  const refeH1 = useRef<any>()
  // .style.textShadow = `3px 3px 4px ${(theme.sixColor)}`
  setTimeout(()=>{refeH1.current.style.textShadow = `3px 3px 4px ${(theme.sixColor)}`},10)
  return (
    
    <>
      <section className="container">
        <div ref={refeH1} className="title" style={{color:theme.sevenColor}}>
          <h1>Full stack web developer & designe</h1>
        </div>
        <div className="barra" style={{backgroundColor: theme.fourColor,borderTop:`.3em solid ${theme.sevenColor}`,borderBottom:`.3em solid ${theme.sevenColor}`}}/>
        <div className="foto">
          <Foto />
        </div>
        <div className="info">
          <h2 style={{color:theme.fiveColor}}>
            I'm Nahuel Rojo, a digital freelancer designer based in Buenos Aires
            and a former UTN student. He always available to talk about new
            opportunities.
          </h2>
        </div>
        <Redes />
      </section>
    </>
  );
};

export default Home;
