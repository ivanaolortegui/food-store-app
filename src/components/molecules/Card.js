import { Box, SimpleGrid, Image, IconButton } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import React, { useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import "./card.css";
const Card = ({ props }) => {
  let url = "https://62be3a6bbe8ba3a10d4fb1c5.mockapi.io/api/v1/products";

  const { products, addToCart, setData } = props;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => setData(res));
  }, [url]);

  const moneyFormat = (money) => {
    return money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  
  
  return (
   /*  <div className="row list-grid">
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
    </div> */
    <SimpleGrid minChildWidth='250px' spacing='40px'>
      {products.map((product) => (
        <Box
          key={product.id}
          maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'
        >
          <div>
            <div className="d-flex align-items-center justify-content-evenly">
            <Image
               boxSize='100px'
                src={product.img}
                alt={product.name}
               
              />
              <div>
                <h3 className="title-product">{product.name}</h3>
                <div className="amount">{product.amount}und.</div>
                <div className="price"> ${moneyFormat(product.price)}</div>
              </div>
              <IconButton aria-label='Add to friends'  borderRadius='full' icon={<AddIcon/>} onClick={() => addToCart(product.id)} />
            </div>
            <div className="mx-3">
             
            </div>
          </div>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Card;
