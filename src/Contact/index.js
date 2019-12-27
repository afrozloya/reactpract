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

    const values = { uname: "", age: "", phoneno:"" };

    const validationSchema = Yup.object({
        uname: Yup.string("Enter your name")
        .required("Name is required"),
        age: Yup.number("")
        .min(18, "age should be more then 18")
        .max(80, "age should be less then 80")
        .required("Enter age")
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
