import React from "react";
import {
  Box,
  Button,
  Container,
  Img,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Flex,
} from "@chakra-ui/react";
import { ProductContext } from "../../App";
import { useContext } from "react";
import Header from "../header/Header";

export default function ShoppingCart() {
  const context = useContext(ProductContext);

  const totalCartAmmount = context.state.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);

  return (
    <>
      <Header />
      <Container className="container" maxW="97%" my={5}>
        <Flex gap={2}>
          <TableContainer maxW="95%">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Məhsul adı</Th>
                  <Th>Qiymət</Th>
                  <Th transform="translateX(50px)">Say</Th>
                  <Th>Rəng</Th>
                  <Th>Cəmi</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              {context.state.cart.map((book, id) => (
                <Tbody key={id}>
                  <Tr>
                    <Td>
                      <Box width="70px" height="70px">
                        <Img
                          src={book.image}
                          alt={book.name}
                          width="full"
                          height="full"
                        />
                      </Box>
                    </Td>
                    <Td>{book.name}</Td>
                    <Td>{book.price}</Td>
                    <Td>
                      <Flex justifyContent="center" alignItems="center" gap={1}>
                        <Button
                          onClick={() => context.decrease(book.id)}
                          bgColor="var(--bgOrange)"
                          color="#FFF"
                          _hover={{
                            background: "var(--bgGreen)",
                          }}
                        >
                          -
                        </Button>
                        <Box
                          border="1px solid var(--bgOrange)"
                          borderRadius="5px"
                          p="10px"
                        >
                          {book.count}
                        </Box>
                        <Button
                          onClick={() => context.increase(book.id)}
                          bgColor="var(--bgOrange)"
                          color="#FFF"
                          _hover={{
                            background: "var(--bgGreen)",
                          }}
                        >
                          +
                        </Button>
                      </Flex>
                    </Td>
                    <Td>-</Td>
                    <Td>{(book.price * book.count).toFixed(2)} Azn</Td>
                    <Td>
                      <Button
                        onClick={() => context.removeFromCart(book.id)}
                        bgColor="red.600"
                        color="#FFF"
                        _hover={{
                          background: "red.500",
                        }}
                      >
                        X
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </TableContainer>
          <Box
            width="250px"
            height="230px"
            p="20px"
            boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Text
              borderBottom="2px solid gray"
              fontWeight="500"
              fontSize="18px"
            >
              Səbət
            </Text>
            <Flex justifyContent="space-between" my={5}>
              <Text>Cəmi</Text>
              <Text fontWeight="500">{totalCartAmmount} Azn</Text>
            </Flex>
            <Flex width="full" justifyContent="center">
              <Button
                margin="0 auto"
                bgColor="var(--bgOrange)"
                color="#FFF"
                _hover={{
                  background: "var(--bgGreen)",
                }}
              >
                Sifarişi təsdiqlə
              </Button>
            </Flex>
          </Box>
        </Flex>

        {/* <MDBTable responsive="xl">
          <MDBTableHead>
            <tr>
              <th scope="col-6"></th>
              <th scope="col-6">Məhsul adı</th>
              <th scope="col-6">Qiymət</th>
              <th scope="col-6">Say</th>
              <th scope="col-6">Rəng</th>
              <th scope="col-6">Cəmi</th>
              <th scope="col-6"></th>
            </tr>
          </MDBTableHead>
          {context.state.cart.map((book) => (
            <MDBTableBody>
              <tr>
                <td>
                  <Img
                    src={book.image}
                    alt={book.name}
                    width="50px"
                    height="50px"
                  />
                </td>
                <td>{book.name}</td>
                <td>{book.price}</td>
                <td>
                  {" "}
                  <Flex justifyContent="center" alignItems="center">
                    <Button onClick={() => context.decrease(book.id)}>-</Button>
                    <Box>{book.count}</Box>
                    <Button onClick={() => context.increase(book.id)}>+</Button>
                  </Flex>
                </td>
                <td>-</td>
                <td>{(book.price * book.count).toFixed(2)} Azn</td>
                <td>
                  {" "}
                  <Button onClick={() => context.removeFromCart(book.id)}>
                    X
                  </Button>
                </td>
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable> */}
      </Container>
    </>
  );
}
