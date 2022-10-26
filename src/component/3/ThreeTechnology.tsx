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

  const [objet,getObject] = useState<object>({fontSize:"0.9em",fill:theme.oneColor})

  window.onresize = resize;

  function resize(e: any) {
    e.target.innerWidth < 935?getObject({fontSize:"0.9em",fill:theme.sixColor}):getObject({fontSize:"1.4em",fill:theme.sixColor})
  }
  

  return (
    <>
      <h3 className="text-technology" style={{color:theme.sevenColor}}>Technologies</h3>
      <h4 className="text-technology" style={{color:theme.fiveColor}}>
        These are some of the technologies that best suit my way of working.
      </h4>
      <section >
        <Potentiometer
          icon={<SiHtml5 style={objet} />}
          name={"Html"}
          porcent={95}
        />
        <Potentiometer
          icon={<SiCss3 style={objet} />}
          name={"Css"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiJavascript style={objet} />}
          name={"JavaScript"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiReact style={objet} />}
          name={"React"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiExpress style={objet} />}
          name={"Express JS"}
          porcent={85}
        />
        <Potentiometer
          icon={<SiNodedotjs style={objet} />}
          name={"Node JS"}
          porcent={85}
        />
        <Potentiometer
          icon={<SiPython style={objet} />}
          name={"Python"}
          porcent={75}
        />
        <Potentiometer
          icon={<SiMysql style={objet} />}
          name={"Sql"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiMongodb style={objet} />}
          name={"Mongo db"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiAdobeillustrator style={objet} />}
          name={"Illustrator"}
          porcent={85}
        />
        <Potentiometer
          icon={<SiAdobephotoshop style={objet} />}
          name={"Photoshop"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiAdobepremierepro style={objet} />}
          name={"Premier Pro"}
          porcent={90}
        />
        <Potentiometer
          icon={<SiAdobexd style={objet} />}
          name={"XD"}
          porcent={90}
        />
      </section>
    </>
  );
};

export default Technology;