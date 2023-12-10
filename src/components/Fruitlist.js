import React, { createRef, useContext } from 'react'
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Notecontext from '../context/Notecontext';
export const Fruitlist = (props) => {
  const { fruit } = props
  const context = useContext(Notecontext)
  const { addorder } = context

  // Creating refs to access specific elements in the component
  const fruitname = createRef();
  const fruitprice = createRef();
  const fruittag = createRef();
  const fruitid = createRef();
  const fruitimg = createRef();

  // Function to handle the food ordering process when the form is submitted
  const foodordering = (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Calling the 'addorder' function with relevant information from refs
    addorder(
      fruitname.current.textContent,
      fruittag.current.textContent,
      fruitprice.current.textContent,
      fruitimg.current.src
    );
  };

  return (
    <>
      <Flex justifyContent={{ base: 'center', md: 'flex-start' }} >
        <Flex ml={2} borderRadius={16} w={300} height={243} bg='white'>
          <HStack >
            <Box position='relative' bottom={15} >
              <Image padding={5} ref={fruitimg} src={fruit.imgurl} alt={fruit.alt} />
            </Box>
            <Flex direction='column'>
              <Flex bottom='15' position='relative' w={118} justify='flex-end'>
                <Box right={7} position='relative' mt={5} borderRadius='full' bg='#E53E3E' p={3} color='white'>
                  <MdOutlineAddShoppingCart onClick={foodordering} fontSize='' />
                </Box>
              </Flex>
              <Flex position='relative' direction='column' spacing={4} textAlign='center' top={5}>
                <Text ref={fruitname} fontSize='xl'>{fruit.fruitname}</Text>
                <Flex direction='column' textAlign='center'>
                  <Text ref={fruittag} fontSize='sm'>{fruit.fruittag}</Text>
                  <Text ref={fruitprice} fontSize='md'>{fruit.price}</Text>
                  <Text ref={fruitid} display='none'>{fruit._id}</Text>
                </Flex>
              </Flex>

            </Flex>
          </HStack>
        </Flex>
      </Flex>


    </>
  )
}
