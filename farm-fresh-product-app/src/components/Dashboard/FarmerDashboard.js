import React, {useEffect, useState} from 'react';

import axios from 'axios';

const FarmerDashboard = () => {
   const [farmerProduce, setFarmerProduce] = useState([]);
   useEffect(()=>{
      axios
      .get('https://farm-fresh-bw.herokuapp.com/api/farmers/produce/categories')
      .then(response=>{
         console.log(response)
         setFarmerProduce(response.data.categories)
      })
      .catch(error=>{
         console.log(error)
      })
   },[]
   )
   return(
      <div className='farmerdashboard'>
      <h2>Farmer's Dashboard</h2>
      <h3>Produce</h3>
      {farmerProduce.map(farmer=>(
         farmer.categories
      ))}
      
   </div>
   );
}
export default FarmerDashboard;
