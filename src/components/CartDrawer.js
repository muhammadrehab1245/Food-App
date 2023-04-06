import React,{useContext} from 'react'
import {
    Flex,
    Text,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    SimpleGrid,
    GridItem,
    Center,
    Divider,
    Image,
  
  } from "@chakra-ui/react";
  import { FaShoppingCart } from "react-icons/fa";
  import { BiArrowBack } from "react-icons/bi";
  import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import Notecontext from '../context/Notecontext';
import { Cartitems } from './Cartitems';
import cartempty from '../images/emptycart.jpg'
import { Pricesec } from './Pricesec';
export const CartDrawer = (props) => {
    const {Shopisopen,Shopclose,btnRef}=props
    const context=useContext(Notecontext)
  const {order,clearorder}=context


  return (
    <Drawer
    blockScrollOnMount={false}
    size={{base:'xl',lg:'sm',xl:'sm'}}
      isOpen={Shopisopen}
      placement="right"
      onClose={Shopclose}
      finalFocusRef={btnRef}
      closeOnOverlayClick={false}
      trapFocus={true}
    >

      <DrawerContent >
  
  <Flex position='relative' top={4} direction='column' h='100' >

<SimpleGrid columns={2}>
<GridItem ml={4} mt={3} >
<Flex onClick={clearorder} cursor='pointer' >
<Center >
<GiEmptyMetalBucketHandle/>
</Center>
<Center ml={2} >
<Text>Clear Cart</Text>
</Center>
</Flex> 
</GridItem>
<GridItem  mt={3}  >

<Flex direction='row'>
<Center >
<Text>Cart</Text>
</Center>
<Center ml={2}>
<FaShoppingCart/>
</Center>

</Flex>
</GridItem>

<GridItem colSpan={1}>

<DrawerCloseButton>

        <BiArrowBack fontSize='20'/>
</DrawerCloseButton>
</GridItem>

</SimpleGrid>
    
        </Flex>
                          {order.length!==0 ? (
                       <>      <DrawerBody
                             sx={
                              { 
                             '::-webkit-scrollbar':{
                                    display:'none'
                                },
                    
                             }
                             
                           }
                             borderTopRadius={46}  bgColor='black'   >
                        {     order.map(orderitems=>{

                         return <Cartitems orderitems={orderitems} key={orderitems._id}  />
                        })

                           }) 
                                 
                               </DrawerBody>
                           <Pricesec/>
                         
                           </>
                          ) 
                          
                          : (
                            <>
                             <DrawerBody>
                            <Image src={cartempty}></Image>
                            <Divider orientation='horizontal' />
                            <Text mt='5' align='center' fontWeight='bold'>Cart is empty</Text>
                            </DrawerBody>
                            </>
                          )}

      </DrawerContent>
    </Drawer>
  )
}
