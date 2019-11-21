import axios from 'axios';
import { FARMER_LOGIN_KEY } from '../constants/Constant';

export const GETTING_PRODUCE_START = 'GETTING_PRODUCE_START';
export const GETTING_PRODUCE_SUCCESS = 'GETTING_PRODUCE_SUCCESS';
export const GETTING_PRODUCE_ERROR = 'GETTING_PRODUCE_ERROR';

export const ADDING_PRODUCE_START = 'ADDING_PRODUCE_START';
export const ADDING_PRODUCE_SUCCESS = 'ADDING_PRODUCE_SUCCESS';
export const ADDING_PRODUCE_ERROR = 'ADDING_PRODUCE_ERROR';

export const EDITING_PRODUCE_START = 'EDITING_PRODUCE_START';
export const EDITING_PRODUCE_SUCCESS = 'EDITING_PRODUCE_SUCCESS';
export const EDITING_PRODUCE_ERROR = 'EDITING_PRODUCE_ERROR';

export const DELETING_PRODUCE_START = 'DELETING_PRODUCE_START';
export const DELETING_PRODUCE_SUCCESS = 'DELETING_PRODUCE_SUCCESS';
export const DELETING_PRODUCE_ERROR = 'DELETING_PRODUCE_ERROR';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CATEGORIES_ERROR = 'SET_CATEGORIES_ERROR';


export function getFarmerProduce() {
   return (dispatch) => {
       dispatch({type:GETTING_PRODUCE_START});
      
   }
}

export const getProduceCategories = () => dispatch => {
    dispatch({ type: GETTING_PRODUCE_START })
    axios.get('https://aqueous-ocean-41606.herokuapp.com/api/farmers/produce/categories', {
        headers: {
            authorization: JSON.parse(localStorage.getItem(FARMER_LOGIN_KEY)).token,
        },
    })
        .then(res => dispatch({ type: SET_CATEGORIES, payload: res.data.categories }))
        .catch(err => dispatch({ type: SET_CATEGORIES_ERROR, payload: err.message }));
}