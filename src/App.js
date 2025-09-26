import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PhoneNavbar from './components/Phonenavbar';
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
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);

    // set initial
    setIsMobile(mq.matches);

    // modern and fallback listeners
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      {isMobile ? (
        <PhoneNavbar isDark={isDark} toggleTheme={toggleTheme} />
      ) : (
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      )}
      <Hero />
      <About />
      <Services />
      <Skills />
      <VisualPortfolio />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;