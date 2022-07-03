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

  return <Card props={{ products, addToCart }} />;
};

export default ProductCard;
