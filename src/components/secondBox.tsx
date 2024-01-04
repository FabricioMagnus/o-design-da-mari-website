import { Flex, Text } from "@chakra-ui/react";
import "./firstBox.css";
import "../styles.css";

export default function SecondBox() {
  return (
    <Flex
      w={"99.2vw"}
      h={{ lg: "94vh", md: "fit-content", sm: "fit-content" }}
      backgroundColor={"#BF1266"}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      color="white"
      textAlign="center"
      display="flex"
      flexDir={"column"}
    >
      <Flex w={"100%"} h={"10%"} alignItems={"center"}>
        <Text
          ml={"10%"}
          fontFamily={"FingerPaint"}
          fontSize={"5xl"}
          color={"black"}
        >
          Certificados e Formações
        </Text>
      </Flex>
      <Flex w={"100%"} h={"90%"} flexDir={"column"}>
        <Flex
          w={"100%"}
          h={"85%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex w={"60%"} h={"90%"} bgColor={"black"}></Flex>
        </Flex>
        <Flex w={"100%"} h={"15%"}></Flex>
      </Flex>
    </Flex>
  );
}
