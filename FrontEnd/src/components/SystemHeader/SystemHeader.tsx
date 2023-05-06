import React, {useState} from "react";

//importing sample.tsx logo
import Logo from "../../assets/logo.png";

// import icons
import {FaBars} from "react-icons/fa";
import {BsArrowRight} from "react-icons/bs";
import SystemNavMobile from "../SystemNavMobile/SystemNavMobile";
import SystemNav from "../SystemNav/SystemNav";

const SystemHeader = () => {
    const [navMobile, setNavMobile] = useState(false);
    return (
        <header
            className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0 mt-10"
            // data-aos="fade-down"
            // data-aos-delay="1200"
            // data-aos-duration="1000"

        >
            <div
                className="container mx-auto"
                style={{
                    boxShadow:
                        " rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                    borderRadius: "15px",

                }}
            >
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center gap-x-[120px]">
                        {/* logo */}
                        <a href="#">
                            <img
                                src={Logo}
                                alt=""
                                className="w-18 h-12 pl-2"
                                // style={{ width: "100px", height: "60px" }}
                            />
                        </a>

                        {/* nav / initially hidden / show on large screens  */}
                        <div className="hidden lg:flex">
                            <SystemNav/>
                        </div>
                    </div>

                    {/* mobile nav / initially is showing / hide on large screens */}
                    <div
                        className={`${
                            navMobile ? "max-h-52" : "max-h-0"
                        } lg:hidden absolute top-24
             bg-accent-tertiary w-full left-0 right-0
              font-bold rounded transition-all
              overflow-hidden`}
                    >
                        <SystemNavMobile/>
                    </div>

                    {/* nav trigger btn / only shows on mobile screens */}
                    <div
                        onClick={() => setNavMobile(!navMobile)}
                        className="text-2xl text-primary cursor-pointer lg:hidden"
                    >
                        <FaBars/>
                    </div>
                    <div className="xl:hi"></div>
                </div>
            </div>
        </header>
    );
};

//15:22
export default SystemHeader;
