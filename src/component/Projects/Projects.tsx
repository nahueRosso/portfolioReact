import "./Projects.css";
import trazo2 from "../../assets/trazo2.svg";
import Carrusel from './Carrusel'
import img1 from '../../assets/img1.jpg'; 
import img2 from '../../assets/img2.png'; 
import img3 from '../../assets/img3.jpg'; 
import img4 from '../../assets/ArialRoundedMTBold.png'; 

const Contact = () => {
  const images:any[] =[img1,img2,img3,img4]
  console.log(images)
  return (
    <>
      <img className="imgBlack2" src={trazo2} />
      <div className="container-Projects">
        <h3>Projects</h3>
        <section className="container-images">
        <Carrusel images={images}/>
        </section>
      </div>
    </>
  );
};

export default Contact;
