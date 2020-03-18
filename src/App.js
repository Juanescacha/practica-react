import React from "react";
//import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//importamos el otro archivo para que lo pueda usar en este archivo
import { Body, Body2 } from "./components/Body"; // para importar multiples componeentes sin default

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
    </div>
  );
}

export default App;
