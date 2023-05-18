import React, {ChangeEvent, useEffect, useState} from "react";

import {
    Button,
    FormHelperText,
    OutlinedInput,
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
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import SaveIcon from "@mui/icons-material/Save";
import $ from "jquery";

// import OutlinedInput  from "@material-ui/core";

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
    const [image, setImage] = useState<any>(null);

    /** variable for storing mongo primary key */
    let key_for_put_and_delete: string | undefined | any;

    /** method for load all packages */
    const getAllPackages = async (): Promise<void> => {
        try {
            const response = await axios.get<any>("package");
            setPackageList(response.data.responseData);
            console.log(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    /** calling function */
    useEffect(() => {
        getAllPackages().then((r) => {
            console.log(packageList);
        });
    }, []);


    const handleFile = (e: ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.files);
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        } else {
            setImage(null);
        }
    };
    /** ------------------------------------------------------------------------------------------------------------- */

    $("#packageID").keyup(function (event) {
        let catchEvent = event.which;
        console.log(catchEvent);
        if (catchEvent === 13) {
            $("#packageName").focus();
        }
    });

    $("#packageName").keyup(function (event) {
        let catchEvent = event.which;
        console.log(catchEvent);
        if (catchEvent === 13) {
            $("#daysHrsCount").focus();
        }
    });

    $("#daysHrsCount").keyup(function (event) {
        let catchEvent = event.which;
        console.log(catchEvent);
        if (catchEvent === 13) {
            $("#description").focus();
        }
    });

    $("#description").keyup(function (event) {
        let catchEvent = event.which;
        console.log(catchEvent);
        if (catchEvent === 13) {
            $("#offers").focus();
        }
    });

    $("#offers").keyup(function (event) {
        let catchEvent = event.which;
        console.log(catchEvent);
        if (catchEvent === 13) {
            $("#packageAmount").focus();
        }
    });

    $("#packageAmount").keyup(function (event) {
        let catchEvent = event.which;
        console.log(catchEvent);
        if (catchEvent === 13) {
            $("#file").focus();
        }
    });

    $("#file").keyup(function (event) {
        let catchEvent = event.which;
        console.log(catchEvent);
        if (catchEvent === 13) {
            $("#saveBtn").focus();
        }
    });

    /** ------------------------------------------------------------------------------------------------------------- */
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

    const clearText = () => {
        packageIdChange("");
        packageNameChange("");
        daysHrsCountChange("");
        descriptionChange("");
        offersChange(0);
        packageAmountChange(0);
    };


    const handleSubmit = (): void => {
        const requestBody = {
            packageID,
            packageName,
            daysHrsCount,
            description,
            offers,
            packageAmount,
            packageImage: " ",
        };

        axios
            .post("package", requestBody)
            .then((res) => {
                const formdata = new FormData();
                if (image) {
                    formdata.append("file", image);
                }

                axios
                    .put(`package/image/${res.data.responseData._id}`, formdata, {
                        headers: {"Content-Type": "multipart/form-data"},
                    })
                    .then(() => {
                        alert("Saved..!");
                        getAllPackages();
                    })
                    .catch(() => {
                    });
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
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        iconColor: "#ff4757",
                        backdrop: "true",
                        background: "#ffffff",
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", Swal.stopTimer);
                            toast.addEventListener("mouseleave", Swal.resumeTimer);
                        },
                    });

                    Toast.fire({
                        icon: "success",
                        title: "Delete Successfully!",
                    });
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error deleting data. ");
                });
        }
    };

    /** update function */
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
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        width: "300px",
                        iconColor: "#ffa502",
                        backdrop: "true",
                        background: "#ffffff",
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", Swal.stopTimer);
                            toast.addEventListener("mouseleave", Swal.resumeTimer);
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Update Successfully!",
                    });
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
                            <form className="py-[15px] px-[15px]">
                                <FormHelperText style={{fontSize: "25px,"}}>
                                    Package Management Form
                                </FormHelperText>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        value={packageID}
                                        name="packageID"
                                        id="packageID"
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
                                        id="packageName"
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
                                        id="daysHrsCount"
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
                                        id="description"
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
                                        id="offers"
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
                                        id="packageAmount"
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

                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <OutlinedInput
                                        size="small"
                                        type="file"
                                        id="file"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            e.preventDefault();
                                            handleFile(e);
                                        }}
                                        inputProps={{
                                            multiple: true,
                                        }}
                                    />
                                </Stack>
                            </form>

                            <div className="ml-[15px] mt-[0px] pb-[15px]">
                                <Button
                                    id="saveBtn"
                                    onClick={(e) => {
                                        handleSubmit();
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
                                    onClick={(e) => {
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
                                    onClick={(e) => {
                                        handleDelete();
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
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                    className="bg-black"
                                >
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
                                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                    >
                                        <TableCell align="center">
                                            {samplePackage.packageID}
                                        </TableCell>
                                        <TableCell align="center">
                                            {samplePackage.packageName}
                                        </TableCell>
                                        <TableCell align="center">
                                            {samplePackage.daysHrsCount}
                                        </TableCell>
                                        <TableCell align="center">{samplePackage.offers}</TableCell>
                                        <TableCell align="center">
                                            {samplePackage.packageAmount}
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

export default PackageForm;
