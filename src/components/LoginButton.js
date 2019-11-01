import React from "react";

const LoginButton = props => {
  return (
    <li className="nav-item">
      <div>
        <a className="nav-link" onClick={props.auth.login}>
          LOGIN
        </a>
      </div>
    </li>
  );
};

export default LoginButton;
