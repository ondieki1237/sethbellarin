import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelopeOpen } from 'react-icons/fa';
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
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster speed for deleting
        }, 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Reset to normal speed for typing
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      {/* Scoped Neumorphism styles (self-contained) */}
      <style>{`
        /* Scope everything to .heroScoped to avoid external CSS bleed */
        .heroScoped { background: #e5e5e5; }
        .heroScoped .heroSection {
          min-height: 100vh;
          padding: 6rem 1rem;
          display: flex;
          align-items: center;
          background: inherit;
        }
        .heroScoped .container {
          max-width: 80rem;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .heroScoped .content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: flex-start; /* keep content pinned to left corner */
        }
        .heroScoped .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #e5e5e5;
          color: #593c2a;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-size: 1rem;
          width: fit-content;
          box-shadow: 6px 6px 12px rgba(0,0,0,0.1),
                      -6px -6px 12px rgba(255,255,255,1);
        }
        .heroScoped .title {
          font-size: 4.5rem;
          font-weight: 700;
          color: #593c2a;
          line-height: 1.2;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.6);
          text-align: left; /* ensure left aligned */
          width: 100%;
        }
        .heroScoped .subtitle {
          font-size: 2.5rem;
          color: #593c2a;
          margin-top: -0.5rem;
          text-align: left;
          width: 100%;
        }
        .heroScoped .description {
          color: #593c2a;
          font-size: 1.125rem;
          line-height: 1.8;
          max-width: 32rem;
          text-align: left; /* ensure paragraph is left aligned */
        }
        .heroScoped .buttonGroup {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .heroScoped .primaryButton, .heroScoped .secondaryButton {
          padding: 0.875rem 2rem;
          border-radius: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          background: #e5e5e5;
          box-shadow: 6px 6px 12px rgba(0,0,0,0.1),
                      -6px -6px 12px rgba(255,255,255,1);
        }
        .heroScoped .primaryButton {
          color: #593c2a;
          border: 1px solid #faba00;
          background: linear-gradient(180deg, #faba00 0%, #f6a800 100%);
        }
        .heroScoped .primaryButton:hover {
          background: linear-gradient(180deg, #f6a800 0%, #e69500 100%);
          color: #593c2a;
          transform: translateY(-2px);
          box-shadow: 8px 8px 16px rgba(0,0,0,0.12),
                      -8px -8px 16px rgba(255,255,255,0.9);
        }
        .heroScoped .secondaryButton {
          color: #fff;
          background: #593c2a;
          border: none;
        }
        .heroScoped .secondaryButton:hover {
          background: #402d1e;
          transform: translateY(-2px);
          box-shadow: 8px 8px 16px rgba(0,0,0,0.12),
                      -8px -8px 16px rgba(255,255,255,0.9);
        }
        .heroScoped .socialLinks {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .heroScoped .socialLink {
          color: #593c2a;
          padding: 0.75rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          background: #e5e5e5;
          box-shadow: inset 4px 4px 8px rgba(0,0,0,0.08),
                      inset -4px -4px 8px rgba(255,255,255,1);
        }
        .heroScoped .socialLink:hover {
          color: #faba00;
          transform: translateY(-2px);
          box-shadow: 4px 4px 8px rgba(0,0,0,0.1),
                      -4px -4px 8px rgba(255,255,255,1);
        }
        .heroScoped .imageContainer {
          position: relative;
          aspect-ratio: 1;
          border-radius: 2rem;
          overflow: hidden;
          background: #e5e5e5;
          box-shadow: 8px 8px 16px rgba(0,0,0,0.1),
                      -8px -8px 16px rgba(255,255,255,1);
        }
        .heroScoped .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2rem;
        }
        @media (max-width: 1024px) {
          .heroScoped .container { grid-template-columns: 1fr; text-align: left; }
          .heroScoped .content { align-items: flex-start; } /* keep left alignment on narrow screens */
          .heroScoped .badge { margin: 0; }
          .heroScoped .title { font-size: 3.5rem; }
          .heroScoped .subtitle { font-size: 2rem; }
          .heroScoped .description { margin: 0; }
          .heroScoped .imageContainer { max-width: 500px; margin: 0; }
        }
        @media (max-width: 640px) {
          .heroScoped .title { font-size: 2.5rem; }
          .heroScoped .subtitle { font-size: 1.5rem; }
          .heroScoped .buttonGroup { flex-direction: column; }
        }
        .heroScoped .cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background-color: #593c2a;
          margin-left: 4px;
          animation: heroBlink 0.7s infinite;
        }
        @keyframes heroBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <section className="heroSection heroScoped">
        <div className="container">
          <motion.div
            className="content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="badge">Hi there! 👋</span>

            <h1 className="title">I'm Seth Makori Ondieki</h1>

            <h2 className="subtitle">
              {text}<span className="cursor">|</span>
            </h2>

            <p className="description">
              A creative graphic designer and full-stack web developer based in Kenya.
              I specialize in branding, UX/UI design, and building fast, accessible digital experiences
              for clients around the globe. Let's create something remarkable together.
            </p>

            <div className="buttonGroup">
              <a
                href="https://drive.google.com/drive/folders/1CHh3MnKyITHP9Q4VLRbD5k_pEYQE01J9"
                className="primaryButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Portfolio
              </a>
              <a
                href="https://wa.me/+254759433906"
                className="secondaryButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Connect
              </a>
            </div>

            <div className="socialLinks">
              <SocialLink href="https://github.com/ondieki1237"><FaGithub size={24} /></SocialLink>
              <SocialLink href="https://www.linkedin.com/in/seth-setht-19a401235/"><FaLinkedin size={24} /></SocialLink>
              <SocialLink href="https://x.com/SethBellarin1"><FaTwitter size={24} /></SocialLink>
              <SocialLink href="mailto:bellarinseth@gmail.com"><FaEnvelopeOpen size={24} /></SocialLink>
            </div>
          </motion.div>

          <motion.div
            className="imageContainer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={process.env.PUBLIC_URL + '/sethmakori1.jpg'}
              alt="Seth Makori portrait image"
              className="image"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

const SocialLink = ({ href, children }) => (
  <a
    href={href}
    className="socialLink"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Social media link"
  >
    {children}
  </a>
);

export default Hero;