import React from "react";
import "./About.css";
import imgGrey from "../../assets/lienzo-5f5f65.svg";
import imgBlack from "../../assets/lienzo-18181b.svg";
import imgAbout from "../../assets/instagram.png";
import trazo from "../../assets/trazo.svg";
import trazoBottom from "../../assets/trazo-bottom.svg";

const About = () => {
  return (
    <>
      <img className="imgBlack" src={trazo} alt="" />
      <div className="container-Abaut">
        <img className="imgAbaut" src={imgAbout} alt="" />
        <div>
          <h3>About Me</h3>
          <h4>
            I am a full stack web developer & designer from Argentina. I
            specialize in creating clean and high converting user experiences
            for shops. In my daily work I participate in all creation processes,
            from understanding business needs, user creation, design and
            realization. <br />
            <br />
            My first approach with programming was in high school, from that
            moment I did not stop learning.
            <br />I am currently studying mechanical engineering at UNLP.
            <br />
            <br />
            My main source of inspiration is movies and photography.
            <br />
            I love traveling and playing music.
            <br />
          </h4>
        </div>
      </div>
      <img className="imgBottom" src={trazoBottom} />
    </>
  );
};

export default About;
