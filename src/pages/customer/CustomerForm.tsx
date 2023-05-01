import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  Button,
  Link,
  Stack,
  FormHelperText,
} from "@mui/material";
import customerBackground from "../../assets/redusebrightness.png";
const CustomerForm = () => {
  return (
    <section
      style={{
        boxShadow:
          " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        borderRadius: "15px",
        backgroundImage: `url(${customerBackground})`,
        backgroundSize: "cover",
      }}
      className="my-[70px] mx-20 xl:mx-60 xl:my-[150px] py-[50px] xl:py-16"
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
                Customer Registration Form
              </FormHelperText>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="ID"
                  size="small"
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="First Name"
                  size="small"
                  fullWidth
                  required
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Last Name"
                  size="small"
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Address"
                  size="small"
                  fullWidth
                  required
                />
              </Stack>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Contact"
                  size="small"
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Email"
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
                <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                  ID
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                  First Name
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                  Last Name
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                  Address
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                  Contact
                </TableCell>
                <TableCell style={{ color: "#ffffff", fontWeight: "bolder" }}>
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>C001</TableCell>
                <TableCell>Maneesha</TableCell>
                <TableCell>Gunawardhana</TableCell>
                <TableCell>Galle</TableCell>
                <TableCell>071-9054432</TableCell>
                <TableCell>manee@gmail.com</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>C002</TableCell>
                <TableCell>Sasmitha</TableCell>
                <TableCell>Gunawardhana</TableCell>
                <TableCell>Galle</TableCell>
                <TableCell>071-2344432</TableCell>
                <TableCell>sas@gmail.com</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>C003</TableCell>
                <TableCell>Asoka</TableCell>
                <TableCell>Gunawardhana</TableCell>
                <TableCell>Galle</TableCell>
                <TableCell>071-9124432</TableCell>
                <TableCell>asoka@gmail.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>C004</TableCell>
                <TableCell>Dinusha</TableCell>
                <TableCell>Gunawardhana</TableCell>
                <TableCell>Galle</TableCell>
                <TableCell>071-9052332</TableCell>
                <TableCell>dinu@gmail.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default CustomerForm;
