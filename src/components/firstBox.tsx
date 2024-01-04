import { Flex, Image, Text } from "@chakra-ui/react";
import "./firstBox.css";
import { colors } from "../App";

export default function FirstBox() {
  return (
    <Flex
      w={"100%"}
      h={"95vh"}
      backgroundColor={"#000"}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      color="white"
      textAlign="center"
      display="flex"
      flexDir={"column"}
    >
      <Flex w={"100%"} height={"25%"}>
        <Image src={"./logo-design-mari.png"} ml={"5%"} />
      </Flex>
      <Flex w={"100%"} height={"75%"}>
        <Flex w={"60%"} h={"100%"} p={12}>
          <Text
            color={colors.corBackground}
            fontSize={"3xl"}
            my={6}
            fontFamily="Century Gothic"
          >
            Prazer! Eu me chamo Mariana, mas pode me chamar de Mari. Estou
            próxima da casa dos 30, e me encontrei no ramo profissional, mais
            especificamente na área de criação. Apesar da pouca experiência, eu
            já fiz de tudo um pouco nessa vida. Me encontrei no ramo do design
            como uma forma de expressar e extravasar minha criatividade.
            Atualmente, curso produção audiovisual, e cursei alguns semestres de
            jornalismo. Unindo duas paixões que tenho na vida profissional: a
            arte de comunicar e ilustrar a história contada.
          </Text>
        </Flex>
        <Flex w={"40%"} h={"100%"} bgColor={"yellow"}></Flex>
      </Flex>
    </Flex>
  );
}
