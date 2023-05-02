import React from "react";

import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import GallerySlider from "../GallerySlider/GallerySlider";

const Gallery = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div
          // style={{ boxShadow: " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}
          className=" min-h-[400px] rounded-[12px]"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[600px] mb-4 ">
            <h2 className="h2 text-black text-center mb-[80px]">
              Gallery
            </h2>
            <GallerySlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
