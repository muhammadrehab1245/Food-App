
import * as Yup from "yup";

export const signupschema=Yup.object({
    fullname:Yup.string().required('Please Enter your name'),
    email:Yup.string().email().required('Please Enter Email Correctly'),
    password:Yup.string().min(4, "Password is too short - should be 4 characters minimum").required('Please Enter Password Correctly'),
    cpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Confirm password correctly').required('Please Enter Password Correctly')
})

