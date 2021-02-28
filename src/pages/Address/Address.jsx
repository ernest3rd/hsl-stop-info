import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { KeyboardArrowLeft } from '@styled-icons/material-rounded/KeyboardArrowLeft';
import { MapConsumer } from 'react-leaflet';

import useGetStopsByRadius from 'hooks/useGetStopsByRadius';
import useQueryParams from 'hooks/useQueryParams';

import { H2 } from 'components/UI/Text';
import Map from 'components/UI/Map';
import StopInfo from './StopInfo';
import StopMarkers from './StopMarkers';

const Container = styled.div(({ full }) => ({
  flex: full ? 1 : 0,
  alignSelf: 'stretch',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
}));

const Row = styled.div(({ full }) => ({
  flex: full ? 1 : 0,
  alignSelf: 'stretch',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  display: 'flex',
  flexDirection: 'row',
}));

const GoBackLink = styled(Link)(() => ({
  display: 'flex',
  flexBasis: 50,
  alignItems: 'center',
}));

const RADIUS = 1000;

const Address = () => {
  const mapRef = useRef();
  const query = useQueryParams();
  const [center] = useState({
    lat: parseFloat(query.get('lat')),
    lng: parseFloat(query.get('lng')),
  });
  const [selectedStop, setSelectedStop] = useState({
    coords: [center.lat, center.lng],
  });
  const { id: stopId } = selectedStop;
  const { stops, loading, error } = useGetStopsByRadius({
    lat: center.lat,
    lng: center.lng,
    radius: RADIUS,
  });

  console.log({ loading, error, stops });

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(selectedStop.coords, {
        animate: true,
        duration: 0.4,
      });
    }
    const timeout = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize({ animate: true });
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [selectedStop]);

  const onStopSelect = useCallback(({ id, lat, lng }) =>
    setSelectedStop({ id, coords: [lat, lng] })
  );
  const onStopDeselect = useCallback(({ id }) =>
    setSelectedStop((current) =>
      current.id === id ? { ...current, id: null } : current
    )
  );

  return (
    <Container full>
      <Row>
        <GoBackLink to="/">
          <KeyboardArrowLeft />
        </GoBackLink>
        <H2>{query.get('label')}</H2>
      </Row>
      <Row full>
        <StopInfo
          stopId={stopId}
          open={!!stopId}
          onClose={() => onStopDeselect({ id: stopId })}
        />
        <Map lat={center.lat} lng={center.lng} zoom={16}>
          <MapConsumer>
            {(map) => {
              useEffect(() => {
                mapRef.current = map;
              }, []);
              return null;
            }}
          </MapConsumer>
          <StopMarkers
            stops={stops}
            onMarkerSelect={onStopSelect}
            onMarkerDeselect={onStopDeselect}
          />
        </Map>
      </Row>
    </Container>
  );
};

export default Address;
