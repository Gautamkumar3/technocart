import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const AdminLogin = () => {
  const [data, setData] = useState({
    Partner_name: "",
    Partner_email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Flex justify={"center"} mt="5%">
      <Box w="30%" boxShadow="md" p="6" rounded="md" bg="white">
        <Heading textAlign={"center"} my={5}>
          Admin login form
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            type={"email"}
            name="admin-email"
            placeholder="admin email"
            onChange={handleChange}
          />
          <br />
          <br />
          <Input
            type={"text"}
            name="admin-passowrd"
            placeholder="admin password"
            onChange={handleChange}
          />
          <br />
          <br />
          <Button type="submit" colorScheme={"whatsapp"} w="full">
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default AdminLogin;
