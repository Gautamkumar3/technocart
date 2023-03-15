import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const ThankYou = () => {
  const { name } = useParams();
  return (
    <Box>
      <Heading fontSize={"50px"} textAlign="center" mt={"10%"}>
        Thank you : {name}
      </Heading>
    </Box>
  );
};

export default ThankYou;
