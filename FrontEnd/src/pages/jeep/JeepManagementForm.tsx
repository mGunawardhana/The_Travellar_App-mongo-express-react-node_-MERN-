import React, {ChangeEvent, useEffect, useRef, useState} from "react";

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

const JeepManagementForm = () => {
    const [jeepList, setJeepList] = useState<JeepProperties[]>([]);
    const [mongoPrimaryKey, mongoChange] = useState("");
    const [vehicleID, vehicleIdChange] = useState("");
    const [vehicleModel, vehicleModelChange] = useState("");
    const [passengerCount, passengerCountChange] = useState("");
    const [type, typeChange] = useState("");
    const [fuelType, fuelTypeChange] = useState("");
    const [jeepAvailability, jeepAvailabilityChange] = useState("");

    let key_for_put_and_delete: string | undefined | any;

    const passengerCountTxt = useRef('initial value');
    const fuelTxt = useRef('initial value');
    const availabilityTxt = useRef('initial value');

    // const passengerCountTxt = document.getElementById('passengerCountTxt') as HTMLInputElement;
    // const fuelTxt = document.getElementById('fuelTxt') as HTMLInputElement;
    // const availabilityTxt = document.getElementById('availabilityTxt') as HTMLInputElement;


    const passengerCountPack = ["8", "10", "12"];
    const fuelTypePack = ["Petrol", "Diesel"];
    const availability = ["YES", "NO"];

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
        getAllJeeps().then((r) => {
            console.log(jeepList);
        });
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        switch (name) {
            case "vehicleID":
                vehicleIdChange(value);
                break;
            case "vehicleModel":
                vehicleModelChange(value);
                break;
            case "passengerCount":
                passengerCountChange(value);
                break;
            case "type":
                typeChange(value);
                break;
            case "fuelType":
                fuelTypeChange(value);
                break;
            case "jeepAvailability":
                jeepAvailabilityChange(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        let responseBody = {
            vehicleID: vehicleID,
            vehicleModel: vehicleModel,
            passengerCount: passengerCount,
            type: type,
            fuelType: fuelType,
            jeepAvailability: jeepAvailability,
        };

        axios
            .post("jeep", JSON.stringify(responseBody))
            .then((res) => {
                console.log(responseBody);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleDelete = () => {
        if (window.confirm("Do you want to remove this jeep ?")) {
            axios
                .delete(`jeep/${mongoPrimaryKey}`)
                .then((response) => {
                    // getAllCustomers();
                    alert("Data deleted successfully. ");
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
                            <form className="py-[15px] px-[15px]">
                                <FormHelperText style={{fontSize: "25px,"}}>
                                    Vehicle Management Form
                                </FormHelperText>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        name="vehicleID"
                                        value={vehicleID}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Vehicle ID"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        name="vehicleModel"
                                        value={vehicleModel}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Vehicle Model"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        name="type"
                                        value={type}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Type"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                    <Autocomplete
                                        disablePortal
                                        id="passengerCountTxt"
                                        options={passengerCountPack}
                                        size="small"
                                        onCanPlay={handleInputChange}
                                        fullWidth
                                        renderInput={(params) => (
                                            <TextField {...params} label="Passenger Count"/>
                                        )}
                                        // value={passengerCount}
                                    />

                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <Autocomplete
                                        // value={fuelType}
                                        disablePortal
                                        id="fuelTxt"
                                        options={fuelTypePack}
                                        size="small"
                                        onCanPlay={handleInputChange}
                                        fullWidth
                                        renderInput={(params) => (
                                            <TextField {...params} label="Fuel Type"/>
                                        )}
                                    />

                                    <Autocomplete
                                        // value={jeepAvailability}
                                        // ref={availability}
                                        disablePortal
                                        id="availabilityTxt"
                                        options={availability}
                                        size="small"
                                        onCanPlay={handleInputChange}
                                        fullWidth
                                        renderInput={(params) => (
                                            <TextField {...params} label="Jeep Availability"/>
                                        )}
                                    />
                                </Stack>
                            </form>
                            <Button
                                style={{
                                    backgroundColor: "#2ed573",
                                    marginRight: "7px",
                                    fontWeight: "bolder",
                                }}
                                variant="contained"
                                type="submit"
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
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
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
                                    <TableCell
                                        align="center"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Vehicle ID
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Vehicle Model
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Passenger Count
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Type
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Fuel Type
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Availability
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {jeepList.map((jeep) => (
                                    <TableRow
                                        onClick={(e) => {
                                            console.log(jeep._id);
                                            key_for_put_and_delete = jeep._id;
                                            mongoChange(key_for_put_and_delete);
                                            vehicleIdChange(jeep.vehicleID);
                                            vehicleModelChange(jeep.vehicleModel);
                                            // passengerCountChange(jeep.passengerCount);
                                            typeChange(jeep.type);
                                            // fuelTypeChange(jeep.fuelType);
                                            // jeepAvailabilityChange(jeep.jeepAvailability);

                                            passengerCountTxt.current = jeep.passengerCount;
                                            fuelTxt.current = jeep.fuelType;
                                            availabilityTxt.current = jeep.jeepAvailability;
                                        }}
                                        key={jeep.vehicleID}
                                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                    >
                                        <TableCell align="center">{jeep.vehicleID}</TableCell>
                                        <TableCell align="center">{jeep.vehicleModel}</TableCell>
                                        <TableCell align="center">{jeep.passengerCount}</TableCell>
                                        <TableCell align="center">{jeep.type}</TableCell>
                                        <TableCell align="center">{jeep.fuelType}</TableCell>
                                        <TableCell align="center">
                                            {jeep.jeepAvailability}
                                        </TableCell>
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
