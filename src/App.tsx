import React from "react";

import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";

// import Hero from "./components/Hero/Hero";
// import AboutCard from "./components/About/AboutCard";
// import Features from "./components/Features/Features";
// import Testimonials from "./components/Testimonials/Testimonials";
// import CtaSection from "./components/CtaSection/CtaSection";
// import Footer from "./components/Footer/Footer";
// import GallerySlider from "./components/GallerySlider/GallerySlider";
// import Gallery from "./components/gallery/Gallery";
// import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider";
import CustomerForm from "./pages/customer/CustomerForm";
import DriverForm from "./pages/driver/driverForm";

//importing pages

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="App">
      {/* <Hero/>
            <AboutCard/>
            <Features/>
            <Testimonials/>
            <CtaSection/>
            <Gallery/>
            <Footer/> *
            <CustomerForm />
    */}
          <DriverForm/>
    </div>
  );
}

export default App;
