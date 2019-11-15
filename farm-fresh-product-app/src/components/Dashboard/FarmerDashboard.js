import React from 'react';
import {withFormik, Form, Field} from 'formik'

const FarmerDashboard = () => {
   return(
      <div className='farmerdashboard'>
      <h2>Farmer's Dashboard</h2>
      <h3>Produce</h3>
      <Form>
         <label htmlFor="produce">Produce</label>
         <Field className='produce' type='text' name='produce' placeholder='Produce Name'/>
         <label htmlFor="qty">Quantity</label>
         <Field className='qty' type='number' name='quantity' placeholder='Quantity'/>
         <label htmlFor="org">Organic</label>
         <Field className='organic' type='checkbox' name='organic' />
         <label htmlFor="nongmo">Non Gmo</label>
         <Field className='nonGmo' type='checkbox' name='nonGmo'/>
      </Form>
   </div>
   );
},

const FormikFarmDashboard = withFormik({
   mapPropsToValues(values){
     return{ 
        produce: values.produce || '',
        quantity: values.quantity || '',
        organic: values.organic || '',

   }

   }
})
