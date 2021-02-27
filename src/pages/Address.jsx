import React from 'react';
import useTranslation from 'hooks/useTranslation';
import useQueryParams from '../hooks/useQueryParams';
import { H2 } from '../components/UI/Text';
import styled from 'styled-components';
import useGetStopsByRadius from '../hooks/useGetStopsByRadius';
import Map from '../components/UI/Map';
import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import { getPinShadow, getStopPinIcon } from '../helpers/assets';

const Container = styled.div(({ full }) => ({
  flex: full ? 1 : 0,
  alignSelf: 'stretch',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
}));

const RADIUS = 1000;

const Address = () => {
  const { t } = useTranslation();
  const query = useQueryParams();
  const lat = parseFloat(query.get('lat'));
  const lng = parseFloat(query.get('lng'));
  const { stops, loading, error } = useGetStopsByRadius({
    lat,
    lng,
    radius: RADIUS,
  });

  console.log({ loading, error, stops });

  return (
    <Container full>
      <H2>{query.get('label')}</H2>
      <Map lat={lat} lng={lng} zoom={16}>
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
              click: () => console.log('CLICKC LICKCC', {gtfsId}),
            }}
          >
            <Popup>
              <h3>{code}</h3>
              <span>{name}</span>
            </Popup>
          </Marker>
        ))}
      </Map>
    </Container>
  );
};

export default Address;
