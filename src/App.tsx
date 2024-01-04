/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Text } from "@chakra-ui/react";
import FirstBox from "./components/firstBox";
import SecondBox from "./components/secondBox";

export const colors = {
  corBackground: "#ffffff",
  corBackgroundSecundaria: "#e5e5e5",
  corPrincipal: "#291569",
  corTextoBasico: "#b1b1b1",
  black: "#000000",
};
function App() {
  const Menu = [
    {
      label: "Certificados",
    },
    {
      label: "Jornalismo",
    },
    {
      label: "Design",
    },
    {
      label: "Contato",
    },
  ];

  return (
    <Flex
      w={"99.2vw"}
      h={"fit-content"}
      shadow={"md"}
      bgColor={"#ffffff"}
      color={colors.corBackground}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Flex
        w={"100%"}
        h={"7.5vh"}
        bgColor={colors.black}
        px={10}
        py={6}
        justifyContent={"flex-end"}
      >
        {Menu.map((item) => (
          <Text color={colors.corBackground} mx={4}>
            {item.label}
          </Text>
        ))}
      </Flex>
      <FirstBox />
      <SecondBox />
    </Flex>
  );
}

export default App;
