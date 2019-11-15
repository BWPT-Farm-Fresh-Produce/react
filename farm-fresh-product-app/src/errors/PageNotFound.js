import React from 'react';
import {Link} from 'react-router-dom';
import './errors.scss';


export default function UnauthorizedError(props) {
   return(
      <div className='error'>
        <h1>404: Not Found</h1>
        <p>Sorry, Something is missing.</p>        
      </div>
   );
}