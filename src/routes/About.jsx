import Navbar from "../components/navbar/Navbar";
import AboutImg from "../assets/night.jpg";
import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/aboutUs/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
