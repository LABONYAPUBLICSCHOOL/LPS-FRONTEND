import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Nav"
import Slider from './components/Top-Slider/Slider'
import Welcome from './components/Welcome/Welcome'
import WhyChooseUs from './components/WhyChooseUs/ChooseUs'
import SchoolEvents from './components/SchoolEvent/SchoolEvent'
import Infrastructure from './components/Infrastructure/Infrastructure'
import ContactPage from './components/ContactPage/ContactPage'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
    <Navbar/>
    <Slider/>
    <Welcome/>
    <WhyChooseUs/>
    <SchoolEvents/>
    <Infrastructure/>
    <ContactPage/>
    <Footer/>
    </>
  )
}

export default App
