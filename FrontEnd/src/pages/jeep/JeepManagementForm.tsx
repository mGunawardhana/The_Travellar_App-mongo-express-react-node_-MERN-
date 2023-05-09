import React, {ChangeEvent, useEffect, useState} from "react";

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
import {JeepProperties} from "../../types/JeepProperties";
import axios from "../../axios";

const JeepManagementForm = () => {

    /** useState hooks */

    /** this hook is using to load the table */
    const [jeepList, setJeepList] = useState<JeepProperties[]>([]);

    /** this hook is responsible to providing values to update and delete   */
    const [mongoPrimaryKey, mongoChange] = useState("");

    /** text-fields managing hooks  */
    const [vehicleID, vehicleIdChange] = useState("");
    const [vehicleModel, vehicleModelChange] = useState("");
    const [passengerCount, passengerCountChange] = useState("");
    const [type, typeChange] = useState("");
    const [fuelType, fuelTypeChange] = useState("");
    const [jeepAvailability, jeepAvailabilityChange] = useState("");

    /** variable for storing mongo primary key */
    let key_for_put_and_delete: string | undefined | any;


    const passengerCountTxt = document.getElementById('passengerCountTxt') as HTMLInputElement;
    const fuelTxt = document.getElementById('fuelTxt') as HTMLInputElement;
    const availabilityTxt = document.getElementById('availabilityTxt') as HTMLInputElement;

    /** values for combo box's */
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
            passengerCount: selectedSeatType,
            type: type,
            fuelType: selectedFuelType,
            jeepAvailability: selectedAvailability,
        };

        axios
            .post("jeep", JSON.stringify(responseBody))
            .then((res) => {
                getAllJeeps();
                console.log(responseBody);
            })
            .catch((e) => {
                console.log(e);
            });
        alert(jeepAvailability)
    };

    const handleDelete = () => {
        if (window.confirm("Do you want to remove this jeep ?")) {
            axios
                .delete(`jeep/${mongoPrimaryKey}`)
                .then((response) => {
                    getAllJeeps();
                    alert("Data deleted successfully. ");
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error deleting data. ");
                });
        }
    };

    const handleUpdate = () => {
        let responseBody = {
            vehicleID: vehicleID,
            vehicleModel: vehicleModel,
            passengerCount: selectedSeatType,
            type: type,
            fuelType: selectedFuelType,
            jeepAvailability: selectedAvailability,
        };

        if (window.confirm("Do you want to update this jeep ?")) {
            axios
                .put(`jeep/${mongoPrimaryKey}`, JSON.stringify(responseBody))
                .then((response) => {
                    getAllJeeps();
                    alert("Data Updated successfully. ");
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error updating data. Because: " + error);
                });
        }
    };

    /** this hook is useful to get the selected value */
    const [selectedAvailability, setSelectedAvailabilityChange] = useState('');
    const [selectedSeatType, setSelectedSeatsCountChange] = useState('');
    const [selectedFuelType, setSelectedFuelTypeChange] = useState('');

    //TODO this number auto generator -----------------------
    let lastId = jeepList.length;

    function generateId(prefix: string, length: number): string {
        lastId++;
        const idString = lastId.toString().padStart(length, '0'); // convert the ID to a zero-padded string
        return `${prefix}-${idString}`;
    }

    const customerId = generateId('C00', 3);
    console.log("my primary key " + customerId);
    //TODO this number auto generator -----------------------

    // @ts-ignore
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

                                    <Select
                                        id="seatsCount"
                                        name="seatsCount"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => {
                                            const selectedSeatType = e.target.value;
                                            setSelectedSeatsCountChange(selectedSeatType);

                                        }}
                                        value={selectedSeatType}
                                        label="Availability"
                                    >
                                        {passengerCountPack.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>

                                    <Select
                                        id="fuelType"
                                        name="fuelType"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => {
                                            const selectedFuelType = e.target.value;
                                            setSelectedFuelTypeChange(selectedFuelType);

                                        }}
                                        value={selectedFuelType}
                                        label="Availability"
                                    >
                                        {availability.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                    <Select
                                        id="availabilityTxt"
                                        name="availabilityTxt"
                                        fullWidth
                                        size="small"
                                        onChange={(e) => {
                                            const selectedAvailability = e.target.value;
                                            setSelectedAvailabilityChange(selectedAvailability);

                                        }}
                                        value={selectedAvailability}
                                        label="Availability"
                                    >
                                        {fuelTypePack.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Stack>
                            </form>
                            <div className="ml-[15px] mt-[0px] pb-[15px]">
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
                                    onClick={handleUpdate}
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
                                            typeChange(jeep.type);
                                            setSelectedAvailabilityChange(jeep.jeepAvailability);
                                            setSelectedSeatsCountChange(jeep.passengerCount);
                                            setSelectedFuelTypeChange(jeep.fuelType);

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
