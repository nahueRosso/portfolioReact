import "../../styles/Technology.css";
import {useState, useContext} from 'react'
import Potentiometer from "./ThreeLevel";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";
import {ThemeContext} from '../../App'

const Technology = () => {
  const theme:any = useContext(ThemeContext)

  const [objet,getObject] = useState<string>("0.9em")

  window.onresize = resize;

  function resize(e: any) {
    e.target.innerWidth < 935?getObject("0.9em"):getObject("1.4em")
  }
  

  return (
    <>
      <h3 className="text-technology" style={{color:theme.sevenColor}}>Technologies</h3>
      <h4 className="text-technology" style={{color:theme.fiveColor}}>
        These are some of the technologies that best suit my way of working.
      </h4>
      <section >
        <Potentiometer
          icon={<SiHtml5 style={{fontSize:`${objet}`,color:theme.oneColor}} />}
          name={"Html"}
          porcent={95}
        />
        <Potentiometer
          icon={<SiCss3 style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Css"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiJavascript style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"JavaScript"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiReact style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"React"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiExpress style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Express JS"}
          porcent={85}
        />
        <Potentiometer
          icon={<SiNodedotjs style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Node JS"}
          porcent={85}
        />
        <Potentiometer
          icon={<SiPython style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Python"}
          porcent={75}
        />
        <Potentiometer
          icon={<SiMysql style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Sql"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiMongodb style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Mongo db"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiAdobeillustrator style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Illustrator"}
          porcent={85}
        />
        <Potentiometer
          icon={<SiAdobephotoshop style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Photoshop"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiAdobepremierepro style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"Premier Pro"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiAdobexd style={{fontSize:`${objet}`,color:theme.oneColor}}  />}
          name={"XD"}
          porcent={90}
        />
      </section>
    </>
  );
};

export default Technology;
