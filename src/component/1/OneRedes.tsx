import '../../styles/Redes.css' 
import {BsLinkedin,BsInstagram,BsGithub,BsTwitter,BsWhatsapp} from "react-icons/bs";
import { SiGmail } from 'react-icons/si';
import { useContext,useRef, createContext } from "react";
import {ThemeContext} from '../../App'


const Redes = () => {
  const theme:any = useContext(ThemeContext)

  const styles:any = { color: theme.sevenColor, fontSize: "1.5em" } 

  const fill = (parametro:number) =>{

    refRedes.current.children[parametro].firstChild.firstChild.style.color = theme.sixColor
  }
  
  const fillL = (parametro:number) =>{
    refRedes.current.children[parametro].firstChild.firstChild.style.color = theme.sevenColor
  }

  const refRedes =useRef<any>()

  

  return (
    <div className="social" style={{backgroundColor:"transparent"}}>
        <ul ref={refRedes} style={{zIndex:"1000"}}>
          <li onMouseOver={()=>fill(0)} onMouseOut={()=>fillL(0)}>
            <a href="#"  >
              <BsTwitter  style={styles} />
            </a>
          </li>
          <li onMouseOver={()=>fill(1)} onMouseOut={()=>fillL(1)}>
            <a href="#" >
              <BsInstagram  style={styles} />
            </a>
          </li>
          <li onMouseOver={()=>fill(2)} onMouseOut={()=>fillL(2)}>
            <a href="#" >
              <BsWhatsapp  style={styles} />
            </a>
          </li>
          <li onMouseOver={()=>fill(3)} onMouseOut={()=>fillL(3)}>
            <a href="#" >
              <BsGithub  style={styles} />
            </a>
          </li>
          <li onMouseOver={()=>fill(4)} onMouseOut={()=>fillL(4)}>
            <a href="#" >
              <BsLinkedin  style={styles} />
            </a>
          </li>
          <li onMouseOver={()=>fill(5)} onMouseOut={()=>fillL(5)}>
            <a href="#" >
              <SiGmail  style={styles} />
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Redes
