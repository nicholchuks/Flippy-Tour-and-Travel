import React from "react";
import Navbar from "../components/navbar/Navbar";
import ContactImg from "../assets/2.jpg";
import Hero from "../components/hero/Hero";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
};

export default About;
