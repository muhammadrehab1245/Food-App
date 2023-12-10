import React,{createRef, useContext} from 'react'
import {
    Box,
    Flex,
    Heading,
    Image,
    HStack,
    Button,
    VStack,
    IconButton,
    Kbd,
    Text,
  } from "@chakra-ui/react";
  import { AiTwotoneDelete } from "react-icons/ai";

import Notecontext from '../context/Notecontext';
export const Cartitems = (props) => {
    let {orderitems}=props
    const context=useContext(Notecontext)
 let {change,deleteorder}=context
    // Creating refs to access specific elements in the component
  const increment = createRef();
  const decrement = createRef();
  const itemid = createRef();
  const itemname = createRef();
  // changing the quantity of item by ref the DOM
  const changequantity=(e)=>{
    change(e.target.textContent,itemid.current.textContent,itemname.current.textContent)
  }
 
  return (
     <>
    <VStack 
                mt={15} spacing={33} color='white'>
                <Flex  height={32} border='2px solid 778ca3' bgColor='#555555' w='full' gap={5} justify='space-around'>
                  <HStack  >
                <Box boxSize='45'>
                <Image src={orderitems.img}  alt='Cartorders' />
                </Box>
                <VStack  width='63%'  >
                <Heading ref={itemname}  textAlign='center'  fontSize='md'>{orderitems.itemname}</Heading>
                <Heading fontSize='sm'>
                  <Flex gap={1}>
                <Heading color='red' as='span' fontSize='md'>
                {orderitems.price.slice(0,1)}
                </Heading>
            <Heading as='span' fontSize='sm'>
               {parseFloat((orderitems.price.slice(1))*orderitems.quantity).toFixed(2)}
                </Heading>
                </Flex>
                </Heading>
                </VStack>
                </HStack>
                <HStack>
                <Button ref={decrement} onClick={changequantity} colorScheme='black' height='21'>-</Button>
                <Kbd bgColor='black'>{orderitems.quantity}</Kbd>
                <Button ref={increment} onClick={changequantity} colorScheme='black' height='21'>+</Button>
                <IconButton onClick={()=>deleteorder(itemid.current.textContent)} size='xs'  fontSize='md'
                colorScheme='red' aria-label='Delete order' icon={<AiTwotoneDelete />} />
                </HStack>
                </Flex>
                <Text display='none' ref={itemid}>{orderitems._id}</Text>   
                </VStack>       
</>
                  )
  
}
