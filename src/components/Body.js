import React from "react";

export function Body(arg) {
  return (
    <div>
      <h1 className="App-title">{arg.title}</h1>
    </div>
  );
}

export function Body2(arg) {
  return (
    <div>
      <h1 className="App-title">{arg.title} 2</h1>
    </div>
  );
}

// export default Body;
// Necesario para enviar el componente
