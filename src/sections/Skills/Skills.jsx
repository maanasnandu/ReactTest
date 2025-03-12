import React from "react";
import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-dark.svg";
import { InstagramEmbed } from "react-social-media-embed";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.mySkills}>Skills</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ReactJS" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="Azure AZ-900" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>

      <br />
      <br />
      <h2 className={styles.mySkills}>Follow for my Photography!</h2>
      <div className={styles.projectsContainer}>
        <InstagramEmbed
          className="hover"
          url="https://www.instagram.com/msn.omdlensman/"
        />
      </div>

      <br />
      <div className={styles.projectsContainer}>
        <p> &copy; Maanas Muddam 2025</p>
      </div>
    </section>
  );
}

export default Skills;
