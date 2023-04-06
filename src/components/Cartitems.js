import React,{useContext} from 'react'
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
  const increment = React.createRef();
  const decrement = React.createRef();
  const itemid = React.createRef();
  const changequantity=(e)=>{
    console.log(itemid.current.textContent)
    change(e.target.textContent,itemid.current.textContent)
  }
 
 /* const reducer=(state,action)=>{
    switch (action.type) {
      case "increment":
    return state.map(o=>{
     console.log(o._id===action.id)
     if (o._id===action.quantity._id) {
      return { ...o, 'quantity': o.quantity+1 };
     }
     else{
      return o;
     }
      });
      case "decrement":
    return state.map(o=>{
     if (o._id===action.quantity._id) {
      return { ...o, 'quantity': o.quantity >1?o.quantity-1:o.quantity };
     }
     else{
      return o;
     }
      });
      default:
        return state
    }
    }
  
    const [orderlist, dispatch] = useReducer(reducer, order)
    orderlist.map((e)=>{
      console.log(e)
    }) 



    const incrementquantity=(items)=>{
     // console.log(items.quantity)
      dispatch({type:'increment',quantity:items})
    }
    const decrementquantity=(items)=>{
     // console.log(items.quantity)
      dispatch({type:'decrement',quantity:items})
    } */
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
                <Heading  textAlign='center'  fontSize='md'>{orderitems.name}</Heading>
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
