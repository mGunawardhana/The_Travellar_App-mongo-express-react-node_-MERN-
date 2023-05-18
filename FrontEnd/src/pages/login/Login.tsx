import React from "react";
import {Link} from "react-router-dom";
import trees from "../../assets/loginImage.png";
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    styled,
    TextField
} from "@mui/material";
import myAvater from "../../assets/gal/100486080.jpeg";
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const Login = () => {



    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return <div className="w-full  h-screen flex">
        <div
            className="grid grid-cols-1 rounded-xl md:grid-cols-2 m-auto h-[560px] w-[800px] shadow-2xl shadow-gray-600 sm:max-w-[900px]">
            <div className="w-full h-[560px] hidden md:block">
                <img className="w-full h-full rounded-xl" src={trees} alt="/"/>
            </div>
            <div className="mx-2  flex-col  flex justify-center items-center">

                <form className="w-9/12 ">
                    <div className="flex flex-col  justify-center items-center gap-4">
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar
                                sx={{ width: 80, height: 80 }}
                                alt="Remy Sharp" src={myAvater} />
                        </StyledBadge>
                            <TextField
                                className="mt-[5px]"
                                id="outlined-basic"
                                label="Outlined"
                                variant="outlined"
                                fullWidth
                                size="small"
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                size="small"
                            />

                        <Link to={"/dashboard"}>
                            <Button variant="contained" color="success">
                                Sign In
                            </Button>
                        </Link>
                        <p className="text-center">Athena Tourism Management Service</p>
                        <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                            <AssignmentIcon />
                        </Avatar>
                    </div>
                </form>
            </div>
        </div>
    </div>;
};

export default Login;
