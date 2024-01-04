import { Flex } from "@chakra-ui/react";
import "./firstBox.css";

export default function ThirdBox() {
  return (
    <Flex
      w={"99.2vw"}
      h={{ lg: "94vh", md: "fit-content", sm: "fit-content" }}
      backgroundColor={"#107DAA"}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      color="white"
      textAlign="center"
      display="flex"
      flexDir={"column"}
    ></Flex>
  );
}
