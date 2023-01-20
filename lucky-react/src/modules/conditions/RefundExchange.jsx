import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  SimpleGrid,
  Img,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import headerImg from "../../assets/images/leaf/leaf-title.png";
import { ROUTES } from "../../routes";
export default function RefundExchange() {
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
            Geri qaytarilma
          </Text>
          <Text as="h2">
            <Link to={ROUTES.CONTACT}>Ana səhifə</Link>
            /Geri qaytarilma
          </Text>
        </Stack>
      </Box>
      <Container className="container" maxW="80%" padding={0} mb="60px">
        <Text as="h2" color="#212529" fontSize="32px" mb="35px">
          Geri qaytarilma
        </Text>
        <SimpleGrid templateColumns={{ sm: "1fr", md: "2fr 1fr" }} spacing={10}>
          <Box order={{ base: 2, md: 1 }}>
            <Text color="#212529" fontSize="18px" fontWeight="bold" mb={3}>
              Lucky Office Support-dan alınan malların dəyişdirilməsi və ya geri
              qaytarılması qaydaları aşağıdakı göstərilmiş:
            </Text>
            <UnorderedList color="#212529" fontSize="18px">
              <ListItem>
                Geri qaytarılması qadağan olunan mallar istisna olmaqla bütün
                mallar Azərbaycan Respublikasının İstehlakçıların hüquqlarının
                müdafiəsi haqqında qanunun 15-ci maddəsində qeyd edilən
                şərtlərlə 14 gün ərzində geri qaytarıla bilər.
              </ListItem>
              <ListItem>
                Mal təhvil alınan zaman mütləq şəkildə fiziki xüsusiyyətləri,
                funksionallıqları yoxlanmalıdır, əgər hər hansı irad varsa
                yerində çatdırılmanı edən əməkdaşımıza bildirilməlidir,
              </ListItem>
              <ListItem>
                Malın qutusu (əgər qutuda olan maldırsa) açılıbsa,
              </ListItem>
              <ListItem>Mal istifadə edilmişdirsə,</ListItem>
              <ListItem>
                Malın əmtəə görünüşü, istehlak xüsusiyyətləri və fiziki
                göstəricilərdə defarmasiya olubsa,
              </ListItem>
              <ListItem>
                Alış və çatıdırılma zamanı təqdim olunan sənəd (elektron və ya
                adi sənəd) saxlanıbsa,
              </ListItem>
              <ListItem>
                AR-nın NK-nin müvafiq qərarında siyahı halında
                dəyişidirilməsi/geri qaytarılması edilməyən mallardan deyilsə,
              </ListItem>
              <ListItem>
                Geri qaytarılma və dəyişdirilmə ancaq istehsal xətasına görə
                olan qüsurdursa və ya bu qüsur təhvil təslim zamanı ortaya
                çıxmışdırsa bu zaman geri qaytarma/dəyişdirmə icra edilir
              </ListItem>
              <ListItem>
                Mal qaytarılan/dəyişdirilən zaman qablaşdırması, alış sənədləri
                və aksesuarları (akseasuarları olan maldırsa) ilə birlikdə
                verilməlidir.
              </ListItem>
            </UnorderedList>
            <Text color="#212529" fontWeight="bold" fontSize="18px" my={8}>
              Aşağıdakı malların geri qaytarılması həyata keçirilmir:
            </Text>
            <UnorderedList color="#212529" fontSize="18px">
              <ListItem>Dəri məmulatları</ListItem>
              <ListItem>
                Məktəb, hədiyyəlik, hobbi, ev əşyası və digər fərdi istifadə
                malları
              </ListItem>
              <ListItem>Bütün növ Gigiyena məhsulları</ListItem>
              <ListItem>
                Sifariş əsasında şəxsə özəl olaraq hazırlanmış məhsullar
              </ListItem>
              <ListItem>
                Hissələrdən ibarət olaraq anbarda saxlanılan və müştərinin
                istəyi ilə montaj edilərək müştərinin ofisinə çatdırlan mallar
                (dəmir dolablar, mebellər və s.)
              </ListItem>
              <ListItem>
                Seyf və digər bu tipdə kassa və mühafizə məqsədli mallar.
              </ListItem>
            </UnorderedList>
          </Box>
          <Box order={{ base: 1, md: 2 }}>
            <Img
              src="https://los.az/public/article/161788217325d97f6123a2bd1f92f024514cca51-1460838588.jpg"
              alt="Geri qaytarilma"
              maxW="100%"
              maxH="100%"
            />
          </Box>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
}
