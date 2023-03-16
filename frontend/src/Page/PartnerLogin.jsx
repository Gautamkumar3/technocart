import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PartnerLogin = () => {
  const { name } = useParams();

  const [pindata, setPinData] = useState("");
  const [emaildata, setEmaildata] = useState("");
  const navigate = useNavigate();

  const handlePinInput = (e) => {
    setPinData(e);
  };

  const handleChange = (e) => {
    setEmaildata(e.target.value);
  };

  const handleOTP = async () => {
    console.log(emaildata);
    await axios
      .post("http://localhost:8080/partner/login", { email: emaildata })
      .then((res) => {
        if (res.data === "Login successfull") {
          alert("you are successfully login and your otp is 12345");
          setEmaildata("");
        }
      })
      .catch((er) => alert("This email is not resistered"));
  };

  const verifyOtp = () => {
    if (pindata === "12345") {
      navigate(`/${name}/add_event`);
    }
  };

  return (
    <Flex justify={"center"} w="100vw">
      <Box w="30%" boxShadow="md" p="6" rounded="md" bg="white">
        <Heading my={3}>Partner login</Heading>
        <Input
          type="email"
          placeholder="email"
          onChange={handleChange}
          value={emaildata}
        />
        <Button colorScheme={"blue"} my={2} onClick={handleOTP}>
          Send OTP
        </Button>
        <Box>
          <PinInput otp onChange={handlePinInput}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <br />
          <Button colorScheme={"blue"} my={2} onClick={verifyOtp}>
            Verify OTP
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default PartnerLogin;
