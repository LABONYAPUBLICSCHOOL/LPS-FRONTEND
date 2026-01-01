import React from "react";
import "./LpsWing.css";
import Contact from "../../components/ContactPage/ContactPage";

function LpsWing() {
  return (
    <div className="lpswing-container">
      <div className="lpswing-banner">
        <h1 className="lpswing-title">LPS Wing</h1>
      </div>

      <div className="lpswing-content fade-up">
        <p>
          At{" "}
          <b>Labonaya Public School</b>
          , we believe every student is unique. Every student has the potential
          to rise, and therefore we guide them to be reflective thinkers,
          open-minded inquirers, knowledgeable communicators, principled doers,
          risk takers, empathetic, caring, and balanced individuals.
        </p>
      </div>

      <div className="lpswing-section fade-up">
  <h2>Faculty & Staff</h2>
  <p>
    Our faculty comprises highly qualified and dedicated educators with
    <b> 10–20 years of teaching experience</b> in reputed national institutions.
    They bring academic excellence, commitment, and passion into every
    classroom, ensuring holistic development and individualized attention
    for each student.
  </p>
</div>

      <div className="lpswing-section fade-up">
        <h2>Academics</h2>
        <p>
          LPS nurtures a positive and inclusive environment through one-on-one
          sessions, workshops, and open-door communication. Students develop
          self-confidence, resilience, and interpersonal skills while engaging
          in experiential learning activities and projects.
        </p>
        <p>
          Our classrooms promote <b>active learning</b> using games, quizzes,
          projects, and discussions. Projects are used for{" "}
          <b>Formative Assessment</b>, encouraging collaboration and
          problem-solving.
        </p>
        <p>
          Students learn to gather facts, analyze them, observe outcomes, and
          draw conclusions — fostering deep understanding through inquiry.
        </p>
      </div>

      <div className="lpswing-section fade-up">
  <h2>Courses</h2>
  <p>
    Labonya Public School follows a <b>Co-Educational English Medium</b> curriculum.
    For the middle school stage (Classes VI–VIII), students are introduced to a
    strong academic foundation aligned with the <b>ICSE pattern</b>.
  </p>
  <p>
    In the secondary stage, the school offers the <b>ICSE Curriculum (Classes IX–X)</b>,
    emphasizing conceptual clarity, analytical skills, and balanced subject learning.
  </p>
  <p>
    For higher secondary education, the <b>ISC Curriculum (Classes XI–XII)</b> is
    followed, preparing students for national and international higher education.
    Students generally choose <b>4–5 subjects</b>, allowing both depth of study and
    independent learning.
  </p>
</div>


     <div className="lpswing-section fade-up">
  <h2>Career Counselling</h2>
  <p>
    At <b>Labonya Public School (LPS)</b>, students receive structured and
    personalized career guidance from subject teachers and the
    <b> school counsellor</b>. Beginning at the end of <b>Class VIII</b>,
    students are guided in selecting appropriate subjects for the
    <b> ICSE curriculum</b>.
  </p>
  <p>
    During the <b>ISC stage (Classes XI–XII)</b>, focused career and college
    counselling is provided to help students identify their interests,
    strengths, and future pathways, ensuring well-informed academic and
    career decisions.
  </p>
</div>


      <div className="lpswing-section fade-up">
  <h2>Why LPS</h2>
  <p>
    At <b>Labonya Public School (LPS)</b>, we believe that
    <b> every student has the ability to be a successful learner</b>.
    Our approach focuses on nurturing strong academic foundations,
    character development, and confidence in every child.
  </p>
  <p>
    Success at LPS goes beyond examination results. We emphasize
    personal growth, lifelong learning, and the skills required to
    think independently, lead responsibly, and achieve one’s goals
    with confidence and integrity.
  </p>
</div>

     <div className="lpswing-section fade-up">
  <h2>Leadership</h2>
  <p>
    <b>Head – Academics:</b> A senior education professional with over
    <b> 30+ years of experience</b> in academic leadership, curriculum
    planning, and institutional development.
  </p>
  <p>
    <b>Lower Secondary Coordinator:</b> An experienced educator with
    <b> 20+ years of dedicated service</b> in teaching, mentoring, and
    student development.
  </p>
</div>
      <Contact />
    </div>
  );
}

export default LpsWing;
