import React ,{useState,useEffect} from 'react';
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup';
import Axios from 'axios';
import './feedback.scss'
import Header from '../../header/Header'


const Feedback = ({touched, errors, isSubmitting,status}) =>{
   const [farmers, setFarmers] = useState([]);
   useEffect(() => {
      status && setFarmers(farmers=>[...farmers, status])
   }, [status])
   return(
      <>
      <Header />
      <Form>
      <div className='container'>
         {touched.name && errors.name && <p className='error name'>{errors.name}</p>}
         <Field type='text' name='name' placeholder='Name' className='input'/>
         {touched.comment && errors.comment && <p className='error comment'>{errors.comment}</p>}
         <Field type='text' name='comment' placeholder='Comment' className='input'/>
         {touched.suggestion}
         <Field type='text' name='suggestion' placeholder='Suggestion' className='input'/>
         
         <button type='submit' className ='sign-up' disabled={isSubmitting}>Submit</button>
         {farmers.map((farm,index)=>
            <ul key={index}>
            <li>{farm.name}</li>
            <li>{farm.comment}</li>
            <li>{farm.suggestion}</li>
            </ul>)}
      </div>
      </Form>
      </>
   );
};

const FormikFeedback = withFormik({
  mapPropsToValues(values){
   return{
      name: values.name || '',
      comment: values.comment ||'',
      suggestion: values.suggestion ||''
};
},
validationSchema: Yup.object().shape({
   name: Yup.string().required("Please enter your name."),
   comment: Yup.string().required("Enter your comment."),
   suggestion: Yup.string().notRequired()
}), 
handleSubmit(values,{resetForm, setSubmitting, setStatus}){
   Axios.
   post('https://reqres.in/api/users/', values)
   .then(response =>{
      
      setStatus(response.data)
      resetForm();
      setSubmitting(false);
   })
   .catch(error=>console.log(error.response))
   
}


})(Feedback)

export default FormikFeedback;