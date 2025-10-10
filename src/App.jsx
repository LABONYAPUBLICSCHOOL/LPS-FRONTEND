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

function App() {
  return (
    <>
    <TopNav/>
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
              <ContactPage />
             
            </>
            
          }
          
        /> 
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/principal-msg" element={<PrincipalMsg/>} />
         <Route path="/bod" element={<Bod/>} />
          <Route path="/ourteam" element={<OurTeam/>} />
          <Route path="/sports" element={<Sports/>} />
           <Route path="/career" element={<Career/>} />
           <Route path="/mental" element={<Mental/>} />
          <Route path="/our-campus" element={<OurCampus/>} />
          <Route path="/lps-wing" element={<LpsWing/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
