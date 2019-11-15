import React, {useState,useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {withRouter, NavLink} from 'react-router-dom';
import PersonImage from '../../../assets/images/person.jpg';
import axios from 'axios';
import * as yup from 'yup';
import '../Form.sass';

function Register (props){
  const {errors,touched, status}= props;   
  const [users, setUsers] = useState([]);  

  useEffect(() => {
    if(status) {
       setUsers([...users, status])
    }
  }, [status]);

 return(
   <Form>
    <div className='sign-up-sign-in-form'>
      <div className='nav-links'>
        <NavLink to='/'>
          <button  size="lg" className='custom-btn'>Register</button>
        </NavLink>
        <NavLink to='/login'>
           <button  size="lg" className='custom-btn'>Login</button>
        </NavLink>
      </div> 
    </div>
    <div className="imgcontainer">
            <img src={PersonImage} alt="Avatar" className="avatar" />
          </div>
    <div className="container">
      { touched.username && errors.username && <p className='error'>{errors.username}</p>}
      <label htmlFor="uname"><b>Username</b></label>
      <Field type="text" name="username" placeholder="username" className="input"/>
      
      {errors.password && touched.password && <p className='error password'>{errors.password}</p>}
      <label htmlFor="psw"><b>Password</b></label>
      <Field type="password" name="password" placeholder="password" className="input"/>    
      <div className='sign-in-sign-up-button'>
        <button className='sign-button' type='submit' variant="danger" size="lg">Register</button>
      </div>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
    
    { users.length>0 && <p className='success-msg'>{users[users.length-1].username} successfully signed up</p>}
     
   </div>
   </Form>
  )
};

export default withRouter(withFormik({
   mapPropsToValues: (values) => {
     return {
       username: values.name || '',      
       password: values.password || ''      
      
     }
   },
   validationSchema: yup.object().shape({
      username:yup.string().required("Username is required"),      
      password:yup.string().required() .min(3, 'Should be at lease 8 characters')         
   }),
   handleSubmit: (values, FormikBag) => {
      
      axios.post("https://bw-one-line-a-day.herokuapp.com/api/auth/register", values)
           .then( response => {              
              console.log(response.data.user)
              console.log('sign-up Line70', FormikBag);
              FormikBag.setStatus(response.data.user);
              FormikBag.props.history.push('/loading');
              setTimeout(() =>{
                FormikBag.props.history.push('/log-in')
              },2000);
             
           })
           .catch( error=> {
              console.log(typeof error)
              console.log(error.response.status)
              console.log(typeof error.response.status)
              if(error.response.status===500) {
                  FormikBag.props.history.push('/loading');
                setTimeout( () => {
                  FormikBag.props.history.push('/server-error');
                  FormikBag.setStatus(error);
                })                 
              }
           })
   }
})(Register));