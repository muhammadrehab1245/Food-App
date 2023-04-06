import * as Yup from "yup";

export const contactschema=Yup.object({
    name:Yup.string().required('Please Enter Name Correctly'),
    email:Yup.string().email().required('Please Enter Email Correctly'),
    subject:Yup.string().required('Please Enter Subject Correctly'),
    message:Yup.string().required('Please Enter Message Correctly'),
})

