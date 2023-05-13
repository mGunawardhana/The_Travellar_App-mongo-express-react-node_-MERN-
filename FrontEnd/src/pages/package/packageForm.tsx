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
import {PackageProperties} from "../../types/PackageProperties";
import axios from "../../axios";


// const guide = [{label:"sample.tsx"},{label:"sample.tsx"}];

const PackageForm = () => {

    /** hook for loading all package details */
    const [packageList, setPackageList] = useState<PackageProperties[]>([]);

    /** hook for mongo primary key */
    const [mongoPrimaryKey, mongoChange] = useState("");

    /** hook for package id */
    const [packageID, packageIdChange] = useState("");

    /** hook for package name */
    const [packageName, packageNameChange] = useState("");

    /** hook for days hrs count */
    const [daysHrsCount, daysHrsCountChange] = useState("");

    /** hook for description */
    const [description, descriptionChange] = useState("");

    /** hook for offers */
    const [offers, offersChange] = useState(0);

    /** hooks for package amount */
    const [packageAmount, packageAmountChange] = useState(0);

    /** variable for storing mongo primary key */
    let key_for_put_and_delete: string | undefined | any;

    /** method for load all packages */
    const getAllPackages = async () => {
        try {
            const response = await axios.get("package");
            setPackageList(response.data.responseData);
            console.log(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    /** calling function */
    useEffect(() => {
        getAllPackages().then(r => {
            console.log(packageList);
        });
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        switch (name) {
            case "packageID":
                packageIdChange(value);
                break;
            case "packageName":
                packageNameChange(value);
                break;
            case "daysHrsCount":
                daysHrsCountChange(value);
                break;
            case "description":
                descriptionChange(value);
                break;
            case "offers":
                offersChange(parseInt(value));
                break;
            case "packageAmount":
                packageAmountChange(parseInt(value));
                break;
            default:
                break;
        }
    };

    /** function for save */
    const handleSubmit = () => {
        let responseBody = {
            packageID: packageID,
            packageName: packageName,
            daysHrsCount: daysHrsCount,
            description: description,
            offers: offers,
            packageAmount: packageAmount,
        };

        axios
            .post("package", responseBody)
            .then((res) => {
                console.log(responseBody);
                getAllPackages();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    /** function for delete */
    const handleDelete = () => {
        if (window.confirm("Do you want to remove this customer ?")) {
            axios
                .delete(`package/${mongoPrimaryKey}`)
                .then((response) => {
                    getAllPackages();
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
            packageID: packageID,
            packageName: packageName,
            daysHrsCount: daysHrsCount,
            description: description,
            offers: offers,
            packageAmount: packageAmount,
        };

        if (window.confirm("Do you want to update this package ?")) {
            axios
                .put(`package/${mongoPrimaryKey}`, responseBody)
                .then((response) => {
                    getAllPackages();
                    alert("Data Updated successfully. ");
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error updating data. Because: " + error);
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
                                        value={packageID}
                                        name="packageID"
                                        onChange={handleInputChange}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Package ID"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        value={packageName}
                                        name="packageName"
                                        onChange={handleInputChange}
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
                                    <TextField
                                        value={daysHrsCount}
                                        name="daysHrsCount"
                                        onChange={handleInputChange}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Day Count or Hrs Count"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        value={description}
                                        name="description"
                                        onChange={handleInputChange}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Discription"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        value={offers}
                                        name="offers"
                                        onChange={handleInputChange}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Offers"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        value={packageAmount}
                                        name="packageAmount"
                                        onChange={handleInputChange}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Package Amount"
                                        size="small"
                                        fullWidth
                                        required
                                    />
                                </Stack>
                            </form>

                            <div className="ml-[15px] mt-[0px] pb-[15px]">
                                <Button
                                    onClick={handleSubmit}
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
                                    onClick={handleDelete}
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
                                        Code
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Name
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Days/Hrs
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Note
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Discount
                                    </TableCell>
                                    <TableCell style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Package Amount
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {packageList.map((samplePackage) => (
                                    <TableRow

                                        onClick={(e) => {
                                            console.log(samplePackage._id);
                                            key_for_put_and_delete = samplePackage._id;
                                            mongoChange(key_for_put_and_delete);
                                            packageIdChange(samplePackage.packageID);
                                            packageNameChange(samplePackage.packageName);
                                            daysHrsCountChange(samplePackage.daysHrsCount);
                                            descriptionChange(samplePackage.description);
                                            offersChange(samplePackage.offers);
                                            packageAmountChange(samplePackage.packageAmount);
                                        }}

                                        key={samplePackage.packageID}
                                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                    >
                                        <TableCell align="right">{samplePackage.packageID}</TableCell>
                                        <TableCell align="right">{samplePackage.packageName}</TableCell>
                                        <TableCell align="right">{samplePackage.daysHrsCount}</TableCell>
                                        <TableCell align="right">{samplePackage.description}</TableCell>
                                        <TableCell align="right">{samplePackage.offers}</TableCell>
                                        <TableCell align="right">{samplePackage.packageAmount}</TableCell>
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

export default PackageForm;
