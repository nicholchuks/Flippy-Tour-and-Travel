import Destination from "../components/destination/Destination";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Trip from "../components/trip/Trip";
import HeroMainImg from "../assets/12.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroMainImg}
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
