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

function App() {
  return (
    <>
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
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
