import React from "react";
import "./Bod.css";
import bod from "../../assets/bod.jpeg"; // Banner image
// import director1 from "../assets/director1.jpg"; // Replace with actual images
// import director2 from "../assets/director2.jpg";
// import director3 from "../assets/director3.jpg";
import Contact from "../ContactPage/ContactPage";

function Bod() {
  return (
    <div className="bod-page">
      {/* Banner */}
      <div className="banner">
        <img src={bod} alt="Board of Directors Banner" />
        <div className="banner-text">
          <h1>Board of Directors</h1>
        </div>
      </div>

      {/* Directors Section */}
      <section className="directors">
        <div className="director-card">
          <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mr. Ravi Todi" />
          <h3>Mr. Ravi Todi</h3>
          <p>
            Director
            <br />
            Shrachi Group of Companies
          </p>
        </div>
        <div className="director-card">
          <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mr. J K Khetawat" />
          <h3>Mr. J K Khetawat</h3>
          <p>Rameswara Group of Companies</p>
        </div>
        <div className="director-card">
          <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mr. Pradeep Sureka" />
          <h3>Mr. Pradeep Sureka</h3>
          <p>
            Managing Director
            <br />
            Sureka Group of Companies
          </p>
        </div>
      </section>

      {/* Vision Text Section */}
      <section className="vision-text">
        <h2>The Birth of a Vision</h2>
        <p>
          Years ago, we embarked on a mission to establish a unique school in
          the vibrant city of Kolkata. Inspired by the city's esteemed
          intellectual community and driven by our sense of corporate
          responsibility, we envisioned a school that would offer exceptional
          education through internationally acclaimed curricula, supported by
          cutting-edge technology and an exceptional faculty.
        </p>
        <p>
          To transform our vision into reality, we allocated a significant
          portion of our corporate space and enlisted the expertise of renowned
          architects, both national and international. Additionally, we sought
          the guidance of esteemed educational consultant Dr. Shomie Das, former
          Headmaster of Doon School, to shape and bring substance to our dream
          project. Collaboratively, we meticulously designed and crafted an
          institution that Kolkata can proudly boast of as one of its premier
          educational establishments.
        </p>
        <p>
          We are delighted to announce that with the guidance of these experts,
          we have successfully built an institution that epitomizes excellence
          and stands as a shining beacon in the realm of education in Kolkata.
        </p>
      </section>
      <Contact />
    </div>
  );
}

export default Bod;
