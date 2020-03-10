import React from 'react'
import css from './Profile.module.scss'
import classnames from 'classnames'

const Profile = ({ data, className }) => {
  const { photo, name, rank, descriptor } = data
  return (
    <div className={classnames(css.wrapper, className)}>
      <img src={photo} className={css.img} alt="Фотография специалиста" />
      <div className={css.content}>
        <h3 className={css.name}>
          {name}
        </h3>
        <span className={css.rank}>
          {rank}
        </span>
        <p className={css.description}>
          {descriptor}
        </p>
      </div>
    </div>
  )
}

export default Profile
