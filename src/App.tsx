import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import './media.css'

function App() {
  return (
    <div className="App">
      <body>
        <div className="barra" />
        <Navbar />
        <Home />
      </body>
    </div>
  );
}

export default App;
