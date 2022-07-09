import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <button
      type="button"
      className="btn button-cart float-right"
      data-toggle="dropdown"
      aria-haspopup="false"
      aria-expanded="false"
    >
      Carrito
    </button>
  );
};

export default Button;
