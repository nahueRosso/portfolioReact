import "../../styles/Contact.css";
import Redes from "../1/OneRedes";
import { GiCancel } from "react-icons/gi";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../App'

type props = {
  reference: any,
  setContactTop: any
}


const FiveContact = ({ reference, setContactTop }: props) => {
  const theme: any = useContext(ThemeContext)

  const cancelContact = () => {
    setContactTop(reference.current.style.top = "400vh"
    )
  }

  return (
    <>
      <div onClick={cancelContact} className="boxCancel">
        <div><a style={{color:theme.sixColor,background:theme.fourColor,borderColor:theme.sixColor}} href="../../assets/EstructurIII.pdf" download>Download CV </a></div>
        <GiCancel className="iconCancel" style={{ color: theme.sixColor, fontSize: "3.2em", background: theme.oneColor, borderRadius: "50%" }} />
      </div>
      <div className="bodyContact">

        <form style={{backgroundColor:`${theme.twoColor}ee`}}>
          <label>  <input  style={{backgroundColor:theme.fourColor,color:theme.sevenColor}} placeholder="Name" type="text" name="name" /></label>
          <label>  <input required style={{backgroundColor:theme.fourColor,color:theme.sevenColor}}  placeholder="E-mail" type="text" name="name" /></label>
          <label>  <textarea  style={{backgroundColor:theme.fourColor,color:theme.sevenColor}}  className="Query" placeholder="Query"  name="name" /></label>
          <input type="submit" value="Submit" style={{backgroundColor: theme.sixColor,color:theme.oneColor}} />
        </form>
      </div>
      <div className="divRedes">
        <Redes />
      </div>
    </>
  )
}


export default FiveContact
