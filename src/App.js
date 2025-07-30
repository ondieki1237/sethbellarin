import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Certifications from './components/Certifications'; // Import Certifications
import Contact from './components/Contact';
import VisualPortfolio from './components/VisualPortfolio';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Services />
      <Skills />
      <VisualPortfolio />
      <Certifications /> {/* Add Certifications */}
      <Contact />
    </div>
  );
}

export default App;