import React from 'react';
import {withRouter} from 'react-router-dom';
import { FARMER_LOGIN_KEY } from '../../constants/Constant';
import './Header.scss';

function Header(props) {
  console.log(props)
  const logout = (event) => {
      event.preventDefault();
      window.localStorage.clear(FARMER_LOGIN_KEY);
      props.history.push('/farmer-login');
  }
  return (
    <>
     <div className="header">
         <button className='logoff-btn' onClick={(e)=>logout(e)}>Log out</button>
     </div> 
    </>
  )
}

export default withRouter(Header);
