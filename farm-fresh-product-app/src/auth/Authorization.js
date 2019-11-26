import axios from 'axios';
import { FARMER_LOGIN_KEY } from '../constants/Constant';

const {token} = JSON.parse(localStorage.getItem(FARMER_LOGIN_KEY));
export function axiosWithAuth(url) {
   return axios.create({
      baseURL: 'https://aqueous-ocean-41606.herokuapp.com',
      headers: {
         authorization: token
      }
   })
}