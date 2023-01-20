import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Img,
} from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { ROUTES } from "../../../routes";
import "../headerBottom/navbar.css";

export default function HeaderBottom() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Box width={["100%", "100%", "90%"]} mt={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex
          width={["100%", "100%", "40%"]}
          height="50px"
          backgroundColor="var(--bgGreen)"
          justifyContent="center"
          alignItems="center"
          color="#FFF"
          columnGap={5}
          position="relative"
        >
          <Img
            src="https://los.az/lucky/images/icon/category.svg"
            alt="categoryLogo"
          />
          <Menu>
            <MenuButton righticon={<BsChevronDown color="#fff" />}>
              Kateqoriyalar
            </MenuButton>
            <MenuList>
              <MenuItem
                minH="48px"
                color="#000"
                // onClick={() => filterResult("ofis ləvazimatları")}
              >
                <Link>ofis ləvazimatları</Link>
              </MenuItem>
              <MenuItem minH="40px" color="#000">
                <Link>dibçək gülləri</Link>
              </MenuItem>
              {/* <MenuItem minH="40px" color="#000">
                <Link>Geri qaytarılma və dəyişdirilmə</Link>
              </MenuItem>
              <MenuItem minH="40px" color="#000">
                <Link>Geri qaytarılma və dəyişdirilmə</Link>
              </MenuItem> */}
            </MenuList>
          </Menu>
        </Flex>
        <Flex>
          <Flex
            className={click ? "nav-menu active" : "nav-menu"}
            columnGap="40px"
            color="#FFF"
            rowGap={{ base: "2rem", md: "1rem", xl: "0" }}
            fontSize={{ base: "2rem", md: "2rem", xl: "1rem" }}
          >
            <RouterLink to={ROUTES.ABOUT} className="light">
              Haqqımızda
            </RouterLink>
            <RouterLink to={ROUTES.NEW} className="light">
              Yeni
            </RouterLink>
            <RouterLink to={ROUTES.DISCOUNTS} className="light">
              Endirimlər
            </RouterLink>
            <RouterLink to={ROUTES.BESTSELLERS} className="light">
              Ən çox satanlar
            </RouterLink>
            <Menu>
              <MenuButton righticon={<BsChevronDown color="#fff" />}>
                <Flex alignItems="center">
                  Şərtlər <BsChevronDown />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem minH="48px" color="#000">
                  <Link to={ROUTES.DELIVERY} className="dark">
                    Çatdırılma
                  </Link>
                </MenuItem>
                <MenuItem minH="40px" color="#000">
                  <Link to={ROUTES.REFUNDEXCHANGE} className="dark">
                    Geri qaytarılma və dəyişdirilmə
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <RouterLink to={ROUTES.CONTACT} className="light">
              Əlaqə
            </RouterLink>
          </Flex>
          <Box
            onClick={handleClick}
            display={{ base: "block", md: "block", xl: "none" }}
            _hover={{
              cursor: "pointer",
            }}
            zIndex="5"
            position="absolute"
            right="10px"
            top="130px"
          >
            {click ? (
              <FaTimes color="#FFF" size={30} />
            ) : (
              <FaBars color="#FFF" size={30} />
            )}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
