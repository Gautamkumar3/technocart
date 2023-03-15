import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Flex justify={"center"} align="center" h="80vh" gap={15}>
        <Link to="/super_admin/login">
          <Button
            colorScheme={"whatsapp"}
            p={8}
            fontSize="25px"
            border="2px"
            _hover={{
              background: "#fff",
              border: "2px solid green",
              color: "green",
            }}
          >
            Super Admin Login
          </Button>
        </Link>
        <Link to="/super_admin/login">
          <Button
            colorScheme={"whatsapp"}
            p={8}
            fontSize="25px"
            border="2px"
            _hover={{
              background: "#fff",
              border: "2px solid green",
              color: "green",
            }}
          >
            Partner Login
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Home;
