import './Technology.css'
import Potentiometer from './Level'
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiAdobexd, SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPython, SiReact } from "react-icons/si";

const Technology = () => {
 let objet;
 if (window.matchMedia("(max-width: 935px)").matches) {
  objet = {  fontSize: ".9em" }
}else{ objet = {  fontSize: "1.4em" }}

window.onresize = resize;

function resize(e:any){

  let major:boolean = false  
  let minor:boolean = false  

  e.target.innerWidth>935?major=true:minor=true

  if (major===true) {
    setTimeout(() => {
      console.log("hola")
      if (e.target.innerWidth>935) {
        location.reload();
      }
    }, 10)}

if(minor===true){
  setTimeout(() => {
    if (e.target.innerWidth<935) {
      console.log("chau")
      location.reload();
    }
  }, 10);
}

}


  return (
    <div className='container-Technology'>
        <h3>Technologies</h3>
        <h4>These are some of the technologies that best suit my way of working.</h4>
        <section>
          <Potentiometer icon={<SiHtml5 style={objet}/>} name={'Html'} porcent={95}/>
          <Potentiometer icon={<SiCss3 style={objet}/>} name={'Css'} porcent={90}/>
          <Potentiometer icon={<SiJavascript style={objet}/>} name={'JavaScript'} porcent={90}/>
          <Potentiometer icon={<SiReact style={objet}/>} name={"React"} porcent={90}/>
          <Potentiometer icon={<SiExpress style={objet}/>} name={'Express JS'} porcent={85}/>
          <Potentiometer icon={<SiNodedotjs style={objet}/>} name={'Node JS'} porcent={85}/>
          <Potentiometer icon={<SiPython style={objet}/>} name={"Python"} porcent={75}/>
          <Potentiometer icon={<SiMysql style={objet}/>} name={'Sql'} porcent={90}/>
          <Potentiometer icon={<SiMongodb style={objet}/>} name={"Mongo db"} porcent={90}/>
          <Potentiometer icon={<SiAdobeillustrator style={objet}/>} name={'Illustrator'} porcent={85}/>
          <Potentiometer icon={<SiAdobephotoshop style={objet}/>} name={'Photoshop'} porcent={90}/>
          <Potentiometer icon={<SiAdobepremierepro style={objet}/>} name={'Premier Pro'} porcent={90}/>
          <Potentiometer icon={<SiAdobexd style={objet}/>} name={'XD'} porcent={90}/>
        </section>
    </div>
  )
}

export default Technology
