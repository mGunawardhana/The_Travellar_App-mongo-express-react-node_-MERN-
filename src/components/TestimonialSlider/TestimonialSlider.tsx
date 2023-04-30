import React from "react";

//importing testimonial data
import { testimonialsData } from "../data";

//importing swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//importing swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../Slider.css";

import { Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper 
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        const { image, message, name, web, delay } = slide;
        return (
          <SwiperSlide
            style={{ boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px" }}
            key={index}
            className="bg-white rounded-[20px] border-accent-primary
                   xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px]
                    xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
          >
            {/* image avatar here  */}
            <img src={image} alt="" />
              <div>
                  <div className="text-lg text-primary font-bold">{name}</div>
                  <div className="mb-4 font-semibold text-accent-primary">
                      {web}
                  </div>
                  <p className="max-w-[340px]">{message}</p>
              </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
