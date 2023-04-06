
import * as Yup from "yup";

export const loginschema=Yup.object({
    email:Yup.string().email().required('Please Enter Email Correctly'),
    password:Yup.string().required('Please Enter Password Correctly'),
})

