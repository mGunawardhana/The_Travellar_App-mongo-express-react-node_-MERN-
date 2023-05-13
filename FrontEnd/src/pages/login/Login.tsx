import React from "react";
import {Link} from "react-router-dom";
import trees from "../../assets/loginImage.png";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {Fingerprint, VisibilityOff} from "@mui/icons-material";

const Login = () => {
    return <div className="w-full  h-screen flex">
        <div
            className="grid grid-cols-1 rounded-xl md:grid-cols-2 m-auto h-[560px] w-[800px] shadow-2xl shadow-gray-600 sm:max-w-[900px]">
            <div className="w-full h-[560px] hidden md:block">
                <img className="w-full h-full rounded-xl" src={trees} alt="/"/>
            </div>
            <div className="mx-2  flex-col  flex justify-center items-center">

                <form className="w-9/12 ">

                    <div className="outline-4">
                        <h2 className="text-2xl font-bold text-center">
                            mGunawardhana
                        </h2>
                        <div className="flex flex-col  justify-center items-center gap-4">
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
                            <IconButton className="" aria-label="fingerprint" color="secondary">
                                <Fingerprint />
                            </IconButton>

                        </div>

                        <Link to={"/customer"}>
                            <button className="w-full py-2 rounded-lg my-4 bg-green-400 hover:bg-green-600">
                                Sign In
                            </button>
                        </Link>
                        <p className="text-center">Forgot Username or Password?</p>

                    </div>


                </form>
                <div className="flex justify-center items-center">
                    {/*<button className="w-1/3 justify py-2 rounded-lg my-4 bg-green-600 hover:bg-green-600">*/}
                    {/*    Sign Up*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    </div>;
};

export default Login;
