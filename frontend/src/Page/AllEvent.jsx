import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
import EventTable from "../component/EventTable";

const getEvents = async () => {
  let res = await axios.get(
    "https://technocart-api-production.up.railway.app/event"
  );
  return res.data;
};

const AllEvent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEvents().then((res) => setData(res.data));
  }, []);

  return (
    <Box>
      <Heading textAlign={"center"} my={5}>
        All Events data
      </Heading>
      <TableContainer w={"80%"} m="auto">
        <Table variant="striped" colorScheme="">
          <Thead background={"whatsapp.200"} h="60px">
            <Tr>
              <Th>SL No</Th>
              <Th>Event Image</Th>
              <Th>Event Name</Th>
              <Th>Country</Th>
              <Th>State</Th>
              <Th>City</Th>
              <Th>Pincode</Th>
            </Tr>
          </Thead>
          <Tbody>
            <EventTable data={data} />
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllEvent;
