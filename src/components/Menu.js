import React from 'react'
import { Flex, Progress, Text, VStack,Tabs, TabList, TabPanels, Tab, TabPanel, Box, Stack, Grid, HStack } from "@chakra-ui/react";
import { ImSpoonKnife } from 'react-icons/im';
import { GiChickenOven,GiFruitTree,GiBowlOfRice } from 'react-icons/gi';
import {MdLocalDrink,MdRiceBowl } from 'react-icons/md';
import {SlCup } from 'react-icons/sl';
import {FaFish,FaIceCream } from 'react-icons/fa';
import fooddata from '../fooddata.json'
import { Foodlist } from "./Foodlist";
import { NoItem } from "./NoItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Menu = () => {
  return (
    <>
    
   <Stack bg="RGBA(0, 0, 0, 0.04)"> 
    <Flex pt={20}
     alignItems='center'  direction='column' justify='center'  mt={12} >
      <VStack>
      <Text  fontSize='3xl' >Our Hot Dishes</Text>
      <Progress w='170px' value={100} size='xs' colorScheme='orange' />
      </VStack>
      </Flex>
      <Tabs variant='unstyled'>
      
  <TabList>
  <Flex zIndex={0} w="100%" >
      <HStack  justify='center' w='100%'   gap={6}  pt={6}>
      <Swiper   breakpoints={{
    // when window width is >= 640px
    266: {
      width: 220,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    514: {
      width: 267,
      slidesPerView: 2,
    },
    768: {
      width: 400,
      slidesPerView: 4,
    },
    900: {
      width: 450,
      slidesPerView: 4,
    },
    1024: {
      width: 560,
      slidesPerView: 5,
    },
    1280: {
      width: 732,
      slidesPerView: 8,
    },


  }} watchSlidesProgress={true} className="mySwiper">
    <SwiperSlide  >
        <Box  w={105} >
    <Tab bgColor='white' borderRadius='10' w={100} height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
      <VStack>
      <Box bg='#FEB2B2'  p={4} borderRadius={27} color='black' >

    <ImSpoonKnife/>
</Box>
    <Text>
        Menu
        </Text>

      </VStack>
    </Tab>
    </Box>
    </SwiperSlide>
    <SwiperSlide>
    <Box w={105} >
    <Tab w={100} bgColor='white' borderRadius='10' height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
      <VStack>
        <Box bg='#FEB2B2' p={4} borderRadius={27} color='black' >
      <GiChickenOven />
      </Box>
      <Text>
        Chicken
        </Text>
  
        </VStack>
      </Tab>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box w={105} >
    <Tab bgColor='white' w={100} borderRadius='10' height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
    <VStack>
      <Box bg='#FEB2B2' p={4} borderRadius={27} color='black'>

    <GiFruitTree/>
      </Box>
      <Text>
      Fruits
        </Text>
      
        </VStack>
      </Tab>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Flex w={105} >
    <Tab bgColor='white' w={100} borderRadius='10' height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
    <VStack>
      <Box bg='#FEB2B2'  p={4} borderRadius={27} color='black'>

    <MdLocalDrink/>
      </Box>
      <Text>
      Soft Drinks
        </Text>
     
        </VStack>
     </Tab>
     </Flex>
     </SwiperSlide>
     <SwiperSlide>
     <Box w={105} >
    <Tab bgColor='white' w={100} borderRadius='10' height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
    <VStack>
      <Box bg='#FEB2B2'  p={4} borderRadius={27} color='black'>

    <SlCup/>
      </Box>
      <Text>
      Desserts
        </Text>
      
        </VStack>
    </Tab>
    </Box>
    </SwiperSlide>
    <SwiperSlide>
    <Box w={105} >
    <Tab bgColor='white' w={100} borderRadius='10' height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
    <VStack>
      <Box bg='#FEB2B2' p={4} borderRadius={27} color='black'>

    <FaIceCream/>  
      </Box>
      <Text>
      Ice Creams
        </Text>

        </VStack>
        </Tab>
        </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box w={105}>
    <Tab bgColor='white' w={100} borderRadius='10' height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
    <VStack>
      <Box bg='#FEB2B2' p={4} borderRadius={27} color='black'> 

    <FaFish/>
      </Box>
      <Text>
      Fish
        </Text>
    
        </VStack></Tab>
        </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box w={105}>
    <Tab bgColor='white' w={100} borderRadius='10' height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
    <VStack>
      <Box bg='#FEB2B2'  p={4} borderRadius={27} color='black'>
   <GiBowlOfRice/>
      </Box>
        
      <Text>
      Rice
        </Text>
       
        </VStack></Tab>
        </Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box w={105}>
    <Tab bgColor='white' w={100} borderRadius='10' height={116} _selected={{ color: 'white', bg: '#E53E3E' }}>
    <VStack>
      <Box bg='#FEB2B2' p={4} borderRadius={27} color='black'>

        <MdRiceBowl/>
      </Box>
      <Text>
      Curry
        </Text>
        </VStack>
  </Tab> 
    </Box>
    </SwiperSlide>
        </Swiper>

  </HStack>
  </Flex>
  </TabList>
  <Stack p={{base:0,lg:3}} >
 
  <TabPanels bgColor='#E2E8F0' >
    <TabPanel   mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}>
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
      {
          fooddata.map((fooditem)=>{
            return <Foodlist key={fooditem._id} fooditem={fooditem}/>
          })
      }
  </Grid>
    </TabPanel>
    <TabPanel mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}>
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
  {  fooddata.filter(fooditem=>fooditem.itemtype==='Chicken').length!==0?
              fooddata.map((fooditem)=>{
                return fooditem.itemtype==='Chicken' &&  
                 <Foodlist key={fooditem._id} fooditem={fooditem}/>
              }):<NoItem/>
}
</Grid>
    </TabPanel>
    <TabPanel mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}>
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
  {fooddata.filter(fooditem=>fooditem.itemtype==='Fruit').length!==0?
              fooddata.map((fooditem)=>{
                return fooditem.itemtype==='Fruit' &&  
                 <Foodlist key={fooditem._id} fooditem={fooditem}/>
              }):<NoItem/>
}

</Grid>
    </TabPanel>
    <TabPanel mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}>
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
  { fooddata.filter(fooditem=>fooditem.itemtype==='Softdrinks').length!==0?
              fooddata.map((fooditem)=>{
                return fooditem.itemtype==='Softdrinks' &&  
                 <Foodlist key={fooditem._id} fooditem={fooditem}/>
              }):<NoItem/>
}
</Grid>
    </TabPanel>

    <TabPanel mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}>
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
      {
              fooddata.filter(fooditem=>fooditem.itemtype==='Desserts').length!==0?
              fooddata.map((fooditem)=>{
                return fooditem.itemtype==='Desserts' &&  
                 <Foodlist key={fooditem._id} fooditem={fooditem}/>
              }):<NoItem/>
             
      }
</Grid>
    </TabPanel>
    <TabPanel mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}>
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
    { 
 fooddata.filter(fooditem=>fooditem.itemtype==='Icecreams').length!==0?
              fooddata.map((fooditem)=>{
                return fooditem.itemtype==='Icecreams' &&  
                 <Foodlist key={fooditem._id} fooditem={fooditem}/>
              }):<NoItem/>
}
</Grid>
    </TabPanel>
    <TabPanel mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}>
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
  { fooddata.filter(fooditem=>fooditem.itemtype==='Fish').length!==0?
              fooddata.map((fooditem)=>{
                return fooditem.itemtype==='Fish' &&  
                 <Foodlist key={fooditem._id} fooditem={fooditem}/>
              }):<NoItem/>
}
</Grid>
    </TabPanel>
    <TabPanel mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}> 
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
  { fooddata.filter(fooditem=>fooditem.itemtype==='Rice').length!==0?
              fooddata.map((fooditem)=>{
                return fooditem.itemtype==='Rice' &&  
                 <Foodlist key={fooditem._id} fooditem={fooditem}/>
              }):<NoItem/>
}
</Grid>
    </TabPanel>
    <TabPanel mt={{base:15,lg:26}} ml={{base:0,md:20,lg:9}}>
    <Grid justifyItems={{base:'center',md:'self-start'}}  templateColumns={{base:'repeat(1, 1fr)',md:'repeat(2, 1fr)',lg:'repeat(3,1fr)',xl:'repeat(4, 1fr)'}} rowGap={{base:6,md:24}} columnGap={1} >
  {  fooddata.filter(fooditem=>fooditem.itemtype==='Curry').length!==0?
              fooddata.map((fooditem)=>{
                return fooditem.itemtype==='Curry' &&  
                 <Foodlist key={fooditem._id} fooditem={fooditem}/>
              }):<NoItem/>
}
</Grid>
    </TabPanel>
  </TabPanels>

  </Stack>
</Tabs>
</Stack>

</>
  )
}
