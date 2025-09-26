import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certificates = [
    {
      title: 'Degree in Electronics and Instrumentation',
      issuer: 'Technical University of Mombasa',
      description: 'Awarded a degree in Electronics and Instrumentation.',
      link: '#'
    },
    {
      title: 'Software Engineering Certificate',
      issuer: 'ALx',
      description: 'Completed an intensive Software Engineering program by ALx.',
      link: 'https://drive.google.com/file/d/1Qx13-15JTvZNmF29K5_gNifgeVqT5w3W/view?usp=sharing'
    },
    {
      title: 'Hacka‑Milli Winner',
      issuer: 'KENIC (Kenya Network Information Centre)',
      description: 'Winner of the Hacka‑Milli coding challenge — recognised for building an innovative solution during the competition.',
      link: 'https://drive.google.com/file/d/12Y6kttEry3qJSeKerY6zInIIZWvaw5yK/view?usp=drive_link'
    },
    {
      title: 'Hackathon Participation Certificate',
      issuer: 'Devpost',
      description: 'Awarded for participating in a hackathon organized by Devpost.',
      link: 'https://drive.google.com/file/d/1zHbDdImFUscYo1oRQNQQfI3EsCmGZr4z/view?usp=sharing'
    },
    {
      title: 'Artificial Intelligence Course Certificate',
      issuer: 'ALx',
      description: 'Completed a comprehensive course in Artificial Intelligence by ALx.',
      link: 'https://drive.google.com/file/d/1XgCJXqkyzokuS_3VZoualr-0vANecsxt/view?usp=sharing'
    },
    {
      title: 'Hackathon Participation Certificate',
      issuer: 'Power Learn Project',
      description: 'Awarded for participating in a hackathon organized by Power Learn Project.',
      link: 'https://drive.google.com/file/d/1Cb7heWb-LHuIu5P7FAr0couqlpFwsZu8/view?usp=drive_link'
    }
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: '6rem 1rem',
        background: '#e5e5e5',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <motion.h2 
          style={{
            fontSize: '4.5rem',
            fontWeight: 700,
            color: '#593c2a',
            lineHeight: 1.2,
            textShadow: '1px 1px 0 rgba(255,255,255,0.6)',
            textAlign: 'center',
            marginBottom: '5rem',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Certifications & Awards
        </motion.h2>

        <motion.p 
          style={{
            fontSize: '1.25rem',
            textAlign: 'center',
            color: '#593c2a',
            marginBottom: '4rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: 0.9,
            lineHeight: 1.5,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A collection of some of my professional achievements and certifications.
        </motion.p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3.5rem',
            maxWidth: '70rem',
            margin: '0 auto',
          }}
        >
          {certificates.map((cert, index) => (
            <motion.article
              key={index}
              style={{
                background: '#e5e5e5',
                borderRadius: '1.5rem',
                padding: '2.5rem 2rem',
                transition: 'all 0.3s ease',
                boxShadow: '6px 6px 12px rgba(0,0,0,0.1), -6px -6px 12px rgba(255,255,255,1)',
                border: '1px solid rgba(255,255,255,0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                aspectRatio: '1',
                minHeight: '320px',
                position: 'relative',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: Math.floor(index / 3) * 0.2 + (index % 3) * 0.1
              }}
              viewport={{ once: true }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '8px 8px 16px rgba(0,0,0,0.12), -8px -8px 16px rgba(255,255,255,0.9)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '6px 6px 12px rgba(0,0,0,0.1), -6px -6px 12px rgba(255,255,255,1)';
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#593c2a',
                  marginBottom: '1rem',
                  lineHeight: 1.3,
                  textShadow: '1px 1px 0 rgba(255,255,255,0.6)',
                  wordBreak: 'keep-all',
                  hyphens: 'none',
                  padding: '0 0.5rem',
                  textAlign: 'center',
                }}
              >
                {cert.title}
              </h3>
              
              <p
                style={{
                  fontSize: '1rem',
                  color: '#593c2a',
                  marginBottom: '1rem',
                  fontStyle: 'italic',
                  opacity: 0.9,
                  textAlign: 'center',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.6)',
                }}
              >
                Issued by: {cert.issuer}
              </p>
              
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#593c2a',
                  lineHeight: 1.5,
                  opacity: 0.9,
                  margin: '0 0 1.5rem 0',
                  textAlign: 'center',
                  wordWrap: 'break-word',
                  hyphens: 'auto',
                  padding: '0 0.25rem',
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {cert.description}
              </p>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #faba00 0%, #f6a800 100%)',
                  color: '#593c2a',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: 500,
                  textAlign: 'center',
                  boxShadow: '3px 3px 6px rgba(250, 186, 0, 0.3), -3px -3px 6px rgba(246, 168, 0, 0.3)',
                  textShadow: 'none',
                  alignSelf: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '4px 4px 8px rgba(250, 186, 0, 0.4), -4px -4px 8px rgba(246, 168, 0, 0.4)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f6a800 0%, #faba00 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '3px 3px 6px rgba(250, 186, 0, 0.3), -3px -3px 6px rgba(246, 168, 0, 0.3)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #faba00 0%, #f6a800 100%)';
                }}
              >
                View Certificate
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      <style jsx>{`
        section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #faba00, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        section:hover::before {
          opacity: 1;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Desktop (3 columns - Square cards) */
        @media (min-width: 1025px) {
          section {
            padding: 8rem 2rem;
          }
          
          h2 { 
            font-size: 4.5rem; 
            margin-bottom: 5.5rem;
          }
          
          p {
            font-size: 1.5rem;
            margin-bottom: 5rem;
          }
          
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(3, 1fr);
            gap: 4rem;
          }
          
          div[style*="background: #e5e5e5"] { 
            padding: 3rem 2.5rem; 
            aspect-ratio: 1;
            min-height: 340px;
          }
          
          div[style*="background: #e5e5e5"] > h3 {
            fontSize: 1.35rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(1) {
            font-size: 1.15rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(2) {
            font-size: 0.95rem;
          }
          
          div[style*="background: #e5e5e5"] > a {
            padding: 1rem 2rem;
            font-size: 1.1rem;
          }
        }

        /* Tablet (3 columns - Square cards) */
        @media (min-width: 769px) and (max-width: 1024px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
          }
          
          h2 { 
            font-size: 3.5rem; 
            margin-bottom: 4.5rem;
          }
          
          p {
            font-size: 1.25rem;
            margin-bottom: 4rem;
          }
          
          div[style*="background: #e5e5e5"] { 
            padding: 2.5rem 2rem; 
            aspect-ratio: 1;
            min-height: 300px;
          }
        }

        /* Phone Landscape (3 columns - Slightly rectangular) */
        @media (max-width: 768px) and (min-width: 481px) and (orientation: landscape) {
          section { 
            padding: 3rem 1rem; 
          }
          
          h2 { 
            font-size: 2.2rem; 
            margin-bottom: 3rem; 
          }
          
          p {
            font-size: 1rem;
            margin-bottom: 3rem;
          }
          
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            max-width: 100%;
          }
          
          div[style*="background: #e5e5e5"] { 
            padding: 1.5rem 1rem; 
            aspect-ratio: 1;
            min-height: 240px;
          }
          
          div[style*="background: #e5e5e5"] > h3 { 
            font-size: 1rem; 
            margin-bottom: 0.75rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(1) {
            font-size: 0.9rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(2) { 
            font-size: 0.8rem; 
            line-height: 1.4;
          }
          
          div[style*="background: #e5e5e5"] > a {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }

        /* Phone Portrait (2 columns - Rectangular cards) */
        @media (max-width: 768px) and (orientation: portrait) {
          section { 
            padding: 4rem 1rem; 
          }
          
          h2 { 
            font-size: 2.5rem; 
            margin-bottom: 3.5rem; 
          }
          
          p {
            font-size: 1.1rem;
            margin-bottom: 3.5rem;
          }
          
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            max-width: 100%;
          }
          
          div[style*="background: #e5e5e5"] { 
            padding: 2rem 1.5rem; 
            aspect-ratio: 3/4;
            min-height: 280px;
          }
          
          div[style*="background: #e5e5e5"] > h3 { 
            font-size: 1.15rem; 
            margin-bottom: 1rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(1) {
            font-size: 1rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(2) { 
            font-size: 0.9rem; 
            line-height: 1.45;
          }
        }

        /* Small Phone Portrait (2 columns - More rectangular) */
        @media (max-width: 480px) and (orientation: portrait) {
          section { 
            padding: 3rem 0.75rem; 
          }
          
          h2 { 
            font-size: 2rem; 
            margin-bottom: 3rem; 
          }
          
          p {
            font-size: 1rem;
            margin-bottom: 3rem;
          }
          
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          div[style*="background: #e5e5e5"] { 
            padding: 1.75rem 1.25rem; 
            aspect-ratio: 3/4;
            min-height: 260px;
          }
          
          div[style*="background: #e5e5e5"] > h3 { 
            font-size: 1.05rem; 
            margin-bottom: 0.75rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(1) {
            font-size: 0.95rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(2) { 
            font-size: 0.85rem; 
            line-height: 1.4;
          }
        }

        /* Very Small Phone (1 column - Tall rectangular) */
        @media (max-width: 360px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          div[style*="background: #e5e5e5"] { 
            padding: 2rem 1.5rem; 
            aspect-ratio: 3/5;
            min-height: 300px;
          }
          
          div[style*="background: #e5e5e5"] > h3 { 
            font-size: 1.2rem; 
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(1) {
            font-size: 1.05rem;
          }
          
          div[style*="background: #e5e5e5"] > p:nth-of-type(2) { 
            font-size: 0.95rem; 
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;