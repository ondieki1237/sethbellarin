"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isDark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Apply theme to document and persist choice
  const applyTheme = (dark) => {
    if (typeof document === 'undefined') return;
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // initialize theme from localStorage or prop
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) applyTheme(stored === 'dark');
      else applyTheme(!!isDark);
    } catch (e) {
      applyTheme(!!isDark);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleTheme = () => {
    const isDarkNow = document.documentElement.classList.contains('dark');
    applyTheme(!isDarkNow);
    if (typeof toggleTheme === 'function') {
      try { toggleTheme(!isDarkNow); } catch (e) { /* ignore */ }
    }
  };

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset;

      // Keep navbar visible when mobile menu is open
      if (menuOpen) {
        lastScrollY.current = currentScrollY;
        setVisible(true);
        return;
      }

      // Only toggle after small threshold to avoid flicker
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .floatingIsland {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          background: rgba(229, 229, 229, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 2rem;
          padding: 0.5rem 4rem;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 12px 24px rgba(0, 0, 0, 0.08),
            0 4px 8px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            inset 0 -1px 0 rgba(0, 0, 0, 0.05);
          font-family: 'Inter', sans-serif;
          max-width: 95vw;
          width: fit-content;
          min-width: 600px;
        }

        /* Visible / Hidden states for scroll behavior */
        .floatingIsland.hidden {
          transform: translate(-50%, -120%);
          opacity: 0;
          pointer-events: none;
        }

        .floatingIsland.visible {
          transform: translateX(-50%);
          opacity: 1;
          pointer-events: auto;
        }
        
        .islandContainer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          gap: 2.5rem;
        }
        
        .logo {
          font-size: 1.6rem;
          font-weight: 800;
          color: #2d1b12;
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.4),
            0 -1px 2px rgba(255, 255, 255, 0.8),
            1px 1px 0 rgba(250, 186, 0, 0.3),
            -1px -1px 0 rgba(250, 186, 0, 0.3);
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: -0.03em;
          position: relative;
          display: inline-block;
          padding: 0.5rem 1.25rem;
          border-radius: 1rem;
          background: linear-gradient(135deg, rgba(89, 60, 42, 0.15) 0%, rgba(107, 62, 42, 0.15) 100%);
          box-shadow: 
            4px 4px 12px rgba(45, 27, 18, 0.2),
            -4px -4px 12px rgba(255, 255, 255, 0.9),
            inset 2px 2px 4px rgba(255, 255, 255, 0.6),
            inset -2px -2px 4px rgba(45, 27, 18, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(250, 186, 0, 0.2);
        }
        
        .logo::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, #faba00 0%, #f6a800 100%);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(250, 186, 0, 0.4);
        }
        
        .logo:hover::after {
          transform: scaleX(1);
        }
        
        .logo:hover {
          transform: translateY(-2px);
          text-shadow: 
            0 2px 6px rgba(0, 0, 0, 0.5),
            0 -1px 3px rgba(255, 255, 255, 0.9),
            2px 2px 0 rgba(250, 186, 0, 0.4),
            -2px -2px 0 rgba(250, 186, 0, 0.4);
          background: linear-gradient(135deg, rgba(89, 60, 42, 0.25) 0%, rgba(107, 62, 42, 0.25) 100%);
          box-shadow: 
            6px 6px 16px rgba(45, 27, 18, 0.25),
            -6px -6px 16px rgba(255, 255, 255, 0.95),
            inset 2px 2px 4px rgba(255, 255, 255, 0.7);
          border-color: rgba(250, 186, 0, 0.3);
        }
        
        .nav {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex: 1;
          justify-content: center;
          max-width: 55%;
        }
        
        .navLink {
          color: #593c2a;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
          padding: 0.6rem 1.5rem;
          border-radius: 1rem;
          position: relative;
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 
            3px 3px 6px rgba(0, 0, 0, 0.06),
            -3px -3px 6px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.6),
            inset -1px -1px 2px rgba(0, 0, 0, 0.04);
          white-space: nowrap;
          letter-spacing: 0.5px;
        }
        
        .navLink:hover {
          color: #faba00;
          background: linear-gradient(135deg, rgba(250, 186, 0, 0.2) 0%, rgba(246, 168, 0, 0.2) 100%);
          transform: translateY(-2px) scale(1.03);
          box-shadow: 
            5px 5px 10px rgba(0, 0, 0, 0.12),
            -5px -5px 10px rgba(255, 255, 255, 0.95),
            inset 1px 1px 2px rgba(255, 255, 255, 0.7);
          z-index: 10;
        }
        
        .navLink::after {
          content: '';
          position: absolute;
          bottom: 0.25rem;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #faba00 0%, #f6a800 100%);
          transform: translateX(-50%);
          transition: width 0.3s ease;
          border-radius: 1px;
          box-shadow: 0 1px 2px rgba(250, 186, 0, 0.4);
        }
        
        .navLink:hover::after {
          width: 70%;
        }
        
        .themeToggle {
          background: rgba(255, 255, 255, 0.7);
          border: none;
          color: #593c2a;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 
            3px 3px 6px rgba(0, 0, 0, 0.06),
            -3px -3px 6px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.6),
            inset -1px -1px 2px rgba(0, 0, 0, 0.04);
          font-size: 1.1rem;
          width: 2.5rem;
          height: 2.5rem;
        }
        
        .themeToggle:hover {
          color: #faba00;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 
            5px 5px 10px rgba(0, 0, 0, 0.12),
            -5px -5px 10px rgba(255, 255, 255, 0.95),
            inset 1px 1px 2px rgba(255, 255, 255, 0.7);
        }
        
        .hamburger {
          display: none;
          background: rgba(255, 255, 255, 0.7);
          border: none;
          color: #593c2a;
          font-size: 1.25rem;
          cursor: pointer;
          padding: 0.6rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          box-shadow: 
            3px 3px 6px rgba(0, 0, 0, 0.06),
            -3px -3px 6px rgba(255, 255, 255, 0.9),
            inset 1px 1px 2px rgba(255, 255, 255, 0.6),
            inset -1px -1px 2px rgba(0, 0, 0, 0.04);
        }
        
        .hamburger:hover {
          color: #faba00;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 
            5px 5px 10px rgba(0, 0, 0, 0.12),
            -5px -5px 10px rgba(255, 255, 255, 0.95),
            inset 1px 1px 2px rgba(255, 255, 255, 0.7);
        }
        
        /* Mobile Menu - Enhanced Experience */
        @media (max-width: 768px) {
          .floatingIsland {
            top: 1rem;
            left: 1rem;
            right: 1rem;
            transform: none;
            padding: 0.75rem 2.5rem;
            border-radius: 1.5rem;
            max-width: none;
            width: auto;
            min-width: auto;
          }
        
          .islandContainer {
            position: relative;
            gap: 2rem;
          }
        
          .nav {
            display: none;
          }
        
          .nav.active {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
              rgba(229, 229, 229, 0.98) 0%, 
              rgba(240, 240, 240, 0.98) 50%,
              rgba(229, 229, 229, 0.98) 100%);
            backdrop-filter: blur(30px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2.5rem;
            padding: 4rem 2rem;
            margin: 0;
            transform: none;
            border-radius: 0;
            box-shadow: 
              inset 0 0 120px rgba(255, 255, 255, 0.4),
              -12px 0 40px rgba(0, 0, 0, 0.15);
            height: 100vh;
            width: 100vw;
          }
        
          .navLink {
            font-size: 1.5rem;
            font-weight: 700;
            padding: 1.5rem 2.5rem;
            border-radius: 2rem;
            width: 320px;
            max-width: 85vw;
            text-align: center;
            box-shadow: 
              8px 8px 20px rgba(0, 0, 0, 0.12),
              -8px -8px 20px rgba(255, 255, 255, 0.95),
              inset 3px 3px 6px rgba(255, 255, 255, 0.7),
              inset -3px -3px 6px rgba(0, 0, 0, 0.06);
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 248, 248, 0.9) 100%);
            letter-spacing: 1px;
            border: 1px solid rgba(250, 186, 0, 0.2);
            position: relative;
            overflow: hidden;
          }
        
          .navLink::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent,
              rgba(250, 186, 0, 0.1),
              transparent
            );
            transition: left 0.6s ease;
          }
        
          .navLink:hover::before {
            left: 100%;
          }
        
          .navLink:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 
              10px 10px 25px rgba(0, 0, 0, 0.15),
              -10px -10px 25px rgba(255, 255, 255, 0.98),
              inset 3px 3px 6px rgba(255, 255, 255, 0.8);
            background: linear-gradient(135deg, 
              rgba(250, 186, 0, 0.05) 0%, 
              rgba(246, 168, 0, 0.05) 100%);
            border-color: rgba(250, 186, 0, 0.3);
          }
        
          .themeToggle {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            background: linear-gradient(135deg, 
              rgba(250, 186, 0, 0.2) 0%, 
              rgba(246, 168, 0, 0.2) 100%);
            color: #faba00;
            box-shadow: 
              6px 6px 12px rgba(250, 186, 0, 0.25),
              -6px -6px 12px rgba(255, 255, 255, 0.95),
              inset 2px 2px 4px rgba(255, 255, 255, 0.6);
            width: 3rem;
            height: 3rem;
            font-size: 1.3rem;
            border: 1px solid rgba(250, 186, 0, 0.3);
          }
        
          .themeToggle:hover {
            background: linear-gradient(135deg, 
              rgba(250, 186, 0, 0.3) 0%, 
              rgba(246, 168, 0, 0.3) 100%);
            color: #2d1b12;
            transform: translateY(-3px) scale(1.1);
            box-shadow: 
              8px 8px 16px rgba(250, 186, 0, 0.3),
              -8px -8px 16px rgba(255, 255, 255, 0.98),
              inset 2px 2px 4px rgba(255, 255, 255, 0.7);
          }
        
          .hamburger {
            display: block;
            margin-left: auto;
            padding: 0.6rem;
            width: 2.75rem;
            height: 2.75rem;
            font-size: 1.3rem;
            background: linear-gradient(135deg, rgba(250, 186, 0, 0.1) 0%, rgba(246, 168, 0, 0.1) 100%);
            color: #faba00;
            border: 1px solid rgba(250, 186, 0, 0.2);
          }
        
          .hamburger:hover {
            background: linear-gradient(135deg, rgba(250, 186, 0, 0.2) 0%, rgba(246, 168, 0, 0.2) 100%);
            color: #2d1b12;
            transform: translateY(-2px) scale(1.05);
          }
        
          .logo {
            font-size: 1.3rem;
            padding: 0.5rem 1.25rem;
            color: #2d1b12;
            background: linear-gradient(135deg, rgba(89, 60, 42, 0.18) 0%, rgba(107, 62, 42, 0.18) 100%);
            border: 1px solid rgba(250, 186, 0, 0.25);
          }
        }
        
        /* Small mobile */
        @media (max-width: 480px) {
          .floatingIsland {
            top: 0.75rem;
            left: 0.75rem;
            right: 0.75rem;
            padding: 0.5rem 2rem;
            border-radius: 1.25rem;
          }
        
          .logo {
            font-size: 1.15rem;
            padding: 0.4rem 1rem;
          }
        
          .navLink {
            font-size: 1.3rem;
            padding: 1.25rem 2rem;
            width: 280px;
          }
        }
      `}</style>

  <nav className={`floatingIsland ${visible || menuOpen ? 'visible' : 'hidden'}`}>
        <div className="islandContainer">
          <motion.a 
            href="/" 
            className="logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            Bellarin
          </motion.a>
          
          <div id="mobile-navigation" className={`nav ${menuOpen ? 'active' : ''}`}>
            <motion.a 
              href="#about" 
              className="navLink" 
              onClick={toggleMenu}
              whileHover={{ scale: 1.03, y: -2 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#services" 
              className="navLink" 
              onClick={toggleMenu}
              whileHover={{ scale: 1.03, y: -2 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="#skills" 
              className="navLink" 
              onClick={toggleMenu}
              whileHover={{ scale: 1.03, y: -2 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#contact" 
              className="navLink" 
              onClick={toggleMenu}
              whileHover={{ scale: 1.03, y: -2 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Contact
            </motion.a>
            <motion.button 
              className="themeToggle" 
              onClick={handleToggleTheme}
              whileHover={{ scale: 1.05, rotate: 180 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </motion.button>
          </div>

          {/* Hamburger Menu */}
          <motion.button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
             whileHover={{ scale: 1.05, rotate: 90 }}
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.4, delay: 0.6 }}
           >
             {menuOpen ? <FaTimes /> : <FaBars />}
           </motion.button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;