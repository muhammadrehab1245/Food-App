import React,{createRef, useContext} from 'react'
import { Flex, Text, Box, GridItem, HStack, Image, Heading } from "@chakra-ui/react";
import {MdOutlineAddShoppingCart } from 'react-icons/md';
import Notecontext from '../context/Notecontext';
export const Foodlist = (props) => {
    const {fooditem}=props
      // Creating refs to access specific elements in the component
    const foodname = createRef()
    const foodprice = createRef()
    const foodtag = createRef()
    const foodimg = createRef()
    const foodid = createRef()

const context=useContext(Notecontext)
const {addorder}=context
  // Calling the 'addorder' function with relevant information from refs
    const foodordering = (e) => {
    e.preventDefault()
      addorder(foodname.current.textContent,foodtag.current.textContent,foodprice.current.textContent,foodimg.current.src)
    };
  return (
    <GridItem>
    <Flex ml={2}  borderRadius={16}  w={300} height={243} bg='white'>
     <HStack >
     <Box position='relative'  bottom={15} >
   <Image padding={5} ref={foodimg}  boxSize='96%' src={fooditem.imgurl} alt={fooditem.alt} />
 </Box>
 <Flex direction='column'>
 <Flex bottom='15' position='relative'  w={118} justify='flex-end'>
 <Box right={7} position='relative'  mt={5} borderRadius='full' bg='#E53E3E'  p={3} color='white'>
 <MdOutlineAddShoppingCart onClick={foodordering} cursor='pointer' fontSize='20'/>
 </Box>
 </Flex>
 <Flex position='relative'  direction='column' spacing={4}  textAlign='center'   top={5}>
   <Text ref={foodname} fontSize='xl'>{fooditem.itemname}</Text>
   <Flex direction='column' textAlign='center'>
   <Text ref={foodtag} fontSize='sm'>{fooditem.itemtag}</Text>
   <Heading ref={foodprice} as='h6' size='md' fontSize='md'>{fooditem.price}</Heading>
   <Text display='none' ref={foodid}>{fooditem._id}</Text>
   </Flex>
 </Flex>
 </Flex>
     </HStack>
     </Flex>
 </GridItem>
  )
}
