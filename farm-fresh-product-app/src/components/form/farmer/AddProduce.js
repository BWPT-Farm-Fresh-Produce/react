import React from 'react'
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import '../addProduce/addproduce.scss';
const AddProduce = ({touched, errors}) =>{


   return(
      
      <Form>
         <div className='container'>
         { touched.name && errors.name && <p className='error name'>{errors.name}</p>}
         <Field type='text' name='name' placeholder='Name of Produce' className='input'/>
         {touched.quantity && errors.quantity && <p className='error quantity'>{errors.quantity}</p>}
         <Field type='text' name='quantity' placeholder='Quantity' className='input'/>
         {touched.price && errors.price && <p className='error price'>{errors.price}</p>}
         <Field type='text' name='price' placeholder='Price' className='input'/>
         {touched.category && errors.category && <p className='error id'>{errors.category}</p>}
         <Field type='text' name='category' placeholder='ID' className='input'/>
         <button className ='sign-up' type='submit'>Add</button>
         </div>
         </Form>
   );
}

const FormikAddProduce= withFormik({
  mapPropsToValues(values){
     return{
     name: values.name || '',
     quantity: values.quantity || '',
     price: values.price || '',
     category: values.category || '',
   }
  },
  validationSchema: Yup.object().shape({
     name: Yup.string().required('Enter a produce name.'),
     quantity: Yup.string().required('Enter a quantity'),
     price:  Yup.string().required('Enter the price'),
     category: Yup.string().required('Enter the ID')
  }),
  handleSubmit({resetForm}){
     resetForm();
  }
  
})(AddProduce)

export default FormikAddProduce;