import React from 'react'
import css from './Manufacturers.module.scss'
import Container from 'components/Grid/Container'
import Modal from 'components/Modal/Modal'

const Manufacturers = ({ title, list }) => {
  const gallery = list.map((item, index) => {
    return (
      <li className={css.item} key={index}>
        <img src={item.img} alt={`Логотип ${item.name}`} className={css.logo} />
        {item.modal && <Modal />}
      </li>
    )
  })

  return (
    <section className={css.section}>
      <Container>
        <h2 className={css.title}>
          {title}
        </h2>
        {list.length > 0 &&
          <ul className={css.list}>
            {gallery}
          </ul>
        }
      </Container>
    </section>
  )
}

export default Manufacturers
