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
import {JeepProperties} from "../../types/JeepProperties";
import axios from "../../axios";

const passengerCount = [
    {label: "8"},
    {label: "12"},
    {label: "16"},
];

const fuelType = [
    {label: "Petrol"},
    {label: "Diesel"},
];


const availability = [{label: "Yes"}, {label: "No"}];

const JeepManagementForm = () => {

    const [jeepList, setJeepList] = useState<JeepProperties[]>([]);

    const getAllJeeps = async () => {
        try {
            const response = await axios.get("jeep");
            setJeepList(response.data.responseData);
            console.log(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllJeeps().then(r => {
            console.log(jeepList);
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
                                    Vehicle Management Form
                                </FormHelperText>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Vehicle ID"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Vehicle Model"
                                        size="small"
                                        fullWidth
                                        required
                                    />

                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={passengerCount}
                                        size="small"
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label="Passenger Count"/>}
                                    />
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Type"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={fuelType}
                                        size="small"
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label="Fuel Type"/>}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={availability}
                                        size="small"
                                        fullWidth
                                        renderInput={(params) => <TextField {...params} label="Jeep Availability"/>}
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
                                        Vehicle ID
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Vehicle Model
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Passenger Count
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Type
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Fuel Type
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Availability
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {jeepList.map((jeep) => (
                                    <TableRow
                                        key={jeep.vehicleID}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell align="right">{jeep.vehicleID}</TableCell>
                                        <TableCell align="right">{jeep.vehicleModel}</TableCell>
                                        <TableCell align="right">{jeep.passengerCount}</TableCell>
                                        <TableCell align="right">{jeep.type}</TableCell>
                                        <TableCell align="right">{jeep.fuelType}</TableCell>
                                        <TableCell align="right">{jeep.jeepAvailability}</TableCell>
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

export default JeepManagementForm;
