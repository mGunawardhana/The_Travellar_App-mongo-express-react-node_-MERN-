import React from "react";
import mainImg from "../../assets/front image.png";
// import { heroData } from "../data";

import Header from "../../components/Header/Header";

const Hero = () => {
  //destructure hero data
  // const { title, subtitle, btnText, image } = heroData;

  return (
    <section className="lg:h-[900] py-12">
      <Header />

      <div className="container mx-auto h-full rounded-xl relative">
        <div className=" flex flex-col xl:flex-row items-center h-full md:py-24">
          {/* text */}
          {/* //TODO if you want to adjust please add xl:absolute */}
          <div className="text-center xl:text-left">
            {/* if data-aos using to animate heading */}
            <h1
              className="h2 xl:max-w-[700px] xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Welcome To
              {/* {title} */}
            </h1>
            <h1
              className="h1 xl:max-w-[700px] xl:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="text-amber-500"> 𝕋𝕙𝕖 𝕋𝕣𝕒𝕧𝕖𝕝𝕖𝕣</span>
            </h1>
            <p
              className="lead xl:max-w-[380px] mb-6 lg:mb-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              molestiae sequi, atque blanditiis voluptatem quis architecto neque
              quia esse dolores assumenda eveniet sed recusandae animi corporis
              expedita iusto illo cumque.
              {/* {subtitle} */}
            </p>
            <button
              style={{ boxShadow: " rgb(38, 57, 77) 0px 20px 30px -10px" }}
              className="btn btn-primary mb-8 xl:mb-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* {btnText} */}
              More about..
            </button>
          </div>
          <div
            className="xl:absolute xl:-right-12 xl:bottom-16"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img src={mainImg} alt="" className="w-[800px] h-[500px]" />
          </div>
        </div>
      </div>
    </section>
    //11.14
  );
};

export default Hero;
