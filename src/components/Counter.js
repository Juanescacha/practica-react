import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0
    };
  }

  manejoClickBoton = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <div>
        <div>Contador: {this.state.contador}</div>
        <button onClick={this.manejoClickBoton}>increment</button>
      </div>
    );
  }
}
