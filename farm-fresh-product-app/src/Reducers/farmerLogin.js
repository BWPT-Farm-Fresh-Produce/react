import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR }  from '../actions/farmerLogin';

const initialState = {
    username: '',
    password: '',    
    isLoading: false,
    isLoaded:false,
    user:[],
    error:null
}

export function reducer(state=initialState, action) {
   switch(action.type) {
      case LOGIN_START:
        return{
          ...state,
          isLoading:true,        
        }
      case LOGIN_SUCCESS: 
         return {
           ...state,    
           isLoading:false,
           isLoaded:true,
           user:action.payload
         } 
      case LOGIN_ERROR:
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