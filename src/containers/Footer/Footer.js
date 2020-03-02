import React, { Component } from 'react'
import css from 'containers/Footer/Footer.module.scss'
import Container from "components/Grid/Container";
import axios from 'axios-instance'

class Footer extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    axios.get('/footer.json')
      .then(response => this.setState({
        data: response.data
      }))
      .catch(error => console.log('Error getting document', error))
  }

  render () {
    if (!this.state.data) return null
    const { title, address, phone, email } = this.state.data
    return (
      <footer className={css.wrapper}>
        <Container className={css.container}>
          <h2 className={css.title}>
            { title }
          </h2>
          <p className={css.address}>
            { address }
          </p>
          <ul className={css.contacts}>
            <li className={css.contact}>
              <a href={`tel:${phone.split(' ').join('')}`} className={css.link}>
                { phone }
              </a>
            </li>
            <li className={css.contact}>
              <a href={`mailto:${email}`} className={css.link}>
                {email}
              </a>
            </li>
          </ul>
        </Container>
      </footer>
    )
  }
}

export default Footer
