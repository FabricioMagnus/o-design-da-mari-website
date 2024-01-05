import { Flex, Image, Text } from "@chakra-ui/react";
import "./firstBox.css";
import "../styles.css";
import CustomSwiper from "./swipper/swipper";

export default function SecondBox() {
  const Images = [
    {
      src: "./certificados/edicao-video.jpg",
      alt: "edicao-video",
    },
    {
      src: "./certificados/entrando-jogo.jpg",
      alt: "entrando-jogo",
    },
    {
      src: "./certificados/wordpress.jpg",
      alt: "wordpress",
    },
    {
      src: "./certificados/copy.jpg",
      alt: "copy",
    },
  ];

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
        <Text ml={"10%"} fontFamily={""} fontSize={"5xl"} color={"black"}>
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
          <Flex w={"60%"} h={"90%"} bgColor={"black"}>
            <CustomSwiper>
              {Images.map((image, index) => (
                <Image key={index} src={image.src} alt={image.alt} />
              ))}
            </CustomSwiper>
          </Flex>
        </Flex>
        <Flex w={"100%"} h={"15%"}></Flex>
      </Flex>
    </Flex>
  );
}
