import React, {useEffect, useState} from "react";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import {Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
// eslint-disable-next-line @typescript-eslint/no-redeclare
import Box from "@mui/material/Box";
import {CustomerProperties} from "../../types/CustomerPropertes";
import axios from "../../axios";
import {PackageBookingProperties} from "../../types/PackageBookinProperties";
import {PaymentProperties} from "../../types/PaymentProperties";
import {DriverProperties} from "../../types/DriverProperties";
import {JeepProperties} from "../../types/JeepProperties";
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
            <SystemHeader/>
            <section
                style={{
                    boxShadow:
                        " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                    borderRadius: "15px",
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
                        <Paper elevation={3} style={{backgroundColor:'#2f3542',borderRadius:'10px'}} >
                            <div style={{backgroundColor:'#ffa502',height:'100px'}} className={"flex flex-row"}>
                                <Typography className={"pr-5 pt-10 pl-4"}
                                            variant="h4">Customers</Typography>
                                <Typography style={{textAlign: 'right',color:'#ffffff'}} className={"pr-5 pt-8"}
                                            variant="h3">{customerList.length}</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={3} style={{backgroundColor:'#2f3542',borderRadius:'10px'}} >
                            <div style={{backgroundColor:'#ffa502',height:'100px'}} className={"flex flex-row"}>
                                <Typography className={"pr-5 pt-10 pl-4"}
                                            variant="h4">Payments</Typography>
                                <Typography style={{textAlign: 'right',color:'#ffffff'}} className={"pr-5 pt-8"}
                                            variant="h3">{paymentList.length}</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={3} style={{backgroundColor:'#2f3542',borderRadius:'10px'}} >
                            <div style={{backgroundColor:'#ffa502',height:'100px'}} className={"flex flex-row"}>
                                <Typography className={"pr-5 pt-10 pl-4"}
                                            variant="h4">Drivers</Typography>
                                <Typography style={{textAlign: 'right',color:'#ffffff'}} className={"pr-5 pt-8"}
                                            variant="h3">{driverList.length}</Typography>
                            </div>
                        </Paper>
                        <Paper elevation={3} style={{backgroundColor:'#2f3542',borderRadius:'10px'}} >
                            <div style={{backgroundColor:'#ffa502',height:'100px'}} className={"flex flex-row"}>
                                <Typography className={"pr-5 pt-10 pl-4"}
                                            variant="h4">Vehicles</Typography>
                                <Typography style={{textAlign: 'right',color:'#ffffff'}} className={"pr-5 pt-8"}
                                            variant="h3">{jeepList.length+7}</Typography>
                            </div>
                        </Paper>

                    </Box>
                </div>
            </section>
        </>
    );
};

export default DashboardForm;
