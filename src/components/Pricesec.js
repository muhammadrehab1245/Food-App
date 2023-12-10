import { Button, Divider, Flex, Heading, HStack } from "@chakra-ui/react";
import React ,{useContext}from "react";
import Notecontext from "../context/Notecontext";

export const Pricesec = () => {
    const context=useContext(Notecontext)
    const {order}=context

    
    const totalbalance=()=>{
      let values=0
    for (const orders in order) {
        values+= parseFloat(order[orders].price.slice(order[orders].price.indexOf('$')+1))*order[orders].quantity
    }
    return values.toFixed(2)
} 
  let delivery=(15*order.length).toFixed(2)

  return (
    <Flex height="60" gap={5} w="full" direction="column" bgColor="#555555">
      <HStack mt={12} color="#BEBEBE" justify="space-around">
        <Heading fontSize="lg">Sub Total</Heading>
        <Heading fontSize="md">-</Heading>
        <Flex gap={2}>
        <Heading color='red' as='span' fontSize='lg'>
                $
                </Heading>
            <Heading as='span' fontSize='lg'>
                {totalbalance()}
  
                </Heading>
                </Flex>
      </HStack>
      <HStack color="#BEBEBE" justify="space-around">
        <Heading  fontSize="lg">Delivery</Heading>
        <Heading fontSize="md">-</Heading>
        <Flex gap={2}>
        <Heading color='red' as='span' fontSize='lg'>
                $
                </Heading>
            <Heading as='span' fontSize='lg'>
               {delivery}
                </Heading>
                </Flex>
      </HStack>
      <Divider size='lg' border='2px solid silver' />
      <HStack color="white" justify="space-around">
        <Heading fontSize="lg">TOTAL</Heading>
        <Heading fontSize="md">-</Heading>
        <Flex gap={2}>
        <Heading color='red' as='span' fontSize='lg'>
                $
                </Heading>
            <Heading as='span' fontSize='lg'>
            {totalbalance()}
             
                </Heading>
                </Flex>
      </HStack>
      <Flex justifyContent="center">
        <Button
          height="46"
          width="56%"
          borderRadius="23"
          colorScheme="orange"
          variant="solid"
        >
          Checkout ${totalbalance()} 
        </Button>
      </Flex>
    </Flex>
  );
};
