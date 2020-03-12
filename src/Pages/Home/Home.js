import React, { Component } from 'react';
import Catalog from 'components/Catalog/Catalog'
import About from 'components/About/About'
import Manufacturers from 'components/Manufacturers/Manufacturers'
import Map from 'components/Map/Map'
import withScrollBackBtn from 'hoc/withScrollBackBtn/withScrollBackBtn'
import { connect } from 'react-redux'
import { setSectionRefs } from 'store/actions/setRefs'

const mapDispatchToProps = dispatch => {
  return {
    setRefs: (obj) => dispatch(setSectionRefs(obj))
  }
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.data = {
      catalog: [
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
              img: 'assets/images/certificate example.jpg',
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
              img: 'assets/images/certificate example2.jpg',
              alt: 'Some alt text'
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

    this.catalogRef = null
    this.aboutRef = null
    this.manufacturersRef = null
    this.contactsRef = null

    this.setCatalogRef = element => {
      this.catalogRef = element
    }

    this.setAboutRef = element => {
      this.aboutRef = element
    }

    this.setManufacturersRef = element => {
      this.manufacturersRef = element
    }

    this.setContactsRef = element => {
      this.contactsRef = element
    }
  }
  state = {}

  componentDidMount() {
    // axios get request
    if (this.catalogRef && this.aboutRef && this.manufacturersRef && this.contactsRef) {
      this.props.setRefs({
        catalog: this.catalogRef,
        about: this.aboutRef,
        manufacturers: this.manufacturersRef,
        contacts: this.contactsRef
      })
    }
  }

  componentDidUpdate() {
    if (this.catalogRef && this.aboutRef && this.manufacturersRef && this.contactsRef) {
      this.props.setRefs({
        catalog: this.catalogRef,
        about: this.aboutRef,
        manufacturers: this.manufacturersRef,
        contacts: this.contactsRef
      })
    }
  }

  render () {
    return (
      <main>
        <h1 className='visuallyHidden'>Сведения об ООО "Ятсан Групп" и предлагаемая электротехническая продукция</h1>
        <section ref={this.setCatalogRef}>
          <Catalog data={this.data.catalog} />
        </section>
        <section className='section' ref={this.setAboutRef}>
          <About data={this.data.about} />
        </section>
        <section className='section' ref={this.setManufacturersRef}>
          <Manufacturers {...this.data.manufacturers} />
        </section>
        <section className='section map' ref={this.setContactsRef}>
          <Map
            data={this.data.contacts}
          />
        </section>
      </main>
    )
  }
}

export default connect(null, mapDispatchToProps)(withScrollBackBtn(Home))
