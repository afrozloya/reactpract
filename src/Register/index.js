import React, { Component } from "react";
import { Formik } from "formik";
import Form from "./form";
import * as Yup from 'yup'
import a8 from '../assets/images/a8.jpg'
import classes from './register.module.css'


class IndexForm extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {

    const values = { uname: "", email:"",  phoneno:"",  password:"",  cpassword:"" , age: "",  address:"",  gender:"", upload_img1: undefined };

    const validationSchema = Yup.object({
        uname: Yup.string("Enter your name")
        .required("Name is required"),
        email: Yup.string("Enter EMail")
        .required("EMail is required")
        .email("please give correct email...."),
        phoneno: Yup.string("Enter Phone No")
        .required("Phone No is required")
        .matches(/^0?[6-9]{1}[0-9]{9}$/, "please give correct phone no...."),
        password: Yup.string("Enter Password")
        .required("Password is required")
        .min(8, "Password must be 8 char long or more...")
        .matches(/[0-9]/, "please give atleaset one digit....")
        .matches(/[a-z]/, "please give atleaset one lower case....")
        .matches(/[A-Z]/, "please give atleaset one upper case....")
        .matches(/[^A-Za-z0-9 ]/, "please give atleaset one special symbol...."),
        cpassword: Yup.string("Enter Confirm Password")
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        age: Yup.number("")
        .min(18, "age should be more then 18")
        .max(80, "age should be less then 80")
        .required("Enter age"),
        address: Yup.string("Enter address")
        .max(100, "Address should be less then 100 char...")
        .required("Address is required"),
        gender: Yup.string("Enter Gender")
        .required("Gender is required"),
        // upload_img1: Yup.mixed() 
        // .test('fileSize', "File Size is too large", value => {
        //     console.log("====================")
        //     console.log(value);
        //     return (value.size <= 5242880);
        // })
        // .test('fileType', "Unsupported File Format", value => [".jpg"].includes(value.type) )
    })
    let mybg = {
      backgroundImage:`url(${a8})`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      // height: "500px"
      // // height: "100% !important"
    }
   return (
     <div className={classes.mybg2} style={mybg}>
          {/* <img src={a8} /> */}
           <Formik
             initialValues={values}
            // validateOnMount={true}
             validationSchema={validationSchema}             
           >
            {props =>  <Form {...props} />}
           </Formik>
    </div>           
   );
 }
}

export default IndexForm;
