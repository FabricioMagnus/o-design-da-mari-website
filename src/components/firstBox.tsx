import { Flex, Image, Text } from "@chakra-ui/react";
import "./firstBox.css";
import { colors } from "../App";

export default function FirstBox() {
  return (
    <Flex
      w={"100%"}
      h={{ lg: "94vh", md: "fit-content", sm: "fit-content" }}
      backgroundColor={"#000"}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      color="white"
      textAlign="center"
      display="flex"
      flexDir={"column"}
    >
      <Flex
        w={{ lg: "100%", md: "40%", sm: "40%" }}
        height={{ lg: "25%", md: "20vh", sm: "20vh" }}
      >
        <Image src={"./logo-design-mari.png"} ml={"10%"} />
      </Flex>
      <Flex
        w={"100%"}
        height={"75%"}
        flexDir={{ lg: "row", md: "column-reverse", sm: "column-reverse" }}
      >
        <Flex
          w={{ lg: "50%", md: "100%", sm: "100%" }}
          h={{ lg: "100%", md: "40vh", sm: "40vh" }}
          p={10}
        >
          <Text
            color={colors.corBackground}
            fontSize={{ lg: "xl", md: "md", sm: "sm" }}
            my={"auto"}
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
        <Flex
          w={{ lg: "50%", md: "100%", sm: "100%" }}
          h={{ lg: "100%", md: "40vh", sm: "40vh" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            w={{ lg: "500px", md: "400px", sm: "400px" }}
            h={{ lg: "500px", md: "400px", sm: "400px" }}
            justifyContent={"center"}
            bgColor={"#EF9908"}
            borderRadius={"50%"}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
