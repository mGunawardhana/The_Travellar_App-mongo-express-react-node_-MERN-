import React from "react";

import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";

import HomeLoader from "./pages/homeLoader/HomeLoader";
import SystemForm from "./pages/system/SystemForm";

//importing pages

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="App">
      <HomeLoader />
      <SystemForm />
    </div>
  );
}

export default App;
