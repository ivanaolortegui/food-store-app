import { useReducer } from "react";
import ShoppinContext from "./ShoppingContext";
import ProductReducer, { initialState } from "./ProductReducer";

export const ShoppinProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  return (
    <ShoppinContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppinContext.Provider>
  );
};
