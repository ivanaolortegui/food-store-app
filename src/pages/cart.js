import React, { useReducer } from "react";
import { TYPES } from "../actions/ProductAction";
import {
  productsReducer,
  productsInitialState,
} from "../reducer/ProductReducer";

const Cart = () => {
  const [state, dispatch] = useReducer(productsReducer, productsInitialState);
  const { products, cart } = state;
  console.log(cart);
  return (
    <div className="col-12 mb-6">
      <button
        type="button"
        className="btn btn-danger float-right"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Carrito
      </button>

      <div className="dropdown-menu">
        {cart.map((todo) => (
          <div key={todo.id}>
            <a className="dropdown-item">{todo.name}</a>
            <a className="dropdown-item">Another action</a>
            <a className="dropdown-item">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item">Separated link</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
