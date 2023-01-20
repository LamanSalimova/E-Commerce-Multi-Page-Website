import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import bgImage from "../../assets/images/leaf/leafLeft-1.png";
import bannerImage1 from "../../assets/images/banner/banner2.1.jpg";
import bannerImage2 from "../../assets/images/banner/banner2.2.jpg";
import bannerImage3 from "../../assets/images/banner/banner2.3.jpg";
import bannerImage4 from "../../assets/images/banner/banner2.4.jpg";
import bannerImage5 from "../../assets/images/banner/banner5.jpg";
export default function Sections() {
  return (
    <Box
      backgroundColor="var(--bgGreen)"
      backgroundImage={bgImage}
      backgroundRepeat="no-repeat"
      backgroundPosition=" left"
      backgroundSize="contain"
      py={8}
    >
      <Container className="container" maxW="90%">
        <Text
          as="h1"
          color="#FFF"
          fontSize="24px"
          position="relative"
          align="center"
          _before={{
            content: '""',
            position: "absolute",
            width: "30px",
            height: "4px",
            top: "30px",
            left: "49%",
            background: "#FFFFFF",
            borderRadius: "2px",
          }}
        >
          Bölmələr
        </Text>
        <Grid
          h="300px"
          templateRows={{ sm: "1fr", md: "1fr 1fr" }}
          // templateColumns="repeat(8, 1fr)"
          templateColumns={{ sm: "1fr", md: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" }}
          gap={5}
          my={5}
        >
          <GridItem
            rowSpan={3}
            colSpan={4}
            backgroundImage={bannerImage1}
            backgroundSize="cover"
            backgroundPosition="bottom"
          />
          <GridItem
            colSpan={2}
            backgroundImage={bannerImage2}
            backgroundSize="cover"
            backgroundPosition="center"
          />
          <GridItem
            colSpan={2}
            backgroundImage={bannerImage3}
            backgroundSize="cover"
            backgroundPosition="center"
          />
          <GridItem
            colSpan={2}
            backgroundImage={bannerImage4}
            backgroundSize="cover"
            backgroundPosition="center"
          />
          <GridItem
            colSpan={2}
            backgroundImage={bannerImage5}
            backgroundSize="cover"
            // backgroundPosition="center"
          />
        </Grid>
      </Container>
    </Box>
  );
}
