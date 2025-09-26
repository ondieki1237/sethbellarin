import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const MobileNavbar = ({ isDark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = ['Home', 'About', 'Services', 'Skills', 'Contact'];

  // Animation variants for the menu
  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  // Animation variants for nav links
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#e5e5e5',
        padding: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: window.innerWidth > 768 ? 'none' : 'block',
      }}
    >
      <div
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="/"
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #593c2a 0%, #7a5139 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
          }}
          aria-label="FXPDR Home"
        >
        bellarin
        </a>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#593c2a',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            transition: 'all 0.3s ease',
          }}
          onClick={toggleMenu}
          onMouseOver={(e) => (e.target.style.color = '#faba00')}
          onMouseOut={(e) => (e.target.style.color = '#593c2a')}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '100%',
              maxWidth: '300px',
              background: '#ebebeb',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              boxShadow: '-8px 0 16px rgba(0,0,0,0.1)',
            }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-label="Navigation menu"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link}
                href={link === 'Home' ? '/' : `#${link.toLowerCase()}`}
                style={{
                  color: '#593c2a',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '1rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                onClick={toggleMenu}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #faba00, #f6a800)';
                  e.target.style.color = '#593c2a';
                  e.target.style.setProperty('--after-width', '50%');
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'none';
                  e.target.style.color = '#593c2a';
                  e.target.style.setProperty('--after-width', '0');
                }}
                before={{ // Pseudo-element ::after
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 'var(--after-width, 0)',
                  height: '2px',
                  background: 'linear-gradient(90deg, #faba00, #f6a800)',
                  transition: 'width 0.3s ease',
                }}
                aria-label={`Navigate to ${link}`}
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              style={{
                background: 'none',
                border: 'none',
                color: '#593c2a',
                fontSize: '1.25rem',
                cursor: 'pointer',
                padding: '0.75rem',
                borderRadius: '50%',
                background: '#e5e5e5',
                boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.06), inset -4px -4px 8px rgba(255,255,255,1)',
                transition: 'all 0.3s ease',
              }}
              onClick={toggleTheme}
              onMouseOver={(e) => {
                e.target.style.color = '#faba00';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#593c2a';
                e.target.style.transform = 'scale(1)';
              }}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={navLinks.length}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;