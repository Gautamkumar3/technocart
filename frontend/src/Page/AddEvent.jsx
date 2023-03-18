import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEvent = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [data, setData] = useState({
    Event_name: "",
    Country: "",
    State: "",
    City: "",
    Pincode: "",
    Event_photo: "",
  });
  const toast = useToast();
  const { name } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/event", { ...data, Event_photo: imageUrl })
      .then((res) => {
        toast({
          title: "Event created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        navigate(`/${name}/thankyoupage`);
      })
      .catch((er) => {
        toast({
          title: `${er.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const convertImageToUrl = (imageUrl) => {
    if (imageUrl === undefined) {
      toast({
        title: "Please seclect an Image!",
        description: "wraning",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    } else {
      const data = new FormData();
      data.append("file", imageUrl);
      data.append("upload_preset", "Gk-chat");
      data.append("cloud_name", "dbojqn7mx");
      fetch("https://api.cloudinary.com/v1_1/dbojqn7mx/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImageUrl(data.url.toString());
          console.log(data.url.toString());
          return;
        })
        .catch((er) => {
          console.log(er);
        });
    }
  };

  const title = "";

  return (
    <Box>
      <Heading textAlign={"center"} my="3%" color="whatsapp.600">
        Event Form
      </Heading>
      <Flex
        boxShadow="md"
        p="6"
        rounded="md"
        textAlign={"left"}
        align="center"
        justify="center"
        w={["90%", "50%"]}
        m={"auto"}
      >
        <form onSubmit={handleSubmit}>
          <Text fontSize={"20px"} fontWeight="500">
            Partner Name : {name}
          </Text>
          <FormControl isRequired>
            <Input
              my={2}
              value={data.Event_name}
              placeholder="Event Name"
              name="Event_name"
              onChange={handleChange}
            />

            <Select
              value={data.Country}
              placeholder="Select Country"
              name="Country"
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Nepal">Nepal</option>
            </Select>
            <Input
              value={data.State}
              my={2}
              placeholder="State"
              name="State"
              onChange={handleChange}
            />
            <Input
              placeholder="City"
              name="City"
              onChange={handleChange}
              value={data.City}
            />
            <Input
              my={2}
              placeholder="Pincode"
              name="Pincode"
              onChange={handleChange}
              value={data.Pincode}
            />

            <input
              type="file"
              name="Event_photo"
              onChange={(e) => convertImageToUrl(e.target.files[0])}
            />
            <Button
              backdropBlur="2px"
              isDisabled={imageUrl == null}
              mt={5}
              colorScheme="blue"
              w="full"
              type="submit"
            >
              Add Event
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Box>
  );
};

export default AddEvent;
