import React from 'react'
import Container from 'components/Grid/Container'
import css from 'components/Catalog/Catalog.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Catalog = ({ data }) => {
  const categories = data.map((item, index) => {
    return (
      <li
        className={classNames(css.item, {
          [css.itemRegular]: item.type === 'regular',
          [css.itemHigh]: item.type === 'high',
          [css.itemSquare]: item.type === 'square',
          [css.itemLong]: item.type === 'long',
          [css.itemRow]: item.type === 'row',
        })}
        key={index}
      >
        <Link to={item.url} className={css.link}>
          <div className={css.wrapper}>
            <img src={item.img} className={css.img} alt={`${item.heading}`}/>
            <div className={css.card}>
              <h3 className={css.title}>
                {item.heading}
              </h3>
            </div>
          </div>
        </Link>
      </li>
    )
  })

  return (
    <section>
      <Container>
        <h2 className="visuallyHidden">Рубрики каталога предлагаемой продукции</h2>
        <ul className={css.list}>
          {categories}
        </ul>
      </Container>
    </section>
  )
}

export default Catalog
