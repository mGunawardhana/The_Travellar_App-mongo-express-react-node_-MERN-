import React from "react";

//importing features data
import { featuresData } from "../data";

import { BsArrowBarRight } from "react-icons/bs";
// import { features } from "process";

const Features = () => {
  //destructure feature data
  const { title, subtitle, list } = featuresData;

  return (
    <section className="my-[70px] xl:my-[150px]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2
            className="h2 mb-6 xl:mb-12 text-black"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {title}
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="200"
            className="lead max-w-[584px] mx-auto mb-16"
          >
            {subtitle}
          </p>
        </div>
        {/* making box's */}
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((feature, index) => {
            const { image, title, description, linkText, delay } =
              feature;
            //this return is repeating four times but we gave four times in data
            return (
              <div
                style={{ boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
                className="w-full rounded-[12px] max-w-[530px]
               h-[359px] relative flex flex-col items-center justify-center xl:flex-row
                xl:justify-start mx-auto bg-white"
                key={index}
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay={delay}
              >
                {/* // if you remove the pink color you can remove your color box */}
                {/* <div
                className="w-full max-w-[530px]
             h-[358px] relative flex flex-col items-center justify-center xl:flex-row
              xl:justify-start mx-auto"
                key={index}
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-delay={delay}
              > */}
                <div
                  className="hidden xl:flex absolute
                top-0 right-0 -z-10"
                >
                  {/* <img src={bgImage} alt="" /> */}
                </div>

                <div
                  className="max-w-[120px] xl:mr-7
                xl:max-w-[232px]"
                  data-aos="zoom-in-right"
                  data-aos-delay={delay}
                >
                  <img
                    src={image}
                    style={{
                      borderRadius: "12px",
                      boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
                      // boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px",
                      width: "200px",
                      height: "400px",
                    }}
                    alt=""
                  />
                </div>

                <div className="max-w-[220px]">
                  <h3 className="text-[28px] mb-4">{title}</h3>
                  <p className="font-light italic mb-4 text-[22px]">{description}</p>
                  <div className="flex items-center gap-x-2 group">
                    <a className="text-primary font-bold" href="">
                      {linkText}
                    </a>
                    <BsArrowBarRight
                      className="text-xl text-accent-primary transition-all
                    group-hover:ml-[5px] "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
