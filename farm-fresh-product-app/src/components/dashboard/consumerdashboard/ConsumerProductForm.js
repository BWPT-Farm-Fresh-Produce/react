import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ProductForm = ({ values, touched, errors, status }) => {

  return (
    // <div>
    //   <p className='product-description'>{item.farm_name}</p>
    // </div>
    <div className='dropdown-form'>
      <Form>
        <Field className='form-boxSize' component='select' name='dropdownSize'>
          <option>Box Size:</option>
          <option value='small'>Small</option>
          <option value='regular'>Regular</option>
          <option value='family'>Family</option>
          <option value='neighborhood'>Neighborhood</option>
        </Field>
        {touched.dropdown && errors.dropdown && (
                <p>{errors.dropdown}</p>
            )}
        <Field className='form-boxFrequency' component='select' name='dropdownFrequency'>
          <option>Frequency:</option>
          <option value='weekly'>Weekly</option>
          <option value='everyOtherWeek'>Every Other Week</option>
          <option value='every3'>Every Three Weeks</option>
          <option value='every4'>Every Four Weeks</option>
        </Field>
        {touched.dropdown && errors.dropdown && (
                <p>{errors.dropdown}</p>
            )}
        <Field className='form-boxDelivery' component='select' name='dropdownDelivery'>
          <option>First Delivery Date:</option>
          <option value='overnight'>Overnight</option>
          <option value='nextWeek'>Next Week</option>
          <option value='inTwoWeeks'>In 2 Weeks</option>
        </Field>
        {touched.dropdown && errors.dropdown && (
                <p>{errors.dropdown}</p>
            )}
      </Form>
    </div>
  );
}
const FormikLoginForm = withFormik ({
  mapPropsToValues ({ dropdown }) {
      return {
          dropdown: dropdown || ""
      };
  },
  validationSchema: Yup.object().shape({
    dropdownSize: Yup.string().oneOf(['small', 'regular', 'family', 'neighborhood']).required('Kindly select a size.'),
    dropdownFrequency: Yup.string().oneOf(['weekly', 'everyOtherWeek', 'every3', 'every4']).required('Please select a frequency.'),
    dropdownDelivery: Yup.string().oneOf(['overnight', 'nextWeek', 'inTwoWeeks']).required('Delivery date required.')
  })
}) (ProductForm)
export default FormikLoginForm; 