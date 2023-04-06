import React from 'react'
import { Divider, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { BsFacebook,BsLinkedin,BsInstagram,BsTwitter} from 'react-icons/bs';
import { SiGmail,SiYahoo} from 'react-icons/si';
import chef from '../images/chef.jpg'
export const Footers = () => {
  return (
    <VStack h='500px' pt={{base:6,lg:16}} bg="RGBA(0, 0, 0, 0.04)" align='self-start'>
    <Flex cursor='pointer'   justify={{base:'center',lg:'flex-start'}} pl={12} mb={{base:2,md:8}} w='100%'>
    <Flex >
  <Image _hover={{boxSize:'156px'}}
  boxSize={{base:'110px',lg:'145px'}}
  objectFit='cover'
    src={chef}
    borderRadius='full'
    alt='Cheflogo'
  />
  </Flex>
  <Flex pt={{base:9,lg:12}} pl={{base:3,md:8,lg:12}}>
  <Heading fontSize='2xl'>Bentilzone</Heading>
  </Flex>
  </Flex>
  <Divider borderColor='black' orientation='horizontal' />
  <Flex align={{base:'center',md:'self-start'}} direction={{base:'column',md:'row'}}  h={24} pl={9} pt={7} justify='space-between' w={{base:'100%',md:'98%'}}>
  <Flex >
    <Text>© 2022 Bentilzone™. All Rights Reserved.</Text>
    </Flex>
    <Flex mt={6} direction={{base:'column' ,sm:'row'}}  gap={7} spacing={10} fontSize='20'>
<BsFacebook cursor='pointer'/>
<BsLinkedin cursor='pointer'/>
<BsInstagram cursor='pointer'/>
<BsTwitter cursor='pointer'/>
<SiYahoo cursor='pointer'/>
<SiGmail cursor='pointer'/>
    </Flex>
  </Flex>
  </VStack>
  )
}
