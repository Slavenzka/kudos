import React from 'react'
import css from 'components/About/About.module.scss'
import Container from 'components/Grid/Container'
import Profile from 'components/Profile/Profile'

const About = ({ data }) => {
  const { title, descriptor, manager } = data
  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>
          {title}
        </h2>
        <p className={css.description}>
          {descriptor}
        </p>
        <Profile data={manager} />
      </Container>
    </section>
  )
}

export default About
