import React from "react";

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
import customerBackground from "../../assets/redusebrightness.png";
import SystemHeader from "../../components/SystemHeader/SystemHeader";

// const guide = [{label:"sample"},{label:"sample"}];

const packages = [{label: "P001"}, {label: "P002"}, {label: "P003"}];
const jeep_code = [{label: "J001"}, {label: "J002"}];
const driver_code = [{label: "D001"}, {label: "D002"}];
const customer_code = [{label: "C001"}, {label: "C002"}];

const PackageBookingForm = () => {
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
                                        options={packages}
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
                                        label="Day Count or Hours Count"
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
                                        options={customer_code}
                                        size="small"
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label="Driver Code"/>}
                                    />
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Customer Code"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                </Stack>

                                <Button
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
                                        Code
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Name
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Guide Code
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Guide Name
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Days/Hrs
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Package Amount
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>P001</TableCell>
                                    <TableCell>Safari</TableCell>
                                    <TableCell>G001</TableCell>
                                    <TableCell>Mr.Saman</TableCell>
                                    <TableCell>2 Nights</TableCell>
                                    <TableCell>Rs.35,000.00</TableCell>
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
