import "../styles/Navbar.css";

import { BsMoonStarsFill, BsSunFill, BsList } from "react-icons/bs";
import { useRef, useState, useContext } from "react";
import { ThemeContext } from '../App'
import { hexRgb } from "../funcion"

const Navbar = ({setContactTop, refContact, oneColor, setOneColor, setTwoColor, setThreeColor, setFourColor, setFiveColor, setSixColor, setSevenColor }: any) => {
  const refDeployed: any = useRef();
  const btnRef: any = useRef();
  const NavbarCRef: any = useRef();
  let lastScrollTop: number = 0


  const theme: any = useContext(ThemeContext)

  console.log(theme.fiveColor)

  const btnDeployed = () => {
    if (window.matchMedia("(max-width: 935px)").matches) {
      refDeployed.current.classList.toggle("active");
      NavbarCRef.current.classList.toggle("active");

      setTimeout(() => {
        refDeployed.current.classList.toggle("activeIcon");
        NavbarCRef.current.classList.toggle("activeIcon");
      }, 1000);
    }



  };

  const btnLight = () => {
    btnRef.current.classList.toggle("light");
    if (oneColor !== "#000000") {
      setOneColor("#000000")
      setTwoColor("#18181b")
      setThreeColor("#212124")
      setFourColor("#313136")
      setFiveColor("#595961")
      setSixColor("#f0a020")
      setSevenColor("#f5f5f5")
    } else {
      setOneColor("#919198")
      setTwoColor("#999995")
      setThreeColor("#aaaaaa")
      setFourColor("#888888")
      setFiveColor("#232328")
      setSixColor("#0d0d5f")
      setSevenColor("#000000")
    }
  };

  if (window.matchMedia("(max-width: 935px)").matches) {
    setTimeout(() => { NavbarCRef.current.style.border = `.3em solid #${(theme.twoColor)}` }, 1000)
  }


  document.addEventListener('scroll', (e) => {

    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st < lastScrollTop && window.pageYOffset > window.innerHeight) {
      NavbarCRef.current.style.opacity = 1
      NavbarCRef.current.style.transform = "translateY(0em)"

      refDeployed.current.classList.toggle("active",false);
      NavbarCRef.current.classList.toggle("active",false);
      setTimeout(() => {
        refDeployed.current.classList.toggle("activeIcon",false);
        NavbarCRef.current.classList.toggle("activeIcon",false);
      }, 1000);
      
    } else {

      NavbarCRef.current.style.transform = "translateY(-5em)"
      NavbarCRef.current.style.opacity = 0

      refDeployed.current.classList.toggle("active",false);
      NavbarCRef.current.classList.toggle("active",false);
      setTimeout(() => {
        refDeployed.current.classList.toggle("activeIcon",false);
        NavbarCRef.current.classList.toggle("activeIcon",false);
      }, 1000);
      // NavbarCRef.current.lastChild.lastChild.style.transition = "none";
      // refDeployed.current.lastChild.lastChild.style.transition = "none";

    }

    lastScrollTop = st;
  })

  const overTheme = () => {
    btnRef.current.children[0].style.backgroundColor = hexRgb(theme.sixColor)
    btnRef.current.children[1].style.backgroundColor = hexRgb(theme.sixColor)
    btnRef.current.children[0].firstChild.style.color = hexRgb(theme.twoColor)
    btnRef.current.children[1].firstChild.style.color = hexRgb(theme.twoColor)
  }
  const outTheme = () => {
    btnRef.current.children[0].style.backgroundColor = hexRgb(theme.fourColor)
    btnRef.current.children[1].style.backgroundColor = hexRgb(theme.fourColor)
    btnRef.current.children[0].firstChild.style.color = hexRgb(theme.sevenColor)
    btnRef.current.children[1].firstChild.style.color = hexRgb(theme.sevenColor)
  }

  const mauseOverList = () => {
    NavbarCRef.current.style.backgroundColor = hexRgb(theme.sixColor)
    refDeployed.current.style.backgroundColor = hexRgb(theme.sixColor)
    NavbarCRef.current.children[1].firstChild.firstChild.style.color = hexRgb(theme.twoColor)
    refDeployed.current.children[1].firstChild.firstChild.style.color = hexRgb(theme.twoColor)
    if (NavbarCRef.current.classList[2] === "active" || refDeployed.current.classList[2] === "active") {
      NavbarCRef.current.style.backgroundColor = hexRgb(theme.fourColor)
      refDeployed.current.style.backgroundColor = hexRgb(theme.fourColor)
      NavbarCRef.current.children[1].firstChild.firstChild.style.color = hexRgb(theme.sevenColor)
      refDeployed.current.children[1].firstChild.firstChild.style.color = hexRgb(theme.sevenColor)
    }
  }
  const mauseOutList = () => {
    NavbarCRef.current.style.backgroundColor = hexRgb(theme.fourColor)
    refDeployed.current.style.backgroundColor = hexRgb(theme.fourColor)
    NavbarCRef.current.children[1].firstChild.firstChild.style.color = hexRgb(theme.sevenColor)
    refDeployed.current.children[1].firstChild.firstChild.style.color = hexRgb(theme.sevenColor)
  }

  const prueba = (parametro: any, parametro2: any) => {
    if (!window.matchMedia("(max-width: 935px)").matches) {
      parametro2.current.lastChild.lastChild.children[parametro].firstChild.style.color = hexRgb(theme.twoColor)
      parametro2.current.lastChild.lastChild.children[parametro].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
    }else{
      parametro2.current.lastChild.lastChild.children[parametro].firstChild.style.color = hexRgb(theme.sixColor)
    }
  }

  const prueba2 = (parametro: any, parametro2: any) => {
    if (!window.matchMedia("(max-width: 935px)").matches) {
      parametro2.current.lastChild.lastChild.children[parametro].firstChild.style.color = hexRgb(theme.sevenColor)
      parametro2.current.lastChild.lastChild.children[parametro].firstChild.style.backgroundColor = "transparent"
      
    }else{
      parametro2.current.lastChild.lastChild.children[parametro].firstChild.style.color = hexRgb(theme.sevenColor)
      // NavbarCRef.current.lastChild.lastChild.style.transition = "none";
      // refDeployed.current.lastChild.lastChild.style.transition = "none";
      // NavbarCRef.current.style.transition = "none";
      // refDeployed.current.style.transition = "none";
    }
  }


  const contact = () =>{
    setContactTop(refContact.current.style.top = "0px")
   
  }  

  return (
    <>
      <div ref={NavbarCRef} onClick={btnDeployed} className="navbar clon-activate" style={{ backgroundColor: theme.fourColor }}>
        <div className="capa" onMouseOver={mauseOverList} onMouseOut={mauseOutList} />
        <ul>
          <li className="list">
            <BsList style={{ color: theme.sevenColor, fontSize: "1.5em" }} />
          </li>
          <div className="deployed" style={{ backgroundColor: theme.fourColor }}>
            <li className="iconNav">
              <a href="#aboutID" style={{ color: theme.sevenColor }} onMouseOver={() => prueba(0, NavbarCRef)} onMouseOut={() => prueba2(0, NavbarCRef)}
              >About me</a>
            </li>
            <li className="iconNav">
              <a href="#technologyID" style={{ color: theme.sevenColor }} onMouseOver={() => prueba(1, NavbarCRef)} onMouseOut={() => prueba2(1, NavbarCRef)}
              >Technologies</a>
            </li>
            <li className="iconNav">
              <a href="#proyectsID" style={{ color: theme.sevenColor }} onMouseOver={() => prueba(2, NavbarCRef)} onMouseOut={() => prueba2(2, NavbarCRef)}>Projects</a>
            </li>
            <li className="iconNav" id="lastIconNav">
              <a onClick={contact} style={{ color: theme.sevenColor }} onMouseOver={() => prueba(3, NavbarCRef)} onMouseOut={() => prueba2(3, NavbarCRef)}>Contact</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="header" style={{ background: theme.twoColor }}>
        <div ref={refDeployed} onClick={btnDeployed} className="navbar" style={{ backgroundColor: theme.fourColor }}>
          <div className="capa" onMouseOver={mauseOverList} onMouseOut={mauseOutList} />
          <ul>
            <li className="list">
              <BsList style={{ color: theme.sevenColor, fontSize: "1.5em" }} />
            </li>
            <div className="deployed" style={{ backgroundColor: theme.fourColor,zIndex:"10000" }}>
              <li className="iconNav">
                <a href="#aboutID" style={{ color: theme.sevenColor }} onMouseOver={() => prueba(0, refDeployed)} onMouseOut={() => prueba2(0, refDeployed)}>
                  About me </a>
              </li>
              <li className="iconNav">
                <a href="#technologyID" style={{ color: theme.sevenColor }} onMouseOver={() => prueba(1, refDeployed)} onMouseOut={() => prueba2(1, refDeployed)}>Technologies</a>
              </li>
              <li className="iconNav">
                <a href="#proyectsID" style={{ color: theme.sevenColor }} onMouseOver={() => prueba(2, refDeployed)} onMouseOut={() => prueba2(2, refDeployed)}>Projects</a>
              </li>
              <li className="iconNav" id="lastIconNav">
                <a onClick={contact} style={{ color: theme.sevenColor }} onMouseOver={() => prueba(3, refDeployed)} onMouseOut={() => prueba2(3, refDeployed)}>Contact</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div ref={btnRef} onClick={btnLight} onMouseOver={overTheme} onMouseOut={outTheme} className="confi">
        <div className="moon" style={{ backgroundColor: theme.fourColor }}>
          <BsMoonStarsFill style={{ color: theme.sevenColor, fontSize: "1.5em" }} />
        </div>
        <div className="sun" style={{ backgroundColor: theme.fourColor }}>
          <BsSunFill style={{ color: theme.sevenColor, fontSize: "1.5em" }} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
