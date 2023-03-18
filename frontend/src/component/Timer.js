import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Timer = (time = 200) => {
  const [count, setCount] = useState(120);
  const [expire, setExpire] = useState(false);

  useEffect(() => {
    let id = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(id);
          setExpire(true);
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box>
      {expire ? (
        <Text color={"red.500"}>OTP expiered.</Text>
      ) : (
        <Text color={"green.500"}>
          Your otp will expires in {count} seconds.
        </Text>
      )}
    </Box>
  );
};

export default Timer;
