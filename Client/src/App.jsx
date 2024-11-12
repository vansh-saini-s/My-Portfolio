import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import LatestWorks from "./Components/Project";
import ConsultationForm from "./Components/Form";
import Footer from "./Components/Footer";
import Languages from "./Components/Languages";
import { Element } from "react-scroll"; // Import Element from react-scroll

function App() {
  return (
    <>
      <Navbar />
      
      {/* Home Section */}
      <Element name="home" id="home">
        <Home />
      </Element>
      
      {/* About Section */}
      <Element name="aboutme" id="aboutme">
        <About />
      </Element>
      
      {/* Experience Section */}
      <Element name="experience" id="experience">
        <Experience />
      </Element>
      
      {/* Latest Works Section */}
      <Element name="projects" id="projects">
        <LatestWorks />
        {/* <Languages/> */}
      </Element>

      
      {/* Consultation Form Section */}
      <Element name="contact" id="contact">
        <ConsultationForm />
      </Element>

      <Footer />
    </>
  );
}

export default App;