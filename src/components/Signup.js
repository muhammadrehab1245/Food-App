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
import { signupschema } from '../signupschema'; // Assuming you have a validation schema defined
import { useNavigate } from 'react-router-dom'; // Accessing the 'useNavigate' hook for programmatic navigation in React Router
import Notecontext from '../context/Notecontext';

export const Signup = () => {
  const navigate=useNavigate()
  const context=useContext(Notecontext)
const {showtoast}=context
const initialValues={
  fullname:"",
    email: "",
    password: "",
    cpassword: "",
}
  // Using the 'useFormik' hook to handle form state, validation, and submission
const formik = useFormik({
  initialValues: initialValues,
  validationSchema: signupschema, // Assuming 'signupschema' is a defined validation schema
  onSubmit: async (values, action) => {

    // Making a POST request to the server for user signup
    const response = await fetch('http://localhost:5000/foodapp/user/usersignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: values.email, password: values.password, fullname: values.fullname }),
    });

    // Parsing the response as JSON
    const result = await response.json();

    // Handling the result of the signup attempt
    if (result.success) {
      // Storing the token in local storage upon successful signup
      localStorage.setItem('token', result.value);

      // Navigating to the home page after successful signup
      navigate('/');

      // Resetting the form using 'resetForm' from formik
      action.resetForm();

      // Displaying a success toast notification
      showtoast('Sign up successfully', 'success');
    } else {
      // Handling errors from the server response
      if (typeof (result) === 'object') {
        let str = 'Your password cannot contain ';
        for (let element = 0; element < result.length; element++) {
          str += element !== result.length - 1 ? `${result[element]},` : `and ${result[element]}`;
        }
        let strindex = str.lastIndexOf(',');
        showtoast(str.replace(str[strindex], ' '), 'warning');
      } else {
        // Displaying a warning toast notification with the error message
        showtoast(result, 'warning');
      }
    }
  },
});

        return (
            <Flex pb={34} direction='column' w={{base:'60%',md:'90%'}} align='center' pt={24}>
                  <form onSubmit={formik.handleSubmit}>
            <FormControl >
           <VStack spacing='35px'>
              <Box>
            <FormLabel >Full Name</FormLabel>
            <Input   id="fullname"
                name="fullname"
                type="text"
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                value={formik.values.fullname}
        
            w='154%' placeholder='Enter your Full Name'  />

            </Box>
            {formik.errors.fullname && formik.touched.fullname ? (
                      <Text color='orange' textAlign={'center'} fontSize='xs'>{formik.errors.fullname}</Text>
                    ) : null}
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
            <FormLabel>Confirm password</FormLabel>
            <Input id='cpassword'  name="cpassword" onChange={formik.handleChange}
               onBlur={formik.handleBlur}
                w='154%' placeholder='Confirm Password' type='password'   value={formik.values.cpassword}    />
            </Box>
            {formik.errors.cpassword && formik.touched.cpassword ? (
                      <Text color='orange'  textAlign={'center'} fontSize='xs'>{formik.errors.cpassword}</Text>
                    ) : null}
            <Box>
              <Button type='submit' colorScheme='orange' size='md'>
    Sign Up
  </Button>
  </Box>
              </VStack>

          </FormControl>
          </form>
          </Flex>
        )
      
}
