import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const Container = styled.div(() => ({
  flex: 1,
  justifySelf: 'stretch',
  alignSelf: 'stretch',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  '> *': {
    flex: 1,
  }
}))

const Map = ({ children, lat, lng, zoom }) => (
  <Container>
    <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
        url="https://cdn.digitransit.fi/map/v1/{id}/{z}/{x}/{y}.png"
        id="hsl-map"
        tileSize={512}
        zoomOffset={-1}
      />
      {children}
    </MapContainer>
  </Container>
);

Map.defaultProps = {
  lat: 0,
  lng: 0,
  zoom: 13,
};

Map.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
};

export default Map;
