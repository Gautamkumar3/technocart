import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Td, Tr, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deletePartnerToDatabase,
  getPartnerData,
} from "../store/Partner/partner.action";
import UpdatePartnerModal from "./UpdatePartnerModal";

const AdminTable = ({ data }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (id) => {

    dispatch(deletePartnerToDatabase(id))
      .then((res) => {
         console.log(res);
        dispatch(getPartnerData());
        if (res.message === "success") {
              toast({
                title: `Partner deleted successfully`,
                status: "success",
                duration: 5000,
                position: "top",
                isClosable: true,
              });
        } else {
            toast({
              title: `${res.response.data || "Something went wrong"}`,
              status: "error",
              duration: 5000,
              position: "top",
              isClosable: true,
            });
        }
    
      })
     
  };

  return (
    <>
      {data.map((partner, i) => (
        <Tr key={partner._id}>
          <Td>{i + 1}</Td>
          <Td>{partner?.Partner_name}</Td>
          <Td>{partner?.Partner_email}</Td>
          <Td color={"blue"}>
            <Link to={`${partner?.Login_link}`}>{partner?.Login_link}</Link>
          </Td>
          <Td>
            <UpdatePartnerModal id={partner._id} />
          </Td>
          <Td>
            <DeleteIcon
              _hover={{ cursor: "pointer" }}
              h={6}
              w={6}
              onClick={() => handleDelete(partner._id)}
            />
          </Td>
        </Tr>
      ))}
    </>
  );
};

export default AdminTable;
