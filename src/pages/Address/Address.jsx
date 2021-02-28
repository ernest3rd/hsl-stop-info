import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { KeyboardArrowLeft } from '@styled-icons/material-rounded/KeyboardArrowLeft';
import { icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

import useGetStopsByRadius from 'hooks/useGetStopsByRadius';
import useTranslation from 'hooks/useTranslation';
import useQueryParams from 'hooks/useQueryParams';

import { getPinShadow, getStopPinIcon } from 'helpers/assets';
import { H2 } from 'components/UI/Text';
import Map from 'components/UI/Map';
import StopInfo from './StopInfo';

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
  const { t } = useTranslation();
  const [selectedStop, setSelectedStop] = useState();
  const query = useQueryParams();
  const latitude = parseFloat(query.get('lat'));
  const longitude = parseFloat(query.get('lng'));
  const { stops, loading, error } = useGetStopsByRadius({
    lat: latitude,
    lng: longitude,
    radius: RADIUS,
  });

  console.log({ loading, error, stops });

  return (
    <Container full>
      <Row>
        <GoBackLink to="/">
          <KeyboardArrowLeft />
        </GoBackLink>
        <H2>{query.get('label')}</H2>
      </Row>
      <Row full>
        <Map lat={latitude} lng={longitude} zoom={16}>
          {stops.map(({ gtfsId, code, name, lat, lon, vehicleMode }) => (
            <Marker
              key={gtfsId}
              position={[lat, lon]}
              icon={
                new icon({
                  iconUrl: getStopPinIcon(vehicleMode),
                  shadowUrl: getPinShadow(),
                })
              }
              eventHandlers={{
                click: () => {
                  setSelectedStop(gtfsId);
                },
              }}
            >
              <Popup
                onClose={() =>
                  setSelectedStop((current) =>
                    gtfsId === current ? null : current
                  )
                }
              >
                <h3>{code}</h3>
                <span>{name}</span>
              </Popup>
            </Marker>
          ))}
        </Map>
        <StopInfo stopId={selectedStop} open={!!selectedStop} onClose={() => setSelectedStop(null)} />
      </Row>
    </Container>
  );
};

export default Address;
