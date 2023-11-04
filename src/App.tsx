/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from "@chakra-ui/react";
import FirstBox from "./components/firstBox";
import SecondBox from "./components/secondBox";

export const colors = {
  corBackground: "#ffffff",
  corBackgroundSecundaria: "#e5e5e5",
  corPrincipal: "#291569",
};
function App() {
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
      <Flex w={"100%"} h={"7.5vh"} bgColor={colors.corBackground}></Flex>
      <FirstBox />
      <SecondBox />
    </Flex>
  );
}

export default App;
