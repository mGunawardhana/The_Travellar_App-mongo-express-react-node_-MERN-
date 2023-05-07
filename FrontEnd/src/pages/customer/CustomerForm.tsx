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
import {CustomerProperties} from "../../types/CustomerPropertes";
import axios from "../../axios";

const CustomerForm = () => {
    const [customerList, setCustomerList] = useState<CustomerProperties[]>([]);
    const [mongoPrimaryKey, mongoChange] = useState("");
    const [customerID, idChange] = useState("");
    const [customerFirstName, firstNameChange] = useState("");
    const [customerLastName, lastNameChange] = useState("");
    const [customerAddress, addressChange] = useState("");
    const [customerContact, contactChange] = useState("");
    const [customerEmail, emailChange] = useState("");

    let key_for_put_and_delete: string | undefined | any;

    const getAllCustomers = async () => {
        try {
            const response = await axios.get("customer");
            setCustomerList(response.data.responseData);
            console.log(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCustomers().then((r) => {
            console.log(customerList);
        });
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        switch (name) {
            case "customerID":
                idChange(value);
                break;
            case "customerFirstName":
                firstNameChange(value);
                break;
            case "customerLastName":
                lastNameChange(value);
                break;
            case "customerAddress":
                addressChange(value);
                break;
            case "customerContact":
                contactChange(value);
                break;
            case "customerEmail":
                emailChange(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit= () => {

        let responseBody = {
            customerID: customerID,
            customerFirstName: customerFirstName,
            customerLastName: customerLastName,
            customerAddress: customerAddress,
            customerContact: customerContact,
            customerEmail: customerEmail,
        };

        axios
            .post("customer", responseBody)
            .then((res) => {
                console.log(responseBody);
                getAllCustomers();
            })
            .catch((e) => {
                console.log(e);
            });
    }


    const handleDelete = () => {
        if (window.confirm('Do you want to remove this customer ?')) {
            axios
                .delete(`customer/${mongoPrimaryKey}`)
                .then((response) => {
                    getAllCustomers();
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
            customerID: customerID,
            customerFirstName: customerFirstName,
            customerLastName: customerLastName,
            customerAddress: customerAddress,
            customerContact: customerContact,
            customerEmail: customerEmail,
        };

        if (window.confirm('Do you want to update this customer ?')) {

            axios
                .put(`customer/${mongoPrimaryKey}`,responseBody)
                .then((response) => {
                    getAllCustomers();
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
                            <form className="py-[15px] px-[15px]" >

                                <FormHelperText style={{fontSize: "25px,"}}>
                                    Customer Registration Form
                                </FormHelperText>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 3}}>
                                    <TextField
                                        value={customerID}
                                        type="text"
                                        name="customerID"
                                        variant="outlined"
                                        color="secondary"
                                        label="ID"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        value={customerFirstName}
                                        type="text"
                                        name="customerFirstName"
                                        variant="outlined"
                                        color="secondary"
                                        label="First Name"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 3}}>
                                    <TextField
                                        value={customerLastName}
                                        type="text"
                                        name="customerLastName"
                                        variant="outlined"
                                        color="secondary"
                                        label="Last Name"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        value={customerAddress}
                                        type="text"
                                        name="customerAddress"
                                        variant="outlined"
                                        color="secondary"
                                        label="Address"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 3}}>
                                    <TextField
                                        value={customerContact}
                                        type="text"
                                        name="customerContact"
                                        variant="outlined"
                                        color="secondary"
                                        label="Contact"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        value={customerEmail}
                                        type="text"
                                        name="customerEmail"
                                        variant="outlined"
                                        color="secondary"
                                        label="Email"
                                        size="small"
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                </Stack>
                            </form>


                            <div className="ml-[15px] mt-[0px] pb-[15px]">
                                <Button
                                    onClick={handleSubmit}
                                    style={{
                                        backgroundColor: "#039b48",
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
                                <TableRow className="bg-black">
                                    <TableCell
                                        align="right"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        ID
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        First Name
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Last Name
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Address
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Contact
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        style={{color: "#ffffff", fontWeight: "bolder"}}
                                    >
                                        Email
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {customerList.map((customer) => (
                                    <TableRow
                                        onClick={(e) => {
                                            console.log(customer._id);
                                            key_for_put_and_delete = customer._id;
                                            mongoChange(key_for_put_and_delete);
                                            idChange(customer.customerID);
                                            firstNameChange(customer.customerFirstName);
                                            lastNameChange(customer.customerLastName);
                                            addressChange(customer.customerAddress);
                                            contactChange(customer.customerContact);
                                            emailChange(customer.customerEmail);
                                        }}

                                        key={customer.customerID}
                                        sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                        <TableCell align="right">{customer.customerID}</TableCell>
                                        <TableCell align="right">{customer.customerFirstName}</TableCell>
                                        <TableCell align="right">{customer.customerLastName}</TableCell>
                                        <TableCell align="right">{customer.customerAddress}</TableCell>
                                        <TableCell align="right">{customer.customerContact}</TableCell>
                                        <TableCell align="right">{customer.customerEmail}</TableCell>
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

export default CustomerForm;
