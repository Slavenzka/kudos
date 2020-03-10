import React, { Component } from 'react'
import css from 'components/About/About.module.scss'
import Container from 'components/Grid/Container'
import Profile from 'components/Profile/Profile'

class About extends Component {
  render () {
    const { title, descriptor, manager } = this.props.data
    return (
      <section className='section'>
        <Container>
          <h2 className={css.title}>
            {title}
          </h2>
          <p className={css.description}>
            {descriptor}
          </p>
          <Profile data={manager} className={css.profile} />
        </Container>
      </section>
    )

  }
}

export default About
