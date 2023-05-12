import React, {KeyboardEvent, useEffect, useState} from "react";

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
import axios from "../../axios";
import {PackageBookingProperties} from "../../types/PackageBookinProperties";
import {PaymentProperties} from "../../types/PaymentProperties";

const Payments = () => {

    /** this one is responsible to load details into the combo */
    const [tableList, setTableList] = useState<PackageBookingProperties[]>([]);

    /** this hook is useful to get the selected value */
    const [selectedPackage, setSelectedPackageChange] = useState("");

    const [setCustomerName, setCustomerNameChange] = useState("");

    /** this one is responsible to set the value to full amount */
    const [setPackageAmount, setPackageAmountChange] = useState<number>(0);

    const [setCashAmount, setCashAmountChange] = useState<number>(0);

    /** this one is responsible to set the value for balance field */
    const [setBalanceAmount, setBalanceAmountChange] = useState<number>(0);

    /** setting all payment list */
    const [paymentList, setPaymentList] = useState<PaymentProperties[]>([]);


    /** API calling function for get all bookings */
    const loadAllDetailsToTheCombo = async () => {
        try {
            const response = await axios.get("booking");
            setTableList(response.data.responseData);
            console.log(tableList);
        } catch (error) {
            console.log(error);
        }
    };

    /** API calling function for get all jeeps */
    const loadAllPaymentDetails = async () => {
        try {
            const response = await axios.get("payment");
            setPaymentList(response.data.responseData);
            console.log(tableList);
        } catch (error) {
            console.log(error);
        }
    };

    function setCustomerNameAndFullAmount(selectedPackage: string) {
        tableList.forEach((pack_values) => {
            if (pack_values.bookingID === selectedPackage) {
                setCustomerNameChange(pack_values.customerCode);
                setPackageAmountChange(pack_values.amount || 0);
            }
        });
    }

    useEffect(() => {
        loadAllDetailsToTheCombo().then(r => {
            console.log("load all tables ...");
            setCustomerNameAndFullAmount(selectedPackage);
        });
        loadAllPaymentDetails();
    }, []);

    const handleSubmit = () => {
        let responseBody = {
            bookingID: selectedPackage,
            customerName: setCustomerName,
            fullAmount: setPackageAmount,
            cash: setCashAmount,
            balance: setBalanceAmount,
        };

        axios
            .post("payment", JSON.stringify(responseBody))
            .then((res) => {
                console.log(responseBody);
                loadAllPaymentDetails();
            })
            .catch((e) => {
                console.log(e);
            });
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
                                    Driver Registration Form
                                </FormHelperText>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>

                                    <Select
                                        id="packageCode"
                                        name="packageCode"
                                        onChange={(e) => {
                                            const selectedPackage = e.target.value;
                                            setSelectedPackageChange(selectedPackage);
                                            setCustomerNameAndFullAmount(selectedPackage);
                                        }}
                                        value={selectedPackage}
                                        placeholder="Sample code"
                                        size="small"
                                        fullWidth
                                    >
                                        {tableList.map((packID) => (
                                            <MenuItem key={packID.bookingID} value={packID.bookingID}>
                                                {packID.bookingID}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Customer Name"
                                        name="setCustomerName"
                                        value={setCustomerName}
                                        size="small"
                                        fullWidth
                                        required
                                        aria-readonly={true}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                                    <TextField
                                        type="text"
                                        value={setPackageAmount}
                                        variant="outlined"
                                        color="secondary"
                                        label="Full amount"
                                        size="small"
                                        fullWidth
                                        required
                                        aria-readonly={true}
                                    />

                                    <TextField
                                        value={setCashAmount || ""}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                                            if (e.key === 'Tab') {
                                                alert(setCashAmount + "  " + setPackageAmount);
                                                setBalanceAmountChange((setCashAmount - (setPackageAmount || 0)));
                                            }
                                        }}
                                        onChange={(e) => {
                                            const value = parseFloat(e.target.value); // convert string to number
                                            setCashAmountChange(value || 0);
                                            setBalanceAmountChange((value - (setPackageAmount || 0)));
                                        }}
                                        label="Cash"
                                        size="small"
                                        fullWidth
                                        required
                                    />


                                    <TextField
                                        name="balance"
                                        value={setBalanceAmount}
                                        type="text"
                                        variant="outlined"
                                        color="secondary"
                                        label="Balance"
                                        size="small"
                                        fullWidth
                                        required
                                    />
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
                                    type="button"
                                    className="gap-2"
                                    onClick={handleSubmit}
                                >
                                    Confirm Booking
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
                                    Remove Booking
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
                                    <TableCell align="center" style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Booking ID
                                    </TableCell>
                                    <TableCell align="center" style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Customer
                                    </TableCell>
                                    <TableCell align="center" style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Full Amount
                                    </TableCell>
                                    <TableCell align="center" style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Cash
                                    </TableCell>
                                    <TableCell align="center" style={{color: "#ffffff", fontWeight: "bolder"}}>
                                        Balance
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paymentList.map((payment) => (
                                    <TableRow
                                        onClick={(e) => {
                                            console.log(payment._id);
                                            setSelectedPackageChange(payment.bookingID);
                                            setCustomerNameChange(payment.customerName);
                                            setPackageAmountChange(payment.fullAmount);
                                            setCashAmountChange(payment.cash);
                                            setBalanceAmountChange();

                                        }}
                                        key={payment.bookingID}
                                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                    >
                                        <TableCell align="center">{payment.bookingID}</TableCell>
                                        <TableCell align="center">
                                            {/* //TODO customer name kiyala gattata enne customer code eka eka balala hadanna poddak */}
                                            {payment.customerName}
                                        </TableCell>
                                        <TableCell align="center">
                                            {payment.fullAmount}
                                        </TableCell>
                                        <TableCell align="center">
                                            {payment.cash}
                                        </TableCell>
                                        <TableCell align="center">
                                            {payment.balance}
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

export default Payments;
