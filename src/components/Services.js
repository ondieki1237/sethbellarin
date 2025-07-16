import React from 'react';
import styles from './Services.module.css';
import { FaCode, FaMobile, FaServer, FaChartBar, FaCamera, FaUsers } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Front-end Development",
      description: "Develop responsive and interactive web applications using modern technologies for a seamless user experience.",
      icon: <FaCode className={styles.icon} />
    },
    {
      title: "UI/UX Design",
      description: "Create engaging user interfaces and experiences that enhance usability and foster user satisfaction.",
      icon: <FaMobile className={styles.icon} />
    },
    {
      title: "Backend Development",
      description: "Build robust server-side applications and APIs that ensure seamless data processing and management.",
      icon: <FaServer className={styles.icon} />
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, interactive, and insightful visualizations.",
      icon: <FaChartBar className={styles.icon} />
    },
    {
      title: "Photography",
      description: "Capturing epic moments through the lens to cherish unforgettable memories.",
      icon: <FaCamera className={styles.icon} />
    },
    {
      title: "Running Technical Communities",
      description: "Build and manage technical communities, fostering knowledge sharing and collaboration.",
      icon: <FaUsers className={styles.icon} />
    }
  ];

  return (
    <section
      id="services"
      className={styles.servicesSection}
      aria-label="Professional Services offered by Seth Makori Bellarin"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>My Services</h2>
        {/* <p className={styles.subtitle}>
          Comprehensive expertise ranging from software development, design, to community leadership. Based in Kenya, serving global clients.
        </p> */}

        <div className={styles.servicesGrid} role="list">
          {services.map((service) => (
            <article
              key={service.title}
              className={styles.serviceCard}
              role="listitem"
              aria-labelledby={`${service.title.toLowerCase().replace(/\s+/g, '-')}-title`}
            >
              <div className={styles.iconWrapper} aria-hidden="true">
                {service.icon}
              </div>
              <h3
                id={`${service.title.toLowerCase().replace(/\s+/g, '-')}-title`}
                className={styles.serviceTitle}
              >
                {service.title}
              </h3>
              <p className={styles.description}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
