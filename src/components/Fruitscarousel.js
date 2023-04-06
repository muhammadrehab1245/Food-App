import React from 'react'
import {  Progress, Stack, Text,   } from "@chakra-ui/react";
import Carousel from 'react-multi-carousel';
import fruitdata from '../fruitdata.json'
import { Fruitlist } from './Fruitlist';
export const Fruitscarousel = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1335 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1335, min: 1010 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1010, min: 707 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 707, min: 0 },
          items: 1,
  
        }
      };
     
  return (
    <Stack
    bgColor='RGBA(0, 0, 0, 0.04)' p={30}>
         <Text fontSize={{base:'2xl',md:'3xl'}} >Our Fresh & Healthy Fruits</Text>
        <Stack>
        <Progress w='168px' value={100} size='xs' colorScheme='orange' />
 </Stack>
 <Stack>
 <Stack zIndex={0}  bgColor='#E2E8F0' justify='center'   h='45vh'  mt={21}>
 
      <Carousel  responsive={responsive}>   
       { fruitdata.map((fruit)=>{
       return    <Fruitlist key={fruit._id} fruit={fruit}/>

      }) }

 </Carousel>

 </Stack>
 </Stack>
       </Stack>
  )
}
