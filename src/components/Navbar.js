import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isDark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          Bellarin
        </a>
        
        <div className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <a href="#about" className={styles.navLink} onClick={toggleMenu}>
            About
          </a>
          <a href="#services" className={styles.navLink} onClick={toggleMenu}>
            Services
          </a>
          <a href="#skills" className={styles.navLink} onClick={toggleMenu}>
            Skills
          </a>
          <a href="#contact" className={styles.navLink} onClick={toggleMenu}>
            Contact
          </a>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Hamburger Menu */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
