import { ChakraProvider, Flex, VStack, Heading, IconButton, HStack, Spacer, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";
import Header from "./components/Header";
import Social from "./components/Social";
import Sosocial from "./components/Sosocial";
import Lg from "./components/Lg";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { chakra } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
import {motion} from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const imagemFundoClaro =
    "https://s3-alpha-sig.figma.com/img/54e9/61b6/41e92d216dd4e7953fdcb77fb1a4c39a?Expires=1701648000&Signature=FWuJEWxEZpG6FadQ67jExcnSYS8-FbwUY8KtuViBmMEs9QG8pW2BewJNjqJCaIVxXKcBrx1Asobm58eeHgqxEXc3au5afqRdktFqerweRPZBcKtSaBf9qx4Cd~b5jKSYLxxwL3sTWH7uI0EvxuvPON4FSceBItuZREnuFuO5PCGWJLNfWMcVvI0djlXMD9z0933B5J818dnQ1gj4xmPY-JbMu1Bli7Ec-KH6F6OF75G36Lc5wzoDvLnVuQ4RVVSHxG1JvAd4ZNZXUF1ix7BQGyTLK4S6HO~3HW3pSorcaHSGVwbKQj4t4RvtQSinhWetUq0ib0~H~XPtBPo1Hs0Maw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  

  const perfilInstagram = "https://www.instagram.com/davi_b.rezende/";

  const redirecionarParaInstagram = () => {
    window.open(perfilInstagram, "_blank");
  };
  const PerfilLinkedin = "https://www.linkedin.com/in/davi-barros-de-rezende-09540b222/";
  const redirecionarParaLinkedin = () => {
    window.open(PerfilLinkedin, "_blank");
  }
  const PerfilGithub = "https://github.com/Daviqr1"
  const redirecionarParaGithub = () => {
    window.open(PerfilGithub, "_blank");
  }
  const redirecionarParaProfile = () => {
    const profileSection = document.getElementById("Profile-section");
  
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const redirecionarParaHome = () => {
    const profileSection = document.getElementById("Home-section");
  
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const redirecionarParaSocial = () => {
    const profileSection = document.getElementById("Social-section");
  
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ChakraProvider>
      <VStack p={5}>
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Heading size="md" fontWeight="semibold" color="cyan.400">
            Davi Rezende
          </Heading>
          <HStack spacing={10}>
            <chakra.a href="#" onClick={redirecionarParaHome}>
              Home
            </chakra.a>
            <chakra.a href="#" onClick={redirecionarParaProfile}>
              Profile
            </chakra.a>
            <chakra.a href="#" onClick={redirecionarParaSocial}>
              Social
            </chakra.a>
          </HStack>
          <HStack spacing={2}>
            <IconButton icon={<FaInstagram />} isRound onClick={redirecionarParaInstagram} />
            <IconButton icon={<FaGithub />} isRound onClick={redirecionarParaGithub} />
            <IconButton icon={<FaLinkedin />} isRound onClick={redirecionarParaLinkedin} />
            <Spacer />
            <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound onClick={toggleColorMode} />
          </HStack>
        </Flex>

        {/* Adicione o código abaixo para a imagem de fundo */}
        {!isDark && (
          <ChakraImage
            src={imagemFundoClaro}
            as="img"
            alt="Imagem de fundo"
            w="100%"
            h="100%"
            position="fixed"
            top="0"
            left="0"
            zIndex="-1"
            className={fadeIn}
          />
        )}

        {/* Adicione o código abaixo para a imagem de fundo no modo escuro */}
        {isDark && (
          <ChakraImage
            src="https://s3-alpha-sig.figma.com/img/e979/6744/c168c67f9b711cd25ce3509791072526?Expires=1701648000&Signature=ZDdFF-AW8VuYmS6~nyqUvzC6w2cS729dfOhlOtZZfqLWq497XxhMcxTIcZJlvBoul8PHPcGvyhVWRwP79a-aOQcGd173T22yVPpuScz83PbpbVJ~CdxJXqYheLpDrOilOIaJxPYly6AwsEORzr-LADDh6twBXs6imklmIBpdwhZCjCkVofxaNd-2gVoKtlpq9ielyabur-E-ab7~R21uRMAEHChbpJYLi8lZ8191q6Js97ukRYbEhpW9VffdO85e-UzuVVj9LYUckvjsCKa5dZ2Z2gauGpSkXQFf41om2Jtd0Jo0TtNzGUVK8-CfYcUObob~GXjPncD-veW3iLB-qA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Imagem de fundo no modo escuro"
            w="100%"
            h="100%"
            position="fixed"
            top="0"
            left="0"
            zIndex="-1"
          />
        )}

        <Header />
        <Lg />
        <Social />
        <Sosocial />
        <Profile />
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default App;