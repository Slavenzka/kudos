import React, { Component } from 'react';
import Catalog from 'Pages/Home/Catalog/Catalog'

class Home extends Component {
  constructor() {
    super()
    this.data = {
      catalog: [
        {
          type: 'regular',
          url: '#test',
          img: 'assets/images/catalog__item--vacuum.jpg',
          heading: 'Выключатели',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'high',
          url: '/',
          img: 'assets/images/catalog__item--transformer.jpg',
          heading: 'Силовые и распределительные трансформаторы',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'square',
          url: '/',
          img: 'assets/images/catalog__item--modular.jpg',
          heading: 'Комплектные трансформаторные подстанции',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'regular',
          url: '/',
          img: 'assets/images/catalog__item--building.jpg',
          heading: 'Блочно-модульные здания',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'long',
          url: '/',
          img: 'assets/images/catalog__item--low.jpg',
          heading: 'Коммутационное оборудовапние низкого напряжения (КРУ, НКУ, ЩПТ)',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'row',
          url: '/',
          img: 'assets/images/catalog__item--medium.jpg',
          heading: 'Коммутационное оборудование среднего напряжения',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'regular',
          url: '/',
          img: 'assets/images/catalog__item--automation.jpg',
          heading: 'Системы автоматизации',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
      ],
      about: {},
      manufacturers: {},
      contacts: {}
    }
  }
  state = {}

  componentDidMount() {
    // axios get request
  }

  render () {
    return (
      <main>
        <h1 className="visuallyHidden">Информация и предлагаемый ассортимент компании ООО "Престиж"</h1>
        <Catalog data={this.data.catalog} />
      </main>
    )
  }
}

export default Home