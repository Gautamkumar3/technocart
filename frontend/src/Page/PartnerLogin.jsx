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
  const [toogle, setToogle] = useState(false);
  const navigate = useNavigate();

  const handlePinInput = (e) => {
    setPinData(e);
  };

  const handleChange = (e) => {
    setEmaildata(e.target.value);
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/partner/login", { email: emaildata })
      .then((res) => {
        if (res.data.msg === "Login successfull") {
          alert(
            `you are successfully resigtered and otp has been send to your email id ${emaildata}`
          );
          setEmaildata("");
          setToogle(true);
        }
      })
      .catch((er) => alert("This email is not resistered"));
  };

  const verifyOtp = async () => {
    axios
      .post("http://localhost:8080/otp", { otp: pindata })
      .then((res) => {
        if (res.data.status === "success") {
          setToogle(false);
          navigate(`/${name}/add_event`);
        } else {
          alert("Something went worng");
        }
      })
      .catch((er) => {
        alert(er.message);
      });
  };

  return (
    <Flex justify={"center"} w="100vw" mt={"10%"}>
      <Box w="30%" boxShadow="md" p="6" rounded="md" bg="white">
        <Heading my={3}>Partner login</Heading>
        {!toogle && (
          <form onSubmit={handleOTP}>
            <Input
              type="email"
              placeholder="email"
              onChange={handleChange}
              value={emaildata}
            />
            <Button colorScheme={"blue"} my={2} type="submit">
              Send OTP
            </Button>
          </form>
        )}

        {toogle && (
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
        )}
      </Box>
    </Flex>
  );
};

export default PartnerLogin;
