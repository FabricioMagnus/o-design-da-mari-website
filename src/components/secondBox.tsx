import { Flex, Image, Text } from "@chakra-ui/react";
import "./firstBox.css";
import "../styles.css";
import CustomSwiper from "./swipper/swipper";
import React from "react";

export default function SecondBox() {
  const [page, setPage] = React.useState(0);

  const Images = [
    {
      src: "./certificados/edicao-video.jpg",
      alt: "edicao-video",
      id: 1,
      text: "",
    },
    {
      src: "./certificados/entrando-jogo.jpg",
      alt: "entrando-jogo",
      id: 2,
      text: "Curso de Entrando no Jogo da plataforma Udemy",
    },
    {
      src: "./certificados/wordpress.jpg",
      alt: "wordpress",
      id: 3,
      text: "Curso de WordPress da plataforma Udemy",
    },
    {
      src: "./certificados/copy.jpg",
      alt: "copy",
      id: 4,
      text: "Curso de Copy da plataforma Udemy",
    },
    {
      src: "./certificados/copy-ini.jpg",
      alt: "copy-ini",
      id: 5,
      text: "Curso de Copy Iniciante da plataforma Udemy",
    },
  ];

  console.log("page", page);

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
            <CustomSwiper setPage={setPage}>
              {Images.map((image, index) => (
                <Image key={index} src={image.src} alt={image.alt} />
              ))}
            </CustomSwiper>
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          h={"15%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontFamily={""}
            fontSize={"3xl"}
            color={"black"}
            textAlign={"center"}
          >
            {Images.find((image) => image.id === page)?.text}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
