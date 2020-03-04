import React, { Component } from 'react'
import css from './Logo.module.scss'

class Logo extends Component {
  icon = () => (
    <svg className={css.icon} viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx="5" cy="5" r="5" />
    </svg>
  )

  render () {
    return (
      <div className={css.wrapper}>
        {this.icon()}
        Ятсан Групп
      </div>
    )
  }
}

export default Logo
