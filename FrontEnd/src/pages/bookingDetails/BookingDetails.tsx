import React, { useEffect, useState } from "react";
import SearchBar from "@mui/icons-material/Search";
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
  Box,
} from "@mui/material";
import customerBackground from "../../assets/6960243.jpg";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { PackageBookingProperties } from "../../types/PackageBookinProperties";
import axios from "../../axios";
import $ from "jquery";

import { PaymentProperties } from "../../types/PaymentProperties";
const BookingDetails = () => {
  /** this one is responsible to load details into the combo */
  const [tableList, setTableList] = useState<PackageBookingProperties[]>([]);

  const [paymentList, setPaymentList] = useState<PaymentProperties[]>([]);
  const loadAllPaymentDetails = async () => {
    try {
      const response = await axios.get("payment");
      setPaymentList(response.data.responseData);
      console.log(tableList);
    } catch (error) {
      console.log(error);
    }
  };

  const [searchValue, searchValueChange] = useState<any>();

  useEffect(() => {
    loadAllPaymentDetails();
  }, []);
  return (
    <>
      <SystemHeader />
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
                <FormHelperText style={{ fontSize: "25px," }}>
                  Driver Registration Form
                </FormHelperText>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
                  <TextField
                    type="text"
                    id="search"
                    onChange={(e) => {
                      const value = e.target.value;
                      searchValueChange(value.toString());
                    }}
                    variant="outlined"
                    color="secondary"
                    label="Booking ID"
                    size="small"
                    fullWidth
                    required
                  />

                  <Button
                    style={{
                      backgroundColor: "#039b48",
                      // marginRight: "7px",
                      fontWeight: "bolder",
                    }}
                    variant="contained"
                    type="submit"
                    startIcon={<SearchIcon />}
                  >
                    Search
                  </Button>
                </Stack>
              </form>
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
                  <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                    Booking ID
                  </TableCell>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                    Customer Code
                  </TableCell>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                    Package Code
                  </TableCell>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                    Balance
                  </TableCell>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                    Charge
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paymentList.map((payment) => {
                  if (searchValue === payment.bookingID.toString()) {
                    return (
                      <TableRow
                        key={payment.bookingID}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          {payment.bookingID}
                        </TableCell>
                        <TableCell align="center">
                          {payment.customerName}
                        </TableCell>
                        <TableCell align="center">
                          {payment.fullAmount}
                        </TableCell>
                        <TableCell align="center">{payment.cash}</TableCell>
                        <TableCell align="center">{payment.balance}</TableCell>
                      </TableRow>
                    );
                  } else  {
                    // return (
                    //   <TableRow
                    //     key={payment.bookingID}
                    //     sx={{
                    //       "&:last-child td, &:last-child th": { border: 0 },
                    //     }}
                    //   >
                    //     <TableCell align="center">
                    //       {payment.bookingID}
                    //     </TableCell>
                    //     <TableCell align="center">
                    //       {payment.customerName}
                    //     </TableCell>
                    //     <TableCell align="center">
                    //       {payment.fullAmount}
                    //     </TableCell>
                    //     <TableCell align="center">{payment.cash}</TableCell>
                    //     <TableCell align="center">{payment.balance}</TableCell>
                    //   </TableRow>
                    // );
                  } // Render nothing if the condition is not met
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </>
  );
};

export default BookingDetails;
