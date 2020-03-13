import React from 'react'
import css from 'components/common/CloseIcon/CloseIcon.module.scss'
import classnames from 'classnames'

const CloseIcon = ({ className }) => (
  <svg className={classnames(css.wrapper, className)} viewBox='0 0 35 25' stroke="none" xmlns='http://www.w3.org/2000/svg'>
    <g className={css.iconClose}>
      <rect x="12" y="12" width="12" height="2" />
      <rect x="17" y="7" width="2" height="12" />
    </g>
  </svg>
)

export default CloseIcon
