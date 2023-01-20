// import { Box, Button, Text } from "@chakra-ui/react";
// import React from "react";

// export default function Basket(props) {
//   const { cartItems, onAdd, onRemove } = props;
//   return (
//     <div>
//       <Text>Basket</Text>
//       <Box>{cartItems.length === 0 && <Box>Cart is empty</Box>}</Box>
//       {cartItems.map((item) => (
//         <Box key={item.id}>
//           <Box>{item.name}</Box>
//           <Box>
//             <Button onClick={() => onAdd(item)}>+</Button>
//             <Button onClick={() => onRemove(item)}>-</Button>
//           </Box>
//           <Box>
//             {item.qty}x ${item.price.toFixed(2)}
//           </Box>
//         </Box>
//       ))}
//     </div>
//   );
// }
