import { Flex, Image, Text } from "@chakra-ui/react";
import "./firstBox.css";
import { colors } from "../App";

export default function SecondBox() {
  return (
    <Flex
      w={"100%"}
      h={"80vh"}
      backgroundColor={colors.corBackgroundSecundaria}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      flexDir={{ base: "column", md: "row" }}
      p={10}
      justifyContent={{ base: "center", md: "space-evenly" }}
    >
      <Flex w={"48%"} h={"100%"} justifyContent={"center"}>
        <Image src={"./3289652.png"} w={"70%"} h={"90%"} />
      </Flex>
      <Flex
        w={"40%"}
        h={"100%"}
        justifyContent={"space-evenly"}
        alignItems={"flex-start"}
        flexDir={"column"}
        p={20}
      >
        <Text fontWeight={"bold"}>Sobre Nós</Text>
        <Text>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui oficia deserunt mollit anim id est laborum.
        </Text>
        <Text>
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </Text>
      </Flex>
    </Flex>
  );
}
