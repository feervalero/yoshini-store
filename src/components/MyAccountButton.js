import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const LoginButton = props => {
  console.log(props.auth);
  return (
    <li className="nav-item submenu dropdown">
      <a
        to="/MyAccount"
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        MyAccount
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <a className="nav-link" href="/MyAccount">
            My Account
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="" onClick={props.auth.logout}>
            Logout
          </a>
        </li>
      </ul>
    </li>
  );
};

export default LoginButton;
