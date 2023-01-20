import React from "react";
import {
  Box,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Img } from "@chakra-ui/react";
import footerLogo from "../../assets/images/logo/logo-footer.png";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ROUTES } from "../../routes";

export default function Footer() {
  return (
    <Box backgroundColor="#F2F2F2">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6} justifyContent="center" alignItems="center">
            <Img src={footerLogo} />
            <Flex columnGap={3}>
              <Link>
                {" "}
                <Flex
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  backgroundColor="var(--bgGreen)"
                  justifyContent="center"
                  alignItems="center"
                >
                  <FaFacebookF color="#fff" />
                </Flex>
              </Link>
              <Link>
                <Flex
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  backgroundColor="var(--bgGreen)"
                  justifyContent="center"
                  alignItems="center"
                >
                  <BsInstagram color="#fff" />
                </Flex>
              </Link>
            </Flex>
          </Stack>
          <Stack
            align={{ base: "center", md: "start", xl: "start" }}
            fontWeight="500"
          >
            <Link
              href="#"
              color="var(--bgOrange)"
              fontSize="1.2rem"
              fontWeight="600"
            >
              Kateqoriyalar
            </Link>
            <RouterLink to={ROUTES.OFFICEAPPLIANCES} className="dark">
              Ofis ləvazimatları
            </RouterLink>
            <Link href="#" className="dark">
              Qida və içkilər
            </Link>
            <Link href="#" className="dark">
              Təsərrüfat malları
            </Link>
            <Link href="#" className="dark">
              Elektron avadanlıq
            </Link>
            <Link href="#" className="dark">
              Dibçək gülləri
            </Link>
            <Link href="#" className="dark">
              Hədiyyəlik
            </Link>
            <Link href="#" className="dark">
              Coffee shop
            </Link>
          </Stack>
          <Stack
            align={{ base: "center", md: "start", xl: "start" }}
            fontWeight="500"
          >
            <Link
              href="#"
              color="var(--bgOrange)"
              fontSize="1.2rem"
              fontWeight="600"
            >
              Menyular
            </Link>
            <Link href="#" className="dark">
              Haqqımızda
            </Link>
            <Link href="#" className="dark">
              Çatdırılma
            </Link>
            <Link href="#" className="dark">
              Geri qaytarılma və dəyişdirilmə
            </Link>
            <Link href="#" className="dark">
              Əlaqə
            </Link>
          </Stack>
          <Stack
            align={{ base: "center", md: "start", xl: "start" }}
            fontWeight="500"
          >
            <Link
              href="#"
              color="var(--bgOrange)"
              fontSize="1.2rem"
              fontWeight="600"
            >
              Əlaqə
            </Link>
            <Link href="#" className="dark">
              Tel:(994)99 832 07 77
            </Link>
            <Link href="#" className="dark">
              E-mail: info@los.az
            </Link>
            <Link href="#" className="dark">
              Ünvan: Ziya Bünyadov pr. 1965 Çinar Park Biznes Mərkəzi
            </Link>
          </Stack>
        </SimpleGrid>
        <Text
          fontSize={"sm"}
          fontWeight="500"
          borderTop="1px solid gray"
          py={5}
        >
          ©Bütün hüquqlar qorunur -<span>Lucky Office Support</span>
        </Text>
      </Container>
    </Box>
  );
}
