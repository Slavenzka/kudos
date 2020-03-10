import React, { Component } from 'react'
import css from 'containers/Header/Header.module.scss'
import { Link, withRouter } from "react-router-dom"
import Container from "components/Grid/Container"
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
      })
      .catch(error => console.log('Error getting document', error))

    this.setState(prevState => {
      return {
        ...prevState,
        scrollSize: window.scrollY
      }
    })
  }

  handleClickBurger = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        isMenuVisible: !prevState.isMenuVisible
      }
    })
  }


  icon = () => (
    <svg className={css.icon} viewBox='0 0 35 25' stroke="none" xmlns='http://www.w3.org/2000/svg'>
      <rect x="0" y="0" width="35" height="2" style={{ transitionDuration: '0.3s', transform: this.state.isMenuVisible ? 'translateX(-100%)' : 'translateX(0)' }} />
      <g className={classNames(css.iconMiddle, { [css.iconMiddleHidden]: this.state.isMenuVisible })}>
        <rect x="0" y="12" width="17" height="2" />
      </g>
      <g className={classNames(css.iconClose, { [css.iconCloseVisible]: this.state.isMenuVisible })}>
        <rect x="12" y="12" width="12" height="2" />
        <rect x="17" y="7" width="2" height="12" />
      </g>
      <g className={css.iconBottom} style={{ transform: this.state.isMenuVisible && 'translateX(0.3rem)' }}>
        <rect x="0" y="23" width="29" height="2" style={{ transitionDuration: '0.3s', transform: this.state.isMenuVisible ? 'translateX(-100%)' : 'translateX(0)' }} />
      </g>
    </svg>
  )

  render () {
    const {
      headerData,
      isMenuVisible,
    } = this.state

    const navigation = headerData && headerData.map((item, index) => {
      return (
        <li
          className={classNames(css.item, { [css.itemVisible]: isMenuVisible })}
          key={index}
          style={{
            transitionDelay: `${index * 0.07}s`
          }}
        >
          <Link to={item.url} className={css.link}>
            {item.text}
          </Link>
        </li>
      )
    })

    return (
      <header className={css.header}>
        <Container className={css.wrapper}>
          <Logo className={css.logo} />
          <div className={classNames(css.navWrapper, { [css.navOpened]: isMenuVisible })}>
            <nav className={css.nav}>
              <ul className={css.list}>
                {navigation}
              </ul>
            </nav>
          </div>
          <button className={css.burger} type='button' onClick={this.handleClickBurger}>
            Управление видимостью меню
            {this.icon()}
          </button>
        </Container>
      </header>
    )
  }
}

export default withRouter(Header);
