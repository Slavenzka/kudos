import React, { Component } from 'react'
import css from 'containers/Footer/Footer.module.scss'
import Container from "components/Grid/Container";
import Logo from 'components/Logo/Logo'
import classnames from 'classnames'

class Footer extends Component {
  render () {
    return (
      <footer className={classnames(css.wrapper, 'section')}>
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
