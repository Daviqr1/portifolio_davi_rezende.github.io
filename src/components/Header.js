import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";

function WhatsappButton() {
  const numeroTelefone = "55027997602355";

  const handleWhatsappClick = () => {
    const mensagemPreSelecionada = encodeURIComponent("Vim do site");
    const link = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemPreSelecionada}`;
    window.open(link, "_blank");
  };

  function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
      <Stack>
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf={"flex-end"}
        />
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start"
          align={isNotSmallerScreen ? "flex-start" : "center"}
        >
          <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
            <Text fontSize={isNotSmallerScreen ? "5xl" : "3xl"} fontWeight="semibold">
              Olá 👋 Eu Sou
            </Text>
            <Text
              fontSize={isNotSmallerScreen ? "7xl" : "4xl"}
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              Davi Rezende
            </Text>
            <Text color={isDark ? "gray.200" : "gray.500"} fontSize={isNotSmallerScreen ? "xl" : "md"}>
              FullStack Developer
            </Text>
            <Box mt={4}>
              <Button
                onClick={handleWhatsappClick}
                bgGradient="linear(to-r, teal.500, blue.500)"
                _hover={{ bgGradient: "linear(to-r, teal.600, blue.600)" }}
                color="white"
                fontSize={isNotSmallerScreen ? "xl" : "md"}
              >
                Entre em Contato!
              </Button>
            </Box>
          </Box>
          <Box mt={isNotSmallerScreen ? "0" : 12} ml={isNotSmallerScreen ? "12" : "0"}>
            {/* Reduza o tamanho da imagem em dispositivos móveis */}
            <Image
              borderRadius="full"
              backgroundColor="transparent"
              boxShadow="lg"
              boxSize={isNotSmallerScreen ? "250px" : "150px"} // Ajuste o tamanho conforme necessário
              src="https://avatars.githubusercontent.com/u/84293017?v=4"
            />
          </Box>
        </Flex>
      </Stack>
    );
  }

  return <Header />;
}

export default WhatsappButton;
