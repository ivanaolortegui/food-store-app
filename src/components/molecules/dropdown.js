import React from "react";
import "./dropdown.css";
const Dropdown = ({ props }) => {
  const { cart, addToCart, decrease, removeToCart, clearCart, getTotal } =
    props;
  return (
    <div className="dropdown-menu">
      {cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <div key={product.id}>
              <div className="d-flex">
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-product"
                />
                <div>
                  <div className="dropdown-item">{product.name}</div>

                  <div className="dropdown-item">{product.quantity}</div>

                  <div className="dropdown-item">${product.price}</div>
                </div>
              </div>
              <div className="d-flex mt-2">
                <button
                  className=" btn btn-info"
                  onClick={() => decrease(product.id)}
                >
                  -
                </button>
                <input type="number" value={product.quantity} />

                <button
                  className="  btn btn-info"
                  onClick={() => addToCart(product.id)}
                >
                  +
                </button>
              </div>
              <button
                className=" mt-2 btn btn-info"
                onClick={() => removeToCart(product.id)}
              >
                Eliminar
              </button>
              <div className="dropdown-divider"></div>
            </div>
          ))}
          <button className=" mt-2 btn btn-info" onClick={() => clearCart()}>
            Vaciar
          </button>
          <div>Total ${getTotal()}</div>
        </>
      ) : (
        <div> Tu carro está vacío</div>
      )}
    </div>
  );
};

export default Dropdown;
