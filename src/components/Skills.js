import React from "react";
import styles from "./Skills.module.css";
import { FaPython, FaReact, FaJs, FaFigma, FaCamera } from "react-icons/fa";
import { SiGo } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "Go",
      percentage: 95,
      icon: <SiGo className={styles.skillIconFA} />,
      color: "#00ADD8",
    },
    {
      name: "JavaScript",
      percentage: 90,
      icon: <FaJs className={styles.skillIconFA} />,
      color: "#F7DF1E",
    },
    {
      name: "Python",
      percentage: 85,
      icon: <FaPython className={styles.skillIconFA} />,
      color: "#3776AB",
    },
    {
      name: "React",
      percentage: 90,
      icon: <FaReact className={styles.skillIconFA} />,
      color: "#61DAFB",
    },
    {
      name: "Figma",
      percentage: 80,
      icon: <FaFigma className={styles.skillIconFA} />,
      color: "#A259FF", // Figma's brand color
    },
    {
      name: "Photography",
      percentage: 75,
      icon: <FaCamera className={styles.skillIconFA} />,
      color: "#FF6B6B", // A warm color for photography
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>MY SKILLS</h2>

        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div
                className={styles.skillCircle}
                style={{
                  "--progress-color": skill.color,
                  "--progress-percentage": skill.percentage / 100,
                }}
              >
                <div className={styles.circleBackground} />
                <div className={styles.circleProgress} />
                <div className={styles.skillIcon}>{skill.icon}</div>
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillPercentage}>{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;