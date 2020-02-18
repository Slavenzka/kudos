import React from 'react'
import css from './Footer.module.scss'
import Container from "components/Grid/Container";

const Footer = () => {
  return (
    <footer className={css.wrapper}>
      <Container>
        <p style={{ visibility: 'hidden' }}>Some footer content</p>
      </Container>
    </footer>
  )
};

export default Footer
