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
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import SaveIcon from '@mui/icons-material/Save';

const DriverForm = () => {

    /** hook for loading driver table */
    const [driverList, setDriverList] = useState<DriverProperties[]>([]);

    /** this hook is responsible to providing values to update and delete   */
    const [mongoPrimaryKeyDriver, mongoChangeDriver] = useState("");

    /** text-fields managing hooks  */
    const [driverID, driverIdChange] = useState("");
    const [driverFirstName, driverFirstNameChange] = useState("");
    const [availability, availabilityChange] = useState("");
    const [driverLicense, driverAddressChange] = useState("");
    const [driverContact, driverContactChange] = useState("");
    const [driverEmail, driverEmailChange] = useState("");

    /** variable for storing mongo primary key */
    let driver_key_for_put_and_delete: string | undefined | any;

    /** load all function */
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
            case "availability":
                availabilityChange(value);
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

    const clearText =()=>{
        driverIdChange("");
        driverFirstNameChange("");
        availabilityChange("");
        driverAddressChange("");
        driverContactChange("");
        driverEmailChange("");
    }

    /** save function */
    const handleSubmitDriver = () => {

        let responseBodyForDriver = {
            driverID: driverID,
            driverFirstName: driverFirstName,
            driverLicense: driverLicense,
            driverContact: driverContact,
            driverEmail: driverEmail,
            availability: availability,
        };

        axios
            .post("driver", responseBodyForDriver)
            .then((res) => {
                console.log(responseBodyForDriver);
                getAllDrivers();
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
    }


    /** delete function */
    const handleDeleteDriver = () => {
        if (window.confirm('Do you want to remove this driver ?')) {
            axios
                .delete(`driver/${mongoPrimaryKeyDriver}`)
                .then((response) => {
                    getAllDrivers();
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
    }

    /** update function */
    const handleUpdate = () => {

        let responseBody = {
            driverID: driverID,
            driverFirstName: driverFirstName,
            driverLicense: driverLicense,
            driverContact: driverContact,
            driverEmail: driverEmail,
            availability: availability,

        };

        if (window.confirm('Do you want to update this driver ?')) {

            axios
                .put(`driver/${mongoPrimaryKeyDriver}`, responseBody)
                .then((response) => {
                    getAllDrivers();
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        width: '300px',
                        iconColor: '#ffa502',
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
                        title: 'Update Successfully!'
                    })
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error updating data. Because: " + error);
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
                                        value={availability}
                                        name="availability"
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Availability"
                                        size="small"
                                        fullWidth
                                        required
                                        onChange={handleInputChangeDriver}
                                    />

                                </Stack>


                            </form>

                            <div className="ml-[15px] mt-[0px] pb-[15px]">
                                <Button
                                    onClick={(e)=>{
                                        handleSubmitDriver();
                                        clearText();
                                    }}
                                    style={{
                                        backgroundColor: "#039b48",
                                        marginRight: "7px",
                                        fontWeight: "bolder",
                                    }}
                                    variant="contained"
                                    startIcon={<SaveIcon/>}

                                    type="submit"
                                >
                                    Save
                                </Button>
                                <Button
                                    onClick={(e)=>{
                                        handleUpdate();
                                        clearText();
                                    }}
                                    style={{
                                        backgroundColor: "#ffa502",
                                        marginRight: "7px",
                                        fontWeight: "bolder",
                                    }}
                                    variant="contained"
                                    startIcon={<UpdateIcon/>}

                                    type="submit"
                                >
                                    Update
                                </Button>
                                <Button
                                    onClick={(e)=>{
                                        handleDeleteDriver();
                                        clearText();
                                    }}
                                    style={{
                                        backgroundColor: "#ff4757",
                                        marginRight: "7px",
                                        fontWeight: "bolder",
                                    }}
                                    variant="contained"
                                    startIcon={<DeleteIcon/>}

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
                                        License Number
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Contact
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Email
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Availability
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
                                            availabilityChange(driver.availability);
                                            driverAddressChange(driver.driverLicense);
                                            driverContactChange(driver.driverContact);
                                            driverEmailChange(driver.driverEmail);
                                        }}

                                        key={driver.driverID}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell align="right">{driver.driverID}</TableCell>
                                        <TableCell align="right">{driver.driverFirstName}</TableCell>
                                        <TableCell align="right">{driver.driverLicense}</TableCell>
                                        <TableCell align="right">{driver.driverContact}</TableCell>
                                        <TableCell align="right">{driver.driverEmail}</TableCell>
                                        <TableCell align="right">{driver.availability}</TableCell>
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
