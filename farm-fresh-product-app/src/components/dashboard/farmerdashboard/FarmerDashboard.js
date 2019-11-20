import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import Header from '../header/Header';
import '../dashboard/farmerdashboard.scss';
import SideMenu from '../dashboard/SideMenu'
import Header from '../../header/Header';
import SideMenu from './SdieMenu';
import './farmerdashboard.scss';

const FarmerDashboard = () => {
   const [farmerProduce, setFarmerProduce] = useState([]);
   useEffect(()=>{
      axios
      .get('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people', {
         headers: {
            authorization: localStorage.getItem('token')
         }
      })
      .then(response=>{
         console.log(response)
         setFarmerProduce(response.data.results)
      })
      .catch(error=>{
         console.log(error)
      })
   },[]
   )

   return(
      
      <div className='dashboard'>
       <Header />

      <h1 className='farmdTitle'>Farmer's Dashboard</h1>
      <h3>Produce</h3>
      <div className='farmerproduce'>
      <SideMenu />
      {farmerProduce.map((farmer,index)=>(
         <div key={index} className='farmerProducts'>
         <p className='productcontent'>{farmer.name}</p>
         <p className='productcontent'>{farmer.homeworld}</p>
         </div>

         ))}
         </div>


   </div> 
 
      
   );
};

export default FarmerDashboard;
