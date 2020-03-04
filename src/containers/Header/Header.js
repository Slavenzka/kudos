import React, { Component } from 'react'
import css from 'containers/Header/Header.module.scss'
import { Link, withRouter } from "react-router-dom"
import Container from "components/Grid/Container"
import { isMobile } from 'react-device-detect'
import classNames from 'classnames'
import axios from 'axios-instance'
import Logo from 'components/Logo/Logo'

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
    axios.get('/header.json')
      .then(response => {
        this.setState(prevState => {
          return {
            ...prevState,
            headerData: response.data
          }
        })
        this.props.getSize(this.headerRef.current.getBoundingClientRect())
      })
      .catch(error => console.log('Error getting document', error))

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
    // const headerHeight = this.headerRef.current.getBoundingClientRect().height
    this.setState(prevState => {
      return {
        ...prevState,
        isHeaderFixedVisible: window.scrollY > window.innerHeight / 4 * 2,
        isHeaderFixedHidden: window.scrollY > this.state.scrollSize ? false : window.scrollY < window.innerHeight / 4 * 2,
        isHeaderStatic: window.scrollY <= window.innerHeight / 4,
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
      isHeaderStatic
    } = this.state

    const navigation = headerData && headerData.map((item, index) => {
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
          <Link to='/' style={{ fontSize: 0 }}>
            <Logo />
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
