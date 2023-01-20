import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  SimpleGrid,
  Img,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import headerImg from "../../assets/images/leaf/leaf-title.png";
import logo from "../../assets/images/logo/logo-footer.png";
export default function About() {
  return (
    <div>
      <Header />
      <Box
        mt={5}
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
            Haqqımızda
          </Text>
          <Text as="h2">
            <Link>Ana səhifə</Link>/Haqqımızda
          </Text>
        </Stack>
      </Box>
      <Container className="container" maxW="80%" padding={0} mb="60px">
        <Text as="h2" color="#212529" fontSize="32px" mb="35px">
          Haqqımızda
        </Text>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "2fr 1fr" }} spacing={10}>
          <Box order={{ base: 2, md: 1 }}>
            <Text color="#212529" fontSize="18px">
              Şirkətimiz, ofisinizin gündəlik təchizatı üçün zəruri olan{" "}
              <strong>
                dəftərxana ləvazimatlarının, su, çay, kofe kimi daimi istifadə
                edilən qida məhsullarının, gigiyena və təmizlik vasitələrinin,
                daşınan və daşınmaz hər növ inventarın (ofis mebel dəstləri,
                kompyuter və onun yan avadanlıqları)
              </strong>{" "}
              Sizə sürətli və maneəsiz çatdırılması xidmətini həyata keçirir.
            </Text>
            <Text color="#212529" fontSize="18px" my={3}>
              Xidmətlərimizdən istifadə etməklə Siz;
            </Text>
            <UnorderedList color="#212529" fontSize="18px">
              <ListItem>vaxtınıza qənaət etmiş olursunuz,</ListItem>
              <ListItem>
                sifariş etmədən öncə qiymətlərlə tanış ola, qiymət müqaisəsini
                rahatlıqla edə bilirsiniz,
              </ListItem>
              <ListItem>
                {" "}
                sifarişlərinizi həm nəğd, həm də köçürmə yolu ilə həyata keçirə
                bilirsiniz,
              </ListItem>
              <ListItem>
                {" "}
                əməkdaşlarınızın ancaq işlərinə vaxt sərf etməsinə zəmin
                yaradırsınız,
              </ListItem>
              <ListItem>
                {" "}
                əlavə xərclərdən (taksi, park yeri, park cərimələri və s.) azad
                olursunuz.
              </ListItem>
            </UnorderedList>
            <Text color="#212529" fontSize="18px" mt={5}>
              Bizimlə əməkdaşlıq etdiyiniz təqdirdə, bütün xidmətlərin yüksək
              sürət və həssasiyyətlə həyata keçiriləcəyinə təminat veririk.
            </Text>
          </Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            order={{ base: 1, md: 2 }}
          >
            <Img src={logo} alt="logo" />
          </Flex>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
}
