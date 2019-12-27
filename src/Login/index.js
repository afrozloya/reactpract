import React, { Component } from "react";
import { Formik } from "formik";
import Form from "./form";
import * as Yup from 'yup'


class IndexForm extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {

    const values = { email: "", password: "" };

    const validationSchema = Yup.object({
        email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
        password: Yup.string("")
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password")
    })

   return (
           <Formik
             initialValues={values}
            validateOnMount={true}
             validationSchema={validationSchema}             
           >
            {props =>  <Form {...props} />}
           </Formik>
   );
 }
}

export default IndexForm;
