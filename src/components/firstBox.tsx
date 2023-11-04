import { Flex } from "@chakra-ui/react";
import "./firstBox.css";

export default function FirstBox() {
  return (
    <Flex
      w={"100%"}
      h={"95vh"}
      backgroundImage="url(./24.jpg)"
      backgroundSize="cover"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      color="white"
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    ></Flex>
  );
}
