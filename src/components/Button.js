import React from "react";
import "../styles/Button.css";

function Button({ text, isButtonOnClick, clickHandler }) {
  return (
    <button
      className={isButtonOnClick ? "button-click" : "button-reset"}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;
