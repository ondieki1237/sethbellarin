import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelopeOpen } from 'react-icons/fa';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ['I code', 'I design', 'I create brands', 'I build websites'];

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      const updatedText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(() => handleType(), typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Hi there! 👋</span>

          <h1 className={styles.title}>I'm Seth Makori Bellarin</h1>

          <h2 className={styles.subtitle}>
            {text}<span className={styles.cursor}>|</span>
          </h2>

          <p className={styles.description}>
            A creative graphic designer and full-stack web developer based in Kenya.
            I specialize in branding, UX/UI design, and building fast, accessible digital experiences
            for clients around the globe. Let's create something remarkable together.
          </p>

          <div className={styles.buttonGroup}>
            <a
              href="https://drive.google.com/drive/folders/1CHh3MnKyITHP9Q4VLRbD5k_pEYQE01J9"
              className={styles.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Portfolio
            </a>
            <a
              href="https://wa.me/+254759433906"
              className={styles.secondaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Connect
            </a>
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
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={process.env.PUBLIC_URL + '/sethmakori1.jpg'}
            alt="Seth Makori portrait image"
            className={styles.image}
            loading="lazy"
          />
        </motion.div>
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
