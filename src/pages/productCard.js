import React, { useContext } from "react";
import { TYPES } from "../actions/ShoppingAction";
import Card from "../components/molecules/Card";

import ShoppinContext from "../context/Shopping/ShoppingContext";

const ProductCard = () => {
  const { state, dispatch } = useContext(ShoppinContext);

  const { products } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const setData = (data) => {
    dispatch({ type: TYPES.READ_ALL_DATA, payload: data });
  };
  return <Card props={{ products, addToCart, setData }} />;
};

export default ProductCard;
