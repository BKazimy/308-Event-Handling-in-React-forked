import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("White");

  function mouseOver() {
    setBgColor("black");
    console.log("moused over");
  }

  function mouseOut() {
    setBgColor("white");
    console.log("moused out");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: bgColor }}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
