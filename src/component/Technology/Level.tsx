import "./Level.css";

const Level = ({ icon, porcent, name }: any) => {

  let objet;

  if (window.matchMedia("(max-width: 935px)").matches) {
     objet = { width: `calc(80vw * 0.${porcent})` }
  }else{ objet = { width: `calc(45em * 0.${porcent})` }}
  
  return (
    <>
      <div className="conteinerLevel">
        <div className="icon">{icon}</div>
        <div className="level">
          <div style={objet} className="levelOrange">
            <h5 className="nameApp">{name}</h5>
          </div>
        </div>
        <h5 className="porcent">% {porcent}</h5>
      </div>
    </>
  );
};

export default Level;
