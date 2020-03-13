import React from 'react'
import css from './Modal.module.scss'
import classnames from 'classnames'
import Container from 'components/common/Grid/Container'
import CloseIcon from 'components/common/CloseIcon/CloseIcon'

const Modal = ({ isVisible, content, close, children }) => {
  return (
    <div className={classnames(css.wrapper, { [css.wrapperVisible]: isVisible })}>
      <Container className={css.container}>
        <div className={css.back} onClick={close} />
        <div className={css.inner}>
          <button className={css.button} type='button' aria-label='Закрыть окно' onClick={close}>
            <CloseIcon className={css.icon} />
          </button>
          {content &&
            <>
              {content.img &&
                <img className={css.img} src={content.img} alt={content.alt} />
              }
              {content.descriptor &&
                <p className={css.descriptor}>{content.descriptor}</p>
              }
            </>
          }
          {children &&
            <div className={css.children}>
              {children}
            </div>
          }
        </div>
      </Container>
    </div>
  )
}

export default Modal
