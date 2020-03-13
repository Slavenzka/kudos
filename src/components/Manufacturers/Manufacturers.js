import React, { Component } from 'react'
import css from './Manufacturers.module.scss'
import Container from 'components/common/Grid/Container'
import Modal from 'components/Modal/Modal'
import 'react-id-swiper/src/styles/css/swiper.css'
import Swiper from 'react-id-swiper'
import classnames from 'classnames'

class Manufacturers extends Component {
  swiper = null

  state = {
    activeIndex: 0,
    isSliderWithSingleSlide: false,
    modal: {
      isVisible: false,
      content: null
    }
  }

  goNext = () => {
    if (this.swiper) {
      this.swiper.slideNext()
    }
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  icon = () => (
    <svg className={css.icon} width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <linearGradient id='linear-gradient' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='100%' y2='100%' gradientTransform='matrix(-1, 0, 0, 1, 0, 0)'>
        <stop offset='-1.93%' stopColor='#93E08C' />
        <stop offset='97.03%' stopColor='#78CEBF' />
      </linearGradient>
      <path d='M15.9992 0C7.17884 0.00159992 0.00159992 7.17884 0 16.0008C0 24.8228 7.17724 32 16.0008 32C24.8228 31.9984 32 24.8212 32 16.0008C32 7.17884 24.8228 0.00159992 15.9992 0ZM16.0008 28.8002C8.94195 28.8002 3.19984 23.058 3.19984 16.0008C3.20144 8.94355 8.94355 3.20144 15.9992 3.19984C23.058 3.20144 28.8002 8.94355 28.8002 16.0008C28.8002 23.0564 23.058 28.7986 16.0008 28.8002Z'/>
      <path d='M16.02 9.59302L9.6123 16.0007L16.02 22.4068V17.6006H22.4101V14.4008H16.02V9.59302Z' />
    </svg>
  )

  handleEscPress = evt => {
    if (evt.keyCode === 27) {
      this.setState(prevState => {
        return {
          ...prevState,
          modal: {
            isVisible: false,
            content: null
          }
        }
      })
    }
  }

  handleLogoClick = index => {
    this.setState(prevState => {
      return {
        ...prevState,
        modal: {
          isVisible: this.props.list[index].modal || false,
          content: this.props.list[index].modal || null
        }
      }
    })

    document.addEventListener('keydown', this.handleEscPress)
  }

  handleClickModalClose = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        modal: {
          isVisible: false,
          content: null
        }
      }
    })
    document.removeEventListener('keydown', this.handleEscPress)
  }

  render () {
    const { title, list } = this.props
    const { activeIndex, modal, isSliderWithSingleSlide } = this.state

    const params = {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 1000,
      watchOverflow: true,
      navigation: {
        nextEl: '.manufacturers-swiper-button-next',
        prevEl: '.manufacturers-swiper-button-prev',
      },
      pagination: {
        el: '.manufacturers-swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 15
        }
      },
      on: {
        slideChangeTransitionStart: () => {
          if (this.swiper) {
            const {activeIndex} = this.swiper
            this.setState({ activeIndex })
          }
        },
        reachEnd: () => {
          if (!this.swiper) {
            this.setState(prevState => {
              return {
                ...prevState,
                isSliderWithSingleSlide: true
              }
            })
          }
        },
        resize: () => {
          this.setState(prevState => {
            return {
              ...prevState,
              isSliderWithSingleSlide: this.swiper.activeIndex === 0 && this.swiper.isEnd
            }
          })
        },
        init: () => {
          this.setState(prevState => {
            return {
              ...prevState,
              isSliderWithSingleSlide: this.swiper.activeIndex === 0 && this.swiper.isEnd
            }
          })
        }
      }
    }

    const gallery = list.map((item, index) => {
      return (
        <div className={css.item} key={index} style={{ cursor: item.modal && 'pointer' }}>
          <div className={css.itemWrapper}>
            <img
              src={item.img}
              alt={`Логотип ${item.name}`}
              className={css.logo}
              onClick={() => this.handleLogoClick(index)}
            />
          </div>
        </div>
      )
    })
    return (
      <>
        {this.state.modal.isVisible && this.state.modal.content &&
          <Modal isVisible={modal.isVisible} content={modal.content} close={this.handleClickModalClose} />
        }
        <Container>
          <h2 className={css.title}>
            {title}
          </h2>
          <div className={css.wrapper}>
            <Swiper {...params} ref={node => { if (node) this.swiper = node.swiper }}>
              {list.length > 0 && gallery}
            </Swiper>
          {!isSliderWithSingleSlide &&
            <>
              <button
                className={classnames('.partners-swiper-button-prev', css.button, { [css.buttonDisabled]: activeIndex === 0 })}
                onClick={this.goPrev}
              >
                Предыдущий слайд
                {/*{this.icon()}*/}
              </button>
              <div className={'manufacturers-swiper-pagination'}>

              </div>
              <button
                className={classnames('.partners-swiper-button-next', css.button, css.buttonNext, { [css.buttonDisabled]: this.swiper && this.swiper.isEnd })}
                onClick={this.goNext}
              >
                Следующий слайд
                {/*{this.icon()}*/}
              </button>
            </>
          }
        </div>
        </Container>
      </>
    )

  }
}

export default Manufacturers
