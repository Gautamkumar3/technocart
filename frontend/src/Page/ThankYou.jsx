import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
  const { name } = useParams();
  return (
    <Box>
      <Heading fontSize={"50px"} textAlign="center" mt={"10%"}>
        Thank you : {name}
      </Heading>
      <Text
        fontSize={"25px"}
        fontWeight="bold"
        textDecor={"underline"}
        textAlign="center"
        mt={7}
        color="blue"
      >
        <Link to="/all_event">Go to all event page</Link>
      </Text>
    </Box>
  );
};

export default ThankYou;
