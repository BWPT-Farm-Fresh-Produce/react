import React from 'react';
import {Link} from 'react-router-dom'
import './farmerdashboard.scss';

const Sidebar =()=>{

   return(
   <div className="vertical-menu">
   <Link to="/farmer-dashboard-addfarm">
      <button className="active">Add Farm Item</button>
  </Link>
  <button className='active'>Edit Farm Item</button>
  <button className='active'>Delete Farm Item</button>
   </div>
   );

}

export default Sidebar;