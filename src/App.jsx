import Navbar from "./components/Navbar/Nav";
import Slider from "./components/Top-Slider/Slider";
import Welcome from "./components/Welcome/Welcome";
import WhyChooseUs from "./components/WhyChooseUs/ChooseUs";
import SchoolEvents from "./components/SchoolEvent/SchoolEvent";
import Infrastructure from "./components/Infrastructure/Infrastructure";
import ContactPage from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

import { Routes, Route } from "react-router-dom";
import TopNav from "./components/Top-Nav/TopNav";
import VisionMission from "./components/VisionMission/VisionMission";
import PrincipalMsg from "./components/PrincipalMsg/PrincipalMsg";
import Bod from "./components/Bod/Bod";
import OurTeam from "./components/OurTeam/OurTeam";
import Sports from "./components/Sports/Sports";
import Career from "./components/Career/Career";
import Mental from "./components/Mental-Wellbing/Mental";
import OurCampus from "./components/OurCampus/OurCampus";
import LpsWing from "./components/LpsWing/LpsWing";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import Events from "./components/Events/Events";
import Testimonial from "./components/Testimonial/Testimonial";
import Curriculum from "./components/Curriculum/Curriculum";
import ScrollToTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
    <ScrollToTop/>
      <TopNav />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Welcome />
              <WhyChooseUs />
              <SchoolEvents />
              <Infrastructure />
              <Testimonial />
              <ContactPage />

            </>

          }

        />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/principal-msg" element={<PrincipalMsg />} />
        <Route path="/bod" element={<Bod />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/career" element={<Career />} />
        <Route path="/mental" element={<Mental />} />
        <Route path="/our-campus" element={<OurCampus />} />
        <Route path="/lps-wing" element={<LpsWing />} />
        <Route path="/contact-info" element={<ContactPage />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/curriculum" element={<Curriculum />} />





      </Routes>
      <Footer />
    </>
  );
}

export default App;
