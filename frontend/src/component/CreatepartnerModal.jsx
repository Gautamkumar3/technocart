import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  addPartnerToDatabase,
  getPartnerData,
} from "../store/Partner/partner.action";

const CreatepartnerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({
    Partner_name: "",
    Partner_email: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPartnerToDatabase(data)).then((res) =>
      dispatch(getPartnerData())
    );
  };

  return (
    <>
      <Button colorScheme={"whatsapp"} my="2%" onClick={onOpen}>
        Create Partner
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create partner form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Input
                type={"text"}
                name="Partner_name"
                placeholder="Partner name"
                onChange={handleChange}
              />
              <br />
              <br />
              <Input
                type={"email"}
                placeholder="Partner email"
                name="Partner_email"
                onChange={handleChange}
              />
              <br />
              <br />
              <Button
                type="submit"
                colorScheme={"whatsapp"}
                w="full"
                onClick={onClose}
              >
                Create Partner
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatepartnerModal;
