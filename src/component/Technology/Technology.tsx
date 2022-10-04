import React from 'react'
import './Technology.css'
import Potentiometer from './Level'
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAdobexd, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPython, SiReact } from "react-icons/si";

const Technology = () => {
  
  return (
    <div className='container-Technology'>
        <h3>Technologies</h3>
        <h4>These are some of the technologies that best suit my way of working.</h4>
        <section>
          <Potentiometer icon={<SiHtml5 style={{  fontSize: "1.4em" }}/>} name={'Html'} porcent={95}/>
          <Potentiometer icon={<SiCss3 style={{  fontSize: "1.4em" }}/>} name={'Css'} porcent={90}/>
          <Potentiometer icon={<SiJavascript style={{  fontSize: "1.4em" }}/>} name={'JavaScript'} porcent={90}/>
          <Potentiometer icon={<SiReact style={{  fontSize: "1.4em" }}/>} name={"React"} porcent={90}/>
          <Potentiometer icon={<SiExpress style={{  fontSize: "1.4em" }}/>} name={'Express'} porcent={85}/>
          <Potentiometer icon={<SiNodedotjs style={{  fontSize: "1.4em" }}/>} name={'Node JS'} porcent={85}/>
          <Potentiometer icon={<SiPython style={{  fontSize: "1.4em" }}/>} name={"Python"} porcent={75}/>
          <Potentiometer icon={<SiMysql style={{  fontSize: "1.4em" }}/>} name={'Sql'} porcent={90}/>
          <Potentiometer icon={<SiMongodb style={{  fontSize: "1.4em" }}/>} name={"Mongo db"} porcent={90}/>
          <Potentiometer icon={<SiAdobeillustrator style={{  fontSize: "1.4em" }}/>} name={'Illustrator'} porcent={85}/>
          <Potentiometer icon={<SiAdobephotoshop style={{  fontSize: "1.4em" }}/>} name={'Photoshop'} porcent={90}/>
          <Potentiometer icon={<SiAdobepremierepro style={{  fontSize: "1.4em" }}/>} name={'Premier Pro'} porcent={90}/>
        </section>
    </div>
  )
}

export default Technology
