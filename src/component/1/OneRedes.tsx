import '../../styles/Redes.css' 
import {BsLinkedin,BsInstagram,BsGithub,BsTwitter} from "react-icons/bs";
import { SiGmail } from 'react-icons/si';
import { useContext,useRef, createContext } from "react";
import {ThemeContext} from '../../App'


const Redes = () => {
  const theme:any = useContext(ThemeContext)

  const style:any = { color: theme.sevenColor, fontSize: "1.5em" } 

  const fill = (e:any) =>{
    e.target.style.color = theme.sixColor
  }
  
  const fillL = (e:any) =>{
    console.log(e.target)
    e.target.style.color = theme.sevenColor
  }

  

  return (
    <div className="social" style={{backgroundColor:theme.twoColor}}>
        <ul>
          <li onMouseOver={fill} onMouseOut={fillL}>
            <a href="#"  >
              <BsTwitter  style={style} />
            </a>
          </li>
          <li onMouseOver={fill} onMouseOut={fillL}>
            <a href="#" >
              <BsInstagram  style={style} />
            </a>
          </li>
          <li onMouseOver={fill} onMouseOut={fillL}>
            <a href="#" >
              <BsGithub  style={style} />
            </a>
          </li>
          <li onMouseOver={fill} onMouseOut={fillL}>
            <a href="#" >
              <BsLinkedin  style={style} />
            </a>
          </li>
          <li onMouseOver={fill} onMouseOut={fillL}>
            <a href="#" >
              <SiGmail  style={style} />
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Redes
