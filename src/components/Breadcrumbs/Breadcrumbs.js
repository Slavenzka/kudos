import React from 'react'
import css from './Breadcrumbs.module.scss'
import Container from 'components/common/Grid/Container'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Breadcrumbs = ({ data }) => {
  const content = data.map((item, index) => (
    <li className={classnames(css.item, { [css.itemPassive]: index === data.length - 1 })} key={index}>
       <Link to={item.url || '/'} className={css.link}>
         { item.text }
       </Link>
    </li>
  ))

  return (
    <Container>
      <div className={css.wrapper}>
        <ul className={css.list}>
          { content }
        </ul>
      </div>
    </Container>
  )
}

export default Breadcrumbs
