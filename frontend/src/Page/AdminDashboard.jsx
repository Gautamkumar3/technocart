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
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminTable from "../component/AdminTable";
import CreatepartnerModal from "../component/CreatepartnerModal";
import Pagination from "../component/Pagination";
import { getPartnerData } from "../store/Partner/partner.action";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { data, length } = useSelector((store) => store.partner);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  console.log(length);

  useEffect(() => {
    dispatch(getPartnerData(page, limit));
  }, [page, limit]);

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
      <Center my="3%">
        <Pagination
          total={Math.ceil(length / limit)}
          current={page}
          changePage={setPage}
        />
      </Center>
    </Box>
  );
};

export default AdminDashboard;
