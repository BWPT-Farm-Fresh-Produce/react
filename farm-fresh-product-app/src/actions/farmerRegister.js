import axios from 'axios';

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export function farmerRegister(values,props) {
    return (dispatch) => {
          dispatch({type:SIGN_UP_START});         
          axios.post("https://aqueous-ocean-41606.herokuapp.com/api/auth/farmer/register", values)
           .then( response => {              
              console.log(response.data.user);
              props.history.push('/farmer-login');
           })           
           .catch( error=> {
              console.log(typeof error)
              console.log(error.response.status)
              console.log(typeof error.response.status)
              if(error.response.status===500) {
                  // FormikBag.props.history.push('/loading');               
                  props.history.push('/server-error');
                  dispatch({type:SIGN_UP_ERROR, payload:error});                              
              }
           })   

    }
}

