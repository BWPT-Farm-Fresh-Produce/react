import React from 'react';

const SideMenu = () =>{
   return(
      <div className="vertical-menu">
   <button className='non-active'>Manage the Farm</button>
  <button className="active">Add Farm </button>
  <button className='active'>Edit Farm </button>
  <button className='active'>Delete Farm</button>
   </div>
   );
}

export default SideMenu;
