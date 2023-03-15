import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React from "react";
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

const AdminDashboard = () => {
  return (
    <Box>
      <Heading textAlign={"center"} mt="2%">
        Admin Dashboard
      </Heading>
      <Center>
        <Button colorScheme={"whatsapp"} my="2%">
          Create Partner
        </Button>
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
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminDashboard;
