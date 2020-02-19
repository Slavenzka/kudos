import React, { Component } from 'react'
import css from './Header.module.scss'
import {Link, withRouter} from "react-router-dom"
import Container from "components/Grid/Container"
import firebase from 'Firestore'
import { isMobile } from 'react-device-detect'
import classNames from 'classnames'

class Header extends Component {
  constructor(props) {
    super(props)
    this.headerRef = React.createRef()
  }

  state = {
    headerData: null,
    isMenuVisible: false,
    scrollSize: null,
    isHeaderFixedVisible: false,
    isHeaderFixedHidden: false,
    isHeaderStatic: true
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

    this.setState(prevState => {
      return {
        ...prevState,
        scrollSize: window.scrollY
      }
    })

    document.addEventListener('scroll', this.handleHeaderOnScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleHeaderOnScroll)
  }

  handleClickBurger = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isMenuVisible: !prevState.isMenuVisible
      }
    })
  }

  handleHeaderOnScroll = () => {
    const headerHeight = this.headerRef.current.getBoundingClientRect().height
    if (window.scrollY > this.state.scrollSize) console.log('We scroll down!')
    if (window.scrollY < this.state.scrollSize) console.log('We scroll up!')
    this.setState(prevState => {
      return {
        ...prevState,
        isHeaderFixedVisible: window.scrollY > headerHeight * 2,
        isHeaderFixedHidden: window.scrollY < headerHeight * 2,
        isHeaderStatic: window.scrollY <= headerHeight,
        scrollSize: window.scrollY
      }
    })
  }

  render () {
    const {
      headerData,
      isMenuVisible,
      isHeaderFixedVisible,
      isHeaderFixedHidden,
      isHeaderStatic,
      scrollSize
    } = this.state

    console.log(scrollSize)

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
      <header
        className={classNames(css.header, {
          [css.headerFixed]: !isHeaderStatic,
          [css.headerFixedHidden]: !isHeaderStatic && isHeaderFixedHidden,
          [css.headerFixedVisible]: !isHeaderStatic && isHeaderFixedVisible
        })}
        ref={this.headerRef}
      >
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
