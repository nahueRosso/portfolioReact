import "./Projects.css";
import trazo2 from "../../assets/trazo2.svg";
import img1 from '../../assets/ArialRoundedMTBold.png';
import Carrusel from './Carrusel'

const Contact = () => {
  return (
    <>
      <img className="imgBlack2" src={trazo2} />
      <div className="container-Projects">
        <h3>Projects</h3>
        <section className="container-images">
        <Carrusel/>
        </section>
      </div>
    </>
  );
};

export default Contact;
