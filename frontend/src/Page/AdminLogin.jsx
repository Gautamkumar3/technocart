import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:8080/admin/login", data)
      .then((res) => {
        if ((res.data.msg = "Login successfull")) {
          alert("Login successfull");
          localStorage.setItem("email", JSON.stringify(data.email));
          navigate("/super_admin/dashboard");
        } else {
          alert("Login failed");
        }
      })
      .catch((er) => {
        alert("Login failed");
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
