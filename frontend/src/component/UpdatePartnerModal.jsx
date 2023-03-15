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
  updatePartnerToDatabase,
} from "../store/Partner/partner.action";
import { EditIcon } from "@chakra-ui/icons";

const UpdatePartnerModal = ({ id }) => {
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

  function getLink() {
    let name = data.Partner_name;
    let pname = name.split(" ").join("").toLowerCase();
    let Login_link = `${"http://localhost:3000"}/${pname}/login`;
    return Login_link;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updatePartnerToDatabase(id, { ...data, Login_link: getLink() })
    ).then((res) => dispatch(getPartnerData()));
  };

  return (
    <>
      <EditIcon onClick={onOpen} _hover={{ cursor: "pointer" }} h={6} w={6} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update partner form</ModalHeader>
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
                type={"text"}
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
                Update Partner Data
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdatePartnerModal;
