import React from 'react'
import {
    Heading,
    Image,
    HStack,
    ListItem,
    List,
    Badge,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    Stack,
    VStack,
    Button
  } from "@chakra-ui/react";
  import chef from "../images/chef.jpg";
  import { FaShoppingCart } from "react-icons/fa";
  import { Link } from "react-router-dom";

export const NavDrawer = (props) => {
    const {order,btnRef,Navisopen,Navclose,Shoponopen,Contactonopen}=props
  return (
    <Drawer
    blockScrollOnMount={false}
      isOpen={Navisopen}
      placement="top"
      onClose={Navclose}
      finalFocusRef={btnRef}
    >
 
      <DrawerContent opacity={0.9}>
        <DrawerCloseButton />
        <DrawerHeader>
          <Button _hover={{fontSize:'28px'}}
            size="0"
            cursor="pointer"
            fontSize="26px"
            ref={btnRef}
            onClick={Shoponopen}
            bgColor="white"
          >
            <FaShoppingCart />
          </Button>
          <Badge

            top="2"
            left={10}
            position="absolute"
            border="2px solid black"
            color="white"
            bgColor="	#E60026"
            fontSize='sm'
            borderRadius='full'
          >
            {order.length}
          </Badge>
        </DrawerHeader>
        <Stack>
          <DrawerBody>
            <List display="flex" justifyContent="center">
              <VStack mt={14} spacing={9}>
              <ListItem>
                <Link _hover={{fontSize:'20px'}} onClick={Navclose} to="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link _hover={{fontSize:'20px'}} onClick={Navclose} to="/menu">Menu</Link>
              </ListItem>


              <ListItem _hover={{fontSize:'20px'}} ref={btnRef} onClick={Contactonopen}>Contact us</ListItem>
                <HStack>
                  <Image _hover={{boxSize:'43px'}} 
                    borderRadius="full"
                    boxSize="45px"
                    src={chef}
                    alt="cheflogo"
                  />
                  <Heading fontSize="23px">Bentilzone</Heading>
                </HStack>
              </VStack>
            </List>
          </DrawerBody>
        </Stack>
      </DrawerContent>
    </Drawer>
  )
}
