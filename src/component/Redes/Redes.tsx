import {useState} from 'react'
import './Redes.css' 
import '../../media.css'
import {BsLinkedin,BsInstagram,BsGithub,BsTwitter} from "react-icons/bs";
import { SiGmail } from 'react-icons/si';


const Redes = () => {

  const style:any = { color: "#a1a1aa", fontSize: "1.5em" } 

  const fill = (e:any) =>{
    e.target.style.color = "#fa2"
    // setTimeout(() =>{e.target.style.color = "#a1a1aa"},1500)
  }
  
  const fillL = (e:any) =>{
    e.target.style.color = "#a1a1aa"
  }

 

  return (
    <div className="social">
        <ul>
          <li >
            <a href="#">
              <BsTwitter onMouseOver={fill} onMouseOut={fillL} style={style} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram onMouseOver={fill} onMouseOut={fillL} style={style} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsGithub onMouseOver={fill} onMouseOut={fillL} style={style} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsLinkedin onMouseOver={fill} onMouseOut={fillL} style={style} />
            </a>
          </li>
          <li>
            <a href="#">
              <SiGmail onMouseOver={fill} onMouseOut={fillL} style={style} />
            </a>
          </li>
        </ul>
      </div>
  )
}

export default Redes
