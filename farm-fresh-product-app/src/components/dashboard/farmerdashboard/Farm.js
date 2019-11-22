import React, { useEffect, useState } from "react";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from "axios";
import { getAllFarms } from '../../../actions/farmerFarm';
import {Link} from 'react-router-dom'
import '../../form/farmer/addproduce.scss'
const Farm = (props) => {
  const [index, setIndex] = useState(0);
  const currentFarm = props.newFarms[index] || {name:"", address:"", bio:"", city_id:"", state_id:"", farmer_id:""};
  console.log(currentFarm)
  const increament = () => {
     if(index == props.newFarms.length-1) {
         setIndex(0);
     } else {
         setIndex(index+1);
     }
  }
  
  return( 
  <div className='view-farm'>
  <h3>View farm</h3>     
      <div className='farms'>
        <p>{currentFarm.name}</p>
        <p>{currentFarm.address}</p>
        <p>{currentFarm.bio}</p>
        <p>City ID:{currentFarm.city_id}</p>
        <p>State ID:{currentFarm.state_id}</p>
        <p>Farmer ID:{currentFarm.farmer_id}</p>
        <button onClick={increament}> >>></button>
      </div>    
     <Link to ='/farmer-dashboard/produce'><button className='produce-btn'>View Produce Items</button></Link>
  </div>)
};

const mapDispatchToProps = {
  getAllFarms
}
function mapStateToProps(state) {
    return {
      isLoadingFarm:state.farmFarm.isLoadingFarm,
      isFarmLoaded:state.farmFarm.isFarmLoaded,
      newFarms:state.farmFarm.farms,
      error:state.farmFarm.error
    }
}
export default connect(mapStateToProps,
    mapDispatchToProps)(withRouter(Farm));