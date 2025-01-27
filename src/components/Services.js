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
        description: "Capturing the epic moments in lens to cherish the unforgottable memories in life",
        icon: <FaCamera className={styles.icon} />
    },
    {
      title: "Running Technical Communities",
      description: "Build and manage technical communities, fostering knowledge sharing and collaboration.",
      icon: <FaUsers className={styles.icon} />
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>
        
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div
              key={service.title}
              className={styles.serviceCard}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>
                {service.title}
              </h3>
              <p className={styles.description}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 