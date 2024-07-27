import React from "react";
import Navbar from "../components/navbar/Navbar";
import AboutImg from "../assets/night.jpg";
import Hero from "../components/hero/Hero";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Services"
        btnClass="hide"
      />
    </>
  );
};

export default About;
