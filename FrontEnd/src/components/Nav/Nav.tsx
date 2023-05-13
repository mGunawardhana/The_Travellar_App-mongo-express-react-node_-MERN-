import React from "react";

import {navigationData} from "../data";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <nav>
        <ul className="flex gap-x-8">
          <nav>
            <ul className="flex gap-x-8">
              <NavLink to={"#"}>Home</NavLink>
              <NavLink to={"#"}>About</NavLink>
              <NavLink to={"#"}>Packages</NavLink>
              <NavLink to={"/login"}>SignUp</NavLink>
            </ul>
          </nav>
        </ul>
      </nav>
    );
};

export default Nav;
