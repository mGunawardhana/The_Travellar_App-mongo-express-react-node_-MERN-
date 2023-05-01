import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLoader from "../../pages/homeLoader/HomeLoader";
import CustomerForm from "../../pages/customer/CustomerForm";
import PackageForm from "../../pages/package/packageForm";
import JeepManagementForm from "../../pages/jeep/JeepManagementForm";
import DriverForm from "../../pages/driver/driverForm";

const Content = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLoader />}></Route>
          <Route path="/customer" element={<CustomerForm />}></Route>
          <Route path="/package" element={<PackageForm />}></Route>
          <Route path="/jeep" element={<JeepManagementForm />}></Route>
          <Route path="/driver" element={<DriverForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Content;
