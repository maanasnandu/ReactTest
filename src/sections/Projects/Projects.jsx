import React from 'react'
import styles from './ProjectsStyles.module.css'
import webpagePic from '../../assets/webProfilePic.png'
import calculatorPic from '../../assets/calculator.png'
import ProjectCard from '../../common/ProjectCard'
import neObjects from '../../assets/neObjects.png'
import anidexPic from '../../assets/anidexprofilepic.png'

function Projects () {
  return (
    <section id='projects' className={styles.container}>
      <br />
      <br />
      <h2 className={styles.myWork}>My Work</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={anidexPic}
          link='https://anidexmemory.netlify.app/'
          h3='Ani-Dex'
          p='A Fun Animal Memory Game'
          madeWith1='React.js'
          madeWith2='JSON'
        />

        <ProjectCard
          src={webpagePic}
          link='https://maanassamreloaded.netlify.app/'
          h3='Portfolio'
          p='My First Web Portfollio'
          madeWith1='JavaScript'
          madeWith2='HTML/CSS5'
        />

        <ProjectCard
          src={calculatorPic}
          link='https://admiring-liskov-cc1ff9.netlify.app/default'
          h3='Calculators'
          p='Loan/Mortgage Calculators'
          madeWith1='Angular'
          madeWith2='HTML/CSS5'
        />

        <ProjectCard
          src={neObjects}
          link='https://vibrant-kare-f22fa8.netlify.app/'
          h3='Asteroid Tracker'
          madeWith1='ReactJS'
          madeWith2='HTML/CSS5'
          p='Near Earth Objects tracker using NASA API'
        />
      </div>
    </section>
  )
}

export default Projects
