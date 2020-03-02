import React from 'react'
import Container from 'components/Grid/Container'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
// import css from './Map.module.scss'

const Map = ({ data, ...props }) => {
  return (
    <div>
      <Container>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ ...data.mapCenter }}
        >
          {props.isMarkerShown && <Marker position={{ ...data.mapMarker }} />}
        </GoogleMap>
      </Container>
    </div>
  )
}

export default withScriptjs(withGoogleMap(Map))
