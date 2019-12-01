import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './farmerdashboard.scss';
import {NavLink} from 'react-router-dom';

const Sidebar =(props)=>{
    const {url} = props.match;
    console.log('line 6', url)
   return(
   <div className="vertical-menu">
   <button className='non-active'>Manage Farm</button>
      <Link to="/farmer-dashboard/add-farm">
         <button className="active">
         <FontAwesomeIcon icon="plus-circle" style={{ color: 'white' }} />
          Add Farm </button>
      </Link>
      <Link to="/farmer-dashboard/edit-farm">
         <button className='active'>
         <FontAwesomeIcon icon="edit" style={{ color: 'white' }} />
         Edit Farm Item</button>
      </Link>
        
         <button className='non-active'>Manage Produce</button>
  <Link to={`/farmer-dashboard/get-produce`}> <button className="produce-btn"
     style={{height:"40px", backgroundColor: '#2a8000', color: "white", fontSize: '13px'}}>
      <FontAwesomeIcon icon="carrot" style={{ color: 'white' }} />
      Produce Items</button>
      </Link>
  <Link to='/farmer-dashboard/add-item'><button className="active">
       <FontAwesomeIcon icon="plus-circle" style={{ color: 'white' }} />
           Add Farm Item</button></Link>
  <Link to='/farmer-dashboard/edit-item'><button className='active'>
       <FontAwesomeIcon icon="edit" style={{ color: 'white' }} />
        Edit Farm Item</button></Link>
  <button className='non-active'>Leave Feedback</button>
  <Link to='/farmer-dashboard/feedback'><button className='active'>
  <FontAwesomeIcon icon="comment-alt" style={{ color: 'white' }} />
   Feedback</button> </Link>
  {/* <Link to='/farmer-dashboard/view-farm'><button className='active'>View Farm</button></Link> */}
  
  
   </div>
   );

}

export default withRouter(Sidebar);