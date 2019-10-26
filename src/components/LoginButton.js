import React from "react";

const LoginButton = props => {
  return (
    <li className="nav-item">
      <a className="nav-link" onClick={props.auth.login}>
        LOGIN
      </a>
    </li>
  );
};

export default LoginButton;
