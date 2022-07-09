import React from "react";
import "./card.css";
const Card = ({ props }) => {
  console.log(props);
  const { products, addToCart } = props;
  return (
    <div className="row list-grid">
      {products.map((product) => (
        <div key={product.id} className="list-item col-md-3">
          <div className="card o-hidden mb-3 d-flex flex-column">
            <img src={product.img} alt={product.name} className="img-product" />
            <div className="m-3">
              <h3>{product.name}</h3>
              <div>Precio ${product.price}</div>
              <div> Cantidad: {product.amount}</div>
              <button
                type="button"
                className="w-100 mt-2 btn btn-inf"
                onClick={() => addToCart(product.id)}
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

export default Card;
