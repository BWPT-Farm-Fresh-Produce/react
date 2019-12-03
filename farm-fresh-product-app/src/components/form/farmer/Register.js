import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
<<<<<<< HEAD
import { withRouter, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { farmerRegister } from "../../../actions/farmerRegister";
import PersonImage from "../../../assets/images/person.png";
import * as yup from "yup";
import "../form.scss";
=======
import {withRouter, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { farmerRegister } from '../../../actions/farmerRegister';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PersonImage from '../../../assets/images/person.png';
import * as yup from 'yup';
import './form.scss';
>>>>>>> 3c3ed1ea53f19a677a7e0a2a2c950336acf71b2e

function Register(props) {
  const { errors, touched, status } = props;
  const [users, setUsers] = useState([]);
  const [isBackgroundChanged, setIsBackgroundChanged] = useState(false);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);
<<<<<<< HEAD
  const toggleBackground = event => {
    if (!isBackgroundChanged) {
      event.target.style.backgroundColor = "#006400";
      event.target.style.color = "#FFFF00";
    } else {
      event.target.style.backgroundColor = "#4CAF50";
      event.target.style.color = "#FFFFFF";
    }
    setIsBackgroundChanged(!isBackgroundChanged);
  };
  return (
    <Form>
      <div className="sign-up-sign-in-form">
        <div className="nav-links">
          <NavLink to="/">
            <button
              size="lg"
              className="custom-btn"
              onClick={event => toggleBackground(event)}
            >
              Register
            </button>
          </NavLink>
          <NavLink to="/farmer-login">
            <button
              size="lg"
              className="custom-btn"
              onClick={event => toggleBackground(event)}
            >
              Login
            </button>
          </NavLink>
        </div>
      </div>
      <div className="imgcontainer">
        <img src={PersonImage} alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <Field
          type="text"
          name="username"
          placeholder="username"
          className="input"
        />

        {touched.email && errors.email && (
          <p className="error email">{errors.email}</p>
        )}
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <Field
          type="email"
          name="email"
          placeholder="email"
          className="input"
        />
=======
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
        <NavLink to='/'>
          <button  
           size="lg"
           className='custom-btn'
           onClick={(event) => toggleBackground(event)}>Register</button>
        </NavLink>
        <NavLink to='/farmer-login'>
           <button  
           size="lg" 
           className='custom-btn'
           onClick={(event) => toggleBackground(event)}>Login</button>
        </NavLink>
      </div> 
    </div>
    <div className="imgcontainer">
            <img src={PersonImage} alt="Avatar" className="avatar" />
          </div>
    <div className="container">
      { touched.username && errors.username && <p className='error' id='reg-login'>{errors.username}</p>}
      <label htmlFor="uname"><b>Username</b></label>
      <div className='wrapper'>
        <FontAwesomeIcon icon="user" className='reg-user' />      
        <Field type="text" name="username" placeholder="username" className="input" id="reg-input"/>
      </div>

      { touched.email && errors.email && <p className='error' id='reg-email'>{errors.email}</p>}
      <label htmlFor="email"><b>Email</b></label>
      <div className="wrapper">
        <FontAwesomeIcon icon="envelope" className='reg-email'/> 
        <Field type="email" name="email" placeholder="email" className="input"id="reg-input" />
      </div>
      
      {errors.password && touched.password && <p className='error' id='reg-password'>{errors.password}</p>}
      <label htmlFor="psw"><b>Password</b></label>
      <div className="wrapper">
        <FontAwesomeIcon icon="key" className='reg-password'/> 
        <Field type="password" name="password" placeholder="password" className="input"id="reg-input" /> 
      </div>
>>>>>>> 3c3ed1ea53f19a677a7e0a2a2c950336acf71b2e

        {errors.password && touched.password && (
          <p className="error password">{errors.password}</p>
        )}
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <Field
          type="password"
          name="password"
          placeholder="password"
          className="input"
        />

        <div className="sign-in-sign-up-button">
          <button
            className="sign-button"
            type="submit"
            variant="danger"
            size="lg"
          >
            Register
          </button>
        </div>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
        <Link to="customer-register">
          Not a farmer? Click here to register as a customer.
        </Link>
        {users.length > 0 && (
          <p className="success-msg">
            {users[users.length - 1].username} successfully signed up
          </p>
        )}
      </div>
    </Form>
  );
}

const farmerRegisterForm = withRouter(
  withFormik({
    mapPropsToValues: values => {
      return {
        username: values.name || "",
        email: values.email || "",
        password: values.password || ""
      };
    },

    validationSchema: yup.object().shape({
      username: yup.string().required("Username is required"),
      email: yup.string().required("Email is required"),
      password: yup
        .string()
        .required()
        .min(3, "Should be at lease 8 characters")
    }),

    handleSubmit: (values, { props, ...actions }) => {
      props.farmerRegister(values, props);
      props.history.push("/loading");
      const { resetForm } = { ...actions };
      resetForm();
    }
  })(Register)
);

const mapDispatchToProps = {
  farmerRegister
};

function mapStateToProps(state) {
  return {
    isLoading: state.farmRegister.isLoading,
    isLoaded: state.farmRegister.isLoaded
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(farmerRegisterForm);
