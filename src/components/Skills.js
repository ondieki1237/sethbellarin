import React from "react";
import styles from "./Skills.module.css";
import { FaPython, FaReact, FaJs, FaFigma, FaCamera } from "react-icons/fa";
import { SiGo } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "Go",
      percentage: 95,
      icon: <SiGo className={styles.skillIconFA} aria-hidden="true" />,
      color: "#00ADD8",
    },
    {
      name: "JavaScript",
      percentage: 90,
      icon: <FaJs className={styles.skillIconFA} aria-hidden="true" />,
      color: "#F7DF1E",
    },
    {
      name: "Python",
      percentage: 85,
      icon: <FaPython className={styles.skillIconFA} aria-hidden="true" />,
      color: "#3776AB",
    },
    {
      name: "React",
      percentage: 90,
      icon: <FaReact className={styles.skillIconFA} aria-hidden="true" />,
      color: "#61DAFB",
    },
    {
      name: "Figma",
      percentage: 80,
      icon: <FaFigma className={styles.skillIconFA} aria-hidden="true" />,
      color: "#A259FF",
    },
    {
      name: "Photography",
      percentage: 75,
      icon: <FaCamera className={styles.skillIconFA} aria-hidden="true" />,
      color: "#FF6B6B",
    },
  ];

  return (
    <section
      id="skills"
      className={styles.skillsSection}
      aria-label="Skills and Proficiency of Seth Makori Bellarin"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>My Professional Skills</h2>

        <div className={styles.skillsGrid} role="list">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className={styles.skillCard}
              role="listitem"
              aria-labelledby={`${skill.name.toLowerCase()}-skill-name`}
            >
              <div
                className={styles.skillCircle}
                style={{
                  "--progress-color": skill.color,
                  "--progress-percentage": skill.percentage / 100,
                }}
                aria-label={`${skill.name} skill proficiency: ${skill.percentage} percent`}
                role="img"
              >
                <div className={styles.circleBackground} />
                <div className={styles.circleProgress} />
                <div className={styles.skillIcon}>{skill.icon}</div>
              </div>
              <h3 id={`${skill.name.toLowerCase()}-skill-name`} className={styles.skillName}>
                {skill.name}
              </h3>
              <p className={styles.skillPercentage}>{skill.percentage}%</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
