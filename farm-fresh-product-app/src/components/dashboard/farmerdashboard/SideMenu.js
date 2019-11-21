import React from 'react';
import {Link} from 'react-router-dom'
import './farmerdashboard.scss';

const Sidebar =()=>{

   return(
   <div className="vertical-menu">
<<<<<<< HEAD
   <Link to="/farmer-dashboard/add-farm">
      <button className="active">Add Farm Item</button>
  </Link>
  <Link to="/farmer-dashboard/edit-farm">
=======
   <button className='non-active'>Manage Produce</button>
  <button className="active">Add Farm Item</button>
>>>>>>> master
  <button className='active'>Edit Farm Item</button>
  </Link>
  <button className='active'>Delete Farm Item</button>
   </div>
   );

}

export default Sidebar;