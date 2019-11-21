import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import '../../form/farmer/addproduce.scss'
const Farm = (props) => {
  const [farm, setFarm] = useState([]);
  const id= props.match.params.id;
  useEffect(() => {

   const farmerInfo = JSON.parse(localStorage.getItem('FARMER_LOGIN_KEY'))
   console.log(farmerInfo)
    axios
      .get(`https://aqueous-ocean-41606.herokuapp.com/api/farmers/${farmerInfo.id}/farms`, {
        headers: { authorization: farmerInfo.token }
      })
      .then(response=>{
         const farmInfo = response.data.farms
         console.log(response.data.farms)
         setFarm(farmInfo)
      })
      .catch(error=>{
         console.log(error)
      });
  },[id]);
  return( 
  <div className='view-farm'>
  <h3>View farm</h3>
     {farm.map((farms)=>(
        <div className='farms' key={farms.id}>
         <p>{farms.name}</p>
       <p>{farms.address}</p>
       <p>{farms.bios}</p>
       </div>
     )
     
     )}
     <Link to ='/farmer-dashboard/produce'><button className='produce-btn'>View Produce Items</button></Link>
  </div>)
};
export default Farm;