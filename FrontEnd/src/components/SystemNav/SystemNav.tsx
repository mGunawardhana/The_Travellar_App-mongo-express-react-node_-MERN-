import React from "react";
import { NavLink } from "react-router-dom";

const SystemNav = () => {
  return (
    <nav>
      <ul className="flex gap-x-12">
        <NavLink to={"/customer"}>Customer</NavLink>
        <NavLink to={"/package"}>Package</NavLink>
        <NavLink to={"/jeep"}>Vehicle</NavLink>
        <NavLink to={"/driver"}>Driver</NavLink>
        <NavLink to={"/booking"}>PlaceBooking</NavLink>
        <NavLink to={"/payment"}>Payments</NavLink>
      </ul>
    </nav>
  );
};

export default SystemNav;
