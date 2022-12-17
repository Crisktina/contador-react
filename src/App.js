import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import logo from "./images/logo.png";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const clickHandler = () => {
    setNumClicks(numClicks + 1);
  };

  const clickReset = () => {
    setNumClicks(0);
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Counter numClicks={numClicks} />
        <Button
          text="Click"
          isButtonOnClick={true}
          clickHandler={clickHandler}
        />
        <Button
          text="Reset"
          isButtonOnClick={false}
          clickHandler={clickReset}
        />
      </div>
    </div>
  );
}

export default App;
