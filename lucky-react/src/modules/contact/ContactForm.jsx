import {
  Box,
  Container,
  Input,
  SimpleGrid,
  Textarea,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Iframe from "react-iframe";
export default function ContactForm() {
  return (
    <Container maxW={["90%", "80%", "80%"]} my={5} py={5}>
      <SimpleGrid templateColumns={{ sm: "1fr", md: "1fr 1fr" }} spacing={3}>
        <Box>
          <Iframe
            url="https://maps.google.com/maps?q=Ziya%20B%C3%BCnyadov%20pr,%201965.%20%C3%87inar%20Park%20Biznes%20M%C9%99rk%C9%99zi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="90%"
            id="gmap_canvas"
            className="mapouter"
            display="block"
            position="relative"
          />
        </Box>
        <Container maxW="100%">
          <Text as="h2" fontSize="24px" textAlign="center" mb={3}>
            Müraciət Formu
          </Text>
          <Stack rowGap={5}>
            <Input
              type="text"
              name="name"
              placeholder="Ad,soyad*"
              padding="25px"
            />
            <Input
              type="text"
              name="email"
              placeholder="Başlıq*"
              padding="25px"
              // _focus={{
              //   outlineColor: "var(--bgOrange)",
              //   variant: "unstyled",
              // }}
            />
            <Input
              type="email"
              name="email"
              placeholder="E-mail*"
              focusBorderColor="var(--bgOrange)"
              padding="25px"
            />

            <Textarea
              name="message"
              placeholder="Mesajınız*"
              rows={6}
              resize="none"
              padding="25px"
            />
            <Button
              colorScheme="blue"
              bg="var(--bgGreen)"
              color="white"
              width="full"
              _hover={{
                bg: "var(--bgOrange)",
              }}
            >
              Göndər
            </Button>
          </Stack>
        </Container>
      </SimpleGrid>
    </Container>
  );
}
