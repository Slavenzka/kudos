import React, { Component } from 'react';
import Catalog from 'Pages/Home/Catalog/Catalog'

class Home extends Component {
  constructor() {
    super()
    this.data = {
      catalog: [
        {
          type: 'regular',
          url: '',
          img: '',
          heading: 'Выключатели',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'high',
          url: '',
          img: '',
          heading: 'Силовые и распределительные трансформаторы',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'square',
          url: '',
          img: '',
          heading: 'Комплектные трансформаторные подстанции',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'regular',
          url: '',
          img: '',
          heading: 'Блочно-модульные здания',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'long',
          url: '',
          img: '',
          heading: 'Коммутационное оборудовапние низкого напряжения (КРУ, НКУ, ЩПТ)',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'long',
          url: '',
          img: '',
          heading: 'Коммутационное оборудование среднего напряжения',
          descriptor: 'Короткое описание предлагаемой продуктовой линейки и заводов-изготовтителей'
        },
        {
          type: 'regular',
          url: '',
          img: '',
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