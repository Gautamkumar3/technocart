import { Image, Td, Tr } from "@chakra-ui/react";
import React from "react";

const EventTable = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((event, i) => (
        <Tr key={event._id}>
          <Td>{i + 1}</Td>
          <Td>
            <Image h="50px" src={event.Event_photo} />
          </Td>
          <Td>{event.Event_name}</Td>
          <Td>{event.Country}</Td>
          <Td>{event.State}</Td>
          <Td>{event.City}</Td>
          <Td>{event.Pincode}</Td>
        </Tr>
      ))}
    </>
  );
};

export default EventTable;
