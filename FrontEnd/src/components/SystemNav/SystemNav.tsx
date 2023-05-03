import React from "react";
import {NavLink} from "react-router-dom";

const SystemNav =() =>{
    return (
      <nav>
        <ul className="flex gap-x-12">
          <NavLink to={"/customer"}>Customer</NavLink>
          <NavLink to={"/package"}>Package</NavLink>
          <NavLink to={"/jeep"}>Vehicle</NavLink>
          <NavLink to={"/driver"}>Driver</NavLink>
          <NavLink to={"/packagebooking"}>PackageBooking</NavLink>
            {/*<NavLink to={"/bookings"}>Bookings</NavLink>*/}
            {/*<NavLink to={"/booking_details"}>BookingDetails</NavLink>*/}
        </ul>
      </nav>
    );
};


export default SystemNav;