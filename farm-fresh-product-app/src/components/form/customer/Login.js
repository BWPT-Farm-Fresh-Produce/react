import React, {useState,useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {withRouter, NavLink} from 'react-router-dom';
import PersonImage from '../../../assets/images/person.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import * as yup from 'yup';
import './form.scss';

function Login (props){
  const {errors,touched, status}= props;   
  const [users, setUsers] = useState([]); 
  const [isBackgroundChanged, setIsBackgroundChanged] = useState(false); 

  useEffect(() => {
    if(status) {
       setUsers([...users, status])
    }
  }, [status,users]);

  const toggleBackground = (event) => {
    if(!isBackgroundChanged) {
        event.target.style.backgroundColor = '#006400';
        event.target.style.color = '#FFFF00';
    } else {
       event.target.style.backgroundColor = '#4CAF50';
       event.target.style.color = '#FFFFFF';
    }
       setIsBackgroundChanged(!isBackgroundChanged);
  }

 return(
   <Form>
    <div className='sign-up-sign-in-form'>
      <div className='nav-links'>
        <NavLink to='/customer-register'>
          <button  
          size="lg" 
          className='custom-btn register'
          onClick={(event) => toggleBackground(event)}>Register</button>
        </NavLink>
        <NavLink to='/customer-login'>
           <button  
           size="lg" 
           className='custom-btn login'
           onClick={(event) => toggleBackground(event)}>Login</button>
        </NavLink>
      </div> 
    </div>
    <div className="imgcontainer">
            <img src={PersonImage} alt="Avatar" className="avatar" />
          </div>
    <div className="container">
      { touched.username && errors.username && <p className='error'>{errors.username}</p>}
      <label htmlFor="uname"><b>Username</b></label>      
      <div className='wrapper'>
        <FontAwesomeIcon icon="user" />      
        <Field type="text" name="username" placeholder="   username" className="input"/>
      </div>
      
      {errors.password && touched.password && <p className='error login-password'>{errors.password}</p>}
      <label htmlFor="psw"><b>Password</b></label>
      <div className="wrapper">
        <FontAwesomeIcon icon="key" /> 
        <Field type="password" name="password" placeholder="    password" className="input"/> 
      </div>    
      <div className='sign-in-sign-up-button'>
        <button className='login-button' type='submit' variant="danger" size="lg">Login</button>
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
      password:yup.string().required().min(3, 'Should be at lease 8 characters')         
   }),
   handleSubmit: (values, FormikBag) => {
      
      axios.post("https://aqueous-ocean-41606.herokuapp.com/api/auth/shop/login", values)
           .then( response => {              
              console.log(response.data.user)
              console.log('sign-up Line70', FormikBag);
              FormikBag.setStatus(response.data.user);
              FormikBag.props.history.push('/loading');
              setTimeout(() =>{
                FormikBag.props.history.push('/customer-dashboard');
              },1400);
             
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
})(Login));