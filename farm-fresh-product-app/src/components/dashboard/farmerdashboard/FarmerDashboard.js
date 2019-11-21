import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../../header/Header';
import './farmerdashboard.scss';
import SideMenu from '../farmerdashboard/SideMenu'
import AddFarm from './farm/AddFarm';
import EditFarm from './farm/EditFarm';
import { getAllFarms } from '../../../actions/farmerFarm';


import './farmerdashboard.scss';

const FarmerDashboard = (props) => {
  
   useEffect(()=>{
      props.getAllFarms();
   },[]);
   console.log('Line Number 20', props.farms)
   return(
      
      <div className='dashboard'>
       <Header />

      <h1 className='farmdTitle'>Farmer's Dashboard</h1>
      
      <div className='farmcontainer'>
      <SideMenu />
      <div className='farmerproduce'>
      {/* {props.farms.map((farm,index)=>(
         <div key={index} className='farmerProducts'>
         <p className='productcontent'>{farmer.name}</p>
         <p className='productcontent'>{farmer.homeworld}</p>
         </div>

         ))} */}
         <Route path="/farmer-dashboard/add-farm" component={AddFarm} />
         <Route path="/farmer-dashboard/edit-farm" component={EditFarm} />
         </div>
         </div>

   </div> 
 
      
   );
};

const mapDispatchToProps = {
   getAllFarms
}

function mapStateToProps(state) {
   return {
     isLoadingFarm:state.farmFarm.isLoadingFarm,
     isFarmLoaded:state.farmFarm.isFarmLoaded,
     farms:state.farmFarm.farms,
     error:state.farmFarm.error
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(FarmerDashboard);
