import axios from 'axios';
import { FARMER_LOGIN_KEY } from '../constants/Constant';

export const GETTING_FARM_START = 'GETTING_FARM_START';
export const GETTING_FARM_SUCCESS = 'GETTING_FARM_SUCCESS';
export const GETTING_FARM_ERROR = 'GETTING_FARM_ERROR';

export const ADDING_FARM_START = 'ADDING_FARM_START';
export const ADDING_FARM_SUCCESS = 'ADDING_FARM_SUCCESS';
export const ADDING_FARM_ERROR = 'ADDING_FARM_ERROR';

export const EDITING_FARM_START = 'EDITING_FARM_START';
export const EDITING_FARM_SUCCESS = 'EDITING_FARM_SUCCESS';
export const EDITING_FARM_ERROR = 'EDITING_FARM_ERROR';

export const DELETING_FARM_START = 'DELETING_FARM_START';
export const DELETING_FARM_SUCCESS = 'DELETING_FARM_SUCCESS';
export const DELETING_FARM_ERROR = 'DELETING_FARM_ERROR';
const farmerId = JSON.parse(localStorage.getItem(FARMER_LOGIN_KEY)).id;

export function getAllFarms(farmerId) {
   return (dispatch) => {
        dispatch({type:GETTING_FARM_START});
        axios.get(`https://aqueous-ocean-41606.herokuapp.com/api/farmer/${farmerId}/farms`)
             .then( response => {
                 console.log(response)
             })
             .catch( err => {
                 console.log(err)
             })
     }
}

export function addFarmerFarm(farm) {   
   const headers = {'Authorization':JSON.parse(localStorage.getItem(FARMER_LOGIN_KEY)).token}
   console.log('working now')
   console.log(farmerId);
   console.log(headers)
   console.log(farm);
   return (dispatch) => {
       dispatch({type:ADDING_FARM_START});
       axios.post(`https://aqueous-ocean-41606.herokuapp.com/api/farms/${farmerId}`,farm, {headers})
            .then( response => {
               console.log(response);
            })
            .catch( error => {
               console.log(error);
            })       
   }
}