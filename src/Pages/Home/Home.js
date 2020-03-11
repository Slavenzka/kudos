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
        },
        {
          type: 'high',
          url: '/',
          img: 'assets/images/catalog__item--transformer.jpg',
          heading: 'Силовые и распределительные трансформаторы',
        },
        {
          type: 'square',
          url: '/',
          img: 'assets/images/catalog__item--modular.jpg',
          heading: 'Комплектные трансформаторные подстанции',
        },
        {
          type: 'regular',
          url: '/',
          img: 'assets/images/catalog__item--building.jpg',
          heading: 'Блочно-модульные здания',
        },
        {
          type: 'long',
          url: '/',
          img: 'assets/images/catalog__item--low.jpg',
          heading: 'Коммутационное оборудование низкого напряжения (КРУ, НКУ, ЩПТ)',
        },
        {
          type: 'row',
          url: '/',
          img: 'assets/images/catalog__item--medium.jpg',
          heading: 'Коммутационное оборудование среднего напряжения',
        },
        {
          type: 'regular',
          url: '/',
          img: 'assets/images/catalog__item--automation.jpg',
          heading: 'Системы автоматизации',
        },
      ],
      about: {
        title: 'Несколько слов о нас',
        descriptor: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below ' +
          'for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"' +
          'by Cicero are also reproduced in their exact original form, accompanied by English versions' +
          'from the 1914 translation by H. Rackham. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below ' +
          'for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"' +
          'by Cicero are also reproduced in their exact original form, accompanied by English versions' +
          'from the 1914 translation by H. Rackham.',
        manager: {
          photo: 'assets/images/about__photo.jpg',
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
        mapMarker: [ 55.757860, 37.619815 ],
        balloonData: {
          title: 'ООО "Ятсан Групп"',
          address: '111111 Москва, ул. Такаято, дом 999, стр. 99, офис 999',
          phone: [ '8 495 999 99 99', '8 495 999 99 99' ],
          email: [ 'smth@smth.smth' ],
        }
      }
    }
  }
  state = {}

  componentDidMount() {
    // axios get request
  }

  render () {
    const {
      // ref creation methods from App.js for ahchor scrolling without Redux
      setCatalogRef,
      setAboutRef,
      setManufacturersRef,
      setContactsRef
    } = this.props
    return (
      <main>
        <h1 className='visuallyHidden'>Сведения об ООО "Ятсан Групп" и предлагаемая электротехническая продукция</h1>
        <section ref={setCatalogRef}>
          <Catalog data={this.data.catalog} />
        </section>
        <section className='section' ref={setAboutRef}>
          <About data={this.data.about} />
        </section>
        <section className='section' ref={setManufacturersRef}>
          <Manufacturers {...this.data.manufacturers} />
        </section>
        <section className='section map' ref={setContactsRef}>
          <Map
            data={this.data.contacts}
          />
        </section>
      </main>
    )
  }
}

export default Home
