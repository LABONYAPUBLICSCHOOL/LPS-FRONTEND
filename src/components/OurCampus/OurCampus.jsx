import React from "react";
import "./OurCampus.css";
import Contact from "../ContactPage/ContactPage";

function OurCampus() {
  return (
    <div>
      <div className="campus-container">
        <h1 className="campus-title">Our Campus</h1>

        <div className="campus-section fade-up">
          <h2>I. Academic Infrastructure</h2>
          <p>
            Labonaya Public School has invested in creating a conducive learning
            environment with ergonomically designed chairs and tables sourced
            from Germany. Classrooms are equipped with cutting-edge technology
            like interactive Smart Boards, LCD projectors, and HDTVs, enhancing
            teaching methods and engaging students effectively.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>II. Resource Center</h2>
          <p>
            The Resource Center is a veritable treasure trove of knowledge,
            brimming with an extensive collection of books catering to both
            junior and senior students. With separate libraries for each age
            group, we provide a tailored learning experience. The Junior Library
            offers engaging storybooks, while the Senior Library includes
            literature, reference materials, and research resources. Our library
            staff supports every student’s journey of discovery and reading
            pleasure.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>III. Infotech Center</h2>
          <p>
            The school boasts two Infotech Centres that facilitate learning in
            Computer Science, Programming, and Multimedia. Our Science labs meet
            international standards, offering hands-on experiments. The robotics
            lab is a dynamic space equipped with LEGO Mindstorms and Arduino
            kits, promoting creativity and problem-solving.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>IV. Art and Craft Atelier</h2>
          <p>
            The Art and Craft Centre allows children to engage in art, craft,
            and ceramics, providing an outlet for creativity, imagination, and
            expression.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>V. Dance Studio</h2>
          <p>
            Our Dance Studio offers students a platform to master Indian,
            Western, and contemporary dance forms, fostering cross-cultural
            learning and appreciation of performing arts.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>VI. Music Studio</h2>
          <p>
            <b>Eastern Music Studio:</b> Features instruments like sitar, tabla,
            erhu, and gamelan to immerse students in rich Eastern musical
            traditions.
          </p>
          <p>
            <b>Western Music Studio:</b> Equipped with pianos, guitars, violins,
            and drums, it enables exploration of genres like classical, jazz,
            rock, and pop.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>VII. The Zen Space</h2>
          <p>
            A serene environment for Yoga and meditation, allowing students to
            develop mindfulness, calm, and emotional balance amidst academic
            demands.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>VIII. Home Economic Center</h2>
          <p>
            A vibrant place to learn cooking, sewing, meal planning,
            hospitality, flower arrangements, and other essential life skills.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>IX. Multipurpose Hall</h2>
          <p>
            A state-of-the-art hall accommodating 700 students, used for
            assemblies, cultural events, and indoor sports like Badminton and
            Table Tennis.
          </p>
        </div>

        <div className="campus-section fade-up">
          <h2>X. Sports Infrastructure</h2>
          <p>
            <b>Outdoor Games:</b> Well-maintained fields for football, cricket,
            and basketball encourage active participation and teamwork.
          </p>
          <p>
            <b>Indoor Games:</b> Table Tennis, Chess, and Carrom promote mental
            agility and strategy in a fun, engaging way.
          </p>
          <p>
            Our infrastructure builds physical fitness, teamwork, and
            sportsmanship among students.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default OurCampus;
