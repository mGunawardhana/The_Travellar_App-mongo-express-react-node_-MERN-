import React from "react";
import Hero from "../../components/Hero/Hero";
import AboutCard from "../../components/About/AboutCard";
import Features from "../../components/Features/Features";
import Testimonials from "../../components/Testimonials/Testimonials";
import CtaSection from "../../components/CtaSection/CtaSection";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/Footer/Footer";

const HomeLoader = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <Features />
      <Testimonials />
      <CtaSection />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomeLoader;
