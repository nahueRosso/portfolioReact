import "./Projects.css";
import trazo2 from "../../assets/trazo2.svg";
import img1 from '../../assets/ArialRoundedMTBold.png';

const Contact = () => {
  return (
    <>
      <img className="imgBlack2" src={trazo2} />
      <div className="container-Projects">
        <h3>Contact</h3>
        <section className="container-images">
        <div className="container-image">
       <img className="image1" src={img1} />
        </div>
        <div className="container-image">
       <img className="image1" src={img1} />
        </div>
        <div className="container-image">
       <img className="image1" src={img1} />
        </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
