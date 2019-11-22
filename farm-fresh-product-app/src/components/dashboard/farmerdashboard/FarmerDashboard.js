import React, {useEffect, useState} from 'react';
import {Route, NavLink} from 'react-router-dom'
import axios from 'axios';
import Header from '../../header/Header';
import './farmerdashboard.scss';
import SideMenu from '../farmerdashboard/SideMenu'
import AddFarm from './farm/AddFarm';
import EditFarm from './farm/EditFarm';
import AddProduce from '../../form/farmer/AddProduce'
import EditProduce from '../../form/farmer/EditProduce'



import './farmerdashboard.scss';
import FarmProduceCard from './FarmProduceCard';
import Produce from './Produce';
import Farm from './Farm';

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
      
      <div className='farmcontainer'>
      <SideMenu />
      <div className='farmerproduce'>
      {/* {farmerProduce.map((farmer,index)=>(
         <div key={index} className='farmerProducts'>
         <p className='productcontent'>{farmer.name}</p>
         <p className='productcontent'>{farmer.homeworld}</p>
         </div>

         ))} */}
         <Route path="/farmer-dashboard/add-farm" component={AddFarm} />
         <Route path="/farmer-dashboard/edit-farm" component={EditFarm} />
         <Route path="/farmer-dashboard/add-item" component={AddProduce}/>
         <Route path='/farmer-dashboard/edit-item' component={EditProduce}/>
         <Route path='/farmer-dashboard/view-farm' component={Farm}/>
         <Route path='/farmer-dashboard/produce/:id' component={Produce}/>
         </div>
         </div>
         <NavLink to='/feedback'>Website Feedback</NavLink>
   </div> 
 
      
   );
};

export default FarmerDashboard;
