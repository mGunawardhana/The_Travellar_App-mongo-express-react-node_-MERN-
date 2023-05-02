import React from "react";

import { footerData } from "../data";
import Copyright from "../Copyright/Copyright";

// import Copyright from './Copyright'

const Footer = () => {
  // destructure footer data
  const { logo, address, email, phone, list1, list2, socialList } = footerData;
  return (
    <footer data-aos="fade-up">
      <div
        style={{ boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px" }}
        className="container mx-auto bg-black rounded-[25px] p-4"
      >
        <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
          {/* info */}
          <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
            {/*/!* logo *!/*/}
            {/*<a href="#">*/}
              <img className="mb-[20px] w-[400px] h-[400px]" src={logo} alt="" />
            {/*</a>*/}
            {/*/!* address *!/*/}
            {/*<div className="max-w-[260px] mb-5 text-white font-bold">*/}
            {/*  {address}*/}
            {/*</div>*/}
            {/*/!* email *!/*/}
            {/*<div className="font-light italic">{email}</div>*/}
            {/*/!* phone *!/*/}
            {/*<div className="font-light italic">{phone}</div>*/}
          </div>
          {/* lists */}
          <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between p-10">
            {/* list 1 */}
            <div>
              <div className="font-extrabold text-white mb-8">About</div>
              <ul className="flex flex-col gap-y-4">
                {list1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="text-white" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* list 2 */}
            <div>
              <div className="font-extrabold text-white mb-8">Help</div>
              <ul className="flex flex-col gap-y-4">
                {list2.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="text-white" href={item.href}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* social list */}
            <div>
              <div className="font-extrabold text-white mb-8">Social Media</div>
              <ul className="flex gap-y-4 gap-x-4 justify-center">
                {socialList.map((item, index) => {
                  return (
                    <li
                      className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all"
                      key={index}
                    >
                      <a
                        className="text-white text-xl hover:text-white"
                        href={item.href}
                      >
                        {item.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};


export default Footer;
//1.10.35
