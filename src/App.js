import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function FuncTexto(arg) {
  return (
    <div>
      <h1 className="App-title">{arg.title}</h1>
    </div>
  );
}

class ClaseTexto extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">{this.props.title}</h1>
      </div>
    );
  }
}

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
        <ClaseTexto title="Hola desde App" numero={5} />
        <FuncTexto title="Hola desde Func" />
      </header>
    </div>
  );
}

export default App;
