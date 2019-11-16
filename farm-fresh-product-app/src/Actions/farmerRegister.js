import axios from 'axios';

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export function farmerRegister(props, user) {
    return (dispatch) => {
          dispatch({type:SIGN_UP_START});
          axios.post("https://farm-fresh-bw.herokuapp.com/api/auth/shop/register", user)
           .then( response => {              
              console.log(response.data.user)
              console.log('sign-up Line81', FormikBag);

              // FormikBag.setStatus(response.data.user);
              // FormikBag.resetForm({});
              props.history.push('/loading');
              setTimeout(() =>{
              props.history.push('/customer-login')
              },2000);
             
           })
           .catch( error=> {
              console.log(typeof error)
              console.log(error.response.status)
              console.log(typeof error.response.status)
              if(error.response.status===500) {
                  // FormikBag.props.history.push('/loading');
                setTimeout( () => {
                  props.history.push('/server-error');
                  dispatch({type:SIGN_UP_ERROR, payload:error});
                })                 
              }
           })    

    }
}

