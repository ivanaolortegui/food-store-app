import React, { useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Image,
  IconButton,
  Text,
  AddIcon,
} from "@chakra-ui/react";
import { helpHttp } from "../../helpers/helpHttp";
import { moneyFormat } from "../../helpers/functions";
import "./card.css";

const Card = ({ props }) => {
  let url = "https://62be3a6bbe8ba3a10d4fb1c5.mockapi.io/api/v1/products";

  const { products, addToCart, setData } = props;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => setData(res));
  }, [url]);

  return (
    <SimpleGrid minChildWidth="250px" spacing="40px">
      {products.map((product) => (
        <Box
          key={product.id}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Image boxSize="100px" src={product.img} alt={product.name} />
              <Box>
                <Text fontWeight="medium" fontSize="18px">
                  {product.name}
                </Text>
                <Text fontWeight="normal">{product.amount} und.</Text>
                <Text fontWeight="bold">${moneyFormat(product.price)}</Text>
              </Box>
              <IconButton
                aria-label="Add to car"
                variant="outline"
                colorScheme="gray"
                fontSize="10px"
                icon={<AddIcon />}
                onClick={() => addToCart(product.id)}
              />
            </Box>
            <div className="mx-3"></div>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Card;
