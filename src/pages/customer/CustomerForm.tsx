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
} from "@mui/material";

const CustomerForm = () => {
  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        <Paper>
          <React.Fragment>
            {/* <h2>Register Form</h2> */}
            {/* <form onSubmit={handleSubmit} action={<Link to="/login" />}> */}
            <form>
              <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="First Name"
                  size="small"
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Last Name"
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
                  label="First Name"
                  size="small"
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Last Name"
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
                    label="First Name"
                    size="small"
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    variant="outlined"
                    color="secondary"
                    label="Last Name"
                    size="small"
                    fullWidth
                    required
                />
              </Stack>
              <Button variant="outlined" color="secondary" type="submit">
                Register
              </Button>
            </form>
            {/* <small>
              <Link to="/login">`Login Here</Link>
            </small> */}
          </React.Fragment>

          <TableContainer component={Paper} className="mt-5">
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
        </Paper>
      </div>
    </section>
  );
};

export default CustomerForm;
