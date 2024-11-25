import { FiSearch } from "react-icons/fi";
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP"/>
      </div>

      <button className="buttonSearch">
        <FiSearch size={25} color="#FFF"/>
      </button>

      <main className="main">
        <h2>CEP: 33236010</h2>

        <span>Rua: teste agum</span>
        <span>Complemento: algum compl</span>
        <span>Bairro: teste bairro</span>
        <span>Estado: teste estado</span>
      </main>

    </div>
  );
}

export default App;
