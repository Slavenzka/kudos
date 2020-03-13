import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import css from './SideNavigation.module.scss'
import { Collapse } from 'react-collapse/lib/Collapse'
import CloseIcon from 'components/common/CloseIcon/CloseIcon'
import classnames from 'classnames'
import { isMobile } from 'react-device-detect'


class SideNavigation extends Component {
  constructor (props) {
    super(props)
    // data similar to catalog for home page, should originated from single source
    this.navItems = [
      {
        type: 'regular',
        url: '/category',
        img: 'assets/images/catalog__item--vacuum.jpg',
        heading: 'Выключатели',
      },
      {
        type: 'high',
        url: '/category',
        img: 'assets/images/catalog__item--transformer.jpg',
        heading: 'Силовые и распределительные трансформаторы',
      },
      {
        type: 'square',
        url: '/category',
        img: 'assets/images/catalog__item--modular.jpg',
        heading: 'Комплектные трансформаторные подстанции',
      },
      {
        type: 'regular',
        url: '/category',
        img: 'assets/images/catalog__item--building.jpg',
        heading: 'Блочно-модульные здания',
      },
      {
        type: 'long',
        url: '/category',
        img: 'assets/images/catalog__item--low.jpg',
        heading: 'Коммутационное оборудование низкого напряжения (КРУ, НКУ, ЩПТ)',
      },
      {
        type: 'row',
        url: '/category',
        img: 'assets/images/catalog__item--medium.jpg',
        heading: 'Коммутационное оборудование среднего напряжения',
      },
      {
        type: 'regular',
        url: '/category',
        img: 'assets/images/catalog__item--automation.jpg',
        heading: 'Системы автоматизации',
      },
    ]
  }

  state = {
    isNavVisible: !isMobile
  }

  handleNavToggle = () => {
    this.setState(prevState => {
      return {
        isNavVisible: !prevState.isNavVisible
      }
    })
  }

  render () {
    const content = this.navItems.map((item, index) => (
      <li className={css.item} key={index}>
        <Link to={item.url} className={css.link}>
          { item.heading }
        </Link>
      </li>
    ))

    return (
      <>
        <button
          className={classnames(css.btn, { [css.btnOpened]: this.state.isNavVisible })}
          type='button'
          onClick={this.handleNavToggle}
        >
          Каталог
          <CloseIcon className={css.icon} />
        </button>
        <Collapse isOpened={this.state.isNavVisible}>
          <ul className={css.list}>
            { content }
          </ul>
        </Collapse>
      </>
    )
  }
}

export default SideNavigation
