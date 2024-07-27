import "./DestinationStyle.css";
import Mountain1 from "../../assets/1.jpg";
import Mountain2 from "../../assets/2.jpg";
import Mountain3 from "../../assets/3.jpg";
import Mountain4 from "../../assets/4.jpg";

import DestinationData from "../destinationData/DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Taal vocano, Batangas"
        text=" One of the most iconic vews in Luzon, Mt. Taal boasts a volcano
                inside a lake inside an island, if you fancy a closer look, the
                hike up to the creater is a mere 45 minutes and is easy enough
                for beginners. Guides wil assits you most of the way and you'll
                face the peculiar environment found on an active volcano,
                including volcano rocks and steam vents. The hike can be dusty
                and hot, so planfor an early morning trip and unwind with some
                bulalo before headind back home!"
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text=" If you are looking for a hike that's a little more challenging but still good foe a beginer mountainer, check out Mt. Doguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze it fantastic. Once you've made it back down, head straight to the beach for a refrenshing, well-deserving swim."
        img1={Mountain3}
        img2={Mountain4}
      />

      {/* <div className="first-des">
        <div className="des-text">
          <h2>Taal vocano, Batangas</h2>
          <p>
            One of the most iconic vews in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island, if you fancy a closer look, the hike
            up to the creater is a mere 45 minutes and is easy enough for
            beginners. Guides wil assits you most of the way and you'll face the
            peculiar environment found on an active volcano, including volcano
            rocks and steam vents. The hike can be dusty and hot, so planfor an
            early morning trip and unwind with some bulalo before headind back
            home!
          </p>
        </div>

        <div className="image">
          <img src={Mountain1} alt="img" />
          <img src={Mountain2} alt="img" />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Destination;
