import React, { Component } from 'react';
import Catalog from 'components/Catalog/Catalog'
import About from 'components/About/About'
import Manufacturers from 'components/Manufacturers/Manufacturers'
import Map from 'components/Map/Map'

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
      about: {
        title: 'Несколько слов о нас',
        descriptor: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below ' +
          'for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"' +
          'by Cicero are also reproduced in their exact original form, accompanied by English versions' +
          'from the 1914 translation by H. Rackham.',
        manager: {
          photo: 'assets/images/about__manager.jpg',
          name: 'Иванов Иван Иванович',
          rank: 'Менеджер по продажам',
          descriptor: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
            'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation' +
            'ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      },
      manufacturers: {
        title: 'Наши поставщики',
        list: [
          {
            img: 'assets/images/logo-enelt.png',
            name: 'Название предприятия'
          },
          {
            img: 'assets/images/logo-uemz.png',
            name: 'Название предприятия',
            modal: {
              img: 'assets/images/no-photo.svg',
              alt: 'Some alt text'
            }
          },
          {
            img: 'assets/icons/logo-cheaz.svg',
            name: 'Название предприятия'
          },
          {
            img: 'assets/images/logo-enelt.png',
            name: 'Название предприятия',
            modal: {
              descriptor: 'А можно и привести и просто текстовую информацию'
            }
          },
          {
            img: 'assets/images/logo-uemz.png',
            name: 'Название предприятия'
          },
        ]
      },
      contacts: {
        mapCenter: {
          lat: 55.758035,
          lng: 37.619019
        },
        mapMarker: {
          lat: 55.758035,
          lng: 37.619019
        }
      }
    }
  }
  state = {}

  componentDidMount() {
    // axios get request
  }

  render () {
    return (
      <main>
        <h1 className='visuallyHidden'>Информация и предлагаемый ассортимент компании ООО "Престиж"</h1>
        <Catalog data={this.data.catalog} />
        <About data={this.data.about} />
        <Manufacturers {...this.data.manufacturers} />
        <Map
          data={this.data.contacts}
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3sboheowgOrwdg6ocSAhTMIDwWfeXm1c&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </main>
    )
  }
}

export default Home
