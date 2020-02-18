import React, { Component } from 'react'
import css from './Header.module.scss'
import {Link, withRouter} from "react-router-dom"
import Container from "components/Grid/Container"
import firebase from 'Firestore'
import { isMobile } from 'react-device-detect'
import classNames from 'classnames'

class Header extends Component {
  state = {
    headerData: null,
    isMenuVisible: false
  }

  componentDidMount() {
    const db = firebase.firestore()
    const header = db.collection('header').doc('ZJNvVIAHyZuv9Lz2PtFA')
    header.get().then(doc => {
      if (doc.exists) {
        this.setState(prevState => {
          return {
            ...prevState,
            headerData: doc.data()
          }
        })
      } else {
        console.log('No such database entry!')
      }
    }).catch(error => console.log('Error getting document', error))
  }

  handleClickBurger = () => {
    console.log('click')
    this.setState(prevState => {
      return {
        ...prevState,
        isMenuVisible: !prevState.isMenuVisible
      }
    })
  }

  render () {
    const { headerData, isMenuVisible } = this.state

    const navigation = headerData && headerData.items.map((item, index) => {
      return (
        <li className={css.item} key={index}>
          <Link to={item.url} className={css.link}>
            {item.text}
          </Link>
        </li>
      )
    })

    return (
      <header className={css.header}>
        <Container className={css.wrapper}>
          <Link to='/header.json'>
            <img src='https://via.placeholder.com/120x50.jpg' alt='Логотип компании'/>
          </Link>
          <button className={css.burger} type='button' onClick={this.handleClickBurger}>
            Управление адаптивным меню
          </button>
          <nav className={classNames(css.nav, { [css.navOpened]: isMobile && isMenuVisible })}>
            <ul className={css.list}>
              {navigation}
            </ul>
          </nav>
        </Container>
      </header>
    )
  }
}

export default withRouter(Header);
