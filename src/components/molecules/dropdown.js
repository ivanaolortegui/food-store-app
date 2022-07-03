import React from "react";

const Dropdown = ({ props }) => {
  const { cart, addToCart, decrease, removeToCart, clearCart, getTotal } =
    props;
  return (
    <div className="dropdown-menu">
      {cart.map((todo) => (
        <div key={todo.id}>
          <div className="dropdown-item">{todo.name}</div>
          <img src={todo.img} alt={todo.name} className="w-50" />

          <div className="dropdown-item">{todo.quantity}</div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item">${todo.price}</div>
          <button
            className=" mt-2 btn btn-info"
            onClick={() => addToCart(todo.id)}
          >
            +
          </button>
          <button
            className=" mt-2 btn btn-info"
            onClick={() => decrease(todo.id)}
          >
            -
          </button>
          <button
            className=" mt-2 btn btn-info"
            onClick={() => removeToCart(todo.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <button className=" mt-2 btn btn-info" onClick={() => clearCart()}>
        Vaciar
      </button>
      <div>Total {getTotal()}</div>
    </div>
  );
};

export default Dropdown;
