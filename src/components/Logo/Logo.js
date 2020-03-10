import React, { Component } from 'react'
import css from './Logo.module.scss'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

class Logo extends Component {
  icon = () => (
    <svg className={css.icon} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx="5" cy="5" r="5" />
    </svg>
  )

  render () {
    return (
      <Link to='/' className={classnames(css.wrapper, this.props.className)}>
        {this.icon()}
        <span>
          Ятсан Групп
        </span>
      </Link>
    )
  }
}

export default Logo
