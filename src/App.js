import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Body, Body2 } from "./components/Body"; // para importar multiples componeentes sin default
import Counter from "./components/Counter";

/* Modo de Componente declarado de forma como Clase
class ClaseTexto extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">{this.props.title}</h1>
      </div>
    );
  }
}
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Body title="Hola desde Func" />
      <Body2 title="Hola desde Func" />
      <Counter />
    </div>
  );
}

export default App;
