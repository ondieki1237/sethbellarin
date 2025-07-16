import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import backgroundImg from '../image/seth.jpg';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');

  return (
    <section
      id="contact"
      className={styles.contactSection}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={styles.backgroundOverlay} />
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Contact me ...</h2>
        <div className={styles.content}>
          <form
            action="https://formspree.io/f/xvgqoqdo"
            method="POST"
            className={styles.form}
            onSubmit={() => setStatus('submitted')}
          >
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.submitButton}>
                <FaArrowRight />
              </button>
            </div>
            {status === 'submitted' && (
              <p className={styles.successMessage}>Thanks! I'll get back to you soon.</p>
            )}
          </form>
        </div>
        <div className={styles.footer}>
          <p>© bellarinseth. All Rights Reserved 2025</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
