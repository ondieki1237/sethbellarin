import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer, FaChartBar, FaCamera, FaUsers } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Front-end Development",
      description: "Develop responsive and interactive web applications using modern technologies for a seamless user experience.",
      icon: <FaCode />
    },
    {
      title: "UI/UX Design",
      description: "Create engaging user interfaces and experiences that enhance usability and foster user satisfaction.",
      icon: <FaMobile />
    },
    {
      title: "Backend Development",
      description: "Build robust server-side applications and APIs that ensure seamless data processing and management.",
      icon: <FaServer />
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, interactive, and insightful visualizations.",
      icon: <FaChartBar />
    },
    {
      title: "Photography",
      description: "Capturing epic moments through the lens to cherish unforgettable memories.",
      icon: <FaCamera />
    },
    {
      title: "Running Technical Communities",
      description: "Build and manage technical communities, fostering knowledge sharing and collaboration.",
      icon: <FaUsers />
    }
  ];

  return (
    <>
      <style>{`
        body {
          background: #e5e5e5;
        }
        .servicesSection {
          padding: 6rem 1rem;
          background: #e5e5e5;
          display: flex;
          align-items: center;
        }
        .container {
          max-width: 80rem;
          margin: 0 auto;
          width: 100%;
        }
        .title {
          font-size: 4.5rem;
          font-weight: 700;
          color: #593c2a;
          line-height: 1.2;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.6);
          text-align: center;
          margin-bottom: 5rem;
        }
        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3.5rem;
          max-width: 70rem;
          margin: 0 auto;
        }
        .serviceCard {
          background: #e5e5e5;
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 6px 6px 12px rgba(0,0,0,0.1),
                      -6px -6px 12px rgba(255,255,255,1);
          border: 1px solid rgba(255,255,255,0.2);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          aspect-ratio: 1; /* Square for desktop */
          min-height: 320px;
        }
        .serviceCard:hover {
          transform: translateY(-8px);
          box-shadow: 8px 8px 16px rgba(0,0,0,0.12),
                      -8px -8px 16px rgba(255,255,255,0.9);
        }
        .iconWrapper {
          width: 4.5rem;
          height: 4.5rem;
          background: linear-gradient(135deg, #faba00 0%, #f6a800 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 4px 4px 8px rgba(250, 186, 0, 0.3),
                      -4px -4px 8px rgba(246, 168, 0, 0.3);
          transition: all 0.3s ease;
        }
        .serviceCard:hover .iconWrapper {
          transform: scale(1.1);
          box-shadow: 6px 6px 12px rgba(250, 186, 0, 0.4),
                      -6px -6px 12px rgba(246, 168, 0, 0.4);
        }
        .icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #593c2a;
          font-size: 1.5rem;
        }
        .serviceTitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #593c2a;
          margin-bottom: 1rem;
          line-height: 1.3;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.6);
          word-break: keep-all;
          hyphens: none;
          padding: 0 0.5rem;
        }
        .description {
          color: #593c2a;
          line-height: 1.5;
          font-size: 0.9rem;
          opacity: 0.9;
          margin: 0;
          text-align: center;
          word-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
          padding: 0 0.25rem;
        }
        /* Desktop (3 columns - Square cards) */
        @media (min-width: 1025px) {
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            gap: 4rem;
          }
          .title { 
            font-size: 4.5rem; 
            margin-bottom: 5.5rem;
          }
          .serviceCard { 
            padding: 3rem 2.5rem; 
            aspect-ratio: 1;
            min-height: 340px;
          }
          .iconWrapper {
            width: 5rem;
            height: 5rem;
          }
          .icon {
            font-size: 1.75rem;
          }
          .serviceTitle {
            font-size: 1.35rem;
          }
          .description {
            font-size: 0.95rem;
          }
        }
        /* Tablet (3 columns - Square cards) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
          }
          .title { 
            font-size: 3.5rem; 
            margin-bottom: 4.5rem;
          }
          .serviceCard { 
            padding: 2.5rem 2rem; 
            aspect-ratio: 1;
            min-height: 300px;
          }
          .iconWrapper {
            width: 4.5rem;
            height: 4.5rem;
          }
        }
        /* Phone Landscape (3 columns - Slightly rectangular) */
        @media (max-width: 768px) and (min-width: 481px) and (orientation: landscape) {
          .servicesSection { 
            padding: 3rem 1rem; 
          }
          .title { 
            font-size: 2.2rem; 
            margin-bottom: 3rem; 
          }
          .servicesGrid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            max-width: 100%;
          }
          .serviceCard { 
            padding: 1.5rem 1rem; 
            aspect-ratio: 1;
            min-height: 240px;
          }
          .iconWrapper { 
            width: 3.5rem; 
            height: 3.5rem; 
          }
          .icon {
            font-size: 1.25rem;
          }
          .serviceTitle { 
            font-size: 1rem; 
            margin-bottom: 0.75rem;
          }
          .description { 
            font-size: 0.8rem; 
            line-height: 1.4;
          }
        }
        /* Phone Portrait (2 columns - Rectangular cards) */
        @media (max-width: 768px) and (orientation: portrait) {
          .servicesSection { 
            padding: 4rem 1rem; 
          }
          .title { 
            font-size: 2.5rem; 
            margin-bottom: 3.5rem; 
          }
          .servicesGrid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            max-width: 100%;
          }
          .serviceCard { 
            padding: 2rem 1.5rem; 
            aspect-ratio: 3/4; /* Rectangular for phone */
            min-height: 280px;
          }
          .iconWrapper { 
            width: 4rem; 
            height: 4rem; 
          }
          .icon {
            font-size: 1.5rem;
          }
          .serviceTitle { 
            font-size: 1.15rem; 
            margin-bottom: 1rem;
          }
          .description { 
            font-size: 0.9rem; 
            line-height: 1.45;
          }
        }
        /* Small Phone Portrait (2 columns - More rectangular) */
        @media (max-width: 480px) and (orientation: portrait) {
          .servicesSection { 
            padding: 3rem 0.75rem; 
          }
          .title { 
            font-size: 2rem; 
            margin-bottom: 3rem; 
          }
          .servicesGrid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .serviceCard { 
            padding: 1.75rem 1.25rem; 
            aspect-ratio: 3/4; /* Rectangular for small phone */
            min-height: 260px;
          }
          .iconWrapper { 
            width: 3.5rem; 
            height: 3.5rem; 
          }
          .icon {
            font-size: 1.25rem;
          }
          .serviceTitle { 
            font-size: 1.05rem; 
            margin-bottom: 0.75rem;
          }
          .description { 
            font-size: 0.85rem; 
            line-height: 1.4;
          }
        }
        /* Very Small Phone (1 column - Tall rectangular) */
        @media (max-width: 360px) {
          .servicesGrid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .serviceCard { 
            padding: 2rem 1.5rem; 
            aspect-ratio: 3/5; /* Taller rectangular for very small screens */
            min-height: 300px;
          }
          .serviceTitle { 
            font-size: 1.2rem; 
          }
          .description { 
            font-size: 0.95rem; 
          }
        }
      `}</style>

      <section
        id="services"
        className="servicesSection"
        aria-label="Professional Services offered by Seth Makori Bellarin"
      >
        <div className="container">
          <motion.h2 
            className="title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            My Services
          </motion.h2>

          <div className="servicesGrid" role="list">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="serviceCard"
                role="listitem"
                aria-labelledby={`${service.title.toLowerCase().replace(/\s+/g, '-')}-title`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: Math.floor(index / 3) * 0.2 + (index % 3) * 0.1
                }}
                viewport={{ once: true }}
              >
                <div className="iconWrapper" aria-hidden="true">
                  {React.cloneElement(service.icon, { className: "icon" })}
                </div>
                <h3
                  id={`${service.title.toLowerCase().replace(/\s+/g, '-')}-title`}
                  className="serviceTitle"
                >
                  {service.title}
                </h3>
                <p className="description">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;