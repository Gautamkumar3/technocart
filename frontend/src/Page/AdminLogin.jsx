import { Box, Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/admin/login", data)
      .then((res) => {
        console.log(res.data);
        if ((res.data.message = "Login successfull")) {
          toast({
            title: `${res.data.message}`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/super_admin/dashboard");
        } else {
          toast({
            title: `Login failed`,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      })
      .catch((er) => {
        toast({
          title: `${er.response?.data.message || "Something went wrong"}`,
          status: `${er.response?.data.status || "error"}`,
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
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
            name="email"
            placeholder="admin email"
            onChange={handleChange}
          />
          <br />
          <br />
          <Input
            type={"text"}
            name="password"
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
