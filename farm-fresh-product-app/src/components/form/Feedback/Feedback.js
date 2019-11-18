import React from 'react';
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup';
const Feedback = ({isSubmitting}) =>{
   
   return(
      <Form>
         <Field type='text' name='name' placeholder='name'/>
         <Field type='text' name='comment' placeholder='Comment'/>
         <Field type='text' name='suggestion' placeholder='Suggestion'/>
         <button type='submit' disabled={isSubmitting}>Submit</button>
      </Form>
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
handleSubmit({resetForm, setSubmitting}){
resetForm();
setSubmitting(false);
}


})(Feedback)

export default FormikFeedback;