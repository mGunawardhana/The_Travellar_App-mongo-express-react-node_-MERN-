import React, {useEffect, useState} from "react";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import {Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
// eslint-disable-next-line @typescript-eslint/no-redeclare
import Box from "@mui/material/Box";
import { CustomerProperties } from "../../types/CustomerPropertes";
import customerBackground from "../../assets/5311.jpg";
import axios from "../../axios";
import {PaymentProperties} from "../../types/PaymentProperties";
import {DriverProperties} from "../../types/DriverProperties";
import {JeepProperties} from "../../types/JeepProperties";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import image01 from "../../assets/gal/Untitled design.png"
import image02 from "../../assets/hotels/1.png"
import image03 from "../../assets/hotels/2.png"
import image04 from "../../assets/hotels/4.png"


// import image01 from "../../assets/1.png";
// import image02 from "../../assets/2.png";
// import image03 from "../../assets/3.png";
// import image04 from "../../assets/4.png";
// import Avatar from "@mui/material/Avatar";
// import AvatarGroup from "@mui/material/AvatarGroup";

{/*             <AvatarGroup*/
}
{/*  className=" mr-2 mt-[10px]"*/
}
{/*  total={customerList.length-2}*/
}
{/*>*/
}
{/*  <Avatar alt="Remy Sharp" src={image01} />*/
}
{/*  <Avatar alt="Travis Howard" src={image02} />*/
}
{/*  <Avatar alt="Agnes Walker" src={image03} />*/
}
{/* */
}
{/*</AvatarGroup>*/
}
const DashboardForm = () => {

    /** loading all customers */
    const [customerList, setCustomerList] = useState<CustomerProperties[]>([]);

    /** get all function */
    const getAllCustomers = async () => {
        try {
            const response = await axios.get("dashboard/customers");
            setCustomerList(response.data.responseData);
            // customerCount = customerList.length;
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

    /** setting all payment list */
    const [paymentList, setPaymentList] = useState<PaymentProperties[]>([]);

    /** API calling function for get all jeeps */
    /** API calling function for get all jeeps */
    const loadAllPaymentDetails = async () => {
        try {
            const response = await axios.get("dashboard/payments");
            setPaymentList(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadAllPaymentDetails();
    }, []);


    /** hook for loading driver table */
    const [driverList, setDriverList] = useState<DriverProperties[]>([]);

    /** load all function */
    const getAllDrivers = async () => {
        try {
            const response = await axios.get("dashboard/drivers");
            setDriverList(response.data.responseData);
            console.log(response.data.responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllDrivers().then(r => {
            console.log(driverList);
        });
    }, []);

    const [jeepList, setJeepList] = useState<JeepProperties[]>([]);
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

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));


    return (
      <>
        <SystemHeader />
        <section
          style={{
            boxShadow:
              " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            borderRadius: "15px",
            // backgroundImage: `url(${customerBackground})`,
            backgroundSize: "cover",
          }}
          className="my-[70px] mx-20 xl:mx-60 xl:my-[80px] py-[50px] xl:py-16"
        >
          <div className="container mx-auto">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 270,
                  height: 120,
                },
              }}
            >
              <Paper
                elevation={3}
                style={{ backgroundColor: "#2f3542", borderRadius: "10px" }}
              >
                <div
                  style={{ backgroundColor: "#ffa502", height: "100px" }}
                  className={"flex flex-row"}
                >
                  <Typography className={"pr-5 pt-10 pl-4"} variant="h4">
                    Customers
                  </Typography>
                  <Typography
                    style={{ textAlign: "right", color: "#ffffff" }}
                    className={"pr-5 pt-8"}
                    variant="h3"
                  >
                    {customerList.length}
                  </Typography>
                </div>
              </Paper>
              <Paper
                elevation={3}
                style={{ backgroundColor: "#2f3542", borderRadius: "10px" }}
              >
                <div
                  style={{ backgroundColor: "#ffa502", height: "100px" }}
                  className={"flex flex-row"}
                >
                  <Typography className={"pr-5 pt-10 pl-4"} variant="h4">
                    Payments
                  </Typography>
                  <Typography
                    style={{ textAlign: "right", color: "#ffffff" }}
                    className={"pr-5 pt-8"}
                    variant="h3"
                  >
                    {paymentList.length}
                  </Typography>
                </div>
              </Paper>
              <Paper
                elevation={3}
                style={{ backgroundColor: "#2f3542", borderRadius: "10px" }}
              >
                <div
                  style={{ backgroundColor: "#ffa502", height: "100px" }}
                  className={"flex flex-row"}
                >
                  <Typography className={"pr-5 pt-10 pl-4"} variant="h4">
                    Drivers
                  </Typography>
                  <Typography
                    style={{ textAlign: "right", color: "#ffffff" }}
                    className={"pr-5 pt-8"}
                    variant="h3"
                  >
                    {driverList.length}
                  </Typography>
                </div>
              </Paper>
              <Paper
                elevation={3}
                style={{ backgroundColor: "#2f3542", borderRadius: "10px" }}
              >
                <div
                  style={{ backgroundColor: "#ffa502", height: "100px" }}
                  className={"flex flex-row"}
                >
                  <Typography className={"pr-5 pt-10 pl-4"} variant="h4">
                    Vehicles
                  </Typography>
                  <Typography
                    style={{ textAlign: "right", color: "#ffffff" }}
                    className={"pr-5 pt-8"}
                    variant="h3"
                  >
                    {jeepList.length}
                  </Typography>
                </div>
              </Paper>
            </Box>

            <label className="pt-5">The Traveler Hotel Group</label>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                marginTop: "10px",

                "& > :not(style)": {
                  m: 1,
                },
              }}
            >
              <Card
                style={{
                  boxShadow:
                    " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                }}
                sx={{ maxWidth: 250 }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={image01}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Holiday Inn
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Luxurious accommodations, exceptional amenities, outstanding
                    service, comfortable rooms, diverse dining, fitness
                    facilities, nearby attractions, welcoming and memorable
                    stay.{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>

              <Card
                style={{
                  boxShadow:
                    " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                }}
                sx={{ maxWidth: 250 }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={image02}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Travelodge
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Luxurious accommodations, exceptional amenities, outstanding
                    service, comfortable rooms, diverse dining, fitness
                    facilities, nearby attractions, welcoming and memorable
                    stay.{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card
                style={{
                  boxShadow:
                    " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                }}
                sx={{ maxWidth: 250 }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={image03}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hyatt
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Luxurious accommodations, exceptional amenities, outstanding
                    service, comfortable rooms, diverse dining, fitness
                    facilities, nearby attractions, welcoming and memorable
                    stay.{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card
                style={{
                  boxShadow:
                    " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                }}
                sx={{ maxWidth: 250 }}
              >
                <CardMedia
                  sx={{ height: 130 }}
                  image={image04}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hotel Indigo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Luxurious accommodations, exceptional amenities, outstanding
                    service, comfortable rooms, diverse dining, fitness
                    facilities, nearby attractions, welcoming and memorable
                    stay.{" "}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          </div>
        </section>
      </>
    );
};

export default DashboardForm;
