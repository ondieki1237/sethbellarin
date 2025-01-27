import React from 'react';
import styles from './Navbar.module.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          Bellarin
        </a>
        <div className={styles.nav}>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#services" className={styles.navLink}>
            Services
          </a>
          <a href="#skills" className={styles.navLink}>
            Skills
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
          <button className={styles.themeToggle} onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

