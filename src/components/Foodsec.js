import React from "react";
import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import bike from "../images/bikedel.jpg";
import Strawberries from "../images/strawberries.jpg";
import Chicken from "../images/chicken.png";
import Fish from "../images/fish.png";
import Chocolate from "../images/chocolate.png";
import Secback from "../images/secback.png";
export const Foodsec = () => {
  return (
    <Flex  direction={{base:'column',md:'row'}} pl="34px" pt="145" bg="RGBA(0, 0, 0, 0.04)" h={{base:1780,sm:1050,md:700}}>
      <VStack
        bgImage="./images/chocolate.png"
        spacing={{base:"0",lg:"8"}}
        align="self-start"
        w={{base:'auto',lg:'200',xl:'192'}}
      
      >
        <Flex >
          <Tag
            display="flex"
            w="30"
            h="46px"
            size="lg"
            colorScheme="orange"
            color="#ff793f"
            borderRadius="full"
          >
            <TagLabel fontSize="16" fontWeight="700">
              Bike Delivery
            </TagLabel>
            <Avatar src={bike} size="sm" ml="6px" mr="3px" />
          </Tag>
        </Flex>
        <Flex mt="10px">
          <Heading mt={{base:'20px',lg:'auto'}} as="h1" fontSize={{base:'35',lg:"50",xl:'78'}}>
            <Highlight query={["Accra"]} styles={{ color: "#ED8936" }}>
              The Fastest Food Delivery in Accra
            </Highlight>
          </Heading>
        </Flex>
        <VStack  w={{base:'auto',lg:"38vw"}} align="flex-start">
          <Text mt={{base:'23px',lg:'auto'}} fontSize={{md:'md',lg:"lg"}}>
            Food is any substance consumed by an organism for nutritional
            support. Food is usually of plant, animal, or fungal origin, and
            contains essential nutrients, such as carbohydrates, fats, proteins,
            vitamins, or minerals
          </Text>
          <Button
            h="10"
            colorScheme="darkorange"
            color="RGBA(0, 0, 0, 0.48)"
            bgColor="darkorange"
            size="md"
            w={{base:'full',md:'auto'}}
          >
            <Text fontSize="lg">Order Now</Text>
          </Button>
        </VStack>
      </VStack>
      <Grid bgImage={Secback} justifyItems={{base:'center',sm:'flex-start'}} align='center' mt={{base:51,sm:51,md:0}} rowGap={{base:'46',lg:'38'}} templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",xl:'repeat(3, 1fr)'}} columnGap={6}>
        <GridItem w={{base:210,md:235}} h={{lg:"270px"}} align="center" bgColor="#EAEDF0">
          <VStack 
        //  w={{base:103,md:188,lg:224}} 
        w={224}
        
          position="relative" bottom={{base:0,lg:54}}>
            <Image boxSize={{base:'132px',lg:'154px'}} src={Strawberries} alt="Strawberries" />
            <Stack spacing={5} align="center">
              <Heading size="md">Strawberries</Heading>
              <Heading color="RGBA(0, 0, 0, 0.36)" size="md">
                Fresh Strawberries
              </Heading>
              <Text fontSize="md">$9.99</Text>
            </Stack>
          </VStack>
        </GridItem>
        <GridItem w={{base:210,md:235}} h={{lg:"270px"}} align="center" bgColor="#EAEDF0">
          <VStack 
        //  w={{base:103,md:188,lg:224}} 
         //  w={{base:103,md:188,lg:224}} 
         w={224}
          position="relative" bottom={{base:0,lg:54}}>
            <Image boxSize={{base:'132px',lg:'154px'}} src={Chicken} alt="Chicken" />
            <Stack spacing={5} align="center">
              <Heading size="md">Chicken</Heading>
              <Heading color="RGBA(0, 0, 0, 0.36)" size="md">
                Mixed Kebab
              </Heading>
              <Text fontSize="md">$20</Text>
            </Stack>
          </VStack>
        </GridItem>
        <GridItem w={{base:210,md:235}} h={{lg:"270px"}} align="center" bg="	#EAEDF0">
          <VStack
        //   w={{base:103,md:188,lg:224}} 
         //  w={{base:103,md:188,lg:224}} 
         w={224}
           position="relative" bottom={{base:0,lg:54}}>
            <Image boxSize={{base:'132px',lg:'154px'}} src={Fish} alt="Fish" />
            <Stack spacing={5} align="center">
              <Heading size="md">Tilapia</Heading>
              <Heading color="RGBA(0, 0, 0, 0.36)" size="md">
                Roasted Tilapia
              </Heading>
              <Text fontSize="md">$8.43</Text>
            </Stack>
          </VStack>
        </GridItem>

        <GridItem
        w={{base:210,md:235}}
          colStart={{base:0,lg:2}}
          colEnd={{base:0,lg:2}}
          h={{lg:"270px"}}
          bgColor="	#EAEDF0"
          align="center"
        >
          <VStack 
          //</GridItem>w={{base:103,md:188,lg:224}}
           //  w={{base:103,md:188,lg:224}} 
        w={224}
           position="relative" bottom={{base:0,lg:54}}>
            <Image boxSize={{base:'132px',lg:'154px'}}  src={Chocolate} alt="Chocolate" />
            <Stack spacing={5} align="center">
              <Heading size="md">IceCream</Heading>
              <Heading color="RGBA(0, 0, 0, 0.36)" size="md">
                Chocolate & Vanilla
              </Heading>
              <Text fontSize="md">$11.00</Text>
            </Stack>
          </VStack>
        </GridItem>
      </Grid>
    </Flex>
  );
};
