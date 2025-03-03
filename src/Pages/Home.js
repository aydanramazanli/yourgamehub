import React, { useEffect } from "react";
import Heros from "../Components/Heros";
import About from "../Components/About";
import Games from "../Components/Games";
import Contact from "../Components/Contact";
import Disclaimer from "../Components/Desclaimer";
import ServicesSection from "../Components/Service";
import AboutSection from "../Components/AboutSection";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Heros />

      <About />
      <Games />
      <ServicesSection/>
      <AboutSection />

      <Contact />
      <Disclaimer />

    </>
  );
}

export default Home;
