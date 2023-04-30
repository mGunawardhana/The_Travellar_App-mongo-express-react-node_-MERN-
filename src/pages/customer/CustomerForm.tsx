import React from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const CustomerForm = () => {
  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        <TableContainer component={Paper}>
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
