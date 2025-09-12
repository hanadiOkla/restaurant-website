import React from 'react'
import Navbar from './components/NavBar/Navbar'

import Footer from './components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './components/Home/Home'
import Hero from './components/Hero/Hero'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meals from './components/Meals/Meals'
import About from './components/About/About'
import Contact from './components/Contact/Contact'



const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:500,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <Router>
      <div className='bg-white dark:bg-gray-900'>
        <Navbar />
        <Hero />

        <Routes basename="/restaurant-website">
          <Route path="/" element={<Home />} />
           <Route path="/our-meals" element={<Meals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>

  )
}

export default App
