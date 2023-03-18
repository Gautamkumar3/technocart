import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Timer from "../component/Timer";

const PartnerLogin = () => {
  const { name } = useParams();

  const [pindata, setPinData] = useState("");
  const [emaildata, setEmaildata] = useState("");
  const [toogle, setToogle] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handlePinInput = (e) => {
    setPinData(e);
  };

  const handleChange = (e) => {
    setEmaildata(e.target.value);
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    await axios
      .post("https://technocart-api-production.up.railway.app/partner/login", {
        email: emaildata,
      })
      .then((res) => {
        console.log(res);
        if (res.data.msg === "Login successfull") {
          toast({
            title: `you are successfully resigtered and otp has been send to your email id ${emaildata}`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });

          setEmaildata("");
          setToogle(true);
        }
      })
      .catch((er) =>
        toast({
          title: "This email is not resistered",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        })
      );
  };

  const verifyOtp = async () => {
    axios
      .post("https://technocart-api-production.up.railway.app/otp", {
        otp: pindata,
      })
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.setItem("partner", "partner login success");
        if (res.data.status === "success") {
          toast({
            title: `OTP verified you are redirected to add_event page`,
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setToogle(false);
          navigate(`/${name}/add_event`);
        } else {
          toast({
            title: `OTP is not correct please fill it again`,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }
      })
      .catch((er) => {
        console.log(er);
        toast({
          title: `${er.response.data.msg || er.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
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
            <Box my={3}>
              <Timer />
            </Box>

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
