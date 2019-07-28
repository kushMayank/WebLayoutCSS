import React from "react";
import { NavLink } from "react-router-dom";

import "./layout.css";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/ourStory">
            OurStory
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/schedule">
            Meet the Doctor
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/ourService">
            Our Service
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/updates">
            Updates
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/more">
            More Information
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
