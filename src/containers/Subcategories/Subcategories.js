import React, { Component } from 'react'
import css from './Subcategories.module.scss'
import { Link } from 'react-router-dom'

class Subcategories extends Component {
  constructor (props) {
    super(props)

    this.content = {
      title: 'Комплектные трансформаторные подстанции',
      list: [
        {
          title: 'Комплектные трансформаторные подстанции 110/35 кВ (КТП 110/35)',
          link: 'category/product',
          img: 'assets/images/subcategory__modular.jpg'
        },
        {
          title: 'Комплектные трансформаторные подстанции внутренней установки 6(10)/0,4 кВ',
          link: 'category/product',
          img: 'assets/images/subcategory__modular10kv.jpg'
        },
        {
          title: 'Подстанции трансформаторные комплектные мощностью от 25 до 4000 кВА на напряжение до 10 кВ',
          link: 'category/product',
          img: 'assets/images/subcategory__modularTransformer.jpg'
        },
        {
          title: 'Комплектные трансформаторные подстанции для погружных насосов',
          link: 'category/product',
          img: 'assets/images/subcategory__modularPumps.jpg'
        },
        {
          title: 'Подстанции трансформаторные комплектные наружной установки в бетонных оболочках',
          link: 'category/product',
          img: 'assets/images/subcategory__modularConcrete.jpg'
        },
      ]
    }
  }

  render () {
    const content = this.content.list.map((item, index) => (
      <li className={css.item} key={index}>
        <Link to={item.link} className={css.link} style={{ backgroundImage: `url("${item.img}")` }}>
          <h3 className={css.subtitle}>
            { item.title }
          </h3>
        </Link>
      </li>
    ))

    return (
      <>
        <h2 className={css.title}>
          { this.content.title }
        </h2>
        <ul className={css.list}>
          { content }
        </ul>
      </>
    )
  }
}

export default Subcategories
