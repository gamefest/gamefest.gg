import React from "react";
import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap } from "react-google-maps";

import { GoogleMap, Marker } from "react-google-maps";

const apiKey = process.env.GATSBY_GOOGLE_MAP_API_KEY;
const ParkingMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ markers, center, zoom }) => (
  <GoogleMap defaultZoom={zoom} defaultCenter={center}>
    {markers.map(({ position, title, icon }, i) => (
      <Marker position={position} key={i} title={title} icon={icon} />
    ))}
  </GoogleMap>
));

export default ParkingMap;

const posPropType = PropTypes.shape({
  lat: PropTypes.number,
  lng: PropTypes.number
});
ParkingMap.propTypes = {
  zoom: PropTypes.number,
  center: posPropType.isRequired,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: posPropType,
      title: PropTypes.string,
      icon: PropTypes.string
    })
  )
};

ParkingMap.defaultProps = {
  zoom: 16,
  markers: []
};

ParkingMap.displayName = "ParkingMap";
