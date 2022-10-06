import "./Navbar.css";
import { BsMoonStarsFill, BsSunFill, BsList } from "react-icons/bs";
import "../../media.css";
import { useState, useRef } from "react";

const Navbar = () => {
  const refDeployed: any = useRef();
  const btnRef: any = useRef();  

  const btnDeployed = () => {
    if (window.matchMedia("(max-width: 935px)").matches) {
      refDeployed.current.classList.toggle("active");
      setTimeout(() => {
        refDeployed.current.classList.toggle("activeIcon");
      }, 1000);
    }
  };

  const btnLight = () => {
      btnRef.current.classList.toggle("light");    
  };

  return (
    <>
      <div className="header">
        <div ref={refDeployed} onClick={btnDeployed} className="navbar">
          <ul>
            <li className="list">
              <BsList style={{ color: "#a1a1aa", fontSize: "1.5em" }} />
            </li>
            <div className="deployed">
              <li className="iconNav">
                <a href="#">About me</a>
              </li>
              <li className="iconNav">
                <a href="#">Technologies</a>
              </li>
              <li className="iconNav">
                <a href="#">Projects</a>
              </li>
              <li className="iconNav" id="lastIconNav">
                <a href="#">Contact</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div ref={btnRef} onClick={btnLight} className="confi">
        <div className="moon">
          <BsMoonStarsFill style={{ color: "#a1a1aa", fontSize: "1.5em" }} />
        </div>
        <div className="sun">
          <BsSunFill style={{ color: "#a1a1aa", fontSize: "1.5em" }} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
