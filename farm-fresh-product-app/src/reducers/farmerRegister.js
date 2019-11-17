import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR }  from '../actions/farmerRegister';

const initialState = {
    username: '',
    password: '',
    email: '',
    isLoading: false,
    isLoaded:false,
    error:null
}

export default function farmerRegister(state=initialState, action) {
   switch(action.type) {
      case SIGN_UP_START:
        return{
          ...state,
          isLoading:true,        
        }
      case SIGN_UP_SUCCESS: 
         return {
           ...state,    
           isLoading:false,
           isLoaded:true
         } 
      case SIGN_UP_ERROR:
        return {
          ...state, 
          isLoading:false,
          isLoaded:false,
          error: action.payload
        }   
      default:
        return state;
   }
}