import React, { useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import "./card.css";
const Card = ({ props }) => {
  let url = "https://62be3a6bbe8ba3a10d4fb1c5.mockapi.io/api/v1/products";

  const { products, addToCart, setData } = props;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, [url]);

  return (
    <div className="row list-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="list-item col-lg-3 col-6 col-md-4 col-sm-6"
        >
          <div className="card o-hidden mb-3 d-flex flex-column">
            <div className="d-flex align-items-center justify-content-around">
              <div>
                <h3 className="title-product">{product.name}</h3>

                <div className="amount">{product.amount}und.</div>
                <div className="price"> ${product.price}</div>
              </div>
              <img
                src={product.img}
                alt={product.name}
                className="img-products"
              />
            </div>
            <div className="mx-3">
              <button
                type="button"
                className="w-100 my-2 btn  btn-add"
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
