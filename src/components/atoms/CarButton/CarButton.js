import React from "react";
import { Icon, Button } from "@chakra-ui/react";

const CarButton = ({ props }) => {
  const { btnRef, onOpen } = props;
  return (
    <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
      <Icon viewBox="0 0 24 24" width="8" height="8" fill="none">
        <path
          fill="#FFFFFF"
          d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.67-1.43a.993.993 0 00-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
        />
      </Icon>
    </Button>
  );
};

export default CarButton;
