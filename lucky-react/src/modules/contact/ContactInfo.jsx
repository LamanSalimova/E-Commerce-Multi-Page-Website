import {
  Box,
  Stack,
  Text,
  Link,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import headerImg from "../../assets/images/leaf/leaf-title.png";
import { MdCall, MdMail, MdLocationOn } from "react-icons/md";
import { ROUTES } from "../../routes";
export default function ContactInfo() {
  return (
    <>
      <Box
        my={8}
        backgroundImage={headerImg}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Stack justifyContent="center" alignItems="center" py={10}>
          <Text
            as="h1"
            color="#303030"
            fontWeight="bold"
            fontSize="24px"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              width: "30px",
              height: "4px",
              top: "30px",
              left: "50%",
              background: "var(--bgGreen)",
              borderRadius: "2px",
            }}
          >
            Əlaqə
          </Text>
          <Text as="h2">
            <Link to={ROUTES.CONTACT}>Ana səhifə</Link>
            /Əlaqə
          </Text>
        </Stack>
      </Box>
      <Container maxW={["90%", "80%", "80%"]}>
        <SimpleGrid
          templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr" }}
          spacing={3}
        >
          <Box boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;">
            <Stack
              justifyContent="center"
              alignItems="center"
              padding="20px"
              borderRadius="5px"
            >
              <MdCall mb={5} color="var(--bgGreen)" fontSize="46px" />
              <Text py={2}>(994) 99 832 07 77</Text>
            </Stack>
          </Box>
          <Box boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;">
            <Stack
              justifyContent="center"
              alignItems="center"
              padding="20px"
              borderRadius="5px"
            >
              <MdMail mb={5} color="var(--bgGreen)" fontSize="46px" />
              <Text py={2}>info@los.az</Text>
            </Stack>
          </Box>
          <Box boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;">
            <Stack
              justifyContent="center"
              alignItems="center"
              padding="20px"
              borderRadius="5px"
            >
              <MdLocationOn mb={5} color="var(--bgGreen)" fontSize="46px" />
              <Text py={2}>
                Ziya Bünyadov pr, 1965. Çinar Park Biznes Mərkəzi
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}
