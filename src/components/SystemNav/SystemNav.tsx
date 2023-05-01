import React from "react";
import { SystemNavData} from "../data";
import {NavLink} from "react-router-dom";

const SystemNav =() =>{
    return (
        <nav>
            <ul className="flex gap-x-8">
               <NavLink to={"/customer"}>Customer</NavLink>
                <NavLink to={"/package"}>Package</NavLink>
                <NavLink to={"/jeep"}>Vehicccle</NavLink>
                <NavLink to={"/driver"}>Driver</NavLink>
            </ul>
        </nav>
    );
};


export default SystemNav;