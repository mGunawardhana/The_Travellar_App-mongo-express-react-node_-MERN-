import React, {ChangeEvent, useEffect, useState} from "react";

import {
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
import {DriverProperties} from "../../types/DriverProperties";
import axios from "../../axios";

const DriverForm = () => {

    /** hook for loading driver table */
    const [driverList, setDriverList] = useState<DriverProperties[]>([]);

    /** this hook is responsible to providing values to update and delete   */
    const [mongoPrimaryKeyDriver, mongoChangeDriver] = useState("");

    /** text-fields managing hooks  */
    const [driverID, driverIdChange] = useState("");
    const [driverFirstName, driverFirstNameChange] = useState("");
    const [driverLastName, driverLastNameChange] = useState("");
    const [driverLicense, driverAddressChange] = useState("");
    const [driverContact, driverContactChange] = useState("");
    const [driverEmail, driverEmailChange] = useState("");

    let driver_key_for_put_and_delete: string | undefined | any;

    const getAllDrivers = async () => {
        try {
            const response = await axios.get("driver");
            setDriverList(response.data.responseData);
            console.log(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllDrivers().then(r => {
            console.log(driverList);
        });
    }, []);

    const handleInputChangeDriver = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        switch (name) {
            case "driverID":
                driverIdChange(value);
                break;
            case "driverFirstName":
                driverFirstNameChange(value);
                break;
            case "driverLastName":
                driverLastNameChange(value);
                break;
            case "driverLicense":
                driverAddressChange(value);
                break;
            case "driverContact":
                driverContactChange(value);
                break;
            case "driverEmail":
                driverEmailChange(value);
                break;
            default:
                break;
        }
    };

    const handleSubmitDriver = () => {

        let responseBodyForDriver = {
            driverID: driverID,
            driverFirstName: driverFirstName,
            driverLastName: driverLastName,
            driverLicense: driverLicense,
            driverContact: driverContact,
            driverEmail: driverEmail,
        };

        axios
            .post("driver", responseBodyForDriver)
            .then((res) => {
                console.log(responseBodyForDriver);
                getAllDrivers();

            })
            .catch((e) => {
                console.log(e);
            });
    }

    const handleDeleteDriver = () => {
        if (window.confirm('Do you want to remove this driver ?')) {
            axios
                .delete(`driver/${mongoPrimaryKeyDriver}`)
                .then((response) => {
                    getAllDrivers();
                    alert("Data deleted successfully. ");
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error deleting data. ");
                });
        }
    }

    const handleUpdate = () => {

        let responseBody = {
            driverID: driverID,
            driverFirstName: driverFirstName,
            driverLastName: driverLastName,
            driverLicense: driverLicense,
            driverContact: driverContact,
            driverEmail: driverEmail,
        };

        if (window.confirm('Do you want to update this driver ?')) {

            axios
                .put(`driver/${mongoPrimaryKeyDriver}`,responseBody)
                .then((response) => {
                    getAllDrivers();
                    alert("Data Updated successfully. ");
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error updating data. Because: "+error);
                });
        }
    }


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
                                    Driver Registration Form
                                </FormHelperText>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        value={driverID}
                                        name="driverID"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="ID"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={handleInputChangeDriver}
                                    />
                                    <TextField
                                        value={driverFirstName}
                                        name="driverFirstName"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="First Name"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={handleInputChangeDriver}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        value={driverLastName}
                                        name="driverLastName"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Last Name"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={handleInputChangeDriver}
                                    />
                                    <TextField
                                        value={driverLicense}
                                        name="driverLicense"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="License Number"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={handleInputChangeDriver}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        value={driverContact}
                                        name="driverContact"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Contact"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={handleInputChangeDriver}
                                    />
                                    <TextField
                                        value={driverEmail}
                                        name="driverEmail"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Email"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={handleInputChangeDriver}
                                    />
                                </Stack>


                            </form>

                            <div className="ml-[15px] mt-[0px] pb-[15px]">
                                <Button
                                    onClick={handleSubmitDriver}
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
                                    onClick={handleUpdate}
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
                                    onClick={handleDeleteDriver}
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
                            </div>
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
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    className="bg-black">
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        ID
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        First Name
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Last Name
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        License Number
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Contact
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Email
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {driverList.map((driver) => (
                                    <TableRow

                                        onClick={(e) => {
                                            console.log(driver._id);
                                            driver_key_for_put_and_delete = driver._id;
                                            mongoChangeDriver(driver_key_for_put_and_delete);
                                            driverIdChange(driver.driverID);
                                            driverFirstNameChange(driver.driverFirstName);
                                            driverLastNameChange(driver.driverLastName);
                                            driverAddressChange(driver.driverLicense);
                                            driverContactChange(driver.driverContact);
                                            driverEmailChange(driver.driverEmail);
                                        }}

                                        key={driver.driverID}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell align="right">{driver.driverID}</TableCell>
                                        <TableCell align="right">{driver.driverFirstName}</TableCell>
                                        <TableCell align="right">{driver.driverLastName}</TableCell>
                                        <TableCell align="right">{driver.driverLicense}</TableCell>
                                        <TableCell align="right">{driver.driverContact}</TableCell>
                                        <TableCell align="right">{driver.driverEmail}</TableCell>
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

export default DriverForm;
