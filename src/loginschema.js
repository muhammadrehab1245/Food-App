
import * as Yup from "yup";

export const loginschema=Yup.object({
    email:Yup.string().email('Please Enter Email Correctly').required('Please Enter Email'),
    password:Yup.string().required('Please Enter Password'),
})

