import React from "react";

import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";
import Content from "./components/Content/Content";

//importing pages

function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="App">
      <Content/>
    </div>
  );
}

export default App;
