import React, {useEffect, useState} from "react";

import {
    Button,
    FormHelperText,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import customerBackground from "../../assets/6960243.jpg";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import axios from "../../axios";
import {JeepProperties} from "../../types/JeepProperties";
import {CustomerProperties} from "../../types/CustomerPropertes";
import {PackageProperties} from "../../types/PackageProperties";
import {DriverProperties} from "../../types/DriverProperties";
import {PackageBookingProperties} from "../../types/PackageBookinProperties";
import Swal from 'sweetalert2';
const PackageBookingForm = () => {
    /** this hook is responsible to providing values to update and delete   */
    const [mongoPrimaryKey, mongoChange] = useState("");

    /** this hook is responsible to loading all data to table   */
    const [tableList, setTableList] = useState<PackageBookingProperties[]>([]);

    /** these hooks are responsible to manage jeep lists and their id lists */
    const [jeepList, setJeepList] = useState<JeepProperties[]>([]);
    const [jeep_code, setJeepCode] = useState<string[]>([]);

    /** these hooks are responsible to manage customer lists and their id lists */
    const [customerList, setCustomerList] = useState<CustomerProperties[]>([]);
    const [customer_code, setCustomerCode] = useState<string[]>([]);

    /** these hooks are responsible to manage driver lists and their id lists */
    const [packageList, setPackageList] = useState<PackageProperties[]>([]);
    const [package_code, setPackageCode] = useState<string[]>([]);

    /** these hooks are responsible to manage driver lists and their id lists */
    const [driverList, setDriverList] = useState<DriverProperties[]>([]);
    const [driver_code, setDriverCode] = useState<string[]>([]);

    /** variable for storing mongo primary key */
    let key_for_put_and_delete: string | undefined | any;

    /* -------------------------------------------------------------------------------------------------------------- */

    /** API calling function for get all jeeps */
    const loadAllTable = async () => {
        try {
            const response = await axios.get("booking");
            setTableList(response.data.responseData);
            console.log(tableList);
        } catch (error) {
            console.log(error);
        }
    };

    /** API calling function for get all jeeps */
    const getAllJeeps = async () => {
        try {
            const response = await axios.get("jeep");
            setJeepList(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    /** filtering only primary keys in jeep list */
    useEffect(() => {
        const codes = jeepList.map((jeep) => jeep.vehicleID);
        setJeepCode(codes);
    }, [jeepList]);

    /* -------------------------------------------------------------------------------------------------------------- */

    /** API calling function for get all customers */
    const getAllCustomers = async () => {
        try {
            const response = await axios.get("customer");
            setCustomerList(response.data.responseData);
        } catch (error) {
            console.error(error);
        }
    };

    /** filtering only primary keys in customer list */
    useEffect(() => {
        const codes = customerList.map((customer) => customer.customerID);
        setCustomerCode(codes);
    }, [customerList]);

    /* -------------------------------------------------------------------------------------------------------------- */

    /** API calling function for get all drivers */
    const getAllDrivers = async () => {
        try {
            const response = await axios.get("driver");
            setDriverList(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    /** filtering only primary keys in driver list */
    useEffect(() => {
        const codes = driverList.map((driver) => driver.driverID);
        setDriverCode(codes);
    }, [driverList]);

    /* -------------------------------------------------------------------------------------------------------------- */

    /** API calling function for get all packages */
    const getAllPackages = async () => {
        try {
            const response = await axios.get("package");
            setPackageList(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    /** filtering only primary keys in package list */
    useEffect(() => {
        const codes = packageList.map((pack) => pack.packageID);
        setPackageCode(codes);
    }, [packageList]);

    /* -------------------------------------------------------------------------------------------------------------- */

    /** calling get all jeep's method */
    useEffect(() => {

        //loading table ...
        loadAllTable().then((r) => {
            console.log(r + " loading table...");
        });

        //loading all jeeps ...
        getAllJeeps().then((r) => {
            console.log(r + " loading jeeps...");
        });

        //loading all customers ...
        getAllCustomers().then((r) => {
            console.log(r + " loading customers...");
        });

        //lading all tables ...
        getAllDrivers().then((r) => {
            console.log(r + " loading drivers...");
        });

        //loading all packages ...
        getAllPackages().then((r) => {
            console.log(r + " loading packages...");
        });
    }, []);

    const passengerCode = document.getElementById(
        "packageCode"
    ) as HTMLInputElement;

    /** this hook is useful to get the selected value */
    const [selectedJeep, setSelectedJeep] = useState("");

    /** these hooks are responsible to matching selected value and load their own value in to the text-fields */
    const [jeepModel, setJeepModelChange] = useState("");
    const [jeepSeatsCount, setJeepSeatsChange] = useState("");

    /** this function is responsible to matching their id's and setting equivalent to his own object values */
    function setUpJeepProps(selectedJeep: string) {
        jeepList.map((jeep) => {
            if (jeep.vehicleID === selectedJeep) {
                setJeepModelChange(jeep.vehicleModel);
                setJeepSeatsChange(jeep.passengerCount);
                console.log(jeep);
            }
        });
    }

    /** this hook is useful to get the selected value */
    const [selectedPackage, setSelectedPackageChange] = useState("");

    /** these hook is responsible to matching selected value and load their own value in to the text-fields */
    const [packageName, setPackageNameChange] = useState("");

    /** this function is responsible to matching their id's and setting equivalent to his own object values */
    function setUpPackageProps(selectedPackage: string) {
        packageList.map((pack) => {
            if (pack.packageID === selectedPackage) {
                setPackageNameChange(pack.packageName);
            }
        });
    }

    /** this hook is useful to get the selected value */
    const [selectedDriver, setSelectedDriverChange] = useState("");

    /** these hook is responsible to matching selected value and load their own value in to the text-fields */
    const [driverName, setDriverNameChange] = useState("");

    /** this function is responsible to matching their id's and setting equivalent to his own object values */
    function setUpDriverProps(sel: string) {
        driverList.map((driver) => {
            if (driver.driverID === selectedDriver) {
                setDriverNameChange(driver.driverFirstName);
            }
        });
    }

    /** this hook is useful to get the selected value */
    const [selectedCustomer, setSelectedCustomerChange] = useState("");

    /** these hook is responsible to matching selected value and load their own value in to the text-fields */
    const [customerName, setCustomerNameChange] = useState("");

    /** this function is responsible to matching their id's and setting equivalent to his own object values */
    function setUpCustomerProps(selectedCustomer: string) {
        customerList.map((customer) => {
            if (customer.customerID === selectedCustomer) {
                setCustomerNameChange(customer.customerFirstName);
            }
        });
    }

    /** setting up properties */
    useEffect(() => {
        setUpJeepProps(selectedJeep);
        setUpPackageProps(selectedPackage);
    }, [selectedJeep, selectedPackage]);

    /** setting up properties */
    useEffect(() => {
        setUpCustomerProps(selectedCustomer);
        setUpDriverProps(selectedDriver);
    }, [selectedCustomer, selectedDriver]);

    /** hook for offer textField */
    const [setOffers, setOffersChange] = useState("");

    /** hook for set amount text */
    const [setAmount, setAmountChange] = useState("");

    /** hook for booking id */
    const [setBookingID, setBookingIdChange] = useState("");

    /** submitting function */
    const handleSubmit = () => {
        let responseBody = {
            bookingID: setBookingID,
            packageID: selectedPackage,
            packageName: packageName,
            jeepCode: selectedJeep,
            jeepModel: jeepModel,
            jeepPrice: jeepSeatsCount,
            offers: setOffers,
            driverCode: selectedDriver,
            driverName: driverName,
            customerCode: selectedCustomer,
            customerName: customerName,
            amount: setAmount,
        };

        axios
            .post("booking", JSON.stringify(responseBody))
            .then((res) => {
                loadAllTable();
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    iconColor: '#2ed573',
                    backdrop: 'true',
                    background: '#ffffff',
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                // success , error , warning , info , question ,width,color
                Toast.fire({
                    icon: 'success',
                    title: 'Saved Successfully!'
                })
            })
            .catch((e) => {
                console.log(e);
            });
    };

    /** delete function */
    const handleDelete = () => {
        if (window.confirm("Do you want to remove this jeep ?")) {
            axios
                .delete(`booking/${mongoPrimaryKey}/${selectedJeep}/${selectedDriver}`)
                .then((response) => {
                    loadAllTable();
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        iconColor: '#ff4757',
                        backdrop: 'true',
                        background: '#ffffff',
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        },
                    })

                    // success , error , warning , info , question ,width,color
                    Toast.fire({
                        icon: 'success',
                        title: 'Delete Successfully!'
                    })
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error deleting data. ");
                });
        }
    };

    return (
        <>
            <SystemHeader/>
            <section
                style={{
                    boxShadow:
                        " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                    borderRadius: "15px",
                    backgroundImage: `url(${customerBackground})`,
                    backgroundSize: "cover",
                }}
                className="my-[70px] mx-20 xl:mx-60 xl:my-[80px] py-[50px] xl:py-16"
            >
                <div className="container mx-auto">
                    <Paper
                        style={{
                            boxShadow:
                                " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                            borderRadius: "15px",
                        }}
                    >
                        <React.Fragment>
                            {/* <h2>Register Form</h2> */}
                            {/* <form onSubmit={handleSubmit} action={<Link to="/login" />}> */}
                            <form className="py-[15px] px-[15px]">
                                <FormHelperText style={{fontSize: "25px,"}}>
                                    Package Management Form
                                </FormHelperText>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        value={setBookingID}
                                        id="bookingId"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Booking ID"
                                        size="small"
                                        fullWidth
                                        onChange={(e) => {
                                            const bookingID = e.target.value;
                                            setBookingIdChange(bookingID);
                                        }}
                                        required
                                    />

                                    <Select
                                        id="packageCode"
                                        name="packageCode"
                                        onChange={(e) => {
                                            const selectedPackage = e.target.value;
                                            setSelectedPackageChange(selectedPackage);
                                            setUpPackageProps(selectedPackage);
                                        }}
                                        value={selectedPackage}
                                        placeholder="Sample code"
                                        size="small"
                                        fullWidth
                                    >
                                        {packageList.map((pack) => (
                                            <MenuItem key={pack.packageID} value={pack.packageID}>
                                                {pack.packageID}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                    <TextField
                                        name="packageName"
                                        value={packageName}
                                        id="packageName"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        placeholder="Package Name"
                                        size="small"
                                        fullWidth
                                        required
                                        aria-readonly={true}
                                    />
                                </Stack>

                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <Select
                                        id="jeepId"
                                        name="sample"
                                        onChange={(e) => {
                                            const selectedJeep = e.target.value;
                                            setSelectedJeep(selectedJeep);
                                            setUpJeepProps(selectedJeep);
                                        }}
                                        value={selectedJeep}
                                        placeholder="Sample code"
                                        size="small"
                                        fullWidth
                                    >
                                        {jeepList.map((jeep) => (
                                            <MenuItem key={jeep.vehicleID} value={jeep.vehicleID}>
                                                {jeep.vehicleID}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                    <TextField
                                        name="jeepModel"
                                        value={jeepModel}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Jeep Model"
                                        size="small"
                                        fullWidth
                                        aria-readonly={true}
                                        required
                                    />
                                    <TextField
                                        name="jeepSeatsCount"
                                        value={jeepSeatsCount}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Jeep Seats"
                                        size="small"
                                        aria-readonly={true}
                                        fullWidth
                                        required
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        value={setOffers}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Offers"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={(e) => {
                                            const offer = e.target.value;
                                            setOffersChange(offer);
                                        }}
                                    />

                                    <Select
                                        id="driverCode"
                                        name="driverCode"
                                        onChange={(e) => {
                                            const selectedDriver = e.target.value;
                                            setSelectedDriverChange(selectedDriver);
                                            setUpDriverProps(selectedDriver);
                                        }}
                                        value={selectedDriver}
                                        placeholder="Sample code"
                                        size="small"
                                        fullWidth
                                    >
                                        {driverList.map((driver) => (
                                            <MenuItem key={driver.driverID} value={driver.driverID}>
                                                {driver.driverID}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                    <TextField
                                        value={driverName}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Driver Name"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                </Stack>

                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <Select
                                        id="customerCode"
                                        name="customerCode"
                                        onChange={(e) => {
                                            const selectedCustomer = e.target.value;
                                            setSelectedCustomerChange(selectedCustomer);
                                            setUpCustomerProps(selectedCustomer);
                                        }}
                                        value={selectedCustomer}
                                        placeholder="Sample code"
                                        size="small"
                                        fullWidth
                                    >
                                        {customerList.map((customer) => (
                                            <MenuItem
                                                key={customer.customerID}
                                                value={customer.customerID}
                                            >
                                                {customer.customerID}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                    <TextField
                                        value={customerName}
                                        name="customerName"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Customer Name"
                                        size="small"
                                        fullWidth
                                        required
                                    />

                                    <TextField
                                        type="text"
                                        value={setAmount}
                                        variant="outlined"
                                        color="secondary"
                                        label="Amount"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={(e) => {
                                            const amountValue = e.target.value;
                                            setAmountChange(amountValue);
                                        }}
                                    />
                                </Stack>

                                <Button
                                    style={{
                                        backgroundColor: "#2ed573",
                                        marginRight: "7px",
                                        fontWeight: "bolder",
                                    }}
                                    variant="contained"
                                    type="button"
                                    onClick={handleSubmit}
                                >
                                    Save
                                </Button>
                                <Button
                                    style={{
                                        backgroundColor: "#ffa502",
                                        marginRight: "7px",
                                        fontWeight: "bolder",
                                    }}
                                    variant="contained"
                                    type="button"
                                >
                                    Update
                                </Button>
                                <Button
                                    style={{
                                        backgroundColor: "#ff4757",
                                        marginRight: "7px",
                                        fontWeight: "bolder",
                                    }}
                                    variant="contained"
                                    type="button"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                            </form>
                            {/* <small>
              <Link to="/login">`Login Here</Link>
            </small> */}
                        </React.Fragment>
                    </Paper>

                    <TableContainer
                        style={{
                            boxShadow:
                                " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                            borderRadius: "15px",
                        }}
                        component={Paper}
                        className="mt-5"
                    >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow className="bg-black">
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Booking ID
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Package ID
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Driver ID
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Customer ID
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Offers
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Amount
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableList.map((table) => (
                                    <TableRow
                                        onClick={(e) => {
                                            key_for_put_and_delete = table._id;
                                            mongoChange(key_for_put_and_delete);
                                            console.log(table.jeepCode);
                                            setSelectedJeep(table.jeepCode);
                                            setSelectedPackageChange(table.packageID);
                                            setSelectedDriverChange(table.driverCode);
                                            setSelectedCustomerChange(table.customerCode);
                                            setOffersChange(table.offers.toString());
                                            setAmountChange(table.amount.toString());
                                            setBookingIdChange(table.bookingID);
                                        }}
                                        key={table.bookingID}
                                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                    >
                                        <TableCell align="center">{table.bookingID}</TableCell>
                                        <TableCell align="center">{table.packageID}</TableCell>
                                        <TableCell align="center">{table.driverCode}</TableCell>
                                        <TableCell align="center">{table.customerCode}</TableCell>
                                        <TableCell align="center">{table.offers}</TableCell>
                                        <TableCell align="center">{table.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>
        </>
    );
};

export default PackageBookingForm;
