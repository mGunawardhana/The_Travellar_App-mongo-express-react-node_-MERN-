import React from "react";

import {navigationData} from "../data";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <nav>
        <ul className="flex gap-x-8">
          <nav>
            <ul className="flex gap-x-8">
              <NavLink to={"/customer"}>Home</NavLink>
              <NavLink to={"/package"}>About</NavLink>
              <NavLink to={"/jeep"}>Packages</NavLink>
              <NavLink to={"/driver"}>SignUp</NavLink>
            </ul>
          </nav>
        </ul>
      </nav>
    );
};

export default Nav;
