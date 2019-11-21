import React from 'react';
import AddProduce from '../../form/farmer/AddProduce'
import {NavLink} from 'react-router-dom'
const SideMenu = () =>{
   return(
      <div className="vertical-menu">
   <button className='non-active'>Manage the Farm</button>
  <button className="active" >Add Farm </button>
  <button className='active'>Edit Farm </button>
  
   </div>
   );
}

export default SideMenu;
