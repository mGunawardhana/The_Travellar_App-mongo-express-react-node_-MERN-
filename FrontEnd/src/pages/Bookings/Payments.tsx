import React from "react";

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

const Payments = () => {
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
                    variant="outlined"
                    color="secondary"
                    label="Booking ID"
                    size="small"
                    fullWidth
                    required
                  />
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Customer Name"
                    size="small"
                    fullWidth
                    required
                    disabled
                  />
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Full amount"
                    size="small"
                    fullWidth
                    required
                    disabled
                  />
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Cash"
                    size="small"
                    fullWidth
                    required
                  />
                  <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Balance"
                    size="small"
                    fullWidth
                    required
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
                  className="gap-2"
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
                    Customer
                  </TableCell>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                    Full Amount
                  </TableCell>
                  <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                    Balance
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>B001</TableCell>
                  <TableCell>Maneesha</TableCell>
                  <TableCell>Rs.60,000.00</TableCell>
                  <TableCell>Rs.1500.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </>
  );
};

export default Payments;
