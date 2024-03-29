import React from "react";
import {NavLink} from "react-router-dom";

const SystemNavMobile = () => {
    return (
      <ul className="flex flex-col px-6 py-8 gap-y-4">
        <li>
          <ul className="flex gap-x-10">
              <NavLink to={"/dashboard"}>DashBoard</NavLink>
            <NavLink to={"/customer"}>Customer</NavLink>
            <NavLink to={"/package"}>Package</NavLink>
            <NavLink to={"/jeep"}>Vehicle</NavLink>
            <NavLink to={"/driver"}>Driver</NavLink>
            <NavLink to={"/booking"}>PlaceBooking</NavLink>
            <NavLink to={"/payment"}>Payments</NavLink>
            <NavLink to={"/details"}>BookingDetails</NavLink>
          </ul>
        </li>
      </ul>
    );
};

export default SystemNavMobile;
