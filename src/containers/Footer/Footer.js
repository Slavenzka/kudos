import React, { Component } from 'react'
import css from 'containers/Footer/Footer.module.scss'
import Container from "components/common/Grid/Container";
import Logo from 'components/common/Logo/Logo'

class Footer extends Component {
  render () {
    return (
      <footer className={css.wrapper}>
        <Container>
          <div className={css.container}>
            <Logo className={css.logo} />
            <p className={css.creator}>
              Made by
              <a className={css.link} href='mailto:i.romanov@protonmail.ch'>slavenzka</a>
            </p>
          </div>
        </Container>
      </footer>
    )
  }
}

export default Footer
