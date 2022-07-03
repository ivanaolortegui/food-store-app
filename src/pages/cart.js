import React, { useContext } from "react";
import { TYPES } from "../actions/ShoppingAction";
import Button from "../components/atoms/Button/Button";
import Dropdown from "../components/molecules/dropdown";
import ShoppinContext from "../context/Shopping/ShoppingContext";

const Cart = () => {
  const { state, dispatch } = useContext(ShoppinContext);
  const { cart } = state;

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
    <div className="col-12 mb-6">
      <Button />
      <Dropdown
        props={{ cart, addToCart, decrease, removeToCart, clearCart, getTotal }}
      />
    </div>
  );
};

export default Cart;
