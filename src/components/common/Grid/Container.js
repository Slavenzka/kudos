import React from 'react'
import css from 'components/common/Grid/Container.module.scss'
import classnames from 'classnames'

const Container = ({ className, children }) => {
  return (
    <div className={classnames(css.wrapper, className)}>
      {children}
    </div>
  )
}

export default Container
