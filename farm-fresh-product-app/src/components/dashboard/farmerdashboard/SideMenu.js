import React from 'react';
import './farmerdashboard.scss';
import {NavLink} from 'react-router-dom';
const Sidebar =()=>{

   return(
   <div className="vertical-menu">
   <button className='non-active'>Manage Produce</button>
  <NavLink to='/add-farm-item'><button className="active">Add Farm Item</button></NavLink>
  <button className='active'>Edit Farm Item</button>
  <button className='active'>Delete Farm Item</button>
   </div>
   );

}

export default Sidebar;