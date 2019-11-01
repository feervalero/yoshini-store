import React from "react";
import {Link} from 'react-router-dom';
const Header = () => {
  return(
  <>
    <nav>
      <ul>
      <li>
          <Link to="/admin">Home</Link>
        </li>
        <li>
          <Link to="/admin/login">Login</Link>
        </li>
      </ul>
    </nav>
  </>)
};

export default Header;
