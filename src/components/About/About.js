import React from 'react'
import css from 'components/About/About.module.scss'
import Container from 'components/common/Grid/Container'
import Profile from 'components/Profile/Profile'

const About = ({ data }) => {
    const { title, descriptor, manager } = data
    return (
      <Container>
        <h2 className={css.title}>
          {title}
        </h2>
        <p className={css.description}>
          {descriptor}
        </p>
        <Profile data={manager} className={css.profile} />
      </Container>
    )
}

export default About
