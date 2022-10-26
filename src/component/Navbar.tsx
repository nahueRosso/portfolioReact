import "../styles/Navbar.css";
import { BsMoonStarsFill, BsSunFill, BsList } from "react-icons/bs";
import { useRef, useState, useContext } from "react";
import { ThemeContext } from '../App'
import { hexRgb } from "../funcion"

const Navbar = ({ setOneColor, setTwoColor, setThreeColor, setFourColor, setFiveColor, setSixColor, setSevenColor }: any) => {
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
    console.log("holis")
  };


  document.addEventListener('scroll', (e) => {

    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st < lastScrollTop && window.pageYOffset > window.innerHeight) {
      NavbarCRef.current.style.opacity = 1
      NavbarCRef.current.style.transform = "translateY(0em)"


    } else {

      NavbarCRef.current.style.transform = "translateY(-5em)"
      NavbarCRef.current.style.opacity = 0

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

  
  return (
    <>
      <div ref={NavbarCRef} onClick={btnDeployed} className="navbar clon-activate" style={{ backgroundColor: theme.fourColor }}>
        <div className="capa" />
        <ul>
          <li className="list">
            <BsList style={{ color: theme.sevenColor, fontSize: "1.5em" }} />
          </li>
          <div className="deployed" style={{ backgroundColor: theme.sixColor }}>
            <li className="iconNav">
              <a href="#aboutID" style={{ color: theme.sevenColor }} onMouseOver={() => {
                  NavbarCRef.current.lastChild.lastChild.children[0].firstChild.style.color = hexRgb(theme.twoColor)
                  NavbarCRef.current.lastChild.lastChild.children[0].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
                }} onMouseOut={() => {
                  NavbarCRef.current.lastChild.lastChild.children[0].firstChild.style.color = hexRgb(theme.sevenColor)
                  NavbarCRef.current.lastChild.lastChild.children[0].firstChild.style.backgroundColor = hexRgb(theme.fourColor)
                }}
                >About me</a>
            </li>
            <li className="iconNav">
              <a href="#technologyID" style={{ color: theme.sevenColor }} onMouseOver={() => {
                  NavbarCRef.current.lastChild.lastChild.children[1].firstChild.style.color = hexRgb(theme.twoColor)
                  NavbarCRef.current.lastChild.lastChild.children[1].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
                }} onMouseOut={() => {
                  NavbarCRef.current.lastChild.lastChild.children[1].firstChild.style.color = hexRgb(theme.sevenColor)
                  NavbarCRef.current.lastChild.lastChild.children[1].firstChild.style.backgroundColor = hexRgb(theme.fourColor)
                }}
              >Technologies</a>
            </li>
            <li className="iconNav">
              <a href="#proyectsID" style={{ color: theme.sevenColor }} onMouseOver={() => {
                  NavbarCRef.current.lastChild.lastChild.children[2].firstChild.style.color = hexRgb(theme.twoColor)
                  NavbarCRef.current.lastChild.lastChild.children[2].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
                }} onMouseOut={() => {
                  NavbarCRef.current.lastChild.lastChild.children[2].firstChild.style.color = hexRgb(theme.sevenColor)
                  NavbarCRef.current.lastChild.lastChild.children[2].firstChild.style.backgroundColor = hexRgb(theme.fourColor)
                }}>Projects</a>
            </li>
            <li className="iconNav" id="lastIconNav">
              <a href="#" style={{ color: theme.sevenColor }} onMouseOver={() => {
                  NavbarCRef.current.lastChild.lastChild.children[3].firstChild.style.color = hexRgb(theme.twoColor)
                  NavbarCRef.current.lastChild.lastChild.children[3].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
                }} onMouseOut={() => {
                  NavbarCRef.current.lastChild.lastChild.children[3].firstChild.style.color = hexRgb(theme.sevenColor)
                  NavbarCRef.current.lastChild.lastChild.children[3].firstChild.style.backgroundColor = hexRgb(theme.fourColor)
                }}>Contact</a>
            </li>
          </div>
        </ul>
      </div>
      <div className="header" style={{ background: theme.twoColor }}>
        <div ref={refDeployed} onClick={btnDeployed} className="navbar" style={{ backgroundColor: theme.fourColor }}>
          <div className="capa" />
          <ul>
            <li className="list">
              <BsList style={{ color: theme.sevenColor, fontSize: "1.5em" }} />
            </li>
            <div className="deployed" style={{ backgroundColor: theme.sixColor }}>
              <li className="iconNav">
                <a href="#aboutID" style={{ color: theme.sevenColor }} onMouseOver={() => {
                  refDeployed.current.lastChild.lastChild.children[0].firstChild.style.color = hexRgb(theme.twoColor)
                  refDeployed.current.lastChild.lastChild.children[0].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
                }} onMouseOut={() => {
                  refDeployed.current.lastChild.lastChild.children[0].firstChild.style.color = hexRgb(theme.sevenColor)
                  refDeployed.current.lastChild.lastChild.children[0].firstChild.style.backgroundColor = hexRgb(theme.fourColor)
                }}>
                  About me</a>
              </li>
              <li className="iconNav">
                <a href="#technologyID" style={{ color: theme.sevenColor }} onMouseOver={() => {
                  refDeployed.current.lastChild.lastChild.children[1].firstChild.style.color = hexRgb(theme.twoColor)
                  refDeployed.current.lastChild.lastChild.children[1].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
                }} onMouseOut={() => {
                  refDeployed.current.lastChild.lastChild.children[1].firstChild.style.color = hexRgb(theme.sevenColor)
                  refDeployed.current.lastChild.lastChild.children[1].firstChild.style.backgroundColor = hexRgb(theme.fourColor)
                }}>Technologies</a>
              </li>
              <li className="iconNav">
                <a href="#proyectsID" style={{ color: theme.sevenColor }} onMouseOver={() => {
                  refDeployed.current.lastChild.lastChild.children[2].firstChild.style.color = hexRgb(theme.twoColor)
                  refDeployed.current.lastChild.lastChild.children[2].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
                }} onMouseOut={() => {
                  refDeployed.current.lastChild.lastChild.children[2].firstChild.style.color = hexRgb(theme.sevenColor)
                  refDeployed.current.lastChild.lastChild.children[2].firstChild.style.backgroundColor = hexRgb(theme.fourColor)
                }}>Projects</a>
              </li>
              <li className="iconNav" id="lastIconNav">
                <a href="#" style={{ color: theme.sevenColor }} onMouseOver={() => {
                  refDeployed.current.lastChild.lastChild.children[3].firstChild.style.color = hexRgb(theme.twoColor)
                  refDeployed.current.lastChild.lastChild.children[3].firstChild.style.backgroundColor = hexRgb(theme.sixColor)
                }} onMouseOut={() => {
                  refDeployed.current.lastChild.lastChild.children[3].firstChild.style.color = hexRgb(theme.sevenColor)
                  refDeployed.current.lastChild.lastChild.children[3].firstChild.style.backgroundColor = hexRgb(theme.fourColor)
                }}>Contact</a>
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
