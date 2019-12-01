import React from "react";
import { withRouter } from "react-router-dom";
import { FARMER_LOGIN_KEY } from "../../constants/Constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.scss";

function Header(props) {
  const logout = event => {
    event.preventDefault();
    window.localStorage.clear(FARMER_LOGIN_KEY);
    props.history.push("/farmer-login");
  };
  return (
    <>
      <div className="header">
        <button className="logoff-btn" onClick={e => logout(e)}>
        <FontAwesomeIcon icon="sign-out-alt" style={{ color: 'white' }} />
          Log out
        </button>
      </div>
    </>
  );
}

export default withRouter(Header);
