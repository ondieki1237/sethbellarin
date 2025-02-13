import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelopeOpen } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ['I code', 'I design', 'I shoot'];

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1); // Move to the next phrase
        setTypingSpeed(150); // Reset typing speed
      }
    };

    const timer = setTimeout(() => handleType(), typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>
            Hello World! 👋
          </span>

          <h1 className={styles.title}>
            I'm Seth Makori
          </h1>

          <h2 className={styles.subtitle}>
            {text}
            <span className={styles.cursor}>|</span> {/* Cursor effect */}
          </h2>

          <p className={styles.description}>
            A passionate software engineer and designer, transforming ideas into 
            elegant digital experiences. Based in Kenya, working worldwide.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              View My Work
            </button>
            <button className={styles.secondaryButton}>
              Let's Connect
            </button>
          </div>

          <div className={styles.socialLinks}>
            <SocialLink href="https://github.com/ondieki1237">
              <FaGithub size={24} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/seth-setht-19a401235/">
              <FaLinkedin size={24} />
            </SocialLink>
            <SocialLink href="https://x.com/SethBellarin1">
              <FaTwitter size={24} />
            </SocialLink>
            <SocialLink href="mailto:bellarinseth@gmail.com">
              <FaEnvelopeOpen size={24} />
            </SocialLink>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={process.env.PUBLIC_URL + '/sethmakori1.jpg'}
            alt="Seth Makori"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, children }) => (
  <a 
    href={href}
    className={styles.socialLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Social media link"
  >
    {children}
  </a>
);

export default Hero;