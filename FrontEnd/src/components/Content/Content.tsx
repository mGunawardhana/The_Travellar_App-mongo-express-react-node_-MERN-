import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeLoader from "../../pages/homeLoader/HomeLoader";
import CustomerForm from "../../pages/customer/CustomerForm";
import PackageForm from "../../pages/package/packageForm";
import JeepManagementForm from "../../pages/jeep/JeepManagementForm";
import DriverForm from "../../pages/driver/driverForm";
import PackageBookingForm from "../../pages/packageBooking/PackageBookingForm";
import Payments from "../../pages/Bookings/Payments";
import BookingDetails from "../../pages/bookingDetails/BookingDetails";
import Login from "../../pages/login/Login";

const Content = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    {/*<Route path="/" element={<HomeLoader/>}></Route>*/}
                    {/*<Route path="/customer" element={<CustomerForm/>}></Route>*/}
                    {/*<Route path="/package" element={<PackageForm/>}></Route>*/}
                    {/*<Route path="/jeep" element={<JeepManagementForm/>}></Route>*/}
                    {/*<Route path="/driver" element={<DriverForm/>}></Route>*/}
                    {/*<Route path="/booking" element={<PackageBookingForm/>}></Route>*/}
                    {/*<Route path="/payment" element={<Payments/>}></Route>*/}
                    {/*<Route path="/details" element={<BookingDetails/>}></Route>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Content;
