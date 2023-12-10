import React, { useContext } from 'react'
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { loginschema } from '../loginschema';
import { useNavigate } from 'react-router-dom';
import Notecontext from '../context/Notecontext';
export const Login = () => {
  const navigate = useNavigate();
  const context=useContext(Notecontext)
  const {showtoast}=context

  // use initial values 
  const initialValues={
    fullname:"",
      email: "",
      password: "",
      cpassword: "",
  }
  /// built in validation same  as signup
    const formik =useFormik({
        initialValues: initialValues,
        validationSchema: loginschema,
       onSubmit: async (values,action,error) => {
      //  alert(JSON.stringify(values))
        const response = await fetch('http://localhost:5000/foodapp/user/userlogin', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      if(result.success){
        localStorage.setItem('token',result.value)
        navigate('/')
        showtoast('Login successfully','success')
    }
    else{
      showtoast(result.value,'warning')
    }
      }
      })
  return (
    <Flex pb={34} direction='column' w={{base:'60%',md:'90%'}} align='center' pt={24}>
    <form onSubmit={formik.handleSubmit}>
<FormControl >
<VStack spacing='35px'>
<Box>
<FormLabel >Email</FormLabel>
<Input   id="email"
  name="email"
  type="email"
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}
  value={formik.values.email}

w='154%' placeholder='Enter your Email'  />

</Box>
{formik.errors.email && formik.touched.email ? (
        <Text color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.email}</Text>
      ) : null}
<Box>
<FormLabel>Password</FormLabel>
<Input id='password'  name="password" onChange={formik.handleChange}
 onBlur={formik.handleBlur}
  w='154%' placeholder='Enter your Password' type='password'   value={formik.values.password}    />
</Box>
{formik.errors.password && formik.touched.password ? (
        <Text color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.password}</Text>
      ) : null}

<Box>
<Button type='submit' colorScheme='orange' size='md'>
Login
</Button>
</Box>
</VStack>

</FormControl>
</form>
</Flex>
  )
}
