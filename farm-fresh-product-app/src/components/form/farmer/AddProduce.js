import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./addproduce.scss";
import axios from "axios";
import Header from "../../header/Header";
import { connect } from "react-redux";
import { getProduceCategories } from "../../../actions/farmerProduce";
import Load from "../../load/Load";
const AddProduce = ({
  handleChange,
  touched,
  errors,
  status,
  isSubmitting,
  ...props
}) => {
  console.log(props);
  const [farmItems, setFarmItems] = useState([]);
  useEffect(() => {
    if (props.produceCategories) return;
    props.getProduceCategories();
  }, []);
  useEffect(() => {
    status && setFarmItems(farmItems => [...farmItems, status]);
  }, [status]);
  return (
    <>
      {props.produceCategories ? (
        <Form>
          <h3>Add Produce</h3>
          <div className="container">
            {touched.name && errors.name && (
              <p className="error name">{errors.name}</p>
            )}
            <Field
              type="text"
              name="name"
              placeholder="Name of Produce"
              className="input"
            />
            {touched.quantity && errors.quantity && (
              <p className="error quantity">{errors.quantity}</p>
            )}
            <Field
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input"
            />
            {touched.price && errors.price && (
              <p className="error price">{errors.price}</p>
            )}
            <Field
              type="text"
              name="price"
              placeholder="Price"
              className="input"
            />
            {touched.category && errors.category && (
              <p className="error id">{errors.category}</p>
            )}
            <select
              name="category"
              placeholder="Select Category"
              className="input"
              onChange={handleChange}
            >
              <option value="" label="Select Category" />
              {props.produceCategories.map(category => (
                <option
                  key={category.id}
                  value={category.id}
                  label={category.name}
                />
              ))}
            </select>
            <button className="sign-up" type="submit" disabled={isSubmitting}>
              Add
            </button>
          </div>
        </Form>
      ) : (
        <Load />
      )}
    </>
  );
};

const FormikAddProduce = withFormik({
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
  handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
    //   const farmid = props.params.match.id;
    console.log(values);
    //   axios
    //   .post(`https://aqueous-ocean-41606.herokuapp.com/api/farmers/produce/:farmId`,{
    //      headers: {
    //       authorization: localStorage.getItem('token'),
    //       values
    // }})
    //   .then(response=>{
    //      console.log(response);
    //      setStatus(response.data)
    //      resetForm();
    //      setSubmitting(false);
    //   })
    //   .catch(error=>{
    //    console.log(error)
    //   })
  }
})(AddProduce);

const mapStateToProps = ({ farmProduce }) => {
  return {
    produceCategories: farmProduce.produceCategories
  };
};

export default connect(mapStateToProps, { getProduceCategories })(
  FormikAddProduce
);
