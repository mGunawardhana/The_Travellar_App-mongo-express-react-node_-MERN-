import React from "react";
import CustomerForm from "../customer/CustomerForm";
import PackageForm from "../package/packageForm";
import JeepManagementForm from "../jeep/JeepManagementForm";
import DriverForm from "../driver/driverForm";

const SystemForm = () => {
    return (
      <div>
        <CustomerForm />
        <PackageForm />
        <JeepManagementForm />
        <DriverForm />
      </div>
    );
};

export default SystemForm;
