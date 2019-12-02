import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
<<<<<<< HEAD
import { withRouter, NavLink } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import "../form.scss";
=======
import {withRouter, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
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
          <NavLink to="/customer-register">
            <button
              size="lg"
              className="custom-btn"
              onClick={event => toggleBackground(event)}
            >
              Register
            </button>
          </NavLink>
          <NavLink to="/customer-login">
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
      {/* <div className="imgcontainer">
        <img src={PersonImage} alt="Avatar" className="avatar" />
    </div> */}
<<<<<<< HEAD
      <div className="container">
        {touched.username && errors.username && (
          <p className="error username">{errors.username}</p>
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
          <p className="error email-customer">{errors.email}</p>
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

        {errors.city_id && touched.city_id && (
          <p className="error password city_id">{errors.city_id}</p>
        )}
        <label htmlFor="psw">
          <b>City ID</b>
        </label>
        <Field
          type="text"
          name="city_id"
          placeholder="Your city ID"
          className="input"
        />

        {errors.state_id && touched.state_id && (
          <p className="error password state_id">{errors.state_id}</p>
        )}
        <label htmlFor="psw">
          <b>State ID</b>
        </label>
        <Field
          type="text"
          name="state_id"
          placeholder="Your state ID"
          className="input"
        />

        {errors.password && touched.password && (
          <p className="error password-customer">{errors.password}</p>
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
=======
    <div className="container">
      { touched.username && errors.username && <p className='error username'>{errors.username}</p>}
      <label htmlFor="uname"><b>Username</b></label>     
      <div className='wrapper'>
        <FontAwesomeIcon icon="user" />      
        <Field type="text" name="username" placeholder="   username" className="input"/>
      </div>

      { touched.email && errors.email && <p className='error email-customer'>{errors.email}</p>}
      <label htmlFor="email"><b>Email</b></label>
      <div className="wrapper">
        <FontAwesomeIcon icon="envelope" /> 
        <Field type="email" name="email" placeholder="    email" className="input"/>
      </div>      
      

      {errors.city_id && touched.city_id && <p className='error password city_id'>{errors.city_id}</p>}
      <label htmlFor="psw"><b>City ID</b></label>      
      <div className="wrapper">
        <FontAwesomeIcon icon="id-card-alt" /> 
        <Field type="text" name="city_id" placeholder="    Your city ID" className="input"/> 
      </div>

      {errors.state_id && touched.state_id && <p className='error password state_id'>{errors.state_id}</p>}
      <label htmlFor="psw"><b>State ID</b></label>       
      <div className="wrapper">
        <FontAwesomeIcon icon="id-card" /> 
        <Field type="text" name="state_id" placeholder="    Your state ID" className="input"/>
      </div>

      {errors.password && touched.password && <p className='error password-customer'>{errors.password}</p>}
      <label htmlFor="psw"><b>Password</b></label>
      <div className="wrapper">
        <FontAwesomeIcon icon="key" /> 
        <Field type="password" name="password" placeholder="    password" className="input"/> 
      </div>

      <div className='sign-in-sign-up-button'>
        <button className='register' type='submit' variant="danger" size="lg">Register</button>
      </div>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
    
    { users.length>0 && <p className='success-msg'>{users[users.length-1].username} successfully signed up</p>}
     
   </div>
   </Form>
  )
};
>>>>>>> 3c3ed1ea53f19a677a7e0a2a2c950336acf71b2e

        {users.length > 0 && (
          <p className="success-msg">
            {users[users.length - 1].username} successfully signed up
          </p>
        )}
      </div>
    </Form>
  );
}

export default withRouter(
  withFormik({
    mapPropsToValues: values => {
      return {
        username: values.name || "",
        email: values.email || "",
        password: values.password || "",
        city_id: values.city_id || "",
        state_id: values.state_id || ""
      };
    },

    validationSchema: yup.object().shape({
      username: yup.string().required("Username is required"),
      email: yup.string().required("Email is required"),
      password: yup
        .string()
        .required()
        .min(3, "Should be at lease 8 characters"),
      city_id: yup.string().required("City ID is required"),
      state_id: yup.string().required("State ID is required")
    }),

    handleSubmit: (values, FormikBag) => {
      axios
        .post(
          "https://aqueous-ocean-41606.herokuapp.com/api/auth/shop/register",
          values
        )
        .then(response => {
          console.log(response.data.user);
          console.log("sign-up Line81", FormikBag);
          FormikBag.setStatus(response.data.user);
          FormikBag.resetForm({});
          const { token, user } = response.data;
          localStorage.setItem(
            "CUSTOMER_LOGIN_KEY",
            JSON.stringify({ token, id: user.id })
          );
          localStorage.removeItem("FARMER_LOGIN_KEY");
        })
        .catch(error => {
          console.log(typeof error);
          console.log(error.response.status);
          console.log(typeof error.response.status);
          if (error.response.status === 500) {
            // FormikBag.props.history.push('/loading');
            setTimeout(() => {
              FormikBag.props.history.push("/server-error");
              FormikBag.setStatus(error);
            });
          }
        });
    }
  })(Register)
);
