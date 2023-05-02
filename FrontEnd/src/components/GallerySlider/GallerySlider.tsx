import React from "react";

//importing testimonial data
import { galleryData } from "../data";

//importing swiper components
import { Swiper, SwiperSlide } from "swiper/react";

//importing swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../Slider.css";

import { Pagination } from "swiper";

const GallerySlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      // spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {galleryData.map((slide, index) => {
        const { imagePack } = slide;
        return (
          // <SwiperSlide
          //   style={{ boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px" }}
          //   key={index}
          //   className="bg-white rounded-[20px] border-accent-primary
          //          xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px]
          //           xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
          // >

            <SwiperSlide
                style={{ boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px" }}
                key={index}
                className="bg-white rounded-[20px] border-accent-primary mr-3 ml-3
                   xl:max-w-[645px] max-h-[330px] flex items-start shadow-xl"
            >

            {/* image avatar here  */}
            <img src={imagePack} alt="" className={"!w-full h-full rounded-2xl"} />


          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default GallerySlider;
