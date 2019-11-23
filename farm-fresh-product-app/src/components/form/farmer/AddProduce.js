import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "../../header/Header";
import { connect } from "react-redux";
import { getProduceCategories } from "../../../actions/farmerProduce";
import Load from "../../load/Load";
import "./addproduce.scss";

const AddProduce = ({
  handleChange,
  touched,
  errors,
  status,
  isSubmitting,
  produceCategories,
  farms,
  getProduceCategories: innerGetProduceCategories
}) => {
  const [farmItems, setFarmItems] = useState([]);
  useEffect(() => {
    if (produceCategories) return;
    innerGetProduceCategories();
  }, [innerGetProduceCategories, produceCategories]);
  useEffect(() => {
    status && setFarmItems(farmItems => [...farmItems, status]);
  }, [status]);
  return (
    <>
      {produceCategories && farms ? (
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
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input"
            />
            {touched.price && errors.price && (
              <p className="error price">{errors.price}</p>
            )}
            <Field
              type="number"
              name="price"
              placeholder="Price"
              className="input"
            />
            {touched.category && errors.category && (
              <p className="error id">{errors.category}</p>
            )}
            <select
              name="category_id"
              placeholder="Select Category"
              className="input"
              onChange={handleChange}
            >
              <option value="" label="Select Category" />
              {produceCategories.map(category => (
                <option
                  key={category.id}
                  value={category.id}
                  label={category.name}
                />
              ))}
            </select>
            <button 
             className="add-item" 
             type="submit" 
             style={{width:'90%', padding: '7px 28px', height: '40px', marginTop:'25px'}}
             disabled={isSubmitting}>
              Add Item
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
      category_id: values.category_id || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Enter a produce name."),
    quantity: Yup.number().required("Enter a quantity"),
    price: Yup.number().required("Enter the price"),
    category_id: Yup.number().required("Enter the ID")
  }),
  handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
    //   const farmid = props.params.match.id;
    axios
      .post(
        `https://aqueous-ocean-41606.herokuapp.com/api/farmers/produce/:farmId`,
        { ...values, category_id: Number(values.category_id) },
        {
          headers: {
            authorization: JSON.parse(localStorage.getItem("FARMER_LOGIN_KEY"))
              .token
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
})(AddProduce);

const mapStateToProps = ({ farmProduce, farmFarm }) => {
  return {
    produceCategories: farmProduce.produceCategories,
    farms: farmFarm.farms
  };
};

export default connect(mapStateToProps, { getProduceCategories })(
  FormikAddProduce
);
