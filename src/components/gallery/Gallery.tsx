import React from "react";

import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";
import GallerySlider from "../GallerySlider/GallerySlider";

const Gallery = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div
          style={{ boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px" }}
          className=" min-h-[500px] rounded-[50px]"
          data-aos="fade-up"
          data-aos-offset="300"
        >
          <div className="flex flex-col justify-center px-2 xl:px-0 h-[800px]">
            <h2 className="h2 text-white text-center mb-[80px]">
              Testimonials
            </h2>
            <GallerySlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
