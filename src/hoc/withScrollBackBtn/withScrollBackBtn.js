import React, { Component } from 'react'
import css from './withScrollBackBtn.module.scss'
import Icon from './assets/IconScrollTop'
import classNames from 'classnames'

const withScrollBackBtn = WrappedComponent => {
  return class extends Component {
    state = {
      isScrollBtnVisible: false
    }

    componentDidMount () {
      document.addEventListener('scroll', this.handleScrollWatch)
    }

    componentWillUnmount () {
      document.removeEventListener('scroll', this.handleScrollWatch)
    }

    handleScrollBackBtn = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    handleScrollWatch = () => {
      if (window.scrollY > 500 && !this.state.isScrollBtnVisible) {
        this.setState({
          isScrollBtnVisible: true
        })
      } else if (window.scrollY <= 500 && this.state.isScrollBtnVisible) {
        this.setState({
          isScrollBtnVisible: false
        })
      }
    }

    render () {
      return (
        <>
          <button
            className={classNames(css.btn, { [css.btnVisible]: this.state.isScrollBtnVisible } )}
            type='button'
            onClick={this.handleScrollBackBtn}
          >
            Кнопка для скролла вверх
            <Icon className={css.icon} />
          </button>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

export default withScrollBackBtn
