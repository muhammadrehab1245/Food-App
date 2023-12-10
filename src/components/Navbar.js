import React,{useContext, useRef} from "react";
import { useFormik } from "formik";
import {
  Box,
  Flex,
  Heading,
  Image,
  HStack,
  ListItem,
  List,
  Spacer,
  Badge,
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
  VStack,
  Input,
  FormControl,
  Textarea,

} from "@chakra-ui/react";
import chef from "../images/chef.jpg";
import cartempty from "../images/emptycart.jpg";
import { FaShoppingCart, FaArrowCircleRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineContactPage} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";
import { NavDrawer } from "./NavDrawer";
import Notecontext from "../context/Notecontext";
import { contactschema } from "../contactschema";
export const Navbar = () => {
  const context=useContext(Notecontext)
  const {order}=context
  const navigate = useNavigate();

  // define an initial values which are blank as default
  const initialValues={
    name:"",
    email: "",
    subject: "",
    message:""
}

// using validation using formik
  const formik =useFormik({
      initialValues: initialValues,
      validationSchema: contactschema,
     onSubmit: (values,action) => {
      action.resetForm()
    }
    })


    // define this for logic of opening and closing drawer
  const {
    isOpen: Navisopen,
    onOpen: Navonopen,
    onClose: Navclose,
  } = useDisclosure();
  const {
    isOpen: Shopisopen,
    onOpen: Shoponopen,
    onClose: Shopclose,
  } = useDisclosure();
  const {
    isOpen: Contactisopen,
    onOpen: Contactonopen,
    onClose: Contactclose,
  } = useDisclosure();

  // use ref button for closing/opening for each drawer
  const btnRef = useRef();

  // logout function
  const Logout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>
    <Drawer
    closeOnOverlayClick={false}
    blockScrollOnMount={false}
    size={{base:'xl',lg:'sm',xl:'xs'}}
        isOpen={Contactisopen}
        placement='left'
        onClose={Contactclose}
        finalFocusRef={btnRef}
      >
        <DrawerContent>
      
          <DrawerHeader h={46} >
            <HStack>
            <MdOutlineContactPage color='#FC8181'/>
            <Text fontWeight={100} fontSize='md'>CONTACT US</Text>
            </HStack>
            </DrawerHeader>
          <DrawerCloseButton>

<BiArrowBack fontSize='20'/>
</DrawerCloseButton>
          <DrawerBody >
       
            <Flex mt={5} justifyContent='center'>
          <Image  boxSize={{base:'140px',lg:'97px',xl:'76px'}} src={cartempty}></Image>
          </Flex>
              <form onSubmit={formik.handleSubmit}>
            <FormControl isRequired>
            <VStack mt={6} spacing={7} >
              <Box w='100%'>
  <Input onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                value={formik.values.name} type='name' id="name" name='name' bgColor='white' placeholder='First name' />
  </Box>
  <Box w='100%'>
  <Input onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                value={formik.values.email} type='email' id="email" name='email'bgColor='white' placeholder='Email ID' />
  </Box>
  <Box w='100%'>
  <Input onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                value={formik.values.subject} type='name' id="subject" name='subject' bgColor='white' placeholder='Subject' />
  </Box>
  <Box w='100%'>
  <Textarea onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                value={formik.values.message} id="message" name='message'  cols='32' rows="7" bgColor='white' placeholder='Message' />
  </Box>
            <Button type='submit' w='full' colorScheme='orange'>Send message</Button>
</VStack>
</FormControl> 
  </form>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
      <CartDrawer btnRef={btnRef} Shopisopen={Shopisopen} Shopclose={Shopclose}/>
<NavDrawer
Logout={Logout}
order={order}
 Navisopen={Navisopen} 
 Navclose={Navclose}  
 btnRef={btnRef} 
 Shoponopen={Shoponopen} 
 Contactonopen={Contactonopen}
 />
      <Flex     opacity={0.8} position="fixed" zIndex={1} 
  w="100%" bg="white"  h={{ base: "60px", lg: "85px" }} color="black">
        <HStack 
          w={{ base: "100%", lg: "auto" }}
          paddingtop={{ base: "0px", lg: "10px" }}
          paddingLeft={{ base: "77px", lg: "43px" }}
        >
            <Link  to="/">
          <Box w={{ base: "63vw", lg: "34vw" }}  >
            <HStack
              display="flex"
              justify={{ base: "flex-start",sm:'center', lg: "flex-start" }}
            >
              <Image
              _hover={{boxSize:'47px'}} 
                borderRadius="full"
                boxSize="32px"
  
                src={chef}
                alt="cheflogo"
              />
              <Heading fontSize="23px">Bentilzone</Heading>
            </HStack>
          </Box>
            </Link>
          <Spacer />
          <Box
       
            w={{ base: "auto", lg: "37vw" }}
          >
            <List
              display={{ base: "none", lg: "flex" }}
              justifyContent="center"
            >
              <HStack spacing={{ base: 0, lg: "6" }}>
                <ListItem cursor='pointer' _hover={{fontSize:'20px'}}>
                  <Link to="/">Home</Link>
                </ListItem>
                <ListItem cursor='pointer' _hover={{fontSize:'20px'}}>
                  <Link to="/menu">Menu</Link>
                </ListItem  >
                <ListItem _hover={{fontSize:'20px'}} cursor='pointer' ref={btnRef} onClick={Contactonopen}>Contact us</ListItem>
           {   localStorage.getItem('token') &&  
           <>
           <Button _hover={{fontSize:'30px'}}
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
                  position="relative"
                  bottom="10px"
                  right="31px"
                  border="2px solid black"
                  color="white"
                  bgColor="	#E60026"
                >
                  {order.length}
                  </Badge> 
                  </>
                  }
              </HStack>
            </List>
          </Box>
          <Flex
            w={{ base: "13vw", md:'20vw' ,lg: "22vw" }}
            gap={2}
            display="flex"
            justify="end"
         
          >
            
            { // if not login then option of signup/login
        
            !localStorage.getItem('token')?
            <>
                 <Link to="/login" >
            <Button  _hover={{p:'20px'}} 
              bgColor="whiteAlpha.100"
              color="RGBA(0, 0, 0, 0.92)"
              colorScheme="whiteAlpha.100"
              border="1px solid #A0AEC0"
              h="33px"
              display={{ base: "none", md:"flex" }}
              leftIcon={<FaArrowCircleRight  color="green" />}
            >
       
              <Text fontSize='sm'>Login</Text>
            </Button>
            </Link>
                 <Link to="/signup" >
            <Button  _hover={{p:'20px'}} 
              bgColor="whiteAlpha.100"
              color="RGBA(0, 0, 0, 0.92)"
              colorScheme="whiteAlpha.100"
              border="1px solid #A0AEC0"
       display={{ base: "none", md:"flex" }}
              h="33px"
              leftIcon={<FaArrowCircleRight  color="green" />}
            >
       
              <Text fontSize='sm'>Sign up</Text>
            </Button>
            </Link>
            </>
            :
            <Link to="/login" >
       <Button
       onClick={Logout}
         _hover={{p:'20px'}} 
         bgColor="whiteAlpha.100"
         color="RGBA(0, 0, 0, 0.92)"
         colorScheme="whiteAlpha.100"
         border="1px solid #A0AEC0"
         display={{ base: "none", md:"flex" }}
         h="33px"
         leftIcon={<FaArrowCircleRight  color="green" />}
       >
  
         <Text fontSize='sm'>Logout</Text>
       </Button>
       </Link>
       
            
            }
          </Flex>
          <Button
            position="absolute"
            left={0}
            display={{ base: "flex", lg: "none" }}
            colorScheme="orange"
            ref={btnRef}
            onClick={Navonopen}
          >
            <RxHamburgerMenu />
          </Button>
        </HStack>
      </Flex>
    </>
  );
};
