import axios from 'axios';
import {FARMER_LOGIN_KEY} from '../constants/Constant';
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_START";
export const LOGIN_ERROR = "LOGIN_START";

export function farmerLogin(values,props) {
    return (dispatch) => {
          dispatch({type:LOGIN_START});
          console.log(values)
          console.log(props)
          axios.post("https://aqueous-ocean-41606.herokuapp.com/api/auth/farmer/login", values)
           .then( response => {              
              console.log(response.data);
              if(response) {
                const user = {token:response.data.token, id:response.data.user.id}
                window.localStorage.setItem(FARMER_LOGIN_KEY, JSON.stringify(user));
                dispatch({type:LOGIN_SUCCESS,payload:response.data.user});                
              }                         
              setTimeout(() =>{
                props.history.push('/farmer-dashboard');
              },200);
             
           })
           .catch( error=> {
              console.log(typeof error)
              console.log(error.response.status)
              console.log(typeof error.response.status)
              if(error.response.status===500) {
                  // FormikBag.props.history.push('/loading');
                setTimeout( () => {
                  props.history.push('/server-error');
                  dispatch({type:LOGIN_ERROR, payload:error});
                })                 
              }
           })    

    }
}

