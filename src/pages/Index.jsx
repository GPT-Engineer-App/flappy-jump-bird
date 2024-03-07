import React, { useState, useEffect } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { FaKiwiBird } from "react-icons/fa";

const Index = () => {
  const [jump, setJump] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Space") {
        setJump(true);
        setTimeout(() => setJump(false), 200); // Reset jump state after 200ms
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <VStack minH="100vh" justify="center" align="center">
      <FaKiwiBird size="5em" color={jump ? "orange" : "green"} />
      <Text fontSize="xl">{jump ? "The bird jumped!" : "Press SPACE to jump"}</Text>
    </VStack>
  );
};

export default Index;
