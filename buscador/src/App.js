import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">BUSCADOR DE CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite aqui..." size={15} />
        <button className="buttonSearch"><FiSearch size={15} color='#f1f1f1'/></button>
      </div>
    </div>
  );
}

export default App;
