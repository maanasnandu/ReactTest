import React from 'react'
import styles from './SkillsStyles.module.css'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-dark.svg'
import { InstagramEmbed } from 'react-social-media-embed'

function Skills () {
  const { theme } = useTheme()
  const checkMarkIcon =
    theme === 'light' ? checkMarkIconLight : checkMarkIconDark

  return (
    <section id='skills' className={styles.container}>
      <h2 className={styles.mySkills}>Skills</h2>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React.JS' />
        <SkillList src={checkMarkIcon} skill='Angular' />
        <SkillList src={checkMarkIcon} skill='TypeScript' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Python' />
        <SkillList src={checkMarkIcon} skill='Django' />
        <SkillList src={checkMarkIcon} skill='FastAPI' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Bootstrap' />
        <SkillList src={checkMarkIcon} skill='Azure AZ-900' />
        <SkillList src={checkMarkIcon} skill='Git' />
      </div>

      <br />
      <br />
      <p className={styles.description}>I made this website with React.JS!😁</p>
      <br />
      <p className={styles.description2}>
        Psst...Try clicking on the moon/sun icon on top of the page, if you
        haven't already!
      </p>
      <br />
      <br />
      <h2 className={styles.mySkills}>Follow for my Photography!</h2>
      <div className={styles.projectsContainer}>
        <InstagramEmbed
          className='hover'
          url='https://www.instagram.com/msn.omdlensman/'
        />
      </div>

      <br />
      <div className={styles.projectsContainer}>
        <p> &copy; Maanas Muddam 2025</p>
      </div>
    </section>
  )
}

export default Skills
