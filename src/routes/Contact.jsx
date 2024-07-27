import React from "react";
import Navbar from "../components/navbar/Navbar";
import ContactForm from "../components/contactform/ContactForm";
import ContactImg from "../assets/2.jpg";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

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
      <ContactForm />
      <Footer />
    </>
  );
};

export default About;
