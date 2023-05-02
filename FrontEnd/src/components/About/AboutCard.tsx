import React from "react";

import { aboutData } from "../data";

const AboutCard = () => {
  const { image, title, subtitle } = aboutData;

  return (
    <section
      className="my-[30px] xl:mt-[100px]"
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <div
        style={{
          boxShadow:
            " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          borderRadius: "15px",
        }}
        className=" container mx-auto bg-white"
      >
        <div
          className=" rounded-[50px] 
        min-h-[560px] px-12 pb-12 flex
        flex-col text-center xl:flex-row xl:items-center xl:text-left
         xl:gap-x-[60px] xl:pb-0"
        >
          <div className="flex-1" data-aos="zoom-in-left">
            <img src={image}></img>
          </div>
          <div className="flex-1 xl:pr-12">
            <h2 className="h2 mb-10" data-aos="fade-up" data-aos-delay="300">
              {title}
            </h2>
            <p
              className="max-w-[474px] mx-auto xl:mx-0"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
