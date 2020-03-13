import React from 'react'
import css from './FactoryCard.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const FactoryCard = ({
  className,
  data,
}) => {
  return (
    <li className={classnames(css.item, className)}>
      <Link className={css.link} to={data.link}>
        <div className={css.wrapper}>
          <img
            src={data.img}
            alt={`Логотип ${data.name}`}
            className={css.logo}
          />
        </div>
        <p className={css.title}>
          { data.name }
        </p>
      </Link>
    </li>
  )
}

export default FactoryCard
