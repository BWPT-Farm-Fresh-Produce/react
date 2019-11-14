import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

const FarmerSignup = ({ values, touched, errors }) => {
  return (
    <Form>
      
      <Field
        type="number"
        name="phoneNumber"
        placeholder='PhoneNumber'
        value={values.phoneNumber}
      />{" "}
      s
      <Field
        type="name"
        name="userName"
        placeholder="Username"
        value={values.userName}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
      />
      
      <Link to='/consumersignup'>Consumer Signup</Link>
      <Link to='/farmerlogin'>Login for Farmer instead</Link>
      

    </Form>
  );
};
const FormikFarmerLogin = withFormik({
   mapPropsToValues({phoneNumber, userName, password}){
      return{
         phoneNumber: phoneNumber ||'',
         userName: userName ||'',
         password: password ||'',
         
      }
   }, 
   validationSchema: Yup.object().shape({
      phoneNumber: Yup.string().min(10).required('Please enter an Phone Number'),
      userName: Yup.string().required('Please enter a UserName.'),
      password: Yup.string().min(7).required('Please enter a password')

   })
})(FarmerSignup)
   