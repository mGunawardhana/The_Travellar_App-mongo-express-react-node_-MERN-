import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import trees from "../../assets/loginImage.png";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
  TextField,
} from "@mui/material";
import myAvater from "../../assets/gal/100486080.jpeg";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { UserProperties } from "../../types/UserProperties";
import { map } from "jquery";
import axios from "../../axios";

const Login = () => {
  const [userName, userNameChange] = useState("");
  const [password, passwordChange] = useState("");
  const [authValue, authValueChange] = useState<boolean>(false);
  const [authList, setAuthLists] = useState<UserProperties[]>([]);

  const getAllUserAuths = async () => {
    try {
      const response = await axios.get("user");
      setAuthLists(response.data.responseData);

      console.log(response.data.responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserAuths();
  });

  function checkAuth() {
    authList.map((auth) => {
      console.log(auth.userName === userName);
      //TODO uncoment the logic after showing this project in interview`
      // if (auth.userName === userName || auth.password === password) {
      if (true) {
        authValueChange(true);
      }
    });
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "userName":
        userNameChange(value);
        break;
      case "password":
        passwordChange(value);
        break;
      default:
        break;
    }
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <div className="w-full  h-screen flex">
      <div className="grid grid-cols-1 rounded-xl md:grid-cols-2 m-auto h-[560px] w-[800px] shadow-2xl shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[560px] hidden md:block">
          <img className="w-full h-full rounded-xl" src={trees} alt="/" />
        </div>
        <div className="mx-2  flex-col  flex justify-center items-center">
          <form className="w-9/12 ">
            <div className="flex flex-col  justify-center items-center gap-4">
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  alt="Remy Sharp"
                  src={myAvater}
                />
              </StyledBadge>
              <TextField
                className="mt-[5px]"
                id="userName"
                value={userName}
                name="userName"
                label="UserName"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                size="small"
              />
              <TextField
                label="Password"
                id="password"
                name="password"
                value={password}
                type="password"
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                size="small"
              />

              {/* <Link to={authValue ? "/dashboard" : ""}> */}

              <Link to={true ? "/dashboard" : ""}>
                <Button
                  variant="contained"
                  color={authValue ? "success" : "error"}
                  onClick={(e) => {
                    checkAuth();
                  }}
                >
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
    </div>
  );
};

export default Login;
