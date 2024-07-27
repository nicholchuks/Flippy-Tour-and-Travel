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
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
};

export default About;
