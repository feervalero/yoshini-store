import React from "react";

export default function NavLink(props) {
  return (
    <div>
      <a className="nav-link" href={props.to}>
        {props.text}
      </a>
    </div>
  );
}
