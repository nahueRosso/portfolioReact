import "./Home.css";
import Foto from "../Foto/Foto";
import Navbar from "../Navbar/Navbar";
import Redes from "../Redes/Redes";
import '../../media.css'

const Home = () => {
  // console.log(BsTwitter());

  return (
    <>
    <Foto />
    <section  className="container">
      <div className="title"><h1>Full stack web developer & designe</h1></div>
      <div className="info"><h2>I'm Nahuel Rojo, a digital freelancer designer based in Buenos Aires and   a former UTN student. He always available to talk about new opportunities.</h2></div>
      <Redes />
    </section>
    </>
  );
};

export default Home;
