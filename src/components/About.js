"use client"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelopeOpen, FaWhatsapp, FaDownload } from "react-icons/fa"
import { motion } from "framer-motion"

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "8+", label: "Technical Articles" },
  ]

  const skills = [
    "React & Next.js",
    "Go Programming",
    "UI/UX Design",
    "Brand Identity",
    "Web Development",
    "Graphic Design",
  ]

  return (
    <>
      <style>{`
        /* match Services.js - neutral light background */
        body { background: #e5e5e5; }
        .aboutSection {
          min-height: 100vh;
          background: #e5e5e5;
          position: relative;
        }
        /* keep a very subtle sheen so section doesn't look flat */
        .aboutSection::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.02) 0%, transparent 40%),
                      radial-gradient(circle at 80% 20%, rgba(0,0,0,0.01) 0%, transparent 40%);
          pointer-events: none;
        }
        
        /* Main container with side-by-side layout */
        .mainContainer {
          display: flex;
          min-height: 100vh;
          max-width: 85rem;
          margin: 0 auto;
          gap: 4rem;
          padding: 2rem;
        }
        
        /* Left sticky image section */
        .leftSection {
          flex: 0 0 45%;
          position: sticky;
          top: 2rem;
          height: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Right scrolling content section */
        .rightSection {
          flex: 1;
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        .title {
          font-size: 5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #593c2a 0%, #7a5139 50%, #593c2a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          text-align: left;
          margin-bottom: 2rem;
          position: relative;
        }
        .title::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 0;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #faba00, #f6a800);
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(250, 186, 0, 0.3);
        }
        
        .imageContainer {
          position: relative;
          aspect-ratio: 4/3;
          max-width: 500px;
          width: 100%;
          border-radius: 2.5rem;
          overflow: hidden;
          background: #ebebeb;
          box-shadow: 
            20px 20px 40px rgba(0,0,0,0.1),
            -20px -20px 40px rgba(255,255,255,0.9),
            inset 2px 2px 4px rgba(255,255,255,0.8),
            inset -2px -2px 4px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
        }
        .imageContainer:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            25px 25px 50px rgba(0,0,0,0.12),
            -25px -25px 50px rgba(255,255,255,0.95),
            inset 2px 2px 4px rgba(255,255,255,0.9),
            inset -2px -2px 4px rgba(0,0,0,0.03);
        }
        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2.5rem;
          transition: all 0.4s ease;
        }
        .imageContainer:hover .image {
          transform: scale(1.05);
        }
        .textContent {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .brandTag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #faba00, #f6a800);
          color: #593c2a;
          padding: 0.5rem 1.5rem;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 
            6px 6px 12px rgba(0,0,0,0.1),
            -6px -6px 12px rgba(255,255,255,0.9);
          margin-bottom: 1rem;
          width: fit-content;
        }
        .description {
          color: #593c2a;
          font-size: 1.2rem;
          line-height: 1.8;
          font-weight: 400;
          text-align: left;
        }
        .description strong {
          background: linear-gradient(135deg, #faba00, #f6a800);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }
        .skillsContainer {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .skillTag {
          background: #ebebeb;
          color: #593c2a;
          padding: 0.75rem 1.5rem;
          border-radius: 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          box-shadow: 
            inset 4px 4px 8px rgba(0,0,0,0.06),
            inset -4px -4px 8px rgba(255,255,255,1);
          transition: all 0.3s ease;
        }
        .skillTag:hover {
          background: linear-gradient(135deg, #faba00, #f6a800);
          color: #593c2a;
          transform: translateY(-2px);
          box-shadow: 
            4px 4px 8px rgba(0,0,0,0.1),
            -4px -4px 8px rgba(255,255,255,0.9);
        }
        .statsContainer {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .statCard {
          background: #ebebeb;
          padding: 2.5rem 1.5rem;
          border-radius: 1.5rem;
          text-align: center;
          box-shadow: 
            12px 12px 24px rgba(0,0,0,0.08),
            -12px -12px 24px rgba(255,255,255,1);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        .statCard::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #faba00, #f6a800);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .statCard:hover::before {
          transform: translateX(0);
        }
        .statCard:hover {
          transform: translateY(-8px);
          box-shadow: 
            16px 16px 32px rgba(0,0,0,0.1),
            -16px -16px 32px rgba(255,255,255,0.95);
        }
        .statNumber {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #593c2a 0%, #7a5139 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          line-height: 1;
        }
        .statLabel {
          color: #593c2a;
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.8;
        }
        .buttonGroup {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
          align-items: center;
          width: 100%;
        }
        .downloadButton, .connectButton {
          padding: 1rem 2.5rem;
          border-radius: 1.5rem;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.4s ease;
          background: #ebebeb;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .downloadButton {
          color: #593c2a;
          background: linear-gradient(135deg, #faba00 0%, #f6a800 100%);
          box-shadow: 
            8px 8px 16px rgba(0,0,0,0.1),
            -8px -8px 16px rgba(255,255,255,0.9);
        }
        .downloadButton:hover {
          background: linear-gradient(135deg, #f6a800 0%, #e69500 100%);
          transform: translateY(-4px);
          box-shadow: 
            12px 12px 24px rgba(0,0,0,0.12),
            -12px -12px 24px rgba(255,255,255,0.95);
        }
        .connectButton {
          color: #fff;
          background: linear-gradient(135deg, #593c2a 0%, #7a5139 100%);
          box-shadow: 
            8px 8px 16px rgba(0,0,0,0.1),
            -8px -8px 16px rgba(255,255,255,0.9);
        }
        .connectButton:hover {
          background: linear-gradient(135deg, #402d1e 0%, #593c2a 100%);
          transform: translateY(-4px);
          box-shadow: 
            12px 12px 24px rgba(0,0,0,0.12),
            -12px -12px 24px rgba(255,255,255,0.95);
        }
        .socialLinks {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .socialLink {
          color: #593c2a;
          padding: 1rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.4s ease;
          background: #ebebeb;
          box-shadow: 
            8px 8px 16px rgba(0,0,0,0.08),
            -8px -8px 16px rgba(255,255,255,1);
          font-size: 1.25rem;
        }
        .socialLink:hover {
          color: #faba00;
          transform: translateY(-4px) scale(1.1);
          box-shadow: 
            12px 12px 24px rgba(0,0,0,0.1),
            -12px -12px 24px rgba(255,255,255,0.95);
        }
        .downloadIcon, .connectIcon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }
        .downloadButton:hover .downloadIcon {
          transform: translateY(2px);
        }
        .connectButton:hover .connectIcon {
          transform: scale(1.1);
        }
        
        /* Updated responsive styles for side-by-side layout */
        @media (max-width: 1024px) {
          .mainContainer {
            flex-direction: column;
            gap: 2rem;
          }
          .leftSection {
            position: relative;
            flex: none;
            top: 0;
          }
          .rightSection {
            padding: 1rem 0;
          }
          .title { 
            font-size: 4rem; 
            text-align: center;
          }
          .title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          .description {
            text-align: center;
          }
          .skillsContainer {
            justify-content: center;
          }
          .imageContainer { 
            max-width: 400px; 
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          .mainContainer {
            padding: 1rem;
          }
          .title { font-size: 3rem; }
          .statsContainer { grid-template-columns: 1fr; gap: 1.5rem; }
          .description { font-size: 1.1rem; }
          .statNumber { font-size: 2.5rem; }
          .buttonGroup { 
            flex-direction: column; 
            gap: 1rem;
            align-items: stretch;
          }
          .downloadButton, .connectButton { 
            width: 100%; 
            justify-content: center;
          }
          .imageContainer { max-width: 300px; }
        }
        @media (max-width: 480px) {
          .statsContainer {
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
            justify-content: space-between;
            align-items: stretch;
          }
          .statCard {
            flex: 1;
            padding: 1.5rem 0.75rem;
          }
          .statNumber { font-size: 2rem; }
          .statLabel { font-size: 0.8rem; }
          .title { font-size: 2.5rem; }
          .skillTag { font-size: 0.8rem; padding: 0.5rem 1rem; }
        }
      `}</style>

      <section className="aboutSection">
        <div className="mainContainer">
          <div className="leftSection">
            <motion.div
              className="imageContainer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* load image from public folder (works with CRA/React) */}
              <img
                src={`${process.env.PUBLIC_URL || ''}/sethmakori2.jpg`}
                alt="Seth Makori - FXPDR"
                className="image"
                loading="lazy"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `${process.env.PUBLIC_URL || ''}/placeholder.jpg`; }}
              />
            </motion.div>
          </div>

          <div className="rightSection">
            <motion.h2
              className="title"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="textContent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="brandTag">
                <span>✨ FXPDR</span>
              </div>

              <p className="description">
                I'm <strong>Seth Makori</strong>, a passionate graphic designer and web developer based in Kenya. I
                specialize in transforming concepts into elegant, functional digital experiences. With a strong
                background in Go, JavaScript, and modern web technologies, I build scalable, efficient solutions and
                love tackling creative and technical challenges. Whether it's building brands or engineering systems, I
                bring design thinking and code craftsmanship together.
              </p>

              <div className="skillsContainer">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skillTag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="statsContainer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="statCard"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="statNumber">{stat.number}</h3>
                    <p className="statLabel">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="buttonGroup"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a
                  href={`${process.env.PUBLIC_URL}/resources/Seth_Makori_CV.pdf`}
                  download="seth_makori_CV.pdf"
                  className="downloadButton"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Seth Makori's CV"
                >
                  <FaDownload className="downloadIcon" />
                  Download CV
                </a>
                <a
                  href="https://wa.me/+254759433906"
                  className="connectButton"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Seth Makori via WhatsApp"
                >
                  <FaWhatsapp className="connectIcon" />
                  Let's Connect
                </a>
              </motion.div>

              <motion.div
                className="socialLinks"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <SocialLink href="https://github.com/sethmakori">
                  <FaGithub />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/sethmakori">
                  <FaLinkedin />
                </SocialLink>
                <SocialLink href="https://twitter.com/sethmakori">
                  <FaTwitter />
                </SocialLink>
                <SocialLink href="mailto:seth@fxpdr.com">
                  <FaEnvelopeOpen />
                </SocialLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

const SocialLink = ({ href, children }) => (
  <a href={href} className="socialLink" target="_blank" rel="noopener noreferrer" aria-label="Social media link">
    {children}
  </a>
)

export default About
