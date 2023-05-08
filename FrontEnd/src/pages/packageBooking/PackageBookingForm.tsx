import React, {useEffect, useState} from "react";

import {
    Autocomplete,
    Button,
    FormHelperText,
    Paper,
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


const PackageBookingForm = () => {

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

    /** API calling function for get all jeeps */
    const getAllJeeps = async () => {
        try {
            const response = await axios.get("jeep");
            setJeepList(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    /** API calling function for get all customers */
    const getAllCustomers = async () => {
        try {
            const response = await axios.get("customer");
            setCustomerList(response.data.responseData);
        } catch (error) {
            console.error(error);
        }
    };

    /** API calling function for get all drivers */
    const getAllDrivers = async () => {
        try {
            const response = await axios.get("driver");
            setDriverList(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    /** API calling function for get all packages */
    const getAllPackages = async () => {
        try {
            const response = await axios.get("package");
            setPackageList(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    /** filtering only primary keys in driver list */
    useEffect(() => {
        const codes = driverList.map((driver) => driver.driverID);
        setDriverCode(codes);
    }, [driverList]);

    /** calling get all package method */
    useEffect(() => {
        getAllDrivers().then(r => {
            console.log(r + " loading drivers...")
        });
    }, []);



    /** filtering only primary keys in package list */
    useEffect(() => {
        const codes = packageList.map((pack) => pack.packageID);
        setPackageCode(codes);
    }, [packageList]);

    /** calling get all package method */
    useEffect(() => {
        getAllPackages().then(r => {
            console.log(r + " loading packages...")
        });
    }, []);



    /** filtering only primary keys in customer list */
    useEffect(() => {
        const codes = customerList.map((customer) => customer.customerID);
        setCustomerCode(codes);
    }, [customerList]);

    /** calling get all customers method */
    useEffect(() => {
        getAllCustomers().then(r => {
            console.log(r + " loading customers...")
        });
    }, []);



    /** filtering only primary keys in jeep list */
    useEffect(() => {
        const codes = jeepList.map((jeep) => jeep.vehicleID);
        setJeepCode(codes);
    }, [jeepList]);

    /** calling get all jeep's method */
    useEffect(() => {
        getAllJeeps().then(r => {
            console.log(r + " loading jeeps...")
        });
    }, []);


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
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Booking ID"
                                        size="small"
                                        fullWidth
                                        required
                                    />


                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={package_code}
                                        size="small"
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label="Package Code"/>}
                                    />
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Package Name"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                </Stack>

                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>

                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={jeep_code}
                                        size="small"
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label="Jeep Code"/>}
                                    />

                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Jeep Model"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Jeep Price"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Offers"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={driver_code}
                                        size="small"
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label="Driver Code"/>}
                                    />
                                    <TextField
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
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={customer_code}
                                        size="small"
                                        fullWidth
                                        renderInput={(params) => (
                                            <TextField {...params} label="Customer Code"/>
                                        )}
                                    />
                                    <TextField
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
                                        variant="outlined"
                                        color="secondary"
                                        label="Amount"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                </Stack>

                                <Button
                                    // onClick={getAllCustomers}
                                    style={{
                                        backgroundColor: "#2ed573",
                                        marginRight: "7px",
                                        fontWeight: "bolder",
                                    }}
                                    variant="contained"
                                    type="submit"
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
                                    type="submit"
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
                                    type="submit"
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
                                <TableRow>
                                    {/*<TableCell>B001</TableCell>*/}
                                    {/*<TableCell>P001</TableCell>*/}
                                    {/*<TableCell>D001</TableCell>*/}
                                    {/*<TableCell>C001</TableCell>*/}
                                    {/*<TableCell>5.0%</TableCell>*/}
                                    {/*<TableCell>Rs.35,000.00</TableCell>*/}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>
        </>
    );
};

export default PackageBookingForm;
