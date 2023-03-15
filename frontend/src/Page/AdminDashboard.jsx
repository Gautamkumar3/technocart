import { Box, Button, Center, Heading } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTable from "../component/AdminTable";
import CreatepartnerModal from "../component/CreatepartnerModal";
import { getPartnerData } from "../store/Partner/partner.action";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.partner);

  useEffect(() => {
    dispatch(getPartnerData());
  }, []);

  return (
    <Box>
      <Heading textAlign={"center"} mt="2%">
        Admin Dashboard
      </Heading>
      <Center>
        <CreatepartnerModal />
      </Center>

      <TableContainer w={"80%"} m="auto">
        <Table variant="striped" colorScheme="teal">
          <Thead background={"whatsapp.200"} h="60px">
            <Tr>
              <Th>SL No</Th>
              <Th>Partner Name</Th>
              <Th>Email</Th>
              <Th>Login Link</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            <AdminTable data={data} />
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminDashboard;
