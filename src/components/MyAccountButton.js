import React from "react";
import { Link } from "react-router-dom";
const LoginButton = props => {
  console.log(props.auth);
  return (
    <li className="nav-item submenu dropdown">
      <Link
        to="/MyAccount"
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        MyAccount
      </Link>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link className="nav-link" to="/MyAccount">
            My Account
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={props.auth.logout}>
            Logout
          </a>
        </li>
      </ul>
    </li>
  );
};

export default LoginButton;
