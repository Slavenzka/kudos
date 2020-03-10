import React from 'react'
import Container from 'components/Grid/Container'
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps'
import css from './Map.module.scss'

const ContactMap = ({ data, ...props }) => {
  const { balloonData, mapMarker } = data

  const mapData = {
    center: mapMarker,
    zoom: 15,
  }

  const balloon = balloonData && ((balloonData.phone && balloonData.phone.length > 0) || (balloonData.email && balloonData.email.length > 0))
    ? (
      <div className={css.balloon}>
        <h3 className={css.title}>
          { balloonData.title }
        </h3>
        <p className={css.address}>
          {balloonData.address}
        </p>
        <ul className={css.list}>
          {balloonData.phone && balloonData.phone.length > 0 &&
            balloonData.phone.map((phone, key) => (
              <li className={css.item} key={key}>
                <a href={`tel:${phone.split(' ').join('')}`} className={css.link}>
                  {phone}
                </a>
              </li>
            ))
          }
          {balloonData.email && balloonData.email.length > 0 &&
            balloonData.email.map((email, key) => (
              <li className={css.item} key={key}>
                <a href={`mailto:${email}`} className={css.link}>
                  { email }
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    )
    : null

  return (
    <Container className={css.container}>
      <div className={css.wrapper}>
        <YMaps>
          <Map
            defaultState={mapData}
            className={css.map}
          >
            <Placemark
              geometry={data.mapMarker}
              options={{
                preset: 'islands#redDotIconWithCaption',
                iconColor: '#e71d36',
              }}
            />
            <ZoomControl options={{ float: 'right' }} />
          </Map>
        </YMaps>
        { balloon }
      </div>
    </Container>
  )
}

export default ContactMap
