import React from 'react';
import { Link } from 'react-router-dom'
import './farmerdashboard.scss';
import {NavLink} from 'react-router-dom';
const Sidebar =()=>{

   return(
   <div className="vertical-menu">
   <button className='non-active'>Manage Farm</button>
      <Link to="/farmer-dashboard/add-farm">
         <button className="active">Add Farm </button>
      </Link>
      <Link to="/farmer-dashboard/edit-farm">
         <button className='active'>Edit Farm Item</button>
      </Link>
        
         <button className='non-active'>Manage Produce</button>
  <Link to='/farmer-dashboard/add-item'><button className="active">Add Farm Item</button></Link>
  <Link to='/farmer-dashboard/edit-item'><button className='active'>Edit Farm Item</button></Link>
  
   </div>
   );

}

export default Sidebar;