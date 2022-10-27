import "./App.css";
import Home from "./component/1/OneHome";
import Navbar from "./component/Navbar";
import About from "./component/2/TwoAbout";
import Technology from "./component/3/ThreeTechnology";
import Proyects from "./component/4/FourProjects";
import { useContext, createContext, useState } from "react";

export const ThemeContext = createContext("");

function App() {

  // const [oneColor, setOneColor] = useState("rgb(0, 0, 0)")
  // const [twoColor, setTwoColor] = useState("rgb(23, 23, 28)")
  // const [threeColor, setThreeColor] = useState("rgb(33, 33, 36)")
  // const [fourColor, setFourColor] = useState("rgb(49, 49, 54)")
  // const [fiveColor, setFiveColor] = useState("rgb(89, 89, 97)")
  // const [sixColor, setSixColor] = useState("rgb(255, 170, 34)")
  // const [sevenColor, setSevenColor] = useState("rgb(245, 245, 245)")

  // const [oneColor, setOneColor] = useState("#912345")
  // const [twoColor, setTwoColor] = useState("#555642")
  // const [threeColor, setThreeColor] = useState("#913452")
  // const [fourColor, setFourColor] = useState("#af9102")
  // const [fiveColor, setFiveColor] = useState("#9384ab")
  // const [sixColor, setSixColor] = useState("#abc902")
  // const [sevenColor, setSevenColor] = useState("#934abc")

  const [oneColor, setOneColor] = useState("#000000")
  const [twoColor, setTwoColor] = useState("#18181b")
  const [threeColor, setThreeColor] = useState("#212124")
  const [fourColor, setFourColor] = useState("#313136")
  const [fiveColor, setFiveColor] = useState("#595961")
  const [sixColor, setSixColor] = useState("#f0a020")
  const [sevenColor, setSevenColor] = useState("#f5f5f5")

  
  const objetThemes: any = {
    oneColor: oneColor,
    twoColor: twoColor,
    threeColor: threeColor,
    fourColor: fourColor,
    fiveColor: fiveColor,
    sixColor: sixColor,
    sevenColor: sevenColor
  }
  
  // const [gState,setGState] = useState<any>(objetThemes)

  return (
    <>
      <ThemeContext.Provider value={objetThemes}>
        {/* <h1>{`Hello ${gState.oneColor}!`}</h1> */}


        <div className="backg" style={{backgroundColor:objetThemes.threeColor}}/>
        <Navbar oneColor={oneColor} setOneColor={setOneColor} setTwoColor={setTwoColor} setThreeColor={setThreeColor} setFourColor={setFourColor} setFiveColor={setFiveColor} setSixColor={setSixColor} setSevenColor={setSevenColor} />
        <div id="" className="box home" style={{backgroundColor:objetThemes.twoColor}} ><Home /></div>
        <div id="aboutID" className="box about" ><About /></div>
        <div id="technologyID" className="box technology" style={{backgroundColor:objetThemes.twoColor}} ><Technology /></div>
        <div id="proyectsID" className="box proyects" style={{backgroundColor:objetThemes.oneColor}} ><Proyects /></div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
