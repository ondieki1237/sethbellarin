import React, { useState } from 'react';
import { FaEnvelope, FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaEnvelopeOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('submitted');
        setEmail('');
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Submission error:', err);
    }
  };

  return (
    <>
      {/* Scoped Neumorphism styles */}
      <style>{`
        .contactScoped {
          background: #e5e5e5;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .contactScoped .contactSection {
          padding: 5rem 1rem;
          background: inherit;
          width: 100%;
        }
        .contactScoped .backgroundOverlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(89, 60, 42, 0.4), rgba(250, 186, 0, 0.2));
          z-index: 1;
        }
        .contactScoped .container {
          max-width: 80rem;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #e5e5e5;
          border-radius: 2rem;
          padding: 3rem;
          box-shadow: 8px 8px 16px rgba(0,0,0,0.1),
                      -8px -8px 16px rgba(255,255,255,1);
        }
        .contactScoped .title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #593c2a;
          margin-bottom: 1.5rem;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.6);
          letter-spacing: 0.5px;
        }
        .contactScoped .subtitle {
          font-size: 1.25rem;
          color: #593c2a;
          opacity: 0.8;
          max-width: 600px;
          margin-bottom: 2rem;
        }
        .contactScoped .content {
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .contactScoped .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contactScoped .inputGroup {
          display: flex;
          gap: 0.75rem;
          background: #e5e5e5;
          padding: 0.75rem;
          border-radius: 1.5rem;
          box-shadow: inset 6px 6px 12px rgba(0,0,0,0.08),
                      inset -6px -6px 12px rgba(255,255,255,1);
        }
        .contactScoped .input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 1rem;
          background: #e5e5e5;
          color: #593c2a;
          font-size: 1.1rem;
          outline: none;
          box-shadow: 6px 6px 12px rgba(0,0,0,0.08),
                      -6px -6px 12px rgba(255,255,255,1);
          transition: all 0.3s ease;
        }
        .contactScoped .input:focus {
          box-shadow: inset 4px 4px 8px rgba(0,0,0,0.1),
                      inset -4px -4px 8px rgba(255,255,255,1);
        }
        .contactScoped .input::placeholder {
          color: #593c2a;
          opacity: 0.6;
        }
        .contactScoped .submitButton {
          padding: 1rem 2rem;
          border-radius: 1rem;
          background: linear-gradient(180deg, #faba00 0%, #f6a800 100%);
          color: #593c2a;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 6px 6px 12px rgba(0,0,0,0.1),
                      -6px -6px 12px rgba(255,255,255,1);
        }
        .contactScoped .submitButton:hover {
          background: linear-gradient(180deg, #f6a800 0%, #e69500 100%);
          transform: translateY(-2px);
          box-shadow: 8px 8px 16px rgba(0,0,0,0.12),
                      -8px -8px 16px rgba(255,255,255,0.9);
        }
        .contactScoped .successMessage, .contactScoped .errorMessage {
          margin-top: 1rem;
          font-size: 1rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 4px 4px 8px rgba(0,0,0,0.08),
                      -4px -4px 8px rgba(255,255,255,1);
        }
        .contactScoped .successMessage {
          background: #d4edda;
          color: #155724;
        }
        .contactScoped .errorMessage {
          background: #f8d7da;
          color: #721c24;
        }
        .contactScoped .socialLinks {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 1.5rem;
        }
        .contactScoped .socialLink {
          color: #593c2a;
          padding: 0.75rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          background: #e5e5e5;
          box-shadow: 4px 4px 8px rgba(0,0,0,0.08),
                      -4px -4px 8px rgba(255,255,255,1);
        }
        .contactScoped .socialLink:hover {
          color: #faba00;
          transform: translateY(-2px);
          box-shadow: 6px 6px 12px rgba(0,0,0,0.1),
                      -6px -6px 12px rgba(255,255,255,1);
        }
        .contactScoped .footer {
          margin-top: 4rem;
          font-size: 0.875rem;
          color: #593c2a;
          opacity: 0.6;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.6);
        }
        @media (max-width: 768px) {
          .contactScoped .container {
            padding: 2rem;
          }
          .contactScoped .title {
            font-size: 2.5rem;
          }
          .contactScoped .subtitle {
            font-size: 1rem;
          }
          .contactScoped .inputGroup {
            flex-direction: column;
            gap: 1rem;
          }
          .contactScoped .submitButton {
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .contactScoped .title {
            font-size: 2rem;
          }
          .contactScoped .socialLinks {
            gap: 1rem;
          }
          .contactScoped .socialLink {
            padding: 0.5rem;
          }
        }
      `}</style>

      <section id="contact" className="contactSection contactScoped">
        <div className="backgroundOverlay" />
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="title">Get in Touch</h2>
          <p className="subtitle">Drop your email or connect with me on social media to start a conversation!</p>
          <div className="content">
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputGroup">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="submitButton">
                  <FaArrowRight size={20} />
                </button>
              </div>
              {status === 'submitted' && (
                <p className="successMessage">Thanks! I'll get back to you soon.</p>
              )}
              {error && <p className="errorMessage">{error}</p>}
            </form>
            <motion.div
              className="socialLinks"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="https://github.com/ondieki1237"
                className="socialLink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/seth-setht-19a401235/"
                className="socialLink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/SethBellarin1"
                className="socialLink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="mailto:bellarinseth@gmail.com"
                className="socialLink"
                aria-label="Email"
              >
                <FaEnvelopeOpen size={24} />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>© 2025 Seth Makori Bellarin. All Rights Reserved.</p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;