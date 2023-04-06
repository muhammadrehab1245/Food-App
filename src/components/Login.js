import React from 'react'
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
import { loginschema } from '../loginschema';

export const Login = () => {
const initialValues={
    email: "",
    password: "",
}
  const formik =useFormik({
      initialValues: initialValues,
      validationSchema: loginschema,
     onSubmit: (values,action) => {
      alert(JSON.stringify(values))
      action.resetForm()
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
            <Box>
            <FormLabel>Password</FormLabel>
            <Input id='password'  name="password" onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                w='154%' placeholder='Enter your Password' type='password'   value={formik.values.password}    />
            </Box>
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
