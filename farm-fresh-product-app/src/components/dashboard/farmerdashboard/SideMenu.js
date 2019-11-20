import React from 'react';
import './farmerdashboard.scss';

const Sidebar =()=>{

   return(
   <div className="vertical-menu">
  <button className="active">Add Farm Item</button>
  <button className='active'>Edit Farm Item</button>
  <button className='active'>Delete Farm Item</button>
   </div>
   );

}

export default Sidebar;