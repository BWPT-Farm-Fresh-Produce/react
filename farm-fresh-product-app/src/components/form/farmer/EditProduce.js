import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import {connect} from 'react-redux';
import * as Yup from "yup";
import "./addproduce.scss";
import axios from "axios";

const EditProduce = (props) => {
  const { touched, errors, status, isSubmitting ,produce} = props;
  const [farmItems, setFarmItems] = useState([]);
  useEffect(() => {
    status && setFarmItems(farmItems => [...farmItems, status]);
  }, [status]);
  console.log(produce)
  return (
    <>
      <Form className="edit-produce">
        <h3>Edit Produce</h3>
        <div className="container">
          {touched.name && errors.name && (
            <p className="error name">{errors.name}</p>
          )}
          <Field
            type="text"
            name="name"
            placeholder={produce.name}
            className="input"
          />
          {touched.quantity && errors.quantity && (
            <p className="error quantity">{errors.quantity}</p>
          )}
          <Field
            type="text"
            name="quantity"
            placeholder={produce.quantity}
            className="input"
          />
          {touched.price && errors.price && (
            <p className="error price">{errors.price}</p>
          )}
          <Field
            type="text"
            name="price"
            placeholder={produce.price}
            className="input"
          />
          {touched.category && errors.category && (
            <p className="error id">{errors.category}</p>
          )}
          <Field
            type="text"
            name="category"
            placeholder={produce.id}
            className="input"
          />
          <button className="edit-item" type="submit" disabled={isSubmitting}>	         
            Update Produce
             
          </button>
        </div>
      </Form>
    </>
  );
};

const FormikEditProduce = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      quantity: values.quantity || "",
      price: values.price || "",
      category: values.category || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Enter a produce name."),
    quantity: Yup.string().required("Enter a quantity"),
    price: Yup.string().required("Enter the price"),
    category: Yup.string().required("Enter the ID")
  }),
  handleSubmit(values, { props, resetForm, setStatus, setSubmitting }) {
    //   const farmid = props.params.match.id;

    axios
      .put(
        `https://aqueous-ocean-41606.herokuapp.com/api/farmers/produce/${props.produce.farm_id}/${props.produce.category_id}`, values,
        {
          headers: {
            authorization: JSON.parse(localStorage.getItem("FARMER_LOGIN_KEY")).token
           
          }
        }
      )
      .then(response => {
        console.log(response);
        setStatus(response.data);
        resetForm();
        setSubmitting(false);
      })
      .catch(error => {
        console.log(error);
      });
  }
})(EditProduce);

function mapStateToProps(state) {
   return {
      produce:state.farmProduce.produceItems
   }
}

export default connect(mapStateToProps,null)(FormikEditProduce);
