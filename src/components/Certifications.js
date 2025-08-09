import React from 'react';
import styles from './Certifications.module.css';

const Certifications = () => {
  const certificates = [
    {
      title: 'Hackathon Participation Certificate',
      issuer: 'Devpost',
      description: 'Awarded for participating in a hackathon organized by Devpost.',
      link: 'https://drive.google.com/file/d/1zHbDdImFUscYo1oRQNQQfI3EsCmGZr4z/view?usp=sharing',
    },
    {
      title: 'Artificial Intelligence Course Certificate',
      issuer: 'ALx',
      description: 'Completed a comprehensive course in Artificial Intelligence by ALx.',
      link: 'https://drive.google.com/file/d/1XgCJXqkyzokuS_3VZoualr-0vANecsxt/view?usp=sharing',
    },
    {
      title: 'Hackathon Participation Certificate',
      issuer: 'Power Learn Project',
      description: 'Awarded for participating in a hackathon organized by Power Learn Project.',
      link: 'https://drive.google.com/file/d/1Cb7heWb-LHuIu5P7FAr0couqlpFwsZu8/view?usp=drive_link',
    },
    {
      title: 'Software Engineering Certificate',
      issuer: 'ALx',
      description: 'Completed an intensive Software Engineering program by ALx.',
      link: 'https://drive.google.com/file/d/1Qx13-15JTvZNmF29K5_gNifgeVqT5w3W/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Certifications & Awards</h2>
        <p className={styles.subtitle}>A collection of some of my professional achievements and certifications.</p>
        <div className={styles.certificatesGrid}>
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={styles.certificateCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className={styles.certificateTitle}>{cert.title}</h3>
              <p className={styles.certificateIssuer}>Issued by: {cert.issuer}</p>
              <p className={styles.certificateDescription}>{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificateLink}
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;