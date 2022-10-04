import React from "react";
import "./Contact.css";
import trazo2 from "../../assets/trazo2.svg";

const Contact = () => {
  const change = () =>{
    console.log("sds")
  }
  return (
    <>
      <img className="imgBlack2" src={trazo2} />
      <div className="container-Contact">
        <h3>Contact</h3>
        <form action="" method="post">
          <input type="email" name="" id="" placeholder="enter email" onChange={change}/>
          <textarea name="" id="" placeholder="enter question">
          </textarea>
          <button>submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
