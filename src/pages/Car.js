import React, { useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { TYPES } from "../actions/ShoppingAction";
import CarButtons from "../components/atoms/Button/Button";
import CarButton from "../components/atoms/CarButton";
import CarDrawer from "../components/molecules/CarDrawer";
import Dropdown from "../components/molecules/Dropdown";
import PopoverCar from "../components/molecules/popoverCar/PopoverCar";
import ShoppinContext from "../context/Shopping/ShoppingContext";

const Car = () => {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
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
    <>
      {/*  <CarButtons /> */}
      <CarButton props={{ btnRef, onOpen, isOpen }} />
      <CarDrawer
        props={{
          btnRef,
          isOpen,
          onClose,
          cart,
          addToCart,
          decrease,
          removeToCart,
          clearCart,
          getTotal,
        }}
      />
      {/*    <PopoverCar
        props={{ cart, addToCart, decrease, removeToCart, clearCart, getTotal }}
      /> */}
      {/*   <Dropdown
        props={{ cart, addToCart, decrease, removeToCart, clearCart, getTotal }}
      /> */}
    </>
  );
};

export default Car;
