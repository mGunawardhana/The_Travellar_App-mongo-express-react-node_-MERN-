import React from "react";
import { Link } from "react-router-dom";
import trees from "../../assets/loginImage.png";
import {Avatar, TextField} from "@mui/material";

const Login = () => {
    return <div className="w-full  h-screen flex">
        <div
            className="grid grid-cols-1 rounded-xl md:grid-cols-2 m-auto h-[560px] w-[800px] shadow-2xl shadow-gray-600 sm:max-w-[900px]">
            <div className="w-full h-[560px] hidden md:block">
                <img className="w-full h-full rounded-xl" src={trees} alt="/"/>
            </div>
            <div className="mx-2  flex-col  flex justify-center items-center">

                <form>
                    <h2 className="text-2xl font-bold text-center">
                        mGunawardhana
                    </h2>
                    <div className="flex flex-col  justify-center items-center gap-4">
                        <TextField
                            className="mx-10"
                            name="userName"
                            value=""
                            type="text"
                            variant="outlined"
                            color="secondary"
                            label="Vehicle ID"
                            size="small"
                            fullWidth
                            required
                        />
                        <TextField
                            name="password"
                            value=""
                            type="text"
                            variant="outlined"
                            color="secondary"
                            label="Vehicle ID"
                            size="small"

                            fullWidth
                            required
                        />
                    </div>

                    <Link to={"/home"}>
                        <button className="w-full py-2 rounded-lg my-4 bg-green-400 hover:bg-green-600">
                            Sign In
                        </button>
                    </Link>
                    <p className="text-center">Forgot Username or Password?</p>
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
