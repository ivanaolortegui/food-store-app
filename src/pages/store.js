import React, { useReducer } from "react";
import { TYPES } from "../actions/ProductAction";
import Cart from "./cart";

import {
  productsReducer,
  productsInitialState,
} from "../reducer/ProductReducer";

const Store = () => {
  const [state, dispatch] = useReducer(productsReducer, productsInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: TYPES.DECREASE_CART, payload: id });
  };
  const removeToCart = (id) => {
    dispatch({ type: TYPES.REMOVE_TO_CART, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const getTotal = () => {
    return cart.reduce((prev, item) => {
      return prev + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="row list-grid">
      <div className="col-12 mb-6">
        <button
          type="button"
          className="btn btn-danger float-right"
          data-toggle="dropdown"
          aria-haspopup="false"
          aria-expanded="false"
        >
          Carrito
        </button>

        <div className="dropdown-menu">
          {cart.map((todo) => (
            <div key={todo.id}>
              <a className="dropdown-item">{todo.name}</a>
              <img src={todo.img} className="w-50" />
              <a className="dropdown-item">Another action</a>
              <a className="dropdown-item">{todo.quantity}</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item">${todo.price}</a>
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
      </div>

      {products.map((todo) => (
        <div key={todo.id} className="list-item col-md-3">
          <div className="card o-hidden mb-3 d-flex flex-column">
            <img src={todo.img} />
            <div className="m-3">
              <h3>{todo.name}</h3>
              <div>Precio ${todo.price}</div>
              <div> Cantidad: {todo.amount}</div>
              <div> {cart[0]?.name}</div>
              <button
                type="button"
                className="w-100 mt-2 btn btn-info"
                onClick={() => addToCart(todo.id)}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
